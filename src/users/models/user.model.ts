import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Artist {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  secondName?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  email: string;
}
