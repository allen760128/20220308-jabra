import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, } from 'react-native';
import { Slider } from 'react-native-elements';
import { CheckBox, Icon } from 'react-native-elements';

const Aroundsound = () => {
    const [soundSwitch, setSoundSwitch] = useState(false);
    const [soundSlid, setSoundSlid] = useState(0);
    const [checkSwitch, setCheckSwitch] = useState(true);
    const [checkSwitch2, setCheckSwitch2] = useState(false);
    const CheckSwitch = () => {
        setCheckSwitch(true);
        setCheckSwitch2(false);
    }
    const CheckSwitch2 = () => {
        setCheckSwitch(false);
        setCheckSwitch2(true);
    }
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
                {
                    soundSwitch === true ?
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <Text style={{
                                fontSize: 16, color: '#fff', lineHeight: 22
                            }}>收聽環境音功能讓你無須拿下耳機，即可聽見周遭聲音。用滑尺選擇音量大小</Text>
                            <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                                <Slider
                                    // style={{ width: 40 }}
                                    value={soundSlid}
                                    onValueChange={(e) => { setSoundSlid(e.target) }}
                                    maximumValue={100}
                                    minimumValue={0}
                                    step={1}
                                    orientation='horizontal'
                                    thumbStyle={{ height: 25, width: 25, backgroundColor: 'transparent' }}
                                    thumbProps={{
                                        children: (
                                            <View style={{ backgroundColor: '#fff', width: 25, height: 25, borderRadius: 50 }}></View>
                                        ),
                                    }}
                                />
                            </View>
                            <Text style={{ fontSize: 20, color: '#fff', paddingBottom: 20 }}>當收聽環境音開啟時</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 45 }}>
                                <CheckBox
                                    center
                                    containerStyle={styles.checkReset}
                                    checkedIcon={
                                        <Icon
                                            name="radio-button-checked"
                                            type="material"
                                            color="#fdd103"
                                            size={25}
                                        />
                                    }
                                    uncheckedIcon={
                                        <Icon
                                            name="radio-button-unchecked"
                                            type="material"
                                            color="grey"
                                            size={25}
                                        />
                                    }
                                    checked={checkSwitch}
                                    onPress={() => { CheckSwitch() }}
                                />
                                <Text style={{ fontSize: 20, color: '#fff' }}>繼續撥放音訊</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 45 }}>
                                <CheckBox
                                    center
                                    containerStyle={styles.checkReset}
                                    checkedIcon={
                                        <Icon
                                            name="radio-button-checked"
                                            type="material"
                                            color="#fdd103"
                                            size={25}
                                        />
                                    }
                                    uncheckedIcon={
                                        <Icon
                                            name="radio-button-unchecked"
                                            type="material"
                                            color="grey"
                                            size={25}
                                        />
                                    }
                                    checked={checkSwitch2}
                                    onPress={() => { CheckSwitch2() }}
                                />
                                <Text style={{ fontSize: 20, color: '#fff' }}>音訊靜音</Text>
                            </View>
                        </View>
                        :
                        <Text style={{
                            paddingLeft: 20,
                            paddingRight: 20, fontSize: 16, color: '#fff'
                        }}>耳機會完全隔絕周遭環境音。</Text>
                }

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
    slider: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkReset: {
        marginLeft: 0,
        marginRight: 10,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: 'center'
    },
});
export default Aroundsound;