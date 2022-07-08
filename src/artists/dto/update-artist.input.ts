import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateArtistInput {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  secondName: string;

  @Field(() => String, { nullable: true })
  middleName: string;

  @Field(() => String, { nullable: true })
  birthDate: string;

  @Field(() => String, { nullable: true })
  birthPlace: string;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => [ID], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  instruments: string[];
}
