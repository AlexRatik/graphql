import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { CreateTrackInput } from '../dto/create-track.input';
import { UpdateTrackInput } from '../dto/update-track.input';
import { Track } from '../models/track.model';
import { TracksService } from '../services/tracks.service';

@Resolver(() => Track)
export class TracksResolver {
  constructor(private tracksService: TracksService) {}

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
}
