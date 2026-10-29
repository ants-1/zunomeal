import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  Portal,
  Text,
  LinkOverlay,
  LinkBox
} from "@chakra-ui/react";
import { Link } from "react-router";
import {
  LuLogOut,
  LuMenu,
  LuUser,
  LuX,
} from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logout");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Box borderBottomWidth="1px">
      <Flex
        maxW="6xl"
        mx="auto"
        px={{ base: "4", md: "6" }}
        py="4"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <LinkBox>
          <LinkOverlay asChild>
            <Link to="/">
              <Text
                fontSize="xl"
                fontWeight="bold"
              >
                ZunoMeal
              </Text>
            </Link>
          </LinkOverlay>
        </LinkBox>

        {/* Desktop Navigation */}
        <HStack
          gap="6"
          display={{ base: "none", md: "flex" }}
        >
          <Button
            asChild
            variant="ghost"
            size="sm"
          >
            <Link to="/dashboard">
              Dashboard
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
          >
            <Link to="/meal-planner">
              Meal Planner
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
          >
            <Link to="/recipes">
              Recipes
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sm"
          >
            <Link to="/shopping-list">
              Shopping List
            </Link>
          </Button>
        </HStack>

        {/* Right side */}
        <HStack gap="2">
          {/* Profile */}
          <Menu.Root>
            <Menu.Trigger asChild>
              <IconButton
                variant="ghost"
                size="sm"
                aria-label="Profile menu"
              >
                <LuUser />
              </IconButton>
            </Menu.Trigger>

            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="profile" asChild>
                    <Link to="/profile">
                      <LuUser />
                      Profile
                    </Link>
                  </Menu.Item>

                  <Menu.Item
                    value="logout"
                    onClick={handleLogout}
                  >
                    <LuLogOut />
                    Logout
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          {/* Mobile menu button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            size="sm"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? <LuX /> : <LuMenu />}
          </IconButton>
        </HStack>
      </Flex>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          px="4"
          pb="4"
        >
          <Box
            borderTopWidth="1px"
            pt="3"
          >
            <Flex
              direction="column"
              gap="1"
            >
              <Button
                asChild
                variant="ghost"
                justifyContent="flex-start"
                onClick={closeMobileMenu}
              >
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                justifyContent="flex-start"
                onClick={closeMobileMenu}
              >
                <Link to="/meal-planner">
                  Meal Planner
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                justifyContent="flex-start"
                onClick={closeMobileMenu}
              >
                <Link to="/recipes">
                  Recipes
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                justifyContent="flex-start"
                onClick={closeMobileMenu}
              >
                <Link to="/shopping-list">
                  Shopping List
                </Link>
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;