import NextLink from "next/link";
import {
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import { NavigationItem } from "../utils/navigation";

type MenuListProps = {
  items: NavigationItem[];
};

const MenuList = ({ items }: MenuListProps) => {
  return (
    <List spacing={2}>
      {items.map((item) => (
        <ListItem paddingX="20px" fontSize="16px" key={item.name}>
          <LinkBox>
            <NextLink href={item.route} passHref>
              <LinkOverlay>
                <ListIcon as={item.icon} color="white" marginRight="20px" />
                {item.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
