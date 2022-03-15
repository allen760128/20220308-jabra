import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';
import { CheckBox, Icon } from 'react-native-elements';

const Calltry = () => {
    const [soundSwitch, setSoundSwitch] = useState(false);
    const [sli, setSli] = useState(0);
    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    const check1Switch = () => {
        setCheck1(true);
        setCheck2(false);
        setCheck3(false);
    }
    const check2Switch = () => {
        setCheck2(true);
        setCheck1(false);
        setCheck3(false);
    }
    const check3Switch = () => {
        setCheck3(true);
        setCheck1(false);
        setCheck2(false);
    }
    return (
        <View style={styles.container}>
            <View style={styles.sec1Wrap}>
                <View style={styles.sec1}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>側音</Text>
                    <Switch
                        value={soundSwitch}
                        trackColor={{ false: "#767577", true: "#fdd103" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { setSoundSwitch(!soundSwitch) }}
                    ></Switch>
                </View>
                <Text style={styles.h2}>在通話時聽到自己的聲音。
                </Text>
                <Text style={styles.h2}>調整在通話時你希望聽到自己聲音的音量大小。
                </Text>
                <View style={{ flex: 1, paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
                    <Slider
                        // style={{ width: 40 }}
                        value={sli}
                        onValueChange={(e) => { setSli(e.target) }}
                        maximumValue={100}
                        minimumValue={0}
                        // onSlidingStart={() => { dispatch(handleStideToggle()) }}
                        // onSlidingComplete={() => { dispatch(handleStideToggle()) }}
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

            </View>
            <View style={styles.sec2Wrap}>
                <View style={styles.sec2}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>通話等化器</Text>
                    <Text style={{ fontSize: 16, color: '#fff', lineHeight: 26 }}>選擇你希望在通話中聽到對方的方式。</Text>
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
                            checked={check1}
                            onPress={() => { check1Switch() }}
                        />
                        <Text style={{ fontSize: 20, color: '#fff' }}>預設</Text>
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
                            checked={check2}
                            onPress={() => { check2Switch() }}
                        />
                        <Text style={{ fontSize: 20, color: '#fff' }}>更高音</Text>
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
                            checked={check3}
                            onPress={() => { check3Switch() }}
                        />
                        <Text style={{ fontSize: 20, color: '#fff' }}>更低音</Text>
                    </View>
                </View>
            </View>
        </View >
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
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
    },
    sec2: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
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

export default Calltry;