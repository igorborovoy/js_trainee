
export class HTTPRequest {
  async getRequest(url) {
    let response = await fetch(url, { method: 'GET' });
    let data = await response.json();
    return data;
  }
}