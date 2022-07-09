import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateUserInput } from '../dto/create-user.input';
import { SignInInput } from '../dto/signin.input';

@Injectable()
export class UsersService {
  private microServer: AxiosInstance;

  constructor() {
    this.microServer = axios.create({ baseURL: process.env.USERS_URL });
  }

  async register(createUserInput: CreateUserInput) {
    const data = { ...createUserInput };
    const response = await this.microServer.post('/register', data);
    return response.data;
  }

  async signIn(signInInput: SignInInput) {
    const data = { ...signInInput };
    const response = await this.microServer.post('/login', data);
    return response.data;
  }

  async findOne(id: string) {
    const response = await this.microServer.get(`/${id}`);
    return response.data;
  }
}
