import Link from "next/link";

interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    genre: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Books() {
    const res = await fetch(API_URL!, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch books');
    }
    const data = await res.json();
    const books: Book[] = data;

    return (
        <main>
            <div><h1>Books dashboard</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {books.map((book) => (
                    <Link
                        href={`/dashboard/books/${book.id}`}
                        key={book.id}
                        className="block p-4 border border-gray-700 rounded shadow hover:shadow-lg hover:-translate-y-1 transition"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-sky-500"/>
                            <div>
                                <h2 className="font-bold text-lg">
                                    {book.title} by <span className="text-gray-600">{book.author}</span>
                                </h2>
                                <p className="text-sm text-gray-600">{book.year}</p>
                                <p className="text-sm text-gray-500">Genre: {book.genre}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
