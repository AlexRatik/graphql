import { Field, InputType, Int } from '@nestjs/graphql';
@InputType()
export class CreateAlbumInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  released?: number;

  @Field(() => [String], { nullable: 'itemsAndList' })
  artists?: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  bands?: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  genres?: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  tracks?: string[];

  @Field(() => String, { nullable: true })
  image?: string;
}
