import "./App.css";
import Navbar from "./Components/Navbar";
import BlogDetails from "./Components/BlogDetails";
import Notfound from "./Components/Notfound";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Router path="/blogs/:id">
              <BlogDetails />
            </Router>
            <Router path="*">
              <Notfound />
            </Router>
          </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
