import React from 'react';
import '../App.css';
import Card from '../components/Card';
import Card1 from '../components/Card1';
import Workflowcard from '../components/WorkflowCard'
import Icons from '../components/Icons';
import { Transition } from '@headlessui/react';

const Home = ({ showCards }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-skin">
      <div className="max-w-7xl mx-auto relative">
        <div className='lg:pr-24'>

          <h1 className="text-3xl sticky sm:text-4xl md:p-32 md:text-5xl lg:text-6xl  font-bold md:mb-0">
            <span className="bg-black text-white px-2">
              Aniketh Shetty
            </span>{' '}
            is a full-stack engineer and maker of digital tools and toys
          </h1>
        </div>

        <div className='relative'>
          <Icons />

        <div className="grid grid-cols-3 place-items-start ">

          <Transition
            show={showCards.card1}
            enter="transition-all duration-500 ease-out"
            enterFrom="-translate-y-full opacity-0"
            enterTo="card"
            className="rotate-12 hover:z-10"
          >
            <Card />
          </Transition>
          <Transition
            show={showCards.card2}
            enter="transition-all duration-500 ease-out"
            enterFrom="-translate-y-full opacity-0"
            enterTo="card1"
            className="-rotate-12 hover:z-10"
          >
            <Card1 />
          </Transition>
          <Transition
            show={showCards.card3}
            enter="transition-all duration-500 ease-out"
            enterFrom="-translate-y-full opacity-0"
            enterTo="card2"
            className="-rotate-12  hover:z-10"
          >
            <Workflowcard />
          </Transition>

        </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
