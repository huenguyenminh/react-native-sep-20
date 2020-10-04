import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '../instagram/header';
import Story from '../instagram/story';
import Article from '../instagram/article';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / 300) * 168;
const fbColor = "#3b5998";

export default function Insta() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView style={styles.mainArea}>
        <Story/>
        <Article/>
      </ScrollView>
    </SafeAreaView>
    
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
  mainArea: {
    width: '100%'
  }
  
  
});



