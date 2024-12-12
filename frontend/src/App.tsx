import Navbar from "./components/Home/Navbar";
import Search from "./components/Home/Search";
import Error from "./components/Home/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-custom-gradient">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route
            path="/error"
            element={
              <>
                <Search />
                <Error />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
