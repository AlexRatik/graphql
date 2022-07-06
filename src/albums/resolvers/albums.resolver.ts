import { Args, Resolver, Query, Mutation, Context } from '@nestjs/graphql';
import { Album } from '../models/album.model';
import { AlbumsService } from '../services/albums.service';
import { CreateAlbumInput } from '../dto/create-album.input';
import { UpdateAlbumInput } from '../dto/update-album';
@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

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
}
