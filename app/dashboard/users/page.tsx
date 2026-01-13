import Link from 'next/link'
import React from 'react'

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    age: number;
};

export default async function Users() {
    const res = await fetch('https://dummyjson.com/users/?limit=15');
    
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    
    const data = await res.json();
    const users: User[] = data.users;

    return (
        <main>
            <div><h1>Users dashboard</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {users.map((user) => (
                    <Link 
                        href={`/dashboard/users/${user.id}`} 
                        key={user.id}
                        className="block p-4 border border-gray-700 rounded shadow hover:shadow-lg hover:-translate-y-1 transition"
                    >
                        <div className="flex items-center gap-4">
                            <img 
                                src={user.image} 
                                alt={`${user.firstName} ${user.lastName}`}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h2 className="font-bold text-lg">
                                    {user.firstName} {user.lastName}
                                </h2>
                                <p className="text-sm text-gray-600">{user.email}</p>
                                <p className="text-sm text-gray-500">Age: {user.age}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}