import React, { useState } from 'react';
import { View, StyleSheet, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import { handle_leftLink } from '../store/types';

const Noisecover = (props) => {


    const Data = [{ id: 1, title: '掩蓋周遭噪音', data: ['粉紅噪音', '白噪音', '抽風機', '瀑布', '開車中'], link: '' },
    { id: 2, title: '大自然之聲', data: ['海浪', '雨天', '鳥鳴', '完美風暴', '潺潺小溪'], link: '' },
    { id: 3, title: '舒適環境', data: ['山洞', '人群'], link: '' }
    ];

    const ha = (x) => {
        console.log(x)
    }

    const sectionContent = ({ item }) => {
        return (
            <View style={styles.secBottom}>
                <View style={styles.bottomContent}>
                    <TouchableOpacity onPress={() => { ha(item) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>{item}</Text>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/sound_icon1.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    const sectionHeader = ({ title }) => {
        return (
            <View style={styles.secTop}>
                <Text style={{ fontSize: 26, color: '#fff' }}>{title}</Text>
            </View>
        )
    }

    console.log(Data)
    return (
        <View style={styles.container}>
            <View style={styles.secWrap}>
                <SectionList
                    sections={Data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        sectionContent({ item })
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        sectionHeader({ title })
                    )}
                />
            </View>

            {/* <View style={styles.secTop}>
                    <Text style={{ fontSize: 26, color: '#fff' }}>掩蓋周遭噪音</Text>
                </View>
                <View style={styles.secBottom}>
                    <View style={styles.bottomContent}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>粉紅噪音</Text>
                            <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/sound_icon1.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    secWrap: { flex: 1 },
    secTop: {
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#4f5157',
    },
    secBottom: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    bottomContent: {
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',

    },
});

export default Noisecover;