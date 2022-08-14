
import {createContext, useReducer} from 'react'

export const WorkoutContext = createContext()
export const workoutsReducer = (state, action) => {
     
}
export const WorkoutsContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutContext.Provider>
            {children}
        </WorkoutContext.Provider>
    )
}

