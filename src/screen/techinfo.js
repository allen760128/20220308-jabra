import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Techinfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sec}>
                <Text style={styles.h3}>Jabra Elite 65t</Text>
                <Text style={styles.h3}>裝置版本:2.25.0(1033)(English)</Text>
                <Text style={styles.h3}>產品ID:9342</Text>
                <Text style={styles.h3}>右耳機序號:745C4B0BB590</Text>
                <Text style={styles.h3}>左耳機序號:00041894374</Text>
                <Text style={styles.h3}>充電和序號:00041882493</Text>
                <Text style={styles.h3}>Jabra Sound+版本 2.9.1  (2.9.1.3)</Text>
                <View style={styles.secline}></View>
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
        paddingTop: 30,
    },
    secline: {
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
    },
    h3: {
        fontSize: 20,
        color: '#fff',
        paddingBottom: 30
    },
});

export default Techinfo;