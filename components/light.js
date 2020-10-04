import React, {useState} from 'react';
import {SafeAreaView,Dimensions, Switch, StyleSheet, Text, View,Image } from 'react-native';
const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / 631) * 925;
export default function Light() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <View style={styles.light}>
                    <Image style={styles.img} source={ isEnabled? require('../assets/the-light-images/bulb-on.jpg') : require('../assets/the-light-images/bulb-off.jpg')} />
                </View>
                <View style={styles.block}>
                    <Switch
                        trackColor={{ false: "black", true: "white" }}
                        thumbColor={isEnabled ? "black" : "#fff"}
                        ios_backgroundColor="rgba(255,255,255, 0.3)"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  wrap: {
    paddingVertical: 40,
    justifyContent: 'center'
  },
  light:{
      backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
    height: bannerHeight
  },
  block: {
      alignItems: 'center'
  },
  switch: {
      borderWidth: 2,
      borderColor: '#fff',
      borderStyle: 'solid'
    //   border
  }

  
});



