import React from 'react';
import { Avatar,  Button } from 'flowbite-react';

function UserProfile() {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded={true} size="xl" />
        <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Jane Doe</h2>
        <p className="text-gray-600 dark:text-gray-300">Instructor</p>
        <Button className="mt-4">Edit Profile</Button>
      </div>
    );
  }


  export default UserProfile