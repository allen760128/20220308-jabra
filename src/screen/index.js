
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';


export default function Index(props) {
    const [ch, setCh] = useState('將您的Jabra Elite 65t開機');
    const toProfile = () => {
        props.navigation.push('Profiles')
    }
    const handleLocation = () => {
        props.navigation.push('location');
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1, }} source={require('../../assets/img/main.jpg')}>
                <Text style={styles.h1}>歡迎回來</Text>
                <Text style={styles.h2}>將您的Jabra Elite 65t開機</Text>
                <View style={styles.icon1} >
                    <TouchableOpacity onPress={() => { handleLocation() }}>
                        <Image style={styles.imageIcon} source={require('../../assets/img/main_icon1.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.icon2}>
                    <TouchableOpacity >
                        <Image style={styles.imageIcon} source={require('../../assets/img/main_icon2.png')}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#fddcad',
    },
    h1: {
        color: '#fff',
        fontSize: 30,
        paddingLeft: 20,
        paddingTop: 30
    },
    h2: {
        color: '#fff',
        paddingLeft: 20,
        paddingTop: 6
    },
    icon1: {
        backgroundColor: '#3f4044',
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        right: 115,
        bottom: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon2: {
        backgroundColor: '#3f4044',
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        right: 20,
        bottom: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageIcon: {
        width: 30,
        height: 30,

    },
});
