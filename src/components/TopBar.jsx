import { useLocation } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { useState, useEffect } from "react";

export function TopBar({
  userName = "Dr. Samuel Ozeh",
  userRole = "Administrator",
  notificationCount = 1,
  profileImage = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
  onSearch,
  onNotificationsClick,
}) {
  const location = useLocation();

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch?.(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  return (
    <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <span className="text-orange-500 font-bold text-xl md:text-2xl">
          Getreat
        </span>

        <div className="flex flex-col">
          <span className="font-medium text-gray-900 text-sm md:text-base">
            {userName}
          </span>
          <span className="text-xs md:text-sm text-gray-500">
            {userRole}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
        
        {/* Search */}
        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-700" />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-3 py-2 w-full md:w-[250px] bg-green-50 border border-green-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Date + Notifications + Profile */}
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-2 gap-3">
          
          {/* Date (hidden on very small screens) */}
          <span className="hidden sm:inline text-green-600 text-sm font-medium px-2">
            {today}
          </span>

          {/* Notification */}
          <button
            onClick={onNotificationsClick}
            className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src={profileImage}
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}