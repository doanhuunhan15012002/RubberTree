import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen(props) {
  //navigation
  const {navigation, route} = props
  //functions of navigate to/back
  const {navigate, goBack} = navigation
  return (
    <Background>
      <Logo />
      <Header>Agriculture Robotics</Header>
      <Paragraph>
        Designed by Wisdom Robotics
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
