import "./App.css";
import qrCode from "../src/images/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <div className="card">
          <div className="qr-container">
            <img src={qrCode} />
          </div>
          <div className="bold-title">
            <h3>Improve your front-end skills by building projects</h3>
          </div>
          <div className="subtext">
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/RenMari5/">Ren Paczkowski</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
