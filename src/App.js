import "./App.css";
import displayPicture from "./assets/display-picture.jpeg";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedin,
  faSquareTwitter,
  faSquareInstagram,
  faSquareGithub,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="app">
      <section className="image-container">
        <img
          src={displayPicture}
          alt="display picture"
          className="dipslay-picture"
        />
      </section>

      <section className="info">
        <p className="name">Vinay Kangralkar</p>
        <p className="job">Full Stack Developer</p>
        <p className="email">kangralkarvinay@gmail.com</p>

        <div className="buttons">
          <button className="email-button">
            <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
            <p style={{ margin: "0px", backgroundColor: "inherit" }}>Email</p>
          </button>
          <button className="linkedin-button">
            <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
            <p style={{ margin: "0px", backgroundColor: "inherit" }}>
              LinkedIn
            </p>
          </button>
        </div>

        <h4 className="about">About</h4>
        <p className="para">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>

        <h4 className="about">Interests</h4>
        <p className="para">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>

      <section className="socials">
        <FontAwesomeIcon className="socials-icon" icon={faSquareTwitter} />
        <FontAwesomeIcon className="socials-icon" icon={faSquareInstagram} />
        <FontAwesomeIcon className="socials-icon" icon={faSquareFacebook} />
        <FontAwesomeIcon className="socials-icon" icon={faSquareGithub} />
      </section>
    </div>
  );
}

export default App;
