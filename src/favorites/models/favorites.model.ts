import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Favorites {
  @Field(() => ID)
  _id: string;

  @Field(() => ID, { nullable: true })
  userID?: string;

  @Field(() => [ID], { nullable: 'itemsAndList' })
  bands?: string[];

  @Field(() => [ID], { nullable: 'itemsAndList' })
  genres?: string[];

  @Field(() => [ID], { nullable: 'itemsAndList' })
  artists?: string[];

  @Field(() => [ID], { nullable: 'itemsAndList' })
  tracks?: string[];
}
