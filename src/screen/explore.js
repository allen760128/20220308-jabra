
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/img/explore_back.jpg')}>
                <Text style={styles.h1}>探索</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
        color: '#fddcad',
    },
    h1: {
        color: '#fff',
        fontSize: 30,
        paddingLeft: 20,
        paddingTop: 30
    },
});