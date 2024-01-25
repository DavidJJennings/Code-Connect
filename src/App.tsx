import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
