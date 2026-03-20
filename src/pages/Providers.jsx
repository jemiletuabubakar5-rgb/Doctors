
import { useState } from "react";
import { Link } from "react-router";
import { Check } from "lucide-react";
import { createPortal } from "react-dom";
import { Search, FileText, MoreVertical, Star } from "lucide-react";

const providersData = [
  {
    id: 1,
    name: "Elizabeth Hall",
    email: "elizabethhall@gmail.com",
    location: "Abuja, Nigeria",
    practiceType: "Physiotherapist",
    signupDate: "01 Sep 2025",
    appointments: 120,
    rating: 4.5,
    status: "Suspended",
  },
  {
    id: 2,
    name: "James John",
    email: "jamesjohn@gmail.com",
    location: "Accra, Ghana",
    practiceType: "Dietician",
    signupDate: "09 May 2025",
    appointments: 500,
    rating: 3.5,
    status: "Approved",
  },
  {
    id: 3,
    name: "Ifeola Bitchum",
    email: "ifeolabitchum@gmail.com",
    location: "Cairo, Egypt",
    practiceType: "Gynecologist",
    signupDate: "09 Jun 2025",
    appointments: 100,
    rating: 2.5,
    status: "Pending",
  },
  {
    id: 4,
    name: "Ifeola Bitchum",
    email: "ifeolabitchum@gmail.com",
    location: "Abuja, Nigeria",
    practiceType: "Gynecologist",
    signupDate: "09 Oct 2025",
    appointments: 100,
    rating: 2.5,
    status: "Declined",
  },
  {
    id: 5,
    name: "James John",
    email: "jamesjohn@gmail.com",
    location: "Abuja, Nigeria",
    practiceType: "Dietician",
    signupDate: "09 Jun 2025",
    appointments: 500,
    rating: 3.5,
    status: "Approved",
  },
];



function ActionMenu({ provider }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-1 hover:bg-gray-100 rounded"
      >
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>

      {/* Modal */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[999], flex items-center justify-center">
            
            {/* Background */}
            <div
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative z-[1000], w-72 bg-white rounded-xl shadow-lg p-5">
              
              <h3 className="text-lg font-semibold mb-4">
                Actions
              </h3>
               

             <div className="flex">
                <Check className="w-8 h-8 text-green-600" />
               <div>
                   <button className="w-full px-4 py-2 text-left text-bold hover:bg-gray-100 rounded flex items-center gap-2">
              <span>Approve</span>
               </button>

              <button className="w-full px-4 py-2 text-left text-bold hover:bg-gray-100 rounded">
                Decline
              </button>

                  <Link
                to={`/provider/${provider.id}`}
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 px-4 py-2 text-center text-bold"
              >
                View Application
              </Link>
               </div>
             </div>

            </div>
          </div>,
          document.body
        )}
    </>
  );
}
export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
    
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          Providers
        </h1>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-8 ">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Providers List
          </h2>
          <p className="text-sm text-gray-500">1234 Providers</p>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-green-100 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Approved</p>
              <p className="text-2xl font-semibold text-gray-900">23</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-blue-100 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Pending</p>
              <p className="text-2xl font-semibold text-gray-900">45</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-red-100 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Suspended</p>
              <p className="text-2xl font-semibold text-gray-900">23</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-pink-100 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Declined</p>
              <p className="text-2xl font-semibold text-gray-900">123</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Deleted</p>
              <p className="text-2xl font-semibold text-gray-900">20</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative ml-150">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-800" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-60 pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by</span>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Recent</option>
              <option>Name</option>
              <option>Status</option>
            </select>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
            </button>
          </div>
        </div> 

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">
             <input type="checkbox" className="rounded" />
             </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Location
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Practice Type
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Signup Date
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Appointment
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Ratings
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {providersData.map((provider, index) => (
                <tr key={provider.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">
                    {index + 1}
                  </td>

                  <td className="py-4 px-4 text-sm font-medium text-gray-900">
                    {provider.name}
                  </td>

                  <td className="py-4 px-4 text-sm text-gray-600">
                    {provider.email}
                  </td>

                  <td className="py-4 px-4 text-sm text-gray-600">
                    {provider.location}
                  </td>

                  <td className="py-4 px-4 text-sm text-gray-600">
                    {provider.practiceType}
                  </td>

                  <td className="py-4 px-4 text-sm text-gray-600">
                    {provider.signupDate}
                  </td>

                  <td className="py-4 px-4 text-sm text-gray-600">
                    {provider.appointments}
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                      <span className="text-sm text-gray-900">
                        {provider.rating}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      provider.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : provider.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : provider.status === "Suspended"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {provider.status}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <ActionMenu provider={provider} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 h-100">
  <button className="p-2 hover:bg-gray-100 rounded">
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <button className="w-8 h-8 bg-teal-600 text-white rounded text-sm font-medium">
    1
  </button>

  <button className="w-8 h-8 hover:bg-gray-100 rounded text-sm text-gray-600">
    2
  </button>

  <button className="w-8 h-8 hover:bg-gray-100 rounded text-sm text-gray-600">
    3
  </button>

  <button className="w-8 h-8 hover:bg-gray-100 rounded text-sm text-gray-600">
    4
  </button>

  <span className="px-2 text-gray-600">...</span>

  <button className="w-8 h-8 hover:bg-gray-100 rounded text-sm text-gray-600">
    10
  </button>

  <button className="p-2 hover:bg-gray-100 rounded">
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
      </div>

    </div>
  );
}


