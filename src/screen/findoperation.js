import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Findoperation = (props) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/about_pic1.jpg')}></Image>
            <View style={styles.sec}>
                <Text style={styles.h3}>在手機上只存儲最新位置</Text>
                <Text style={styles.h3}>當你的耳機段開連接時，我們會存儲它的位置。然後會刪除該耳機的所有舊位置數據。</Text>
                <Text style={styles.h3}>所有位置數據都存儲在你的手機上，不會發送到其他任何地方。</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    sec: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30
    },
    h3: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        paddingBottom: 20
    },
});

export default Findoperation;