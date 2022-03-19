import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

const Asist = () => {
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
            <View style={styles.sec1}>
                <Image source={require('../../assets/img/explore_pic1.jpg')}></Image>
            </View>
            <View style={styles.sec2}>
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
                    <Text style={{ fontSize: 20, color: '#fff' }}>IOS預設</Text>
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
                    <Text style={{ fontSize: 20, color: '#fff' }}>Amazon Alexa</Text>
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
                    <Text style={{ fontSize: 20, color: '#fff' }}>小度藍芽</Text>
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
    sec1: {
        borderBottomWidth: 2,
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

export default Asist;