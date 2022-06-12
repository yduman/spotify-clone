import { Box } from "@chakra-ui/layout";
import { MUSIC_PLAYER_HEIGHT } from "../utils/constants";
import Menu from "./Menu";
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height={`calc(100vh - ${MUSIC_PLAYER_HEIGHT})`}
      paddingX="5px"
      bg="black"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box marginBottom="20px">
          <Menu />
        </Box>
        <Box height="calc(100% - 210px)" overflowY="auto" paddingY="20px">
          <Playlists />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
