import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AddToFavouritesInput {
  @Field(() => String)
  type: 'bands' | 'genres' | 'artists' | 'tracks';

  @Field(() => ID)
  id: string;
}
