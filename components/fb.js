import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / 300) * 168;
const fbColor = "#3b5998";

export default function Fb() {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={{background : 'red'}}>
          <Image
          style={[styles.banner, styles.mb20]}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRDwHFWOR-ALAqmNoSNvFKnRJsrxdvjsw7Ig&usqp=CAU'}}
          />
          
          <View style={styles.mb20}>
            <TextInput 
                style={[styles.formControll,  styles.bold]}
                placeholder="Tel or Email"
              />
              <TextInput 
                secureTextEntry={true} 
                password={true}
                style={[styles.formControll,  styles.bold, styles.borderTop0]}
                placeholder="Password"
              />

          </View>
          <TouchableOpacity style={[styles.btn, styles.mb20]}>
            <Text style={[styles.whiteTxt, styles.upperCase, styles.white]}>Login Opacity</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[styles.h3, styles.mb10]}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.h3, styles.mb20, styles.mb10]}>Go back</Text>
          </TouchableOpacity>
        </View>
        

        <View>
          <View style={[styles.block, styles.mb20]}>
            <View style={styles.line}></View>
            <Text 
              style={[styles.txtAbsolute, styles.upperCase, {
                transform: [{ translateX: -10}]
              }]}
            >Hoặc</Text>
          </View>

          <TouchableOpacity style={[styles.btn, styles.btnLight, styles.mb20]}>
            <Text style={[styles.whiteTxt, styles.upperCase, styles.white]}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style={'light'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20
  },
  wrap: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    color: '#fff',
    justifyContent: 'space-between'
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
    height: bannerHeight
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
  block:{
    paddingLeft: 20,
    paddingRight: 20
  },
  formControll: {
    height: 40,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#8a8a8a',
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  borderTop0:{
    borderTopWidth: 0
  },
  btn:{
      height: 40,
      borderRadius: 6,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft: 20,
      paddingRight: 20,
      display: 'flex',
      backgroundColor: '#3b5998',
      alignItems: 'center',
      justifyContent: "center"
  },
  white: {
    color: '#fff'
  },
  upperCase: {
    textTransform: 'uppercase'
  },
  h3: {
    color: fbColor,
    textAlign: 'center'
  },
  line: {
    height: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#000'
  },
  txtAbsolute: {
    position: 'absolute',
    left: '50%',
    
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 10
  },
  btnLight:{
    opacity: 0.9
  }
  
});



