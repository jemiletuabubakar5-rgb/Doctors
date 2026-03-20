// import { Outlet } from "react-router-dom";
// import { TopBar } from "../components/TopBar.jsx";
// import { Sidebar } from "./Sidebar.jsx";
// export default function MainLayout() {
//   return (
//     <div className="h-screen flex flex-col">
//       <TopBar />
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar />

//      <main className="flex-1 overflow-y-auto p-6 mt-3 rounded-t-[20px] rounded-r-[20px] bg-gray-200">
//   <Outlet />
// </main>
//       </div>
//     </div>
//   );
// }


import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar.jsx";
import { Sidebar } from "./Sidebar.jsx";

export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6 mt-3 rounded-t-[20px] rounded-r-[20px] bg-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}