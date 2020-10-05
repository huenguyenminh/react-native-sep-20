import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Story() {
    const stories = [
        {
          id: 1,
          name: "Robin",
          img: require('../../assets/instagram/avatar-1.jpg'),
          stt: ''
        },
        {
            id: 2,
            name: "QueenMari",
            img: require('../../assets/instagram/avatar-2.jpg'),
            stt: ''
        },
        {
            id: 3,
            name: "Helen",
            img: require('../../assets/instagram/avatar-3.jpg'),
            stt: 'read'
        },
        {
            id: 4,
            name: "Robin",
            img: require('../../assets/instagram/avatar-4.jpg'),
            stt: 'new'
        },
        {
            id: 5,
            name: "Alex Max",
            img: require('../../assets/instagram/avatar-5.jpg'),
            stt: ''
        },
        {
            id: 6,
            name: "Robin",
            img: require('../../assets/instagram/avatar-1.jpg'),
            stt: ''
        },
        {
            id: 7,
            name: "QueenMari",
            img: require('../../assets/instagram/avatar-2.jpg'),
            stt: ''
        }
      ];
    const listStories = stories.map((story)=>{
        const arrStyles = [styles.wrapImg];
        if (story.stt === 'read') {
            arrStyles.push(styles.borderGray);
        } else if (story.stt === 'new') {
            arrStyles.push(styles.borderRed);
        }

        return (
            <TouchableOpacity style={styles.story} key={story.id}>
                <View style={arrStyles}>
                    <Image style={styles.storyImg} source={story.img}/>
                </View>
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
        paddingRight: 4,
        width: 72,
    },
    wrapImg: {
        borderRadius: 30,
        borderColor: 'transparent',
        borderWidth:1,
        width: 62,
        height: 62,
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 4,
        marginBottom: 10,
    },
    borderGray: {
        borderColor: '#afafaf',
    },
    borderRed: {
        borderColor: 'red',
    },
    storyImg: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    storyName: {
        width: '100%',
        textAlign: 'center'
    }
  
  
});



