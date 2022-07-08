import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AddToFavouritesInput } from '../dto/add-to-favourite.dto';
import { RemoveFromFavouritesInput } from '../dto/remove-from-favourite.dto';

@Injectable()
export class FavouritesService {
  private microServer = null;
  constructor() {
    this.microServer = axios.create({
      baseURL: process.env.FAVOURITES_URL,
    });
  }

  async get(token: string) {
    const response = await this.microServer.get('', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async add(addToFavouritesInput: AddToFavouritesInput, token: string) {
    const data = { ...addToFavouritesInput };
    console.log(data, token);

    const response = await this.microServer.put('/add', data, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);

    return response.data;
  }
  async remove(
    removeFromFavouritesInput: RemoveFromFavouritesInput,
    token: string,
  ) {
    const data = { ...removeFromFavouritesInput };
    const response = await this.microServer.put('/remove', data, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  }

  async delete(id: string, token: string) {
    const response = await this.microServer.delete(`/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  }
}
