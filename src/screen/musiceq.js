import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements';
import { useDispatch, useMappedState } from 'redux-react-hook';
import {
    handleStideToggle, handleSetlow, handleSetMidlow,
    handleSetMiddle, handleSetMidhight, handleSetHight,
    handleMusic
} from '../store/actions';


const MusicEq = (props) => {
    const dispatch = useDispatch();
    const low = useMappedState(state => state.low);
    const midLow = useMappedState(state => state.midLow);
    const middle = useMappedState(state => state.middle);
    const midHight = useMappedState(state => state.midHight);
    const hight = useMappedState(state => state.hight);

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
    return (
        <View style={styles.container}>
            <View style={styles.eqTopTag}>
                <Text style={{ color: '#fff' }}>60 Hz</Text>
                <Text style={{ color: '#fff' }}>250 Hz</Text>
                <Text style={{ color: '#fff' }}>1K Hz</Text>
                <Text style={{ color: '#fff' }}>4K Hz</Text>
                <Text style={{ color: '#fff' }}>7.6K Hz</Text>
            </View>
            <View style={{ height: 200 }}>
                <View style={styles.verticalContent}>
                    {/* <View style={styles.eqline}></View> */}
                    <Slider
                        style={{ width: 40 }}
                        value={low}
                        onValueChange={(e) => { dispatch(handleSetlow(e)) }}
                        maximumValue={50}
                        minimumValue={-50}
                        onSlidingStart={() => { dispatch(handleStideToggle()) }}
                        onSlidingComplete={() => { dispatch(handleStideToggle()) }}
                        step={1}
                        orientation="vertical"
                        thumbStyle={{ height: 10, width: 16, backgroundColor: 'transparent' }}
                        thumbProps={{
                            children: (
                                <View style={{ backgroundColor: '#fff', width: 15, height: 15, borderRadius: 50 }}></View>
                            ),
                        }}
                    />

                    <Slider
                        value={midLow}
                        onValueChange={(e) => { dispatch(handleSetMidlow(e)) }}
                        maximumValue={50}
                        minimumValue={-50}
                        onSlidingStart={() => { dispatch(handleStideToggle()) }}
                        onSlidingComplete={() => { dispatch(handleStideToggle()) }}
                        step={1}
                        orientation="vertical"
                        thumbStyle={{ height: 10, width: 16, backgroundColor: 'transparent' }}
                        thumbProps={{
                            children: (
                                <View style={{ backgroundColor: '#fff', width: 15, height: 15, borderRadius: 50 }}></View>
                            ),
                        }}
                    />
                    <Slider
                        value={middle}
                        onValueChange={(e) => { dispatch(handleSetMiddle(e)) }}
                        maximumValue={50}
                        minimumValue={-50}
                        onSlidingStart={() => { dispatch(handleStideToggle()) }}
                        onSlidingComplete={() => { dispatch(handleStideToggle()) }}
                        step={1}
                        orientation="vertical"
                        thumbStyle={{ height: 10, width: 16, backgroundColor: 'transparent' }}
                        thumbProps={{
                            children: (
                                <View style={{ backgroundColor: '#fff', width: 15, height: 15, borderRadius: 50 }}></View>
                            ),
                        }}
                    />
                    <Slider
                        value={midHight}
                        onValueChange={(e) => { dispatch(handleSetMidhight(e)) }}
                        maximumValue={50}
                        minimumValue={-50}
                        onSlidingStart={() => { dispatch(handleStideToggle()) }}
                        onSlidingComplete={() => { dispatch(handleStideToggle()) }}
                        step={1}
                        orientation="vertical"
                        thumbStyle={{ height: 10, width: 16, backgroundColor: 'transparent' }}
                        thumbProps={{
                            children: (
                                <View style={{ backgroundColor: '#fff', width: 15, height: 15, borderRadius: 50 }}></View>
                            ),
                        }}
                    />
                    <Slider
                        value={hight}
                        onValueChange={(e) => { dispatch(handleSetHight(e)) }}
                        maximumValue={50}
                        minimumValue={-50}
                        onSlidingStart={() => { dispatch(handleStideToggle()) }}
                        onSlidingComplete={() => { dispatch(handleStideToggle()) }}
                        step={1}
                        allowTouchTrack
                        orientation="vertical"
                        thumbStyle={{ height: 10, width: 16, backgroundColor: 'transparent' }}
                        thumbProps={{
                            children: (
                                <View style={{ backgroundColor: '#fff', width: 15, height: 15, borderRadius: 50 }}></View>
                            ),
                        }}
                    />
                </View>
            </View>
            <View style={styles.eqTag}>
                <Text style={{ color: '#7f8184' }}>低頻</Text>
                <Text style={{ color: '#7f8184' }}>中頻</Text>
                <Text style={{ color: '#7f8184' }}>高頻</Text>
            </View>
            <View>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5157',

    },
    eqTopTag: {
        paddingTop: 30,
        paddingLeft: 35,
        paddingRight: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    verticalContent: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    eqTag: {
        paddingTop: 20,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
    },

});
export default MusicEq;