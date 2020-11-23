import React, { useContext, useReducer } from 'react';

import { UserContext } from './indexOld';

const initialState = {
    count: 0
}

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {
                count: state.count + 1
            }
        case "decrement":
            return {
                count: state.count - 1
            }
        case "reset":
            return initialState
            
        default:
            return initialState
    }
}

export default function ToDo(){
    const value = useContext(UserContext);

    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {state.count}
           {/* Hello, {value} */}
           <button onClick={() => dispatch({ type: "increment"})}>Increment</button>
           <button onClick={() => dispatch({ type: "decrement"})}>Decrement</button>
           <button onClick={() => dispatch({ type: "reset"})}>Reset</button>

        </div>
    )
}