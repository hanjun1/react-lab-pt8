import logo from "./logo.svg";
import "./App.css";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <div className="App outline">
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
