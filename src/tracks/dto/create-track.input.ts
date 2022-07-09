import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTrackInput {
  @Field(() => String)
  title: string;

  @Field(() => ID, { nullable: true })
  albumId?: string;

  @Field(() => [ID], { nullable: 'itemsAndList' })
  bandsIds?: string[];

  @Field(() => [ID], { nullable: 'itemsAndList' })
  artistsIds?: string[];

  @Field(() => Int)
  duration: number;

  @Field(() => Int)
  released: number;

  @Field(() => [ID])
  genresIds: string[];
}
