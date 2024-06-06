// components/ChallengeCard.js
import React from 'react';
import './steps-card.modules.css';
import Image from 'next/image';

const StepsCard = () => {
  return (
    <div className="card">
      <div className="text">
        <h2>We have new Challenge!</h2>
        <h1><span>200</span> Step</h1>
        <button className="button">Join Challenge</button>
      <div className="image">
        {/* <Image src="#" alt="Challenge" width={100} height={100} /> */}
      </div>
      </div>
    </div>
  );
};

export default StepsCard;
