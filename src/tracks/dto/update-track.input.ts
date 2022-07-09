import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTrackInput {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => ID, { nullable: true })
  albumId?: string;

  @Field(() => [ID], { nullable: 'itemsAndList' })
  bandsIds?: string[];

  @Field(() => [ID], { nullable: 'itemsAndList' })
  artistsIds?: string[];

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => Int, { nullable: true })
  released?: number;

  @Field(() => [ID], { nullable: 'itemsAndList' })
  genresIds?: string[];
}
