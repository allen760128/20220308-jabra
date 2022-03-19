import {
    handle_slideToggle, handle_music, handle_musicReset,
    handle_setlow, handle_setMidlow, handle_setMiddle,
    handle_setMidhight, handle_setHight, handle_musicSwitch,
    handle_leftLink, handle_navSendlink,
} from './types';

export const handleStideToggle = () => {
    return {
        type: handle_slideToggle
    }
}
export const handleMusic = (data) => {
    return {
        type: handle_music,
        payload: data
    }
}
export const handleMusicSwitch = () => {
    return {
        type: handle_musicSwitch
    }
}
export const handleMusicReset = () => {
    return {
        type: handle_musicReset
    }
}
export const handleSetlow = (x) => {
    return {
        type: handle_setlow,
        payload: x
    }
}
export const handleSetMidlow = (x) => {
    return {
        type: handle_setMidlow,
        payload: x
    }
}
export const handleSetMiddle = (x) => {
    return {
        type: handle_setMiddle,
        payload: x
    }
}
export const handleSetMidhight = (x) => {
    return {
        type: handle_setMidhight,
        payload: x
    }
}
export const handleSetHight = (x) => {
    return {
        type: handle_setHight,
        payload: x
    }
}
export const handleLeftLink = (data) => {
    return {
        type: handle_leftLink,
        payload: data,
    }
}