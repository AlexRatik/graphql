import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Track {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  title: string;

  @Field(() => ID)
  albumId: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds?: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds?: string[];

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => Int, { nullable: true })
  released?: number;

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds?: string[];
}
