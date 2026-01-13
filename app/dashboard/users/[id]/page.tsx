import {User} from '@/app/dashboard/users/page';
export default async function UserDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    const user: User = data;
    return (
        <> 
        <main className="p-6">
            <div><h1>User Details</h1></div>
            <div className="max-w-md mx-auto bg-black border border-gray-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg hover:-translate-y-1 transition">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img 
                            className="h-48 w-full object-cover md:h-full md:w-48"
                            src={`${user.image}`}
                            alt={`${user.firstName} ${user.lastName}`}
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {user.firstName} {user.lastName}
                        </div>
                        <p className="mt-2 text-gray-500">Email: {user.email}</p>
                        <p className="mt-2 text-gray-500">Age: {user.age}</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
