import { Args, Resolver, Query, Mutation, Context } from '@nestjs/graphql';
import { CreateArtistInput } from '../dto/create-artist.input';
import { UpdateArtistInput } from '../dto/update-artist.input';
import { Artist } from '../models/artist.model';
import { ArtistsService } from '../services/artist.service';

@Resolver(() => Artist)
export class ArtistsResolver {
  constructor(private artistService: ArtistsService) {}

  @Query('artist')
  async getArtistByID(@Args('id') id: string) {
    return this.artistService.getArtistByID(id);
  }

  @Query('artists')
  async getAllArtists(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.artistService.getAllArtists(limit, offset);
  }

  @Mutation(() => Artist)
  async createArtist(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context('token') token: string,
  ) {
    return this.artistService.createArtist(createArtistInput, token);
  }

  @Mutation(() => Artist)
  async updateArtist(
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
    @Context('token') token: string,
  ) {
    return this.artistService.updateArtist(updateArtistInput, token);
  }

  @Mutation()
  async deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return this.artistService.deleteArtist(id, token);
  }
}
