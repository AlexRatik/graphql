import {
  Args,
  Resolver,
  Query,
  Mutation,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Album } from '../models/album.model';
import { AlbumsService } from '../services/albums.service';
import { CreateAlbumInput } from '../dto/create-album.input';
import { UpdateAlbumInput } from '../dto/update-album';
import { Artist } from 'src/artists/models/artist.model';
import { ArtistsService } from 'src/artists/services/artist.service';
import { BandsService } from 'src/bands/services/bands.service';
import { TracksService } from 'src/tracks/services/tracks.service';
import { GenresService } from 'src/genres/services/genres.service';
import { Band } from 'src/bands/models/band.model';
import { Track } from 'src/tracks/models/track.model';
import { Genre } from 'src/genres/models/genre.model';
@Resolver(() => Album)
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private artistsService: ArtistsService,
    private bandsService: BandsService,
    private tracksService: TracksService,
    private genresService: GenresService,
  ) {}

  @Query('album')
  async getByID(@Args('id') id: string) {
    return this.albumsService.getByID(id);
  }

  @Query('albums')
  async getAll(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.albumsService.getAll(limit, offset);
  }

  @Mutation('createAlbum')
  async create(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context('token') token: string,
  ) {
    return this.albumsService.create(createAlbumInput, token);
  }

  @Mutation('updateAlbum')
  async update(
    @Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput,
    @Context('token') token: string,
  ) {
    return this.albumsService.update(updateAlbumInput, token);
  }

  @Mutation('deleteAlbum')
  async delete(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.delete(id, token);
  }

  @ResolveField('artists', () => [Artist], { nullable: 'itemsAndList' })
  async getArtists(@Parent() album: Album) {
    const artistsIds = album.artistsIds;
    const data = Promise.all(
      artistsIds.map((id) => this.artistsService.getByID(id)),
    );
    return data;
  }

  @ResolveField('bands', () => [Band], { nullable: 'itemsAndList' })
  async getBands(@Parent() album: Album) {
    const bandsIds = album.bandsIds;
    const data = Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.getByID(id);
      }),
    );
    return data;
  }

  @ResolveField('tracks', () => [Track], { nullable: 'itemsAndList' })
  async getTracks(@Parent() album: Album) {
    const tracksIds = album.trackIds;
    const data = Promise.all(
      tracksIds.map((id) => {
        return this.tracksService.getByID(id);
      }),
    );
    return data;
  }

  @ResolveField('genres', () => [Genre], { nullable: 'itemsAndList' })
  async getGenres(@Parent() album: Album) {
    const genresIds = album.genresIds;
    const data = Promise.all(
      genresIds.map((id) => {
        return this.genresService.getByID(id);
      }),
    );
    return data;
  }
}
