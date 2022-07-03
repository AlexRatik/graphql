/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Album {
  id?: Nullable<string>;
  name?: Nullable<string>;
  released?: Nullable<number>;
  artists?: Nullable<Nullable<Artist>[]>;
  bands?: Nullable<Nullable<Band>[]>;
  tracks?: Nullable<Nullable<Track>[]>;
  genres?: Nullable<Nullable<Genre>[]>;
  image?: Nullable<string>;
}

export interface IQuery {
  albums(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
  album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
  artists(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
  artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
  bands(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
  band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
  favorites(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Favorites>[]> | Promise<Nullable<Nullable<Favorites>[]>>;
  genres(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
  genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
  tracks(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
  track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
  users(
    limit?: Nullable<number>,
    offset?: Nullable<number>,
  ): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
  user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
  id: string;
  firstName?: Nullable<string>;
  secondName?: Nullable<string>;
  middleName?: Nullable<string>;
  birthDate?: Nullable<string>;
  birthPlace?: Nullable<string>;
  country?: Nullable<string>;
  bands?: Nullable<Nullable<string>[]>;
  instruments?: Nullable<string>;
}

export interface Band {
  id: string;
  name?: Nullable<string>;
  origin?: Nullable<string>;
  members?: Nullable<Nullable<string>[]>;
  website?: Nullable<string>;
  genres?: Nullable<string>;
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
  id: string;
  firstName?: Nullable<string>;
  secondName?: Nullable<string>;
  middleName?: Nullable<string>;
  password: string;
  email: string;
}

type Nullable<T> = T | null;
