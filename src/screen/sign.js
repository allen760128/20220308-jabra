import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Sign = (props) => {
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const [mail, setMail] = useState('');
    const [country, setCountry] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.sec}>
                <Text style={styles.h2}>註冊你的Jabra Elite 65t可獲得2年防潑水及防塵保固</Text>
                <View style={styles.inputWrap}>
                    <Text style={styles.h3}>名字</Text>
                    <TextInput
                        style={styles.inputt}
                        value={name}
                        onChangeText={(e) => setName(e.target)}
                    ></TextInput>
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.h3}>姓氏</Text>
                    <TextInput
                        style={styles.inputt}
                        value={name2}
                        onChangeText={(e) => setName2(e.target)}
                    ></TextInput>
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.h3}>電子郵件地址</Text>
                    <TextInput
                        style={styles.inputt}
                        value={mail}
                        onChangeText={(e) => setMail(e.target)}
                    ></TextInput>
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.h3}>國家/地區</Text>
                    <TextInput
                        style={styles.inputt}
                        value={country}
                        onChangeText={(e) => setCountry(e.target)}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.signButton} onPress={() => { }}>
                    <Text style={styles.h4}>已註冊的產品</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',
    },
    sec: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
    },
    h2: {
        fontSize: 20,
        color: '#fff',
        paddingBottom: 25,
        lineHeight: 24
    },
    h3: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    inputt: {
        borderColor: '#fff',
        borderWidth: 1,
        height: 40,
        color: '#fff',
        paddingLeft: 10,
        borderRadius: 4
    },
    inputWrap: {
        paddingBottom: 25
    },
    signButton: {
        borderColor: '#fff',
        borderWidth: 1,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    h4: {
        fontSize: 18,
        color: '#fff',
    },
});

export default Sign;