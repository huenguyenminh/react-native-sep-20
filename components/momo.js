import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Momo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <Feather name="lock" size={32} color="green" />
        <Text style={[styles.h2, styles.bold]}>Hello! </Text>
        <Text style={[styles.h3, styles.upperCase]}>Helen Nguyen Minh</Text>
        <Text style={[styles.h3, styles.mb20]}>09876543210</Text>
        <View style={styles.sectionStyle}>
          <Image 
            style={styles.icons}
            source={require('../assets/Lock-04.png')}
          />
          <TextInput 
            secureTextEntry={true} 
            password={true}
            style={[styles.formControll, styles.mb20, styles.bold]}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity style={[styles.btn, styles.mb20]}>
          <Text style={[styles.whiteTxt, styles.upperCase]}>Login Opacity</Text>
        </TouchableOpacity>

        <TouchableHighlight 
          underlayColor="rgba(152,152,152,0.8)"
          onPress={()=>{}}
          style={[styles.btn, styles.mb20]
        }>
          <Text style={[styles.whiteTxt, styles.upperCase]}>Login TouchableHighlight</Text>
        </TouchableHighlight>


        <View style={styles.loginCta}>
          <TouchableHighlight underlayColor="#fafafa">
            <Text style={[styles.upperCase, styles.h3]}>
              Forgot Password
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text  style={[styles.upperCase, styles.h3]}>Logout</Text>
          </TouchableHighlight>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
  whiteTxt:{
    color: '#fff'
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



