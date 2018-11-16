import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgImage from './images/background.jpg'
import logo from './images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'
import SignUp from './SignUp'

const { width: WIDTH } = Dimensions.get('window')

type Props = {};
export default class App extends Component<Props> {


  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>MESSAGING</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color={'#CFAFDD'} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'#CFAFDD'}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'#CFAFDD'} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'#CFAFDD'}
          />
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },

  logoText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.7,
  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0, 0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },

  inputContainer: {
    marginTop: 10,
  },

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#CFAFDD',
    justifyContent: 'center',
    marginTop: 20
  },

  text: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    textAlign: 'center'
  }
});
