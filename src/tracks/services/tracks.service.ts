import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateTrackInput } from '../dto/create-track.input';
import { UpdateTrackInput } from '../dto/update-track.input';

@Injectable()
export class TracksService {
  private microServer = null;
  constructor() {
    this.microServer = axios.create({
      baseURL: process.env.TRACKS_URL,
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

  async create(createTrackInput: CreateTrackInput, token: string) {
    const data = { ...createTrackInput };
    const response = await this.microServer.post('', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async update(updateTrackInput: UpdateTrackInput, token: string) {
    const data = { ...updateTrackInput };
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
