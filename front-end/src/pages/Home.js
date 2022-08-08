import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

import {useEffect, useState} from 'react'
const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    useEffect (() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            console.log(response)
              const json = await response.json()
              console.log(json)
              if (response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    },[])
    return ( 
        <div className="mt-10">
            <div className="flex justify-center"> 
                <div className=" cursor-pointer   border-gray-200 w-4/5 text-gray-900">
                    {workouts && workouts.map((workout)=>(
                        <WorkoutDetails key={workout._id} workout={workout} />
                        ))}
                </div>
            <WorkoutForm/>
            </div>
        </div>
     );
}
 
export default Home;