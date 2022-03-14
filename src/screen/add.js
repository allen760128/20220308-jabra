
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default function App(props) {
    const ddd = () => {
        props.navigation.pop()
    }
    // useEffect(() => {
    //     return () => {
    //         props.navigation.pop()
    //     }
    // }, []);
    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Button onPress={() => { ddd() }} title='back'>
                </Button>
            </ View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#fddcad',
    },
    back: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
});