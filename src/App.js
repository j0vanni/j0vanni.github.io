import "./App.css";
import React from "react";
import heyitsme from "./img/img.jpg";
import reactimg from "./img/react.png";
import javaimg from "./img/java.jpg";
import javascriptimg from "./img/javascript.png";
import pythonimg from "./img/python.png";

const Experience = [
  {
    job: "Mets - Citi Field",
    jobtitle: "Guest Experience",
    jobyear: "2017-2019",
    jobdescription:
      "Working for the Mets may not have lead to a lot of technical opportunities but it has lead me to learn different skills that could be applied to other environments. I learned to: ",
    joblist: [
      "work in a fast paced environment",
      "interact with thousands on a daily basis",
      "handle different situations under pressure",
      "work not just as a team but as a family",
    ],
  },
  {
    job: "CodeNow - Workshop",
    jobtitle: "Intern",
    jobyear: "2015-2016",
    jobdescription:
      "This was a workshop that I attended during high school that really helped introduce coding and a coding language that I haven't heard of. I learned:",
    joblist: [
      "the basics of programming",
      "what Ruby on Rails is and how to use it",
      "modify and experiment with the code to make it work like we want it to",
    ],
  },
];

const Projects = [
  {
    projectname: "Programming Language Concepts - CSCI 318 - Semester Project",
    projectdescription:
      "As a group we created an application using React Native. I worked on getting a profile, home, and login screen. With the login I used Expo Authentication with FireBase to keep track of the users. This allowed for a seamless Google login for the users. This would apply to the user's profile picture and name.",
    projectlist: [
      "used React Native and JavaScript for the first time",
      "used Google Sign-in for the application",
      "created a basic feed using json",
      "created a profile screen based on the user's Google account information",
    ],
  },
  {
    projectname: "Websites - (including this one)",
    projectdescription:
      "I created this website after the project above, as I wanted to see what the differences were between React and React Native and to also update my website to make it easier for me to add information as I go along.",
    projectlist: [
      "created mini-projects that would use JavaScript to interact with the user",
      "learned how to use APIs at a basic level",
      "allows me to maintain the website better than the previous one which was made solely off of html",
    ],
  },
];

const LanguageList = [
  {
    picture: javascriptimg,
    name: "JavaScript",
  },
  {
    picture: reactimg,
    name: "React & React Native",
  },
  {
    picture: javaimg,
    name: "Java",
  },
  {
    picture: pythonimg,
    name: "Python",
  },
];

function ListThisExperience() {
  return (
    <div>
      {Experience.map((item) => (
        <div style={{ marginLeft: "15px" }}>
          <div style={{ lineHeight: "5px" }}>
            <h2>{item.job}</h2>
            <div style={{ display: "flex" }}>
              <h5 style={{ marginTop: "0px", marginRight: "10px" }}>
                {item.jobtitle}
              </h5>
              <h6 style={{ marginTop: "0px" }}>{item.jobyear}</h6>
            </div>
            <div
              style={{
                marginTop: "0px",
                marginLeft: "15px",
                lineHeight: "20px",
              }}
            >
              {item.jobdescription}
            </div>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "15px" }}>
            {item.joblist.map((otheritem) => (
              <li>{otheritem}</li>
            ))}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

function ListThisProjects() {
  return (
    <div>
      {Projects.map((item) => (
        <div style={{ marginLeft: "15px" }}>
          <div style={{ lineHeight: "5px" }}>
            <h2>{item.projectname}</h2>
            <div
              style={{
                marginTop: "0px",
                marginLeft: "15px",
                lineHeight: "20px",
              }}
            >
              {item.projectdescription}
            </div>
            <div
              style={{
                marginTop: "10px",
                marginLeft: "15px",
                lineHeight: "22px",
              }}
            >
              {item.projectlist.map((otheritem) => (
                <li>{otheritem}</li>
              ))}
            </div>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}

function Languages(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "15px",
        marginLeft: "15px",
      }}
    >
      <img
        alt=""
        src={props.image}
        width={50}
        height={50}
        style={{ marginRight: "15px" }}
      />
      <p>{props.children}</p>
    </div>
  );
}

function PopUP(props) {
  const color = "#464341";
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        marginTop: "250px",
        marginLeft: `${props.mL}px`,
        overflow: "hidden",
        opacity: `${props.opacity}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            borderRadius: "15px",
            backgroundColor: color,
            marginBottom: "-10px",
          }}
        >
          solanojovanni@gmail.com
        </p>
        <p
          style={{
            borderRadius: "15px",
            backgroundColor: color,
            marginBottom: "-10px",
          }}
        >
          jsolan06@nyit.edu
        </p>{" "}
        <p
          style={{
            borderRadius: "15px",
            backgroundColor: color,
          }}
        >
          347-956-6482
        </p>{" "}
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      opacity: 1,
      opacity2: 0,
      clicked: false,
    };
  }

  hoveredOver = () => {
    this.setState({ opacity: 0.6, opacity2: 1 });
  };

  hoveredGone = () => {
    if (this.state.clicked === false)
      this.setState({ opacity: 1, opacity2: 0 });
    console.log("hovered over");
  };

  clickOn = () => {
    if (this.state.clicked === false) {
      console.log("clicked");
      this.setState({ opacity: 0.6, opacity2: 1, clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  };

  render() {
    return (
      <div>
        <div className="topBarContainer">
          <div
            className="cropThis"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt=""
              src={heyitsme}
              className="imageCropped"
              onMouseEnter={this.hoveredOver}
              onMouseLeave={this.hoveredGone}
              onClick={this.clickOn}
              style={{ opacity: this.state.opacity }}
            />
            <PopUP mL="25" opacity={this.state.opacity2} />
            <div style={{ color: "white" }}>
              <h1>Jovanni Solano</h1>
              <p>Junior at the New York Institute of Technology</p>
              <p style={{ color: "#2c2c2c" }}>
                click on my picture to see my contact information
              </p>
            </div>
          </div>
          <hr></hr>
        </div>{" "}
        <div style={{ color: "white", marginLeft: "35px" }}>
          <div>
            <h1>About me</h1>
            <p>
              Hi my name is Jovanni. I'm in my third year of college at NYIT
              majoring in Computer Science.
            </p>
          </div>
          <br />
          <div>
            <h1>Languages I Know</h1>
            {LanguageList.map((item) => (
              <Languages image={item.picture}>{item.name}</Languages>
            ))}
          </div>
          <br />
          <div>
            <h1>Experience</h1>
            <ListThisExperience />
          </div>
          <br />
          <div>
            <h1>Projects</h1>
            <ListThisProjects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
