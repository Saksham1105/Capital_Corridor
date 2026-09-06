export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);
    
    // SPA Fallback: If 404 and no file extension in path, serve index.html directly
    if (response.status === 404 && !url.pathname.includes(".")) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), {
        headers: request.headers,
        method: "GET"
      }));
    }
    
    return response;
  }
};
