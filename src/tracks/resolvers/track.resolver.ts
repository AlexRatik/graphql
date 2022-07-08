import {
  Resolver,
  Query,
  Args,
  Mutation,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Album } from 'src/albums/models/album.model';
import { AlbumsService } from 'src/albums/services/albums.service';
import { Artist } from 'src/artists/models/artist.model';
import { ArtistsService } from 'src/artists/services/artist.service';
import { BandsService } from 'src/bands/services/bands.service';
import { Genre } from 'src/genres/models/genre.model';
import { GenresService } from 'src/genres/services/genres.service';
import { CreateTrackInput } from '../dto/create-track.input';
import { UpdateTrackInput } from '../dto/update-track.input';
import { Track } from '../models/track.model';
import { TracksService } from '../services/tracks.service';

@Resolver(() => Track)
export class TracksResolver {
  constructor(
    private tracksService: TracksService,
    private albumsService: AlbumsService,
    private genresService: GenresService,
    private artistsService: ArtistsService,
    private bandsService: BandsService,
  ) {}

  @Query('tracks')
  async getAll(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.tracksService.getAll(limit, offset);
  }

  @Query('track')
  async getByID(@Args('id') id: string) {
    return this.tracksService.getByID(id);
  }

  @Mutation('createTrack')
  async create(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context('token') token: string,
  ) {
    return this.tracksService.create(createTrackInput, token);
  }

  @Mutation('updateTrack')
  async update(
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context('token') token: string,
  ) {
    return this.tracksService.update(updateTrackInput, token);
  }

  @Mutation('deleteTrack')
  async delete(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.delete(id, token);
  }

  @ResolveField('artists', () => [Artist], { nullable: 'itemsAndList' })
  async getArtists(@Parent() track: Track) {
    const artistsIds = track.artistsIds;
    const data = Promise.all(
      artistsIds.map((id) => this.artistsService.getByID(id)),
    );
    return data;
  }

  @ResolveField('bands', () => [Artist], { nullable: 'itemsAndList' })
  async getBands(@Parent() track: Track) {
    const bandsIds = track.bandsIds;
    const data = Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.getByID(id);
      }),
    );
    return data;
  }

  @ResolveField('genres', () => [Genre], { nullable: 'itemsAndList' })
  async getGenres(@Parent() track: Track) {
    const genresIds = track.genresIds;
    const data = Promise.all(
      genresIds.map((id) => {
        return this.genresService.getByID(id);
      }),
    );
    return data;
  }
  @ResolveField('album', () => Album, { nullable: true })
  async getAlbum(@Parent() track: Track) {
    const albumId = track.albumId;
    const data = Promise.all([this.albumsService.getByID(albumId)]);
    return data;
  }
}
