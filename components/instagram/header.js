import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / 300) * 168;
const fbColor = "#3b5998";

export default function Header() {
  return (
    <View style={styles.header}>
         <TouchableOpacity style={styles.btnCamera}>
            <Feather name='camera' size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.logo} source={require('../../assets/instagram/logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnShare}>
            <Feather name='send' size={28}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0 ,
    height: 53,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, 0.1)',
    borderStyle: 'solid'
  },
  btnCamera:{},
  logo:{
    height: 29,
    width: 103
  },
  btnShare: {}

  
  
});



