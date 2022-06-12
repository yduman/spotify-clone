import { IconType } from "react-icons";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

export type NavigationItem = {
  name: string;
  route: string;
  icon: IconType;
};

export const navItems: NavigationItem[] = [
  {
    name: "Start",
    route: "/",
    icon: MdHome,
  },
  {
    name: "Suchen",
    route: "/search",
    icon: MdSearch,
  },
  {
    name: "Bibliothek",
    route: "/library",
    icon: MdLibraryMusic,
  },
];

export const navItems2: NavigationItem[] = [
  {
    name: "Playlist erstellen",
    route: "/create-playlist",
    icon: MdPlaylistAdd,
  },
  {
    name: "Lieblingssongs",
    route: "/favorite-songs",
    icon: MdFavorite,
  },
];
