import NextLink from "next/link";
import { LinkBox, LinkOverlay, List, ListItem } from "@chakra-ui/layout";
import { playlistNames } from "../utils/fakes";

const Playlists = () => {
  return (
    <List spacing={2}>
      {playlistNames.map((playlist) => (
        <ListItem paddingX="20px" key={playlist}>
          <LinkBox>
            <NextLink href="/" passHref>
              <LinkOverlay>{playlist}</LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  );
};

export default Playlists;
