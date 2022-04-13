import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      {/* 
      WE CAN USE MORE PARAMETERS
      <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#hello",
        }}> */}
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
