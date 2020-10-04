import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Story() {
    const stories = [
        {
          id: 1,
          name: "Robin",
          img: require('../../assets/instagram/avatar-1.jpg')
        },
        {
            id: 2,
            name: "QueenMari",
            img: require('../../assets/instagram/avatar-2.jpg')
        },
        {
            id: 3,
            name: "Helen",
            img: require('../../assets/instagram/avatar-3.jpg')
        },
        {
            id: 4,
            name: "Robin",
            img: require('../../assets/instagram/avatar-4.jpg')
        },
        {
            id: 5,
            name: "Alex Max",
            img: require('../../assets/instagram/avatar-5.jpg')
        },
        {
            id: 6,
            name: "Robin",
            img: require('../../assets/instagram/avatar-1.jpg')
        },
        {
            id: 7,
            name: "QueenMari",
            img: require('../../assets/instagram/avatar-2.jpg')
        }
      ];
    const listStories = stories.map((story)=>{
        return (
            <TouchableOpacity style={styles.story} key={story.id}>
                <Image style={styles.storyImg} source={story.img}/>
                <Text style={styles.storyName} numberOfLines={1}>{story.name}</Text> 
            </TouchableOpacity>
        );
    });     
  return (
    <View style={styles.wrapStory}>
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator = {false}
            style={styles.scrollViewStories}>
            {listStories}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapStory: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0, 0.1)',
        borderStyle: 'solid',
        paddingVertical: 16,
        paddingHorizontal: 8,
        backgroundColor: 'rgba(219,219,219,0.3)'
    },
    scrollViewStories: {
        width: '100%',
        flexDirection: 'row',
    },
    story: {
        paddingHorizontal: 8,
        width: 72,
    },
    storyImg: {
        width: 56,
        height: 56,
        paddingHorizontal: 8,
        borderRadius: 28,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    storyName: {
        width: '100%',
        textAlign: 'center'
    }
  
  
});



