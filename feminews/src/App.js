import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutLanding from "./components/Layout/LayoutLanding";
import LayoutDash from "./components/LayoutDashboard/LayoutDash";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import "./sass/index.scss";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLanding />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="/login" element={<LayoutLanding />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/news" element={<LayoutDash />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
