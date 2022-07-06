import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Member } from './member.model';

@ObjectType()
export class Band {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => [Member], { nullable: 'itemsAndList' })
  members?: Member[];

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIDs?: string[];
}
