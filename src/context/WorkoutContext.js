import { createContext, useReducer } from "react";

// creating an instance of context called WorkoutsContext
export const WorkoutsContext = createContext();

// reducer takes in the state, and the action of the dispatch
// using a switch statement we can determine which action to perform
// based on what action.type provides us.
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
            }
        default:
            return state
    }
}

// the provider makes the state and dispatch function available
// to all components inside of the provider
export const WorkoutsContextProvider = ( { children } ) => {
    // making the useReducer hook available within the provider
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}