import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Momo from './components/momo';
import Fb from './components/fb';

export default function App() {
  return (
    <Fb/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9e005b',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  wrap: {
    width: '100%',
    paddingTop: 50,
    color: '#fff'
  },
  h2: {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 10
  },
  
  bold: {
    fontWeight: '700'
  },
  upperCase: {
    textTransform: 'uppercase'
  },
  mb10: {
    marginBottom: 10
  },
  mb20: {
    marginBottom: 20
  },
  h3: {
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  formControll: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 40,
    paddingRight: 20,
    color: '#8a8a8a',
    fontSize: 16,
  },
  btn:{
      height: 40,
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft: 20,
      paddingRight: 20,
      display: 'flex',
      backgroundColor: '#790049',
      alignItems: 'center',
      justifyContent: "center"
  },
  btnTxt: {
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    color: '#fff'
  },
  loginCta: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionStyle: {
    position: 'relative',
  },
  icons: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 10,
    left: 30,
    zIndex: 1,
    opacity: 0.5
  }
});



