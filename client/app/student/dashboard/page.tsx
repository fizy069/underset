"use client";
import React, { useState } from 'react';
import { 
  HomeIcon, 
  BriefcaseIcon, 
  UserIcon, 
  SettingsIcon, 
  BellIcon, 
  LogOutIcon, 
  PersonStandingIcon 
} from 'lucide-react';

const jobsData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    salary: '$95,000 - $120,000'
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Data Insights Corp',
    location: 'New York, NY', 
    salary: '$75,000 - $95,000'
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'Digital Solutions LLC',
    location: 'Remote',
    salary: '$110,000 - $140,000'
  }
];

const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="w-64 bg-gray-100 h-screen p-4 border-r">
    <div className="text-2xl font-bold mb-8 text-center">
      Campus Placement
    </div>
    <nav>
      <ul>
        <li 
          className={`flex items-center p-3 cursor-pointer ${activeTab === 'home' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`}
          onClick={() => setActiveTab('home')}
        >
          <HomeIcon className="mr-3" /> Home
        </li>
        <li 
          className={`flex items-center p-3 cursor-pointer ${activeTab === 'jobs' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`}
          onClick={() => setActiveTab('jobs')}
        >
          <BriefcaseIcon className="mr-3" /> Job Profiles
        </li>
        <li 
          className={`flex items-center p-3 cursor-pointer ${activeTab === 'profile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`}
          onClick={() => setActiveTab('profile')}
        >
          <UserIcon className="mr-3" /> My Profile
        </li>
      </ul>
    </nav>
  </div>
);

const Navbar = ({ activeTab, toggleUserMenu, isUserMenuOpen }) => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
    <div className="text-xl font-semibold capitalize">
      {activeTab} 
    </div>
    <div className="flex items-center space-x-4">
      <SettingsIcon className="cursor-pointer text-gray-600 hover:text-gray-800" />
      <BellIcon className="cursor-pointer text-gray-600 hover:text-gray-800" />
      <div className="relative">
        <UserIcon 
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={toggleUserMenu}
        />
        {isUserMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
            <ul>
              <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                <PersonStandingIcon className="mr-2" /> View Profile
              </li>
              <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer text-red-500">
                <LogOutIcon className="mr-2" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </nav>
);

const JobCard = ({ job }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
    <p className="text-gray-600 mb-1">{job.company}</p>
    <p className="text-gray-500 mb-3">{job.location}</p>
    <div className="flex justify-between items-center">
      <span className="text-green-600 font-semibold">{job.salary}</span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  </div>
);

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1">
        <Navbar 
          activeTab={activeTab} 
          toggleUserMenu={toggleUserMenu}
          isUserMenuOpen={isUserMenuOpen}
        />
        <main className="p-6 bg-gray-50 min-h-screen">
          {activeTab === 'home' && (
            <div>
              <h1 className="text-3xl font-bold mb-6">Welcome, Student!</h1>
              <p>Here's a quick overview of your placement journey.</p>
            </div>
          )}
          {activeTab === 'jobs' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Available Job Profiles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobsData.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          )}
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">My Profile</h2>
              <p>Profile details will be shown here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;