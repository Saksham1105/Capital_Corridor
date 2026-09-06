export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    
    // SPA Fallback: If status is 404 or path has no extension, fallback to index.html
    if (response.status === 404) {
      const url = new URL(request.url);
      if (!url.pathname.includes(".")) {
        return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
      }
    }
    
    return response;
  }
};
