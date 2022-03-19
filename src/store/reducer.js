
import {
    handle_slideToggle, handle_music, handle_musicReset,
    handle_setlow, handle_setMidlow, handle_setMiddle,
    handle_setMidhight, handle_setHight, handle_musicSwitch,
    handle_leftLink,
} from './types';
const initialState = {
    slideToggle: true,
    musicItem: 1,
    low: 0,
    midLow: 0,
    middle: 0,
    midHight: 0,
    hight: 0,
    leftLink: 1,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case handle_slideToggle: return {
            ...state,
            slideToggle: !state.slideToggle
        }
        case handle_music: return {
            ...state,
            musicItem: action.payload.id,
            low: action.payload.low,
            midLow: action.payload.midLow,
            middle: action.payload.middle,
            midHight: action.payload.midHight,
            hight: action.payload.hight,
        }
        case handle_musicSwitch: return {
            ...state,
            low: 0,
            midLow: 0,
            middle: 0,
            midHight: 0,
            hight: 0,
        }
        case handle_musicReset: return {
            ...state,
            musicItem: 1
        }
        case handle_setlow: return {
            ...state,
            low: action.payload
        }
        case handle_setMidlow: return {
            ...state,
            midLow: action.payload
        }
        case handle_setMiddle: return {
            ...state,
            middle: action.payload
        }
        case handle_setMidhight: return {
            ...state,
            midHight: action.payload
        }
        case handle_setHight: return {
            ...state,
            hight: action.payload
        }
        case handle_leftLink: return {
            ...state,
            leftLink: action.payload.id,
        }
        default: return state;
    }
}

export default Reducer;