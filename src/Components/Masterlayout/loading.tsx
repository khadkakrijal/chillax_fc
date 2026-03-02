"use client";

import React, { useState, useEffect } from "react";
import TopLoadingBar from "react-top-loading-bar";
import "react-top-loading-bar/dist/styles.css";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 0;
        } else {
          const diff = Math.random() * 10;
          return Math.min(prevProgress + diff, 100);
        }
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TopLoadingBar
      className="h-1 bg-purple-500 fixed top-0 left-0 z-50"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default LoadingBar;
