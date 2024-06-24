import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Booked from "./components/pages/Booked";
import Error from "./components/pages/Error";
import Booking from "./components/pages/Booking";
import Avail from "./components/pages/Avail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/booked" element={<Booked />} />
          <Route path="/available" element={<Avail />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
