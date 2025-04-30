import React from 'react';
import { Navbar, Sidebar, Card, Button, Footer } from 'flowbite-react';
import CourseCard from '../components/CourseCard';


function MainPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-6 text-2xl font-bold text-blue-600 dark:text-blue-400">Course Manager</div>
        <nav className="flex flex-col p-4 space-y-3 text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Profile</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Settings</a>
        </nav>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <Navbar className="bg-white dark:bg-gray-800 shadow-md">
          <div className="flex justify-between items-center w-full px-6">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
            <Button color="failure" size="sm">Logout</Button>
          </div>
        </Navbar>
        <main className="p-6 flex-1 overflow-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Your Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="React Basics"
              description="Learn the fundamentals of React."
              instructor={{ name: 'Jane Doe', role: 'Instructor', img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg' }}
              status="New"
            />
            <CourseCard
              title="Advanced Tailwind"
              description="Master Tailwind CSS for responsive design."
              instructor={{ name: 'John Smith', role: 'Instructor', img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg' }}
              status="In Progress"
            />
            <CourseCard
              title="Flowbite Components"
              description="Build UI with Flowbite React components."
              instructor={{ name: 'Alice Johnson', role: 'Instructor', img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg' }}
              status="Completed"
            />
          </div>
        </main>
        <Footer className="bg-white dark:bg-gray-800 text-center p-4 text-gray-600 dark:text-gray-400">
          &copy; 2025 Course Manager. All rights reserved.
        </Footer>
      </div>
    </div>
  );
}

export default MainPage;
