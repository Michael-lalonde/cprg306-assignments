'use client';

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-black">Shopping List App</h1>
      
      {!user ? (
        <div>
          <p className="mb-4 text-black">Please sign in to access your shopping list.</p>
          <button
            onClick={gitHubSignIn}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-2 text-black">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="flex gap-4 mt-4">
            <Link 
              href="/week-10/shopping-list"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={firebaseSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}