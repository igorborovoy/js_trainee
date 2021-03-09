import { HTTPRequest } from './httpRequest.js'

export class Pokemon {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.httpService = new HTTPRequest();
  }

  async setImageUrl(url) {
    let data = await this.httpService.getRequest(url);
    this.imageUrl = data.sprites.front_default;
    return this.imageUrl
  }
}