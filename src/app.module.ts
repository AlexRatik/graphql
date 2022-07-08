import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AlbumModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';
import { BandsModule } from './bands/bands.module';
import { GenresModule } from './genres/genres.module';
import { TracksModule } from './tracks/tracks.module';
import { FavouritesModule } from './favourites/favourites.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }) => ({
        token: req.headers.authorization,
      }),
    }),
    AlbumModule,
    ArtistsModule,
    BandsModule,
    GenresModule,
    TracksModule,
    FavouritesModule,
    UsersModule,
  ],
})
export class AppModule {}
