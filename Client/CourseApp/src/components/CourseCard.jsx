import React from 'react';
import { Card, Avatar, Badge, Button } from 'flowbite-react';

function CourseCard({ title, description }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />
        <Badge color="info">New</Badge>
        <Button size="sm">View</Button>
      </div>
    </Card>
  );
}

export default CourseCard