import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar";
import "./App.css";


function App() {
  let links = [
    {
        name: "Homepage",
        href: "#",
        color: "green"
    },
    {
        name: "Projects",
        href: "#",
        color: "red"
    },
    {
        name: "CV",
        href: "#",
        color: "orange"
    },
    {
        name: "Send me a project!",
        href: "#",
        color: "blue"
    },
    {
        name: "About me",
        href: "#",
        color: "purple"
    },
]
  return (
    <div>
      <Navbar links={links}/> <HelloWorld />{" "}
    </div>
  );
}

export default App;
