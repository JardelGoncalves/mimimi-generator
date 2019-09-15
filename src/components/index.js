import React from 'react'
import styled from 'styled-components';

const HeaderBackground = styled.ImageBackground`
  width: 100%;
  height: 90;
`;

const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 70;
`

const HeaderTitle = styled.Text`
  text-transform: uppercase;
  color: #076BC7;
  font-size: 30;
  font-weight: bold;
`

export const Header = ({ image, title }) => (
  <HeaderBackground source={image}>
    <HeaderContainer>
      <HeaderTitle>{ title }</HeaderTitle>
    </HeaderContainer>
  </HeaderBackground>
)


export const Background = styled.View`
  flex: 1;
  background-color: #222222;
`

export const TextInput = styled.TextInput`
  padding-top: ${ (props) => props.paddingTop || 12 };
  padding-bottom: ${ (props) => props.paddingBottom || 12 };
  padding-left: 12;
  background-color: #FFF;
  font-size: 14;
  color: #383838;
  border-radius: 5;
  align-self: stretch;
`

export const Main = styled.View`
  padding-left: ${ (props) => props.paddingLeft || 20 };
  padding-right: ${ (props) => props.paddingRight || 20 };
  margin-top: ${ (props) => props.marginTop || 30 };
  justify-content: center;
  align-items: center;
`

export const ImageBase = styled.Image`
  width: 300;
  height: 300;
`

const ButtonStyle = styled.TouchableOpacity`
  color: #FFF;
  background-color: #076BC7;
  padding-top: 16;
  padding-bottom: 16;
  margin-top: 20;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  align-self: stretch;
  margin-bottom: 20;
`
const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16;
`

export const Button = ({ onPress, children }) => (
  <ButtonStyle onPress={onPress}>
    <TextButton>{ children }</TextButton>
  </ButtonStyle>
)

export const LegendText = styled.Text`
  padding-left: 10
  padding-right: 10;
  font-size: 20;
  color: #FFF;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`