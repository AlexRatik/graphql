import { Args, Resolver, Query, Mutation, Context } from '@nestjs/graphql';
import { Album } from '../models/album.model';
import { AlbumsService } from '../services/albums.service';
import { CreateAlbumInput } from '../dto/create-album.input';
import { UpdateAlbumInput } from '../dto/update-album';
@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Query(() => Album, { name: 'album' })
  async getAlbumByID(@Args('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Query(() => [Album], { name: 'albums', nullable: 'itemsAndList' })
  async getAlbums(
    @Args('limit', { nullable: true }) limit?: number,
    @Args('offset', { nullable: true }) offset?: number,
  ) {
    return this.albumsService.findAll(limit, offset);
  }

  @Mutation(() => Album)
  async createAlbum(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context('token') token: string,
  ) {
    return this.albumsService.create(createAlbumInput, token);
  }

  @Mutation()
  async updateAlbum(
    @Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput,
    @Context('token') token: string,
  ) {
    const id = updateAlbumInput._id;
    return this.albumsService.update(id, updateAlbumInput, token);
  }

  @Mutation()
  async deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.delete(id, token);
  }
}
