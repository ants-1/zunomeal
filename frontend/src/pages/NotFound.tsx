import { Link } from "react-router";
import { Box, LinkBox, LinkOverlay, Text, Heading } from "@chakra-ui/react";

function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      spaceY="2"
      minH="50vh"
    >
      <Heading as="h4">Page not found.</Heading>
      <Text>
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
      </Text>
      <LinkBox>
        <LinkOverlay asChild>
          <Link to="/">
            <Text
              textDecoration="underline"
              textDecorationColor="gray.500"
              textDecorationStyle="dotted"
            >Back to home
            </Text>
          </Link>
        </LinkOverlay>
      </LinkBox>
    </Box>
  )
}

export default NotFound;