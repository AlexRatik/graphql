import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Artist } from 'src/artists/models/artist.model';
import { Band } from 'src/bands/models/band.model';
import { BandsService } from 'src/bands/services/bands.service';
import { Genre } from 'src/genres/models/genre.model';
import { GenresService } from 'src/genres/services/genres.service';
import { Track } from 'src/tracks/models/track.model';
import { AddToFavouritesInput } from '../dto/add-to-favourite.dto';
import { RemoveFromFavouritesInput } from '../dto/remove-from-favourite.dto';
import { Favourite } from '../models/favourites.model';
import { FavouritesService } from '../services/fovourites.service';

@Resolver(() => Favourite)
export class FavouritesResolver {
  constructor(
    private favouritesService: FavouritesService,
    private genresService: GenresService,
    private bandsService: BandsService,
  ) {}

  @Query('favourites')
  async get(@Context('token') token: string) {
    return this.favouritesService.get(token);
  }

  @Mutation('addToFavourites')
  async add(
    @Args('addToFavouritesInput') addToFavouritesInput: AddToFavouritesInput,
    @Context('token') token: string,
  ) {
    return this.favouritesService.add(addToFavouritesInput, token);
  }

  @Mutation('removeFromFavourites')
  async remove(
    @Args('removeFromFavouritesInput')
    removeFromFavouritesInput: RemoveFromFavouritesInput,
    @Context('token') token: string,
  ) {
    return this.favouritesService.remove(removeFromFavouritesInput, token);
  }

  @Mutation('deleteFavourite')
  async delete(@Args('id') id: string, @Context('token') token: string) {
    return this.delete(id, token);
  }

  @ResolveField('genres', () => [Genre], { nullable: 'itemsAndList' })
  async getGenres(@Parent() favourite: Favourite) {
    const genresIds = favourite.genresIds;
    const data = Promise.all(
      genresIds.map((id) => {
        return this.genresService.getByID(id);
      }),
    );
    return data;
  }
  @ResolveField('bands', () => [Band], { nullable: 'itemsAndList' })
  async getBands(@Parent() favourite: Favourite) {
    const bandsIds = favourite.bandsIds;
    const data = Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.getByID(id);
      }),
    );
    return data;
  }
  @ResolveField('tracks', () => [Track], { nullable: 'itemsAndList' })
  async getTracks(@Parent() favourite: Favourite) {
    const tracksIds = favourite.tracksIds;
    const data = Promise.all(
      tracksIds.map((id) => {
        return this.bandsService.getByID(id);
      }),
    );
    return data;
  }
  @ResolveField('artists', () => [Artist], { nullable: 'itemsAndList' })
  async getArtist(@Parent() favourite: Favourite) {
    const artistsIds = favourite.artistsIds;
    const data = Promise.all(
      artistsIds.map((id) => {
        return this.bandsService.getByID(id);
      }),
    );
    return data;
  }
}
