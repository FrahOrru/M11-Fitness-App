import ProgramItem from "@/components/program-item/program-item";
import StepsCard from "@/components/steps-card/steps-card";
import { sdk } from "@/lib/client";
import Image from "next/image";

export default async function Home() {
  const programs = await sdk.Programs();

  return (
    <div className="home-page">
      <div className="header my-6">
        <div className="user-pic"></div>
        <div className="user-hello flex flex-col">
          <p>Welcome back</p>
          <h3>Francesca Orrù</h3>
        </div>
      </div>
      <div className="step-card">
        <StepsCard></StepsCard>
      </div>
      <div className="programs-list">
        <h2>All Programs for your health</h2>
        {programs.data.programs.map((program) => {
          return <ProgramItem key={program.id} program={program}></ProgramItem>
        })}
      </div>
    </div>
  );
}
