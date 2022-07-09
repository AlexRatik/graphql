import { Module } from '@nestjs/common';
import { BandsService } from 'src/bands/services/bands.service';
import { GenresService } from 'src/genres/services/genres.service';
import { FavouritesResolver } from './resolvers/favourites.resolver';
import { FavouritesService } from './services/fovourites.service';

@Module({
  providers: [
    FavouritesService,
    FavouritesResolver,
    GenresService,
    BandsService,
  ],
})
export class FavouritesModule {}
