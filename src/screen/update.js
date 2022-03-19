import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Update = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.sec1}>
                <Text style={styles.h2}>已是最新</Text>
            </View>
            <View style={styles.sec1}>
                <Text style={styles.h3}>目前韌體版本:</Text>
                <Text style={styles.h3}>2.25.0(1033)(ENGLISH)</Text>
            </View>
            <View style={styles.sec1}>
                <Text style={styles.h3}>當新固件可用時，"發現"選項卡將向您發送通知。</Text>
            </View>
            <View style={styles.sec2}>
                <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/explore_icon1.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    sec1: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 15
    },
    h2: {
        fontSize: 26,
        color: '#fff',
    },
    h3: {
        fontSize: 20,
        color: '#fff',
        lineHeight: 30
    },
    sec2: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        alignItems: 'center'
    },
});

export default Update;