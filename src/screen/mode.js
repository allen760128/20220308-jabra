
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Switch, ScrollView, FlatList } from 'react-native';
import { Slider, Icon } from 'react-native-elements';
import Eq from './eq';
import { useMappedState, useDispatch } from 'redux-react-hook';
import MusicType from './musicType';
import { handleMusicSwitch, handleLeftLink } from '../store/actions';

export default function Mode() {
    const [soundSwitch, setSoundSwitch] = useState(false);
    const scrollenabled = useMappedState(state => state.slideToggle);
    const dispatch = useDispatch();
    const leftLink = useMappedState(state => state.leftLink);

    const leftData = [{ id: 1, picLink_1: require('../../assets/img/mode_icon5.png'), picLink_2: require('../../assets/img/mode_icon6.png'), link: '' },
    { id: 2, picLink_1: require('../../assets/img/mode_icon7.png'), picLink_2: require('../../assets/img/mode_icon8.png'), link: '' },
    { id: 3, picLink_1: require('../../assets/img/mode_icon9.png'), picLink_2: require('../../assets/img/mode_icon10.png'), link: '' }
    ];
    return (

        <View style={styles.container}>
            <View style={styles.leftNav}>
                <View style={styles.leftContent}>
                    {
                        leftData.map(data => (
                            data.id === leftLink ?
                                <TouchableOpacity style={styles.leftActive} key={data.id} onPress={() => { dispatch(handleLeftLink(data)) }}>
                                    {/* {data.picLink_2} */}
                                    <Image style={{ width: 40, height: 40 }} source={data.picLink_2}></Image>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.leftInactive} key={data.id} onPress={() => { dispatch(handleLeftLink(data)) }}>
                                    <Image style={{ width: 40, height: 40 }} source={data.picLink_1}></Image>
                                </TouchableOpacity>
                        ))}

                </View>
            </ View >
            <ScrollView scrollEnabled={scrollenabled} style={{ flex: 1 }} bounces={false}>
                <View style={styles.rightContent}>
                    <View style={styles.title}>
                        <Text style={styles.h1}>偏好</Text>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/mode_icon1.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sec1}>
                        <View>
                            <Text style={styles.sec_title}>周遭聲音模式</Text>
                        </View>
                        <View style={styles.sec_line}></View>
                        <View style={styles.sec1_cont}>
                            <Text style={styles.sec1_conLeft}>收聽環境音</Text>
                            <Switch
                                value={soundSwitch}
                                trackColor={{ false: "#767577", true: "#fdd103" }}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => { setSoundSwitch(!soundSwitch) }}>
                            </Switch>
                        </View>

                    </View>
                    <View style={styles.sec2}>
                        <View style={styles.sec2_title}>
                            <Text style={styles.sec_title}>音樂等化器</Text>
                            <TouchableOpacity onPress={() => { dispatch(handleMusicSwitch()) }}>
                                <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/mode_icon2.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sec_line}></View>
                        <Eq
                        // clear={{ low, midLow, middle, midHight, hight, setLow, setMidlow, setMiddle, setMidhight, setHight }}
                        ></Eq>
                    </View>
                    <View style={styles.sec3}>
                        <Text style={styles.sec3_title}>音樂預設</Text>
                        <View style={styles.sec_line}></View>
                        <MusicType></MusicType>
                    </View>
                    <View style={styles.sec4}>
                        <View style={styles.sec4_titleWrap}>
                            <Text style={styles.sec4_title}>音景</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/mode_icon3.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sec_line}></View>
                        <View style={styles.sec4_content}>
                            <TouchableOpacity style={styles.sec4_play}>
                                <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/mode_icon4.png')}></Image>
                            </TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 24 }} >雨天</Text>
                        </View>
                    </View>
                    <View style={styles.sec5}>
                        <TouchableOpacity style={styles.sec5_button}>
                            <Text style={{ color: '#fff' }}>編輯小工具</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#fddcad',
        flexDirection: 'row',
    },
    leftNav: {
        flex: 0.25,
        backgroundColor: '#484a4d',
        alignItems: 'center',
        paddingTop: 15,
    },
    leftActive: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fdd103',
        marginTop: 10,
        marginBottom: 10
    },
    leftInactive: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10
    },
    rightContent: {
        flex: 0.75,
        backgroundColor: '#4f5157',
        flexDirection: 'column',
    },
    title: {
        backgroundColor: '#4f5157',
        height: 80,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    h1: {
        fontSize: 30,
        color: '#fff',
    },
    sec1: {
        backgroundColor: '#5b5d61',
        height: 130
    },
    sec_title: {
        fontSize: 20,
        lineHeight: 60,
        color: '#fff',
        paddingLeft: 20
    },
    sec_line: {
        backgroundColor: '#4f5157',
        height: 2
    },
    sec1_cont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    sec1_conLeft: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 20,
        lineHeight: 68
    },
    sec2: {
        backgroundColor: '#5b5d61',
        height: 230,
        marginTop: 20,
    },
    sec2_title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    sec3: {
        backgroundColor: '#5b5d61',
        marginTop: 20,
        paddingBottom: 20
    },
    sec3_title: {
        fontSize: 20,
        lineHeight: 60,
        color: '#fff',
        paddingLeft: 20
    },
    sec4: {
        backgroundColor: '#5b5d61',
        marginTop: 20,
        paddingBottom: 30
    },
    sec4_title: {
        fontSize: 20,
        lineHeight: 60,
        color: '#fff',
        paddingLeft: 20
    },
    sec4_titleWrap: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 20,
        alignItems: 'center'
    },
    sec4_content: {
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    sec4_play: {
        width: 70,
        height: 70,
        backgroundColor: '#3f4044',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    sec5: {
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center'
    },
    sec5_button: {
        width: 120,
        height: 40,
        backgroundColor: '#3f4044',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
});