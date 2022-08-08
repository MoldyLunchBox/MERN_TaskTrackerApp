
import {useState} from 'react'
const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState('')
const handleSubmit = async (e)=>{
    e.preventDefault()
    const workout = {title, reps, load}
    const response = await fetch('http://localhost:4000/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout),
      })
      const json = await response.json()
      if (!response.ok){
          setError(json.error)
      }
      else{
          setError(null)
          console.log('succesfully added workout ', json)
      }
}
    return (
        <form className="relative bg-white border rounded p-10  mt-2" onSubmit={handleSubmit}>

            <div class="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div class="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Reps</label>
                <input type="text" onChange={(e)=>{setReps(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Load (kg)</label>
                <input type="text" onChange={(e)=>{setLoad(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type='submit' className="absolute bottom-0 mb-5 mr-5 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >add workout</button>
        </form>
     );
}
 
export default WorkoutForm;