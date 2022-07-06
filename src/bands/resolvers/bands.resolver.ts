import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { CreateBandInput } from '../dto/create-band.input';
import { UpdateBandInput } from '../dto/update-band.input';
import { Band } from '../models/band.model';
import { BandsService } from '../services/bands.service';

@Resolver(() => Band)
export class BandsResolver {
  constructor(private bandsService: BandsService) {}

  @Query(() => [Band], { name: 'bands' })
  async getAllBands(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.bandsService.getAllBands(limit, offset);
  }

  @Query(() => Band, { name: 'band' })
  async getBandByID(@Args('id') id: string) {
    return this.bandsService.getBandByID(id);
  }

  @Mutation(() => Band)
  async createBand(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context('token') token: string,
  ) {
    return this.bandsService.createBand(createBandInput, token);
  }

  @Mutation(() => Band)
  async updateBand(
    @Args('updateBandInput') updateBandInput: UpdateBandInput,
    @Context('token') token: string,
  ) {
    return this.bandsService.updateBand(updateBandInput, token);
  }

  @Mutation()
  async deleteBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.deleteBand(id, token);
  }
}
