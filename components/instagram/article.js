import React from 'react';
import { Dimensions,  StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const articleHeight = (screenWidth / 300) * 300;
const articles = [
    {
      id: 1,
      avatar: require('../../assets/instagram/avatar-1.jpg'),
      title: '5.min.craft',
      img: require('../../assets/instagram/article-5.jpg'),
      views: '685,375',
      time: '30 minutes ago'
    },
    {
        id: 2,
        avatar: require('../../assets/instagram/avatar-2.jpg'),
        title: 'Ivyconnect',
        img: require('../../assets/instagram/article-v.jpg'),
        views: '685,375',
        time: '1 hour ago'
    },
    {
        id: 3,
        avatar: require('../../assets/instagram/avatar-3.jpg'),
        title: 'FrenchSprit',
        img: require('../../assets/instagram/article-3.jpg'),
        views: '685,375',
        time: '16 hours ago'
    },
    {
        id: 4,
        avatar: require('../../assets/instagram/avatar-4.jpg'),
        title: 'Hand craft',
        img: require('../../assets/instagram/article-4.jpg'),
        views: '685,375',
        time: '3 days ago'
    },
    {
        id: 5,
        avatar: require('../../assets/instagram/avatar-5.jpg'),
        title: 'craft',
        img: require('../../assets/instagram/article-1.jpg'),
        views: '685,375',
        time: '1 month ago'
    }
  ];
 

export default function Article() {
    const listArticle = articles.map((article)=>{
        return (
            <View key={article.id} style={styles.article}>
                <View style={styles.articleHeader}>
                    <TouchableOpacity style={styles.account}>
                        <Image style={styles.accountImg} source={article.avatar}/>
                        <Text style={styles.accountName}>{article.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="more-horizontal" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.articleMedia}>
                    <Image style={styles.articleImg} source={article.img}/>
                </View>
                <View style={styles.articleAction}>
                    <View style={styles.articleActionLeft}>
                        <TouchableOpacity>
                            <Feather style={styles.iconArticle} name="heart" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather style={styles.iconArticle} name="message-circle" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather style={styles.iconArticle} name="send" size={30}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.articleActionRight}>
                        <TouchableOpacity>
                            <Feather name="bookmark" size={30}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.articleInfo}>
                    <Text style={styles.articleViews}>
                        {article.views}
                        &nbsp;liked
                    </Text>
                    <Text style={styles.articleTime}>{article.time}</Text>
                </View>
                
            </View>
        );
    });   
  return (
    <View style={styles.articlesList}>
      {listArticle}
    </View>
  );
}

const styles = StyleSheet.create({
    articlesList: {
        width: '100%',
    },
    article: {
        width: '100%',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0, 0.1)',
        borderStyle: 'solid',
        paddingBottom: 16
    },
    articleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 16
    },
    account:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    accountImg:{
        width: 32,
        height: 32,
        borderRadius: 16
    },
    accountName:{
        marginLeft: 12,
        fontSize: 14,
        fontWeight: '600'
    },
    articleMedia: {
        marginBottom: 0
    },
    articleImg:{
        width: '100%',
        height: articleHeight,
    },
    articleAction: {
        marginHorizontal: 8,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    articleActionLeft: {
        width: '100%',
        flexDirection: 'row',
        flexShrink: 1,
    },
    articleActionRight: {},
    iconArticle: {
        marginHorizontal: 8,
    },
    articleInfo: {
        marginHorizontal: 16,
    },
    articleViews: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '600'
    },
    articleTime: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)'
    }
  
  
});



