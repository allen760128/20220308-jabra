import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Slider } from 'react-native-elements';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { handleStideToggle, handleSetlow, handleSetMidlow, handleSetMiddle, handleSetMidhight, handleSetHight } from '../store/actions';

const Eq = (props) => {
    const dispatch = useDispatch();
    const low = useMappedState(state => state.low);
    const midLow = useMappedState(state => state.midLow);
    const middle = useMappedState(state => state.middle);
    const midHight = useMappedState(state => state.midHight);
    const hight = useMappedState(state => state.hight);



    return (
        <View style={{ height: 170 }}>
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
            <View style={styles.eqTag}>
                <Text style={{ color: '#7f8184' }}>低頻</Text>
                <Text style={{ color: '#7f8184' }}>中頻</Text>
                <Text style={{ color: '#7f8184' }}>高頻</Text>
            </View>


        </View>
    )
};

const styles = StyleSheet.create({

    verticalContent: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    eqTag: {
        paddingTop: 10,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // eqline: {
    //     backgroundColor: '#484a4d',
    //     width: '200%',
    //     height: 3,
    //     borderRadius: 50,
    //     position: 'absolute',
    //     marginTop: 79,
    //     right: 0

    // }

})

export default Eq;