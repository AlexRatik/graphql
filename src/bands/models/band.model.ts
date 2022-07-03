import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Band {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  members?: string[];

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => String, { nullable: true })
  genres?: string;
}
