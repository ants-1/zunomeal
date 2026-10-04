import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const WelcomeStep = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <Box>
      <Heading size="lg">
        Welcome to ZunoMeal
      </Heading>

      <Text mb="4">
        Let's personalise your meal planning experience.
      </Text>

      <Button type="button" onClick={handleSkip}>
        Skip
      </Button>
    </Box>
  );
};

export default WelcomeStep;