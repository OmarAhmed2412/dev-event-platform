import {books} from '../db';

export async function GET() {
    return Response.json(books, {status: 200});
}

export async function POST(req: Request) {
    const book = await req.json();
    books.push(book);
    return Response.json(book, {status: 201});
}

// {
//   "id": 6,
//   "title": "The Hobbit",
//   "author": "J.R.R. Tolkien",
//   "year": 1937,
//   "genre": "Fantasy"
// }
