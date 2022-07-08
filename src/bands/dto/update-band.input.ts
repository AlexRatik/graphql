import { Field, ID, InputType } from '@nestjs/graphql';
import { Member } from '../models/member.model';
import { MemberInput } from './member.input';

@InputType()
export class UpdateBandInput {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  origin?: string;

  @Field(() => [MemberInput], { nullable: 'itemsAndList' })
  members?: Member[];

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  genres?: string[];
}
