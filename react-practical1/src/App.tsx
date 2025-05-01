import "./App.css";
import profile from "../public/profile.png";

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <img src={profile} alt="Kanya Bhatt" className="profile-pic" />
        <h1>🌟 Hello, I'm Hetal Desai</h1>
        <p className="subtitle">🚀 Intern @ Simform Solutions</p>

        <div className="section">
          <h2>🧠 About Me</h2>
          <p>
            Passionate frontend developer on a mission to craft beautiful and
            functional UIs. This React app is my first step towards building
            amazing digital experiences.
          </p>
        </div>

        <div className="section">
          <h2>📬 Contact</h2>
          <p>
            ✉️{" "}
            <a href="mailto:kanya.bhatt@simformsolutions.com">
              hetal.desai@simformsolutions.com
            </a>
          </p>
          <p>
            💻{" "}
            <a
              href="https://github.com/Hetal9Desai"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Hetal9Desai
            </a>
          </p>
        </div>

        <footer>✨ Made with 💖 React</footer>
      </div>
    </div>
  );
}

export default App;
