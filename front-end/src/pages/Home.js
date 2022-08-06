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
                <ul className="bg-white cursor-pointer rounded-lg border border-gray-200 w-96 text-gray-900">
                    {workouts && workouts.map((workout)=>(
                    <li key={workout._id} className="hover:bg-sky-200 px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">{workout.title}</li>
                    ))}
                </ul>
            </div>
        </div>
     );
}
 
export default Home;