import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { handleMusic, handleMusicReset } from '../store/actions';

const MusicType = () => {
    const dispatch = useDispatch();
    const musicitem = useMappedState(state => state.musicItem);
    const Data = [{
        id: 1, title: '預設', low: 0, midLow: 0, middle: 0, midHight: 0, hight: 0
    }, {
        id: 2, title: '說話', low: 25, midLow: 0, middle: 0, midHight: 10, hight: -10
    },
    {
        id: 3, title: '低音加強', low: -30, midLow: 20, middle: 0, midHight: 0, hight: 0
    },
    {
        id: 4, title: '高音加強', low: 8, midLow: 10, middle: 0, midHight: -20, hight: -25
    },
    {
        id: 5, title: '柔順', low: 0, midLow: -20, middle: 0, midHight: 20, hight: 0
    },
    {
        id: 6, title: '活力', low: -22, midLow: 0, middle: 20, midHight: 10, hight: -15
    },
    ];

    useEffect(() => {
        return () => {
            dispatch(handleMusicReset());
        }
    }, []);

    return (
        <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'space-evenly', flexDirection: 'row', paddingTop: 20 }}>
            {Data.map(item => (
                item.id === musicitem ?
                    <TouchableOpacity style={styles.musicbuttonatv} key={item.id} onPress={() => { dispatch(handleMusic(item)) }}>
                        <Text style={{ textAlign: 'center', color: '#4e4e4e', lineHeight: 48 }}>{item.title}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.musicbutton} key={item.id} onPress={() => { dispatch(handleMusic(item)) }}>
                        <Text style={{ textAlign: 'center', color: '#fff', lineHeight: 48 }}>{item.title}</Text>
                    </TouchableOpacity>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    musicbuttonatv: {
        width: '43%',
        height: 50,
        borderWidth: 1,
        borderColor: '#fdd103',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fdd103'
    },
    musicbutton: {
        width: '43%',
        height: 50,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,

    }
})
export default MusicType;