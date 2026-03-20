import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar.jsx";
import { Sidebar } from "./Sidebar.jsx";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <div className="md:hidden p-2">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl px-3 py-1 border rounded"
        >
          ☰
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Sidebar (responsive) */}
        <div
          className={`
            fixed md:static z-50 bg-white h-full
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
            w-64
          `}
        >
          <Sidebar />
        </div>

        {/* Overlay (mobile only when sidebar is open) */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 w-full">
          <div className="bg-gray-200 rounded-t-2xl rounded-r-[20px] min-h-[100vh], w-full max-w-[1400px], mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}