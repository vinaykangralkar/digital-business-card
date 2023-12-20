import "./App.css";
import displayPicture from "./assets/display-picture.jpeg";

function App() {
  return (
    <div className="app">
      {/* <div className="card-container"> */}
      <div className="image-container">
        <img
          src={displayPicture}
          alt="display picture"
          className="dipslay-picture"
        />
      </div>
      <div className="info"></div>
      <div className="socials"></div>
      {/* </div> */}
    </div>
  );
}

export default App;
