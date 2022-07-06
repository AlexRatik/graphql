import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateArtistInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  secondName: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  birthDate?: string;

  @Field(() => String, { nullable: true })
  birthPlace?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => [ID], { nullable: 'itemsAndList' })
  bands?: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  instruments?: string[];
}
