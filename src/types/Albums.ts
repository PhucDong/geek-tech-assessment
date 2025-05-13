import type { User } from "./Users";

interface DefaultAlbum {
  userId: number;
  id: number;
  title: string;
}

interface NewAlbum extends DefaultAlbum {
  user: User | null;
}

export type { DefaultAlbum, NewAlbum };