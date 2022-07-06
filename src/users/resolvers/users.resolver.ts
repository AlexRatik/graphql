import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from '../dto/create-user.input';
import { SignInInput } from '../dto/signin.input';
import { JWT_Token } from '../models/jwt-token.model';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => JWT_Token, { name: 'jwt' })
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    return this.usersService.signIn(signInInput);
  }

  @Query(() => User, { name: 'findUserById' })
  async findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async register(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.register(createUserInput);
  }
}
