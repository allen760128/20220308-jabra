import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

const Earpodasis = (props) => {
    const [soundSwitch, setSoundSwitch] = useState(false);
    const [soundSwitch2, setSoundSwitch2] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.sec1Wrap}>
                <View style={styles.sec1}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>耳機提示</Text>
                    <Switch
                        value={soundSwitch}
                        trackColor={{ false: "#767577", true: "#fdd103" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { setSoundSwitch(!soundSwitch) }}
                    ></Switch>
                </View>
                <Text style={styles.h2}>你將在耳機中聽到語音提示。</Text>
            </View>
            <View style={styles.sec2Wrap}>
                <View style={styles.sec2}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>來電顯示播報</Text>
                    <Switch
                        value={soundSwitch2}
                        trackColor={{ false: "#767577", true: "#fdd103" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { setSoundSwitch2(!soundSwitch2) }}
                    ></Switch>
                </View>
                <Text style={styles.h2}>來電者名稱或電話號碼將會播報。</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    sec1Wrap: {
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
    },
    sec1: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    h2: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        color: '#fff',
        lineHeight: 20
    },
    sec2Wrap: {
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
    },
    sec2: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default Earpodasis;