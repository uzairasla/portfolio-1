import React from "react";
import amazonproject from "../images/amazon.PNG";
import netflixproject from "../images/netflix.PNG";
import todoapp from "../images/todoapp.PNG";
import Projects from "./Projects";
import Chip from "@material-ui/core/Chip";
import realestate from "../images/realestate.PNG";
import ecommerce from "../images/ecommerce.PNG";
import ContactUs from "./ContactUs";

function ProjectHelper() {
  return (
    <div className="d-flex justify-content-between flex-wrap" id="projects">
      <Projects
        projectImg={amazonproject}
        projectTitle="Amazon Clone"
        githubLink="https://github.com/uzairasla/amazon-clone-redux"
        projectLink="https://peaceful-cori-b414d8.netlify.app/"
      >
        <Chip
          label="Redux"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Firebase"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Bootstrap"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Authentication"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Firestore - No SQL DB"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
      </Projects>

      <Projects
        projectImg={netflixproject}
        projectTitle="Movie Search Engine"
        githubLink="https://github.com/uzairasla/MovieDB"
        projectLink="https://peaceful-franklin-4c62b8.netlify.app/"
      >
        <Chip
          label="Omdb Api"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Props"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Axios"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Api Calling"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
      </Projects>
      <Projects
        projectImg={todoapp}
        projectTitle="Todo Crud Application"
        githubLink="https://github.com/uzairasla/todo-crud-app"
        projectLink="https://nervous-cori-de45a2.netlify.app/"
      >
        <Chip
          label="Props"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Mapping"
          variant="outlined"
          color="primary"
          className="mr-1"
        />

        <Chip
          label="ES6 Features"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
      </Projects>
      <Projects
        projectImg={realestate}
        projectTitle="Real Estate Project"
        githubLink="https://github.com/uzairasla/real-estate"
        projectLink="https://elegant-aryabhata-6bc884.netlify.app/"
      >
        <Chip
          label="Props"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Mapping"
          variant="outlined"
          color="primary"
          className="mr-1"
        />

        <Chip
          label="Custom Advance CSS"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Font Awesome"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
      </Projects>
      <Projects
        projectImg={ecommerce}
        projectTitle="Laptop Store"
        githubLink="https://github.com/uzairasla/Ecommerce-ReactContextAPI"
        projectLink="https://jolly-hawking-8601be.netlify.app/"
      >
        <Chip
          label="Context API"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="ES6 Features"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
        <Chip
          label="Bootstrap"
          variant="outlined"
          color="primary"
          className="mr-1"
        />
      </Projects>
    </div>
  );
}

export default ProjectHelper;
