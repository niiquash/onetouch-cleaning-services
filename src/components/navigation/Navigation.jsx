import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="#">home</Link>
        </li>
        <li>
          <Link to="#">about</Link>
        </li>
        <li>
          <Link to="#">testimonials</Link>
        </li>
        <li>
          <Link to="#">services</Link>
        </li>
        <li>
          <Link to="#">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
