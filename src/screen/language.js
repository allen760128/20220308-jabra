import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';

const Language = () => {
    const [lanId, setLanid] = useState(4);
    const languageData = [{ id: 1, title: 'Deutsch' }, { id: 2, title: 'English' }, { id: 3, title: 'Francais' },
    { id: 4, title: '中文' }, { id: 5, title: '日本語' }];
    const handleSelect = (id) => {
        Alert.alert(
            '確定更換語言?', '',
            [{ text: 'ok', onPress: () => setLanid(id) },
            { text: 'cancel', onPress: () => null },
            ]
        );
    };
    const listContent = ({ item }) => {
        return (
            <View style={styles.secBottom}>
                <View style={styles.bottomContent}>
                    <TouchableOpacity
                        onPress={() => { handleSelect(item.id) }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        {
                            item.id === lanId ?
                                <Image style={{ width: 20, height: 20, marginRight: 20 }} source={require('../../assets/img/sound_icon1.png')}>
                                </Image>
                                :
                                null
                        }
                        <Text style={{ fontSize: 20, color: '#fff' }}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={languageData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    listContent({ item })
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    secBottom: {
        paddingLeft: 20,
    },
    bottomContent: {
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#6c6e72',
    },
});

export default Language;