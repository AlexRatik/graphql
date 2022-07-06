import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { CreateGenreInput } from '../dto/create-genre.input';
import { UpdateGenreInput } from '../dto/update-genre.input';
import { Genre } from '../models/genre.model';
import { GenresService } from '../services/genres.service';

@Resolver(() => Genre)
export class GenresResolver {
  constructor(private genresService: GenresService) {}

  @Query('genres')
  async getAll(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.genresService.getAll(limit, offset);
  }

  @Query('genre')
  async getByID(@Args('id') id: string) {
    return this.genresService.getByID(id);
  }

  @Mutation('createGenre')
  async create(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
    @Context('token') token: string,
  ) {
    return this.genresService.create(createGenreInput, token);
  }

  @Mutation('updateGenre')
  async update(
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    @Context('token') token: string,
  ) {
    return this.genresService.update(updateGenreInput, token);
  }

  @Mutation('deleteGenre')
  async delete(@Args('id') id: string, @Context('token') token: string) {
    return this.genresService.delete(id, token);
  }
}
