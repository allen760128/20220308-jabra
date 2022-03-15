
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const Mode_setting = (props) => {
    // const han = () => { props.navigation.push('周遭聲音') }
    const Data = [{ id: 1, pic: require('../../assets/img/mode_setting_icon1.png'), link: '周遭聲音', title: '周遭聲音' },
    { id: 2, pic: require('../../assets/img/mode_setting_icon2.png'), link: '音樂等化器', title: '音樂等化器' },
    { id: 3, pic: require('../../assets/img/mode_setting_icon3.png'), link: '', title: '聲音體驗' },
    { id: 4, pic: require('../../assets/img/mode_setting_icon4.png'), link: '', title: '通話體驗' },
    { id: 5, pic: require('../../assets/img/mode_setting_icon5.png'), link: '', title: '耳機協助' }];
    return (
        <View style={styles.container}>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <View style={styles.settinWrap}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 50, marginRight: 10 }} source={item.pic}></Image>
                            <Text style={{ color: '#fff', fontSize: 20 }}>{item.title}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => { props.navigation.push(item.link) }}
                            style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 20, height: 20 }} source={require('../../assets/img/mode_setting_icon6.png')}></Image>
                        </TouchableOpacity>

                    </View>
                )}
                keyExtractor={item => item.id}
            >

            </FlatList>


            <View style={styles.reset}>
                <TouchableOpacity style={styles.reset_button}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>重設回Jabra預設設定</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    settinWrap: {
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    reset: {
        paddingBottom: 80,
        alignItems: 'center'
    },
    reset_button: {
        paddingLeft: 25,
        paddingRight: 25,
        height: 50,
        backgroundColor: '#3f4044',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
});

export default Mode_setting;