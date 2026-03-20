

import { Link } from "react-router";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { ArrowLeft, MoreVertical, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg"
      >
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10 "
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20 ">
            <button className="w-full px-4 py-3 text-left text-base text-gray-700 hover:bg-gray-50 flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Approve
            </button>
            <button className="w-full px-4 py-3 text-left text-base text-gray-700 hover:bg-gray-50">
              Reject
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default function ProviderDetailPage() {
  return (
    <div>
    <div className="relative mb-8 flex items-center ">

 
  <Link
    to="/"
    className="p-2 hover:bg-white rounded-lg transition-colors z-10"
  >
    <ChevronLeft className="w-8 h-8 text-gray-900" />
  </Link>

 
  <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold text-gray-900">
    Providers
  </h1>

</div>

      <div className="bg-white rounded-2xl shadow-sm p-8 ">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Provider's Application
        </h2>

    
            <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-200">

  {/* LEFT SIDE */}
  <div className="flex items-center gap-5 flex-1">
    
    {/* Avatar */}
    <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden flex-shrink-0,">
      <img
        src="https://via.placeholder.com/80"
        alt="Provider"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex flex-1 items-center justify-between gap-8 p-6 bg-white rounded-xl">

      <div className="flex flex-col">
        <h4 className="text-xl font-bold text-gray-900">
          Dr. Victor Eyo Bassey
        </h4>
        <p className="text-base text-gray-500">
          victoreyo@gmail.com
        </p>
      </div>

      {/* Middle Info */}
      <div className="flex items-center gap-6 text-base text-gray-700">
        <span className="font-medium">Physiotherapist</span>

        <span className="text-gray-300">|</span>

        <div className="flex flex-col">
          <span className="text-gray-500">Application Date</span>
          <span className="font-semibold text-gray-800">
            02/06/2025
          </span>
        </div>
      </div>

      {/* Status */}
      <div>
        <span className="px-4 py-2 text-sm font-semibold bg-orange-100 text-orange-700 rounded-full">
          Pending
        </span>
      </div>

    </div>
  </div>

  <div className="flex items-center gap-3 ml-6">
    <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 flex items-center gap-2">
      <MessageSquare className="w-4 h-4" />
      Message
    </button>
    <ActionMenu />
  </div>

</div>

        <div className="space-y-6  px-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value="Victor Eyo Bassey"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value="victoreyo@gmail.com"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value="+44"
                readOnly
                className="w-24 px-4 py-2 border border-gray-300 rounded-lg bg-teal-600 text-white font-medium"
              />
              <input
                type="text"
                value="07012344556657"
                readOnly
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
              />
            </div>
          </div>

          {/* Gender and Date of Birth */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <input
                type="text"
                value="Male"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="text"
                value="02/20/2023"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
              />
            </div>
          </div>

          {/* Years of Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience
            </label>
            <input
              type="text"
              value="5"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              rows={4}
              readOnly
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor dolor eius sit, consilis, sed ullamcorper eget. Nullam blanditiis quam a odio ultricies, in pharetra nulla ornare. Vestibulum ex diam id turpis sagittis elementum. Aliquam urna at dictum vestibulum, turpis justo malesuada tortor, nisl venenatis id sapien eget dolor."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              value="India"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* State/Province */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State/Province
            </label>
            <input
              type="text"
              value="Kerala"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              value="234 Aman Kapoor Palace, Vishnu Crescent, Kerala"
              readOnly
              className="w-full px-4 py-10 pt-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
            />
          </div>

          {/* Credentials */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Credentials
            </h3>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                      Document Type
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                      File
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-900">
                        Higher Institution Certificate
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-sm text-teal-600 hover:text-teal-700">
                        View Document
                      </button>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                        Submitted
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                      <button className="w-8 h-8 bg-red-500 rounded flex items-center justify-center hover:bg-red-600">
  <FaThumbsDown className="w-4 h-4 text-white" />
</button>

<button className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center hover:bg-teal-700">
  <FaThumbsUp className="w-4 h-4 text-white" />
</button>          
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-900">
                        NYSC Certificate/ Exemption Letter
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-sm text-teal-600 hover:text-teal-700">
                        View Document
                      </button>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                        Submitted
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                     <button className="w-8 h-8 bg-red-500 rounded flex items-center justify-center hover:bg-red-600">
  <FaThumbsDown className="w-4 h-4 text-white" />
</button>

<button className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center hover:bg-teal-700">
  <FaThumbsUp className="w-4 h-4 text-white" />
</button>  
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-900">
                        Medical License
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-500">Not Uploaded</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        Missing
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="px-3 py-1 bg-teal-600 text-white rounded text-xs font-medium hover:bg-teal-700">
                        Request Upload
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
