import { Box } from "@chakra-ui/layout";
import { navItems, navItems2 } from "../utils/navigation";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <Box>
      <Box marginBottom="30px">
        <MenuList items={navItems} />
      </Box>
      <Box>
        <MenuList items={navItems2} />
      </Box>
    </Box>
  );
};

export default Menu;
