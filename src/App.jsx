import "./App.css";
import DesTrigun from "./components/DesTrigun/DesTrigun.jsx";
import Background from "./components/Backgroud/Background.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DesTrigun />
      <Background />
    </div>
  );
}

export default App;
