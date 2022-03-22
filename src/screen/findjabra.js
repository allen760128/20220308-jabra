import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Switch, TouchableOpacity } from 'react-native';

const Findjabra = (props) => {
    const [soundSwitch, setSoundSwitch] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.secWrap}>
                <View style={styles.sec}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Find My Jabra防丟失功能</Text>
                    <Switch
                        value={soundSwitch}
                        trackColor={{ false: "#767577", true: "#fdd103" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { setSoundSwitch(!soundSwitch) }}
                    ></Switch>
                </View>
                {
                    soundSwitch &&
                    <View style={styles.findSwitch}>
                        <Text style={{ color: '#fff', fontSize: 16, lineHeight: 24 }}>如需幫助尋找您的Jabra耳機，則需打開"Find My Jabra防丟失功能"。</Text>
                    </View>
                }

            </View>
            <View style={styles.secWrap}>
                <View style={styles.sec}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>運作方式</Text>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/img/mode_setting_icon6.png')}></Image>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    secWrap: {
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
    },
    sec: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    findSwitch: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
});

export default Findjabra;