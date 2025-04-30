import React from 'react';
import { Button, Label, TextInput, Checkbox } from 'flowbite-react';

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login to Your Account</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email" value="Email address" />
            <TextInput id="email" type="email" placeholder="name@example.com" required={true} />
          </div>
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput id="password" type="password" placeholder="Your password" required={true} />
          </div>
          <div className="flex items-center justify-between">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="ml-2">Remember me</Label>
            <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
