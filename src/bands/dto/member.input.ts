import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemberInput {
  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => String, { nullable: true })
  instrument?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  years?: string[];
}
