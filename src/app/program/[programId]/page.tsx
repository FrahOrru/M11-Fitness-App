import WorkoutCard from "@/components/workout-card/workout-card";
import { sdk } from "@/lib/client";
import Link from "next/link";

export default async function ProgramDetail({ params } : any ) {
    const { programId} = params;

    const programs = await sdk.Programs();

    const program = programs.data.programs.find((program) => program.id === programId)

    const styles = {
        backgroundImage: 'url(' + program?.image?.url + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

    return (
    <div className="program-page">
        <div className="header">
            <Link href={'../'}>
            <button className="backButton">&lt;</button>
            </Link>
        </div> 
        <div className="program-header" style={styles}>
            <div className="veil"></div>
            <h2>{program?.name}</h2>
        </div>
        <div className="description">
            <p>{program?.description}</p>
        </div>
        {
            Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="days-work">
                    <div className="day-item">
                        <p>Day {i + 1}</p>
                    </div>
                    <div className="workouts-list">
                        {program?.workouts.filter(wor => wor.day === i+1).map((workout) => {
                            return <Link  key={workout.id} href={`/program/${programId}/workout/${workout.id}`} passHref={true}><WorkoutCard workout={workout}></WorkoutCard></Link>
                        })}
                    </div>
                </div>
            ))
        }
        
    </div>)
}