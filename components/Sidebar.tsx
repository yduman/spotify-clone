import { Box, Divider } from "@chakra-ui/layout";
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
        <Box paddingX="20px" paddingY="20px">
          <Divider color="gray.800" />
        </Box>
        <Box
          height="calc(100% - 210px)"
          overflowY="auto"
          paddingY="20px"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&::-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <Playlists />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
