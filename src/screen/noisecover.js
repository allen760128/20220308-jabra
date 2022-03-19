import React, { useState } from 'react';
import { View, StyleSheet, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import { handle_leftLink } from '../store/types';

const Noisecover = (props) => {

    const [noise, setNoise] = useState('');
    const Data = [{ id: 1, title: '掩蓋周遭噪音', data: ['粉紅噪音', '白噪音', '抽風機', '瀑布', '開車中'] },
    { id: 2, title: '大自然之聲', data: ['海浪', '雨天', '鳥鳴', '完美風暴', '潺潺小溪'] },
    { id: 3, title: '舒適環境', data: ['山洞', '人群', '夜空', '樹林', '空房', '太空'] }
    ];

    const handleSelect = (x) => {
        console.log(noise);
        setNoise(x);
    }

    const sectionContent = ({ item, index }) => {
        return (
            <View style={styles.secBottom}>
                <View style={styles.bottomContent}>
                    {
                        item + index === noise ?
                            <TouchableOpacity onPress={() => { handleSelect(item + index) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>{item}</Text>
                                <Image style={{ width: 20, height: 20 }} source={require('../../assets/img/sound_icon1.png')}>
                                </Image>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { handleSelect(item + index) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>{item}</Text>
                                {/* <Image style={{ width: 0, height: 0 }} source={require('../../assets/img/sound_icon1.png')}>
                                </Image> */}
                            </TouchableOpacity>
                    }

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
                    renderItem={({ item, index }) => (
                        sectionContent({ item, index })
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        sectionHeader({ title })
                    )}
                />
            </View>
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