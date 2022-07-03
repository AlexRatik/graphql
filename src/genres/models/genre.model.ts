import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true })
  year?: number;
}
