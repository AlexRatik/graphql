import { Field, ObjectType, ID, Int } from '@nestjs/graphql';
@ObjectType()
export class Album {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  released?: number;

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds?: string[];

  @Field(() => [String], { name: 'bands', nullable: 'itemsAndList' })
  bandsIds?: string[];

  @Field(() => [String], { name: 'genres', nullable: 'itemsAndList' })
  genresIds?: string[];

  @Field(() => [String], { name: 'tracks', nullable: 'itemsAndList' })
  trackIds?: string[];

  @Field(() => String, { nullable: true })
  image?: string;
}
