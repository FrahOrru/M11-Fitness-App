// components/ChallengeCard.js
import React from 'react';
import './program-item.modules.css';
import Image from 'next/image';

interface PostItemLgProps {
    program: any;
}

const ProgramItem: React.FC<PostItemLgProps> = ({ program }) =>{
  return (
    <div className="program-item">
      <div className="imageContainer">
        <Image loading='eager' src={program.image.url} alt="Push Up" width={100} height={100} />
      </div>
      <div className="content">
        <h3>{program.name}</h3>
        <p>{program.workouts.length || 0} workouts • x Minutes</p>
      </div>
    </div>
  );
};

export default ProgramItem;
