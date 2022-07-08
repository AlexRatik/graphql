import { Module } from '@nestjs/common';
import { BandsService } from 'src/bands/services/bands.service';
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsService } from './services/artist.service';

@Module({
  providers: [ArtistsResolver, ArtistsService, BandsService],
})
export class ArtistsModule {}
