import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateGenreInput } from '../dto/create-genre.input';
import { UpdateGenreInput } from '../dto/update-genre.input';

@Injectable()
export class GenresService {
  private microServer = null;
  constructor() {
    this.microServer = axios.create({
      baseURL: process.env.GENRES_URL,
    });
  }

  async getAll(limit: number, offset: number) {
    let queryString = '';
    if (limit || offset) {
      queryString = `?limit=${limit}&offset=${offset}`;
    }
    const response = await this.microServer.get(queryString);
    return response.data.items;
  }

  async getByID(id: string) {
    const response = await this.microServer.get(`/${id}`);
    return response.data;
  }

  async create(createGenreInput: CreateGenreInput, token: string) {
    const data = { ...createGenreInput };
    const response = await this.microServer.post('', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async update(updateGenreInput: UpdateGenreInput, token: string) {
    const data = { ...updateGenreInput };
    const id = data._id;
    const response = await this.microServer.put(`/${id}`, data, {
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
