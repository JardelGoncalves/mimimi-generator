import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  PermissionsAndroid,
  Platform,
  Alert
} from 'react-native';
import {
  Background,
  Header,
  TextInput,
  Main,
  ImageBase,
  Button,
  LegendText
} from './components'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import ViewShot from "react-native-view-shot"
import CameraRoll from '@react-native-community/cameraroll'

import banner from './assets/banner.png'
import base from './assets/mimimi.jpg'



class App  extends Component {

  state = {
    originalText: '',
    textReplaced: ''
  }

  checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  replaced = (text) => {
    let textReplaced = text.toLowerCase()
    textReplaced = textReplaced.replace(/(a|e|o|u)/g, 'i')
    textReplaced = textReplaced.replace(/(á|à|ã|â)/g, 'i')
    textReplaced = textReplaced.replace(/(é|è|ê)/g, 'i')
    textReplaced = textReplaced.replace(/(ó|ò|ô)/g, 'i')
    textReplaced = textReplaced.replace(/(ú|ù|û)/g, 'i')

    this.setState({ textReplaced })
  }

  shot = async () => {
    try {
      const uri = await this.refs.viewShot.capture()
      if (Platform.OS === 'android') {
        await this.checkAndroidPermission()
      }
      await CameraRoll.save(uri)
      Alert.alert(
        'Mimimi criado',
        'Seu mimimi foi criado com sucesso',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false },
      )
    } catch (error) {
      Alert.alert(
        'Ops! deu merda',
        'Ocorreu um erro ao tentar criar seu mimimi',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false },
      )
    }
  }

  onChangeText = (text) => {
    this.setState({ originalText: text })
    this.replaced(text)
  }

  render() {
    return (
      <Background>
        <StatusBar  backgroundColor="#262625" />
        <Header image={banner} title="MIMIMI GENERATOR" />
        <ScrollView>
          <Main
            paddingLeft={wp('7.5%')}
            paddingRight={wp('7.5%')}
            >
  
            <TextInput
              placeholder="Digite seu mimimi"
              onChangeText={ text => this.onChangeText(text) }
            />
            <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
              <View style={{ width: 300, height: 300, marginTop: 20, marginBottom: 20, alignItems: "center" }}>
                <LegendText
                  numberOfLines={2}
                  style={{ position: 'absolute', zIndex: 2 }}
                >
                  { this.state.originalText }
                </LegendText>
                <ImageBase
                  source={base}
                  height={hp('50%')}
                />
                <LegendText
                  numberOfLines={2}
                  style={{ marginTop: -60, position: 'relative', zIndex: 2 }}
                >
                  { this.state.textReplaced }  
                </LegendText>            
              </View>
            </ViewShot>
            <Button onPress={ this.shot }>
              Salvar
            </Button>
          </Main>
        </ScrollView>
      </Background>
    )
  }
};

export default App;
