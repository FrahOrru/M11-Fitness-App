import StepsCard from "@/components/steps-card/steps-card";
import Image from "next/image";

export default function Home() {
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
    </div>
  );
}
