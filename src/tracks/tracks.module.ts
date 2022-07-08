import { Module } from '@nestjs/common';
import { AlbumsService } from 'src/albums/services/albums.service';
import { ArtistsService } from 'src/artists/services/artist.service';
import { BandsService } from 'src/bands/services/bands.service';
import { GenresService } from 'src/genres/services/genres.service';
import { TracksResolver } from './resolvers/track.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  providers: [
    TracksResolver,
    TracksService,
    AlbumsService,
    ArtistsService,
    BandsService,
    GenresService,
  ],
})
export class TracksModule {}
