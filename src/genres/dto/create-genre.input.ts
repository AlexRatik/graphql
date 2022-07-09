import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true })
  year?: number;
}
