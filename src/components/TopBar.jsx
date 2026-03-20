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
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">

     
      <div className="flex items-center gap-4">
        <span className="text-orange-500 font-bold text-2xl">
          Getreat
        </span>

        <div className="flex flex-col ml-25">
          <span className="font-medium text-gray-900">
            {userName}
          </span>
          <span className="text-sm text-gray-500">
            {userRole}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-700" />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-4 py-3 w-[250px], bg-green-50 border border-green-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

     
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-2 gap-4">

    
          <span className="text-green-600 text-base font-medium px-2">
            {today}
          </span>

        
          <button
            onClick={onNotificationsClick}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <Bell className="h-8 w-8 text-gray-600" />

          
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

     
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
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