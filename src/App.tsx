import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />}></Route>

          <Route
            path="home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
