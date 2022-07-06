import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateAlbumInput } from '../dto/create-album.input';
import { UpdateAlbumInput } from '../dto/update-album';
@Injectable()
export class AlbumsService {
  private microServer = null;
  constructor() {
    this.microServer = axios.create({ baseURL: process.env.ALBUMS_URL });
  }

  async getByID(id: string) {
    const response = await this.microServer.get(`/${id}`);
    return response.data;
  }

  async getAll(limit?: number, offset?: number) {
    let queryString = '';
    if (limit || offset) {
      queryString = `?limit=${limit}&offset=${offset}`;
    }
    const response = await this.microServer.get(queryString);
    return response.data.items;
  }

  async create(album: CreateAlbumInput, token: string) {
    const data = { ...album };
    const response = await this.microServer.post('', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async update(updateAlbumInput: UpdateAlbumInput, token: string) {
    const data = { ...updateAlbumInput };
    const id = data._id;
    const response = await this.microServer.put(`/${id}`, updateAlbumInput, {
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
