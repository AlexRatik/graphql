import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateBandInput } from '../dto/create-band.input';
import { UpdateBandInput } from '../dto/update-band.input';

@Injectable()
export class BandsService {
  private microServer = null;
  constructor() {
    this.microServer = axios.create({
      baseURL: process.env.BANDS_URL,
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

  async create(createBandInput: CreateBandInput, token: string) {
    const data = { ...createBandInput };
    const response = await this.microServer.post('', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async update(updateBandInput: UpdateBandInput, token: string) {
    const data = { ...updateBandInput };
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
