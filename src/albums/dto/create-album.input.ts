import { Field, InputType, Int } from '@nestjs/graphql';
import { Artist } from 'src/artists/models/artist.model';
import { Band } from 'src/bands/models/band.model';
import { Genre } from 'src/genres/models/genre.model';
import { Track } from 'src/tracks/models/track.model';

@InputType()
export class CreateAlbumInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  released?: number;

  @Field(() => [Artist], { nullable: 'itemsAndList' })
  artists?: Artist[];

  @Field(() => [Band], { name: 'bands', nullable: 'itemsAndList' })
  bands?: Band[];

  @Field(() => [Genre], { name: 'genres', nullable: 'itemsAndList' })
  genres?: Genre[];

  @Field(() => [Track], { name: 'tracks', nullable: 'itemsAndList' })
  tracks?: Track[];

  @Field(() => String, { nullable: true })
  image?: string;
}
