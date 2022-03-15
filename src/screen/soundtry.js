import React, { useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

const Soundtry = (props) => {
    const [soundSwitch, setSoundSwitch] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.sec1Wrap}>
                <View style={styles.sec1}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>自動恢復音訊</Text>
                    <Switch
                        value={soundSwitch}
                        trackColor={{ false: "#767577", true: "#fdd103" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { setSoundSwitch(!soundSwitch) }}
                    ></Switch>
                </View>
                <Text style={styles.h2}>當其中一個耳塞從耳朵取出時，將自動暫停音訊。</Text>
                <Text style={styles.h2}>當耳塞放回耳內時，音訊將恢復(除非耳塞已從耳朵中取出超過60秒)。</Text>
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
});

export default Soundtry;