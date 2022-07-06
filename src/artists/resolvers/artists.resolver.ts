import { Args, Resolver, Query, Mutation, Context } from '@nestjs/graphql';
import { CreateArtistInput } from '../dto/create-artist.input';
import { UpdateArtistInput } from '../dto/update-artist.input';
import { Artist } from '../models/artist.model';
import { ArtistsService } from '../services/artist.service';

@Resolver(() => Artist)
export class ArtistsResolver {
  constructor(private artistService: ArtistsService) {}

  @Query('artist')
  async getByID(@Args('id') id: string) {
    return this.artistService.getByID(id);
  }

  @Query('artists')
  async getAll(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.artistService.getAll(limit, offset);
  }

  @Mutation('createArtist')
  async create(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context('token') token: string,
  ) {
    return this.artistService.create(createArtistInput, token);
  }

  @Mutation('updateArtist')
  async update(
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
    @Context('token') token: string,
  ) {
    return this.artistService.update(updateArtistInput, token);
  }

  @Mutation('deleteArtist')
  async delete(@Args('id') id: string, @Context('token') token: string) {
    return this.artistService.delete(id, token);
  }
}
