import { sdk } from "@/lib/client";

export default async function WorkoutDetail({ params } : any ) {
    const { programId, workoutId } = params;

    const workouts = await sdk.Workouts();
    const currentWorkout = workouts.data.workouts.find(x => x.id === workoutId)

    return (
    <div className="workout-page">
        {currentWorkout?.exercises.map((exer) => {
            return <div key={exer.id}>{exer.name}</div>
        })}
    </div>)
}