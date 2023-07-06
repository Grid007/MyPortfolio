import React from 'react';
import githubIcon from './icons/github.svg';
import linkedIcon from './icons/linkedin.svg';
import cvIcon from './icons/profile-line.svg';

const Icons = () => {
  return (
    <div className="flex space-x-10 mt-24 justify-center md:-my-20 md:place-content-evenly md:items-stretch sm:p-12">
      <a
        href="https://github.com/Grid007"
        className="flex flex-col items-center text-center text-sm"
      >
        <img src={githubIcon} alt="GitHub" className="h-10 w-10" />
        <span className="mt-1">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/aniketh-shetty-aabb9227b/"
        className="flex flex-col items-center text-center text-sm"
      >
        <img src={linkedIcon} alt="LinkedIn" className="h-10 w-10" />
        <span className="mt-1">LinkedIn</span>
      </a>

      <a href="https://read.cv/grid007" className="flex flex-col items-center text-center text-sm">
        <img src={cvIcon} alt="CV" className="h-10 w-10" />
        <span className="mt-1">Read.cv</span>
      </a>
    </div>
  );
};

export default Icons;
