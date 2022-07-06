import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateArtistInput } from '../dto/create-artist.input';
import { UpdateArtistInput } from '../dto/update-artist.input';

@Injectable()
export class ArtistsService {
  private microServer = null;

  constructor() {
    this.microServer = axios.create({ baseURL: process.env.ARTISTS_URL });
  }

  async getArtistByID(id: string) {
    const response = await this.microServer.get(`/${id}`);
    return response.data;
  }

  async getAllArtists(limit: number, offset: number) {
    let queryString = '';
    if (limit || offset) {
      queryString = `?limit=${limit}&offset=${offset}`;
    }
    const response = await this.microServer.get(queryString);
    return response.data.items;
  }

  async createArtist(createArtistInput: CreateArtistInput, token: string) {
    const data = { ...createArtistInput };
    const response = await this.microServer.post('/', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async updateArtist(updateArtistInput: UpdateArtistInput, token: string) {
    const data = { ...updateArtistInput };
    const id = data._id;
    const response = await this.microServer.put(`/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async deleteArtist(id: string, token: string) {
    const response = await this.microServer.delete(`/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }
}
