import {books} from '../../db';
export async function PUT(req: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const updatedBook = await req.json();
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index === -1) {
        return Response.json({message: 'Book not found'}, {status: 404});
    }
    books[index] = {...books[index], ...updatedBook};
    return Response.json(books[index], {status: 200});
}

export async function DELETE(_req: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index === -1) {
        return Response.json({message: 'Book not found'}, {status: 404});
    }
    const deletedBook = books.splice(index, 1)[0];
    return Response.json(deletedBook, {status: 200});
}

export async function GET(_req: Request, context: {params: {id: string}}) {
    const id = context.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if (!book) {
        return Response.json({message: 'Book not found'}, {status: 404});
    }
    return Response.json(book, {status: 200});
}