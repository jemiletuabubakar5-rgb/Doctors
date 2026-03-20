

import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Providers from "./pages/Providers";
import { TopBar } from "./components/TopBar";
import DoctorProfile from "./pages/DoctorProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="providers" element={<Providers />} />
        <Route path="doctor-profile" element={<DoctorProfile />} />
        <Route path="provider/:id" element={<DoctorProfile />} />
        <Route path="TopBar" element={<TopBar/>} />
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;