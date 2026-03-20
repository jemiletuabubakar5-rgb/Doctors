






import { useState } from "react";
import { Link } from "react-router";
import { LuFileCheck } from "react-icons/lu";
import { GrDocumentExcel } from "react-icons/gr";
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
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 hover:bg-gray-100 rounded"
      >
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Approve
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
              Decline
            </button>
            <Link
              to={`/provider/${provider.id}`}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 block"
              onClick={() => setIsOpen(false)}
            >
              View Application
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      
      <div className="mb-6 sm:mb-8 pt-5">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
          Providers
        </h1>
      </div>

     
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Providers List
          </h2>
          <p className="text-sm text-gray-500">1234 Providers</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
          <div className="bg-green-100 rounded-xl p-3 sm:p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1 ">Approved</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">23</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0,">
              <LuFileCheck className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-blue-100 rounded-xl p-3 sm:p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Pending</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">45</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0,">
              <GrDocumentExcel className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-red-100 rounded-xl p-3 sm:p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Suspended</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">23</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0,">
              <LuFileCheck className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-pink-100 rounded-xl p-3 sm:p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600 mb-1">Declined</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">123</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0,">
              <GrDocumentExcel className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="bg-gray-100 rounded-xl p-3 sm:p-4 flex items-center justify-between col-span-2 sm:col-span-1">
            <div>
              <p className="text-xs text-gray-600 mb-1">Deleted</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">20</p>
            </div>
            <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0,">
              <GrDocumentExcel className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className=" justify-between flex ">
    <div></div>

          <div className="flex flex-col md:flex-row md:items-center  gap-4 mb-6">

  {/* LEFT SIDE (Search) */}
  <div className="relative w-full md:w-72">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-800" />
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full pl-10 pr-4 py-2 border border-green-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  </div>

  {/* RIGHT SIDE (Sort + Filter) */}
  <div className="flex items-center gap-3">
    <span className="text-sm text-gray-600 whitespace-nowrap">
      Sort by
    </span>

    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
      <option>Recent</option>
      <option>Name</option>
      <option>Status</option>
    </select>

    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
      <svg
        className="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth={2}
          d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
        />
      </svg>
    </button>
  </div>
</div>
 </div>
      <div className="overflow-x-auto">
  <table className="min-w-[1200px], w-full table-auto">
    <thead>
      <tr className="border-b border-gray-200">
        <th className="text-left py-3 px-4 text-gray-500 whitespace-nowrap">Name</th>
        <th className="text-left py-3 px-4  text-gray-500 whitespace-nowrap">Email</th>
        <th className="text-left py-3 px-4  text-gray-500 text-gray-500whitespace-nowrap">Location</th>
        <th className="text-left py-3 px-4  text-gray-500 whitespace-nowrap">Practice</th>
        <th className="text-left py-3 px-4  text-gray-500 whitespace-nowrap">Signup</th>
        <th className="text-left py-3 px-4   text-gray-500 whitespace-nowrap">Appointments</th>
        <th className="text-left py-3 px-4  text-gray-500  whitespace-nowrap">Rating</th>
        <th className="text-left py-3 px-4   text-gray-500 whitespace-nowrap">Status</th>
        <th className="text-left py-3 px-4  text-gray-500 whitespace-nowrap">Action</th>
      </tr>
    </thead>

    <tbody>
      {providersData.map((provider, index) => (
        <tr key={provider.id} className="border-b border-gray-100 hover:bg-gray-50">
          

          <td className="py-4 px-4 whitespace-nowrap ">
           {index + 1}. <span className="ml-2">{provider.name}</span>
          </td>

          <td className="py-4 px-4 whitespace-nowrap">
            {provider.email}
          </td>

          <td className="py-4 px-4 whitespace-nowrap">
            {provider.location}
          </td>

          <td className="py-4 px-4 whitespace-nowrap">
            {provider.practiceType}
          </td>

          <td className="py-4 px-4 whitespace-nowrap">
            {provider.signupDate}
          </td>

          <td className="py-4 px-4 whitespace-nowrap">
            {provider.appointments}
          </td>

         <td className="py-4 px-4 whitespace-nowrap">
  <div className="flex items-center gap-1">
    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
    {provider.rating}
  </div>
</td>

          <td className="py-4 px-4 whitespace-nowrap">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                provider.status === "Approved"
                  ? "bg-green-100 text-green-700"
                  : provider.status === "Pending"
                  ? "bg-orange-100 text-orange-700"
                  : provider.status === "Suspended"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {provider.status}
            </span>
          </td>

          <td className="py-4 px-4 whitespace-nowrap">
            <ActionMenu provider={provider} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        
        <div className="lg:hidden space-y-4">
          {providersData.map((provider, index) => (
            <div key={provider.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">
                      {index + 1}. {provider.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{provider.email}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    <span className="text-sm text-gray-900">{provider.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      provider.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : provider.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : provider.status === "Suspended"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {provider.status}
                  </span>
                  <ActionMenu provider={provider} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Location:</span>
                  <p className="text-gray-900 font-medium">{provider.location}</p>
                </div>
                <div>
                  <span className="text-gray-500">Practice:</span>
                  <p className="text-gray-900 font-medium">{provider.practiceType}</p>
                </div>
                <div>
                  <span className="text-gray-500">Signup:</span>
                  <p className="text-gray-900 font-medium">{provider.signupDate}</p>
                </div>
                <div>
                  <span className="text-gray-500">Appointments:</span>
                  <p className="text-gray-900 font-medium">{provider.appointments}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-teal-600 text-white rounded font-medium text-sm">
            1
          </button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded font-medium text-sm text-gray-600">
            2
          </button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded font-medium text-sm text-gray-600 hidden sm:block">
            3
          </button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded font-medium text-sm text-gray-600 hidden sm:block">
            4
          </button>
          <span className="px-2 text-gray-600 hidden sm:inline">...</span>
          <button className="w-8 h-8 hover:bg-gray-100 rounded font-medium text-sm text-gray-600 hidden sm:block">
            10
          </button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded font-medium text-sm text-gray-600 hidden sm:block">
            11
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




// import { useState } from "react";
// import { Link } from "react-router";
// import { Search, FileText, MoreVertical, Star } from "lucide-react";

// const providersData = [
//   {
//     id: 1,
//     name: "Elizabeth Hall",
//     email: "elizabethhall@gmail.com",
//     location: "Abuja, Nigeria",
//     practiceType: "Physiotherapist",
//     signupDate: "01 Sep 2025",
//     appointments: 120,
//     rating: 4.5,
//     status: "Suspended",
//   },
//   {
//     id: 2,
//     name: "James John",
//     email: "jamesjohn@gmail.com",
//     location: "Accra, Ghana",
//     practiceType: "Dietician",
//     signupDate: "09 May 2025",
//     appointments: 500,
//     rating: 3.5,
//     status: "Approved",
//   },
//   {
//     id: 3,
//     name: "Ifeola Bitchum",
//     email: "ifeolabitchum@gmail.com",
//     location: "Cairo, Egypt",
//     practiceType: "Gynecologist",
//     signupDate: "09 Jun 2025",
//     appointments: 100,
//     rating: 2.5,
//     status: "Pending",
//   },
// ];

// function ActionMenu({ provider }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-1 hover:bg-gray-100 rounded"
//       >
//         <MoreVertical className="w-5 h-5 text-gray-600" />
//       </button>

//       {isOpen && (
//         <>
//           <div
//             className="fixed inset-0 z-10"
//             onClick={() => setIsOpen(false)}
//           />
//           <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
//             <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-3">
//               <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               Approve
//             </button>

//             <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
//               Decline
//             </button>

//             <Link
//               to={`/provider/${provider.id}`}
//               className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 block"
//               onClick={() => setIsOpen(false)}
//             >
//               View Application
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default function ProvidersPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl font-semibold text-center">Providers</h1>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         {/* TABLE WRAPPER */}
//         <div className="overflow-x-auto">
//           <table className="min-w-[1200px] w-full table-auto">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Name</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Email</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Location</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Practice Type</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Signup Date</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Appointments</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Rating</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Status</th>
//                 <th className="text-left py-3 px-4 whitespace-nowrap">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {providersData.map((provider, index) => (
//                 <tr key={provider.id} className="border-b hover:bg-gray-50">
                  
//                   <td className="py-4 px-4 whitespace-nowrap">
//                     {index + 1}. {provider.name}
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap">
//                     {provider.email}
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap">
//                     {provider.location}
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap">
//                     {provider.practiceType}
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap">
//                     {provider.signupDate}
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap">
//                     {provider.appointments}
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap flex items-center gap-1">
//                     <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
//                     {provider.rating}
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap">
//                     <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
//                       {provider.status}
//                     </span>
//                   </td>

//                   <td className="py-4 px-4 whitespace-nowrap">
//                     <ActionMenu provider={provider} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   );
// }