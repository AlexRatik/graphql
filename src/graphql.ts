
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbumInput {
    name: string;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbumInput {
    _id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface CreateArtistInput {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtistInput {
    _id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface CreateBandInput {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateBandInput {
    _id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface SignInInput {
    email: string;
    password: string;
}

export interface Album {
    _id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favorites(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Favorites>[]> | Promise<Nullable<Nullable<Favorites>[]>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    findUserById(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(signInInput: SignInInput): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;
    deleteAlbum(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    updateAlbum(updateAlbumInput?: Nullable<UpdateAlbumInput>): Album | Promise<Album>;
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    deleteArtist(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    createBand(createBandInput: CreateBandInput): Band | Promise<Band>;
    updateBand(updateBandInput: UpdateBandInput): Band | Promise<Band>;
    deleteBand(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    register(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface Artist {
    _id: string;
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface Band {
    _id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<string>;
}

export interface Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface Delete {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface Favorites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    artists?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Track {
    id: string;
    title?: Nullable<string>;
    albums?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface User {
    _id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password: string;
    email: string;
}

export interface JWT {
    jwt?: Nullable<string>;
}

type Nullable<T> = T | null;
