
import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <HomePage /> */}
    </Router>
  );
}

export default App;
