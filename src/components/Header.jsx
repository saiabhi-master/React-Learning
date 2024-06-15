import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ['fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)]
  
    return (
      <header className="text-center my-4">
          <img src={reactImg} alt="Stylized atom" className="img-fluid"/>
          <h1 className="display-4 gradient-text">React Essentials</h1>
          <p className="lead text-muted">
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }
  
