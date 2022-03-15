import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { handleLeftLink } from '../store/actions';



const Leftnav = () => {
    const leftLink = useMappedState(state => state.leftLink);
    const dispatch = useDispatch();
    const leftData = [{ id: 1, picLink_1: require('../../assets/img/mode_icon5.png'), picLink_2: require('../../assets/img/mode_icon6.png'), link: '' },
    { id: 2, picLink_1: require('../../assets/img/mode_icon7.png'), picLink_2: require('../../assets/img/mode_icon8.png'), link: '' },
    { id: 3, picLink_1: require('../../assets/img/mode_icon9.png'), picLink_2: require('../../assets/img/mode_icon10.png'), link: '' }
    ];
    return (
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
    )
}

const styles = StyleSheet.create({
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
});

export default Leftnav;