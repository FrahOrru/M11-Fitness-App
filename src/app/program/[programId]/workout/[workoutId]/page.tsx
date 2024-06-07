import { sdk } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function WorkoutDetail({ params } : any ) {
    const { programId, workoutId } = params;

    const workouts = await sdk.Workouts();
    const currentWorkout = workouts.data.workouts.find(x => x.id === workoutId)

    return (
        <div className="workout-page">
            <div className="header">
                <Link href={'../'}>
                    <button className="backButton">&lt;</button>
                </Link>
            </div>
            <div className="information-card" style={{ backgroundImage: `url(${currentWorkout?.image?.url})` }}>
            <div className="informations">
                <h2>{currentWorkout?.name}</h2>
                <p>{currentWorkout?.description}</p>
            </div>
            </div>
            <div className="exercises-list">
            {currentWorkout?.exercises.map((exer) => {
                return <Link key={exer.id} href={`/program/${programId}/workout/${workoutId}/exercise/${exer.id}`}>
                    <div className="flex justify-between items-center">
                        <p>{exer.name}</p>
                        <Image src={'/play.svg'} alt="play exercise" width={40} height={40}></Image>
                    </div>
                </Link>
            })}
            </div>
        </div>
    )
}