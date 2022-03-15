import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, } from 'react-native';

const Aroundsound = () => {
    const [soundSwitch, setSoundSwitch] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.sec1Wrap}>
                <View style={styles.sec1}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>收聽環境音</Text>
                    <Switch
                        value={soundSwitch}
                        trackColor={{ false: "#767577", true: "#fdd103" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { setSoundSwitch(!soundSwitch) }}
                    ></Switch>
                </View>
                <Text style={{
                    paddingLeft: 20,
                    paddingRight: 20, fontSize: 16, color: '#fff'
                }}>耳機會完全隔絕周遭環境音。</Text>
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
});
export default Aroundsound;