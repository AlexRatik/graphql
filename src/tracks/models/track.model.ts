import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Band } from 'src/bands/models/band.model';
import { Genre } from 'src/genres/models/genre.model';

@ObjectType()
export class Track {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  albums?: string;

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands?: Band[];

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => Int, { nullable: true })
  released?: number;

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres?: Genre[];
}
