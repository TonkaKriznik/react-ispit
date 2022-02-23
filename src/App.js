import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import GithubSearchApp from "./containers/GithubSearchApp";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route
            path='/'
            element={<Navigate replace to='/app' />}
          />
          <Route path='/app' element={<GithubSearchApp />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
