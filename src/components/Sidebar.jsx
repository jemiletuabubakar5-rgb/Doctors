

import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  UserSquare,
  RefreshCw,
  UserCog,
  Bell,
  FileText,
  CreditCard,
  Headphones,
  Settings
} from "lucide-react";

const menuItems = [
  { icon: LayoutGrid, label: "Overview", path: "/dashboard" },
  { icon: Users, label: "Providers", path: "/providers" },
  { icon: UserSquare, label: "Patients", path: "/patients" },
  { icon: RefreshCw, label: "Service Update", path: "/service-update" },
  { icon: UserCog, label: "Admins", path: "/admins" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: CreditCard, label: "Transactions", path: "/transactions" },
  { icon: Headphones, label: "Support", path: "/support" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

function MenuItem({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
        ${isActive
          ? "bg-[#2a3544] text-white"
          : "text-gray-400 hover:text-white hover:bg-[#2a3544]"}
      `}
    >
      <Icon size={18} className={isActive ? "text-white" : "text-gray-400"} />
      <span>{label}</span>
    </button>
  );
}

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-[200px], bg-[#1a2332] min-h-screen flex flex-col py-6 px-4 rounded-tr-2xl rounded-br-3xl rounded-l-2xl shadow-lg m-2">
      
      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-1">
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(item.path));

          return (
            <MenuItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              isActive={isActive}
              onClick={() => navigate(item.path)}
            />
          );
        })}
      </nav>

    </div>
  );
}