import {createContext} from 'react'

export const WorkoutContext = createContext()

export const WorkoutsContextProvider = ({children}) =>{
    return (
        <WorkoutContext.Provider>
            
        </WorkoutContext.Provider>
    )
}