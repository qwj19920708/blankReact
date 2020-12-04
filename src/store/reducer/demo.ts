import { EnthusiasmAction } from '../actions'
import { demo } from '../types'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants' 
import initState from '../initState';

export function enthusiasm(state: demo = initState.demo, action: EnthusiasmAction): demo {
    switch(action.type){
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel as number + 1};
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel as number - 1) };
        default:
            return state
    }
    return state
}