import {
  Resolver,
  Query,
  Args,
  Mutation,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Genre } from 'src/genres/models/genre.model';
import { GenresService } from 'src/genres/services/genres.service';
import { CreateBandInput } from '../dto/create-band.input';
import { UpdateBandInput } from '../dto/update-band.input';
import { Band } from '../models/band.model';
import { BandsService } from '../services/bands.service';

@Resolver(() => Band)
export class BandsResolver {
  constructor(
    private bandsService: BandsService,
    private genresService: GenresService,
  ) {}

  @Query('bands')
  async getAll(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.bandsService.getAll(limit, offset);
  }

  @Query('band')
  async getByID(@Args('id') id: string) {
    return this.bandsService.getByID(id);
  }

  @Mutation('createBand')
  async create(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context('token') token: string,
  ) {
    return this.bandsService.create(createBandInput, token);
  }

  @Mutation('updateBand')
  async update(
    @Args('updateBandInput') updateBandInput: UpdateBandInput,
    @Context('token') token: string,
  ) {
    return this.bandsService.update(updateBandInput, token);
  }

  @Mutation('deleteBand')
  async delete(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.delete(id, token);
  }

  @ResolveField('genres', () => [Genre], { nullable: 'itemsAndList' })
  getGenres(@Parent() band: Band) {
    const genresIds = band.genresIds;
    const data = Promise.all(
      genresIds.map((id) => this.genresService.getByID(id)),
    );
    return data;
  }
}
