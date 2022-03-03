import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <h1>404 Page Notfound</h1>
      <p>
        Back To Home <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Notfound;
