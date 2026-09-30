import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";

function AuthLayout() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" w="full" minH="100vh">
      <Outlet />
    </Box>
  )
}

export default AuthLayout;