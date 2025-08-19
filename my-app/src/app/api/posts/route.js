export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the API route!' });
}

// get api

export async function GET(request) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
