import React from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky';
import image from './img/promgmt.jpg'

const ProMgmt = () => {
  return (
    <div>
      <Sticky>
        {({ style }) => (
          <div style={style} className="sticky">

            <div className="flex h-screen overflow-hidden flex-col sm:flex-row ">
              <div className="w-full sm:w-1/2 bg-strongGrey flex flex-col justify-center p-4 ">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="logo h-10 w-5 md:w-20 lg:w-20 rounded-full bg-strongYellow"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path>
                  </svg>
                </Link>
                <div className="mt-4 text-strongYellow sm:mt-44" >
                  <div>
                    <h1 className="text-2xl sm:text-5xl font-bold mx-2 sm:mx-12">
                      An immersive, techy dashboard for Android
                    </h1>
                  </div>
                  <a href='https://tangerine-puppy-d88d1c.netlify.app/'>
                    <h4 className="text-xl hover:underline sm:text-3xl mx-2 sm:mx-12 my-2 sm:my-5">
                      LINK
                    </h4>
                  </a>
                  <h4 className="text-xl sm:text-3xl mx-2 sm:mx-12 mt-4 sm:mt-12">
                    2022
                  </h4>
                </div>
              </div>
              <div className="overflow-y-auto p-4 w-full sm:w-1/2">
                <h1 className="text-2xl mb-2 font-bold">Summary</h1>
                <div className="text-lg space-y-10 leading-relaxed ">
                  <div className="flow-root ">
                    The ProjectManagementTool is a powerful web application designed to facilitate project management processes. It leverages various technologies such as ReactJS, GraphQL, MongoDB, and Bootstrap5 to provide a comprehensive solution for managing clients and their associated projects.
                  </div>
                  <div className="flow-root">
                    One of the key features of the tool is its seamless display of clients and projects. It allows users to easily view and navigate through client information and their respective projects. This feature provides a clear overview of project details and facilitates efficient project tracking.
                  </div>
                
                  <img src={image} alt='pro'/>
                  <div className="flow-root">
                    The tool also enables effortless updating, deletion, and insertion of client and project information. Users can easily make changes to client profiles or project data, ensuring that the database remains accurate and up to date. This capability enhances data management and helps maintain the integrity of project records.
                  </div>
                  <div className="flow-root">
                    With its user-friendly interface, the ProjectManagementTool simplifies navigation and streamlines workflow. Users can quickly access project details, track progress, and manage tasks, resulting in improved productivity. The intuitive design ensures that users can easily navigate through the tool and perform actions without confusion or unnecessary complexity.
                  </div>
                  <div className="flow-root">
                    By utilizing technologies like ReactJS, GraphQL, MongoDB, and Bootstrap5, the tool delivers a modern and efficient project management solution. ReactJS provides a responsive and interactive user interface, while GraphQL allows for efficient data querying and manipulation. MongoDB serves as a reliable and scalable database system, ensuring the secure storage of project and client information. Bootstrap5 contributes to the tool's overall visual appeal and responsiveness across different devices.
                  </div>
                  <div className="flow-root">
                    In summary, the ProjectManagementTool offers a range of features and technologies that empower users to effectively manage projects and clients. Its seamless display of information, effortless data management capabilities, and user-friendly interface contribute to increased productivity and streamlined workflow. By leveraging the power of ReactJS, GraphQL, MongoDB, and Bootstrap5, this tool provides a comprehensive solution for efficient project management.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Sticky>
    </div>
  );
};

export default ProMgmt;
