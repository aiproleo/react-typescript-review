import {useState, useReducer} from 'react'
import { Link, Outlet, } from "react-router-dom";

const UseReducer = () => {
    const initialState = { count: 200};
    const types = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement',
        RESET: 'reset',
    }

    const reducer = (state, action) => {
        switch (action){
            case types.INCREMENT: return {count: state.count + 1};
            case types.DECREMENT: return {count: state.count - 1};
            case types.RESET:     return {count:31};
            default: throw new Error ('no exist')
        }
    }

    const AppWithReducer=()=>{
        const [state, dispath] = useReducer(reducer, initialState)

        const increment = () => dispatch(types.INCREMENT);
        const decrement = () => dispatch(types.DECREMENT);
        const reset     = () => dispatch(types.RESET);
    }

    return (
        <div className="Reducer">
            <h1>Counter: {state.count} </h1>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>

    )

}
export default UseReducer