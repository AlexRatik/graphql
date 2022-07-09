import { Field, InputType } from '@nestjs/graphql';
import { MemberInput } from './member.input';

@InputType()
export class CreateBandInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => [MemberInput], { nullable: 'itemsAndList' })
  members?: MemberInput[];

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  genres?: string[];
}
