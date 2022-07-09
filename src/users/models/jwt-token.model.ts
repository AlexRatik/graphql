import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class JWT_Token {
  @Field(() => String)
  jwt: string;
}
