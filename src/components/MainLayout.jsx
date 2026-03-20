import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar.jsx";
import { Sidebar } from "./Sidebar.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Top bar */}
      <TopBar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar />

       <main className="flex-1 overflow-y-auto p-6 w-full">
  <div className="bg-gray-200 rounded-t-2xl rounded-r-[20px] min-h-[100vh] w-full max-w-[1400px] mx-auto">
    <Outlet />
  </div>
</main>

      </div>
    </div>
  );
}