const WorkoutDetails = ({workout}) => {
    return ( 
    <div className="bg-white hover:bg-sky-200 px-6 py-2 border border-gray-200 w-full mt-2">
        <h1 className="text-green-600/100 font-bold text-xl">{workout.title}</h1>
        <div className="pl-3 mt-2">
            <h2><a className="font-bold">Load (KG): </a>{workout.load}</h2>
            <h2><a className="font-bold">Reps: </a>{workout.reps}</h2>
            <h2>{workout.createdAt}</h2>
        </div>

    </div>
     );
}
 
export default WorkoutDetails;