import { Box, Divider } from "@chakra-ui/layout";
import { navItems, navItems2 } from "../utils/navigation";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <Box>
      <Box paddingY="10px">
        <MenuList items={navItems} />
      </Box>
      <Box paddingY="20px">
        <MenuList items={navItems2} />
      </Box>
      <Box paddingX="20px">
        <Divider color="gray.800" />
      </Box>
    </Box>
  );
};

export default Menu;
