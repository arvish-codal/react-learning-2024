import {comments} from "./data"

export async function GET() {
    return Response.json(comments);
}

// Every route handler function receives the standard web request object as a parameter.
export async function POST(request: Request) {
    const comment = await request.json()
    console.log(comment)
    const newcomment = {
        id: comments.length + 1,
        text: comment.text
    }

    comments.push(newcomment)
    return new Response(JSON.stringify(newcomment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    })

}