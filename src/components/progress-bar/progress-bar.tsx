// components/ProgressBar.js
import React, { useState, useEffect } from 'react';
import './progress-bar.modules.css';

interface ProgressProps {
    duration: any;
}


const ProgressBar: React.FC<ProgressProps> = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 100 / duration;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="progress">
      <div className="progressBar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
