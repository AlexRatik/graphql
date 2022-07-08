import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Favourite {
  @Field(() => ID)
  _id: string;

  @Field(() => ID, { nullable: true })
  userId?: string;

  @Field(() => [ID], { name: 'bands', nullable: 'itemsAndList' })
  bandsIds?: string[];

  @Field(() => [ID], { name: 'genres', nullable: 'itemsAndList' })
  genresIds?: string[];

  @Field(() => [ID], { name: 'artists', nullable: 'itemsAndList' })
  artistsIds?: string[];

  @Field(() => [ID], { name: 'tracks', nullable: 'itemsAndList' })
  tracksIds?: string[];
}
