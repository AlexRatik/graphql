import { Module } from '@nestjs/common';
import { ArtistsService } from 'src/artists/services/artist.service';
import { BandsService } from 'src/bands/services/bands.service';
import { GenresService } from 'src/genres/services/genres.service';
import { TracksService } from 'src/tracks/services/tracks.service';
import { AlbumsResolver } from './resolvers/albums.resolver';
import { AlbumsService } from './services/albums.service';

@Module({
  providers: [
    AlbumsResolver,
    AlbumsService,
    ArtistsService,
    BandsService,
    TracksService,
    GenresService,
  ],
})
export class AlbumModule {}
