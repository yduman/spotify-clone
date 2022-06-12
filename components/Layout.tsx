import { Box } from "@chakra-ui/layout";

import Sidebar from "./Sidebar";
import { MUSIC_PLAYER_HEIGHT, SIDEBAR_WIDTH } from "../utils/constants";

const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box width={SIDEBAR_WIDTH} top="0" left="0" position="absolute">
        <Sidebar />
      </Box>
      <Box marginLeft={SIDEBAR_WIDTH} marginBottom={MUSIC_PLAYER_HEIGHT}>
        {children}
      </Box>
      <Box height={MUSIC_PLAYER_HEIGHT} left="0" bottom="0" position="absolute">
        music player
      </Box>
    </Box>
  );
};

export default Layout;
