import logo from "./logo.svg";
import "./Enter.css";
import { Link } from "react-router-dom"

function EnterPage() {
  return (
    <div className="Enter">
      <header className="Enter-header">
        <img src={logo} className="Enter-logo" alt="logo" />
        <p>Shop REACT_WFT</p>
        <a className="Enter-link" target="_blank" rel="noopener noreferrer">
          <Link to="./HomeScreen"><button>Enter Here</button></Link>
        </a>
      </header>
    </div>
  );
}

export default EnterPage;
