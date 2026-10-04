import {
  Box,
  Checkbox,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import type { OnboardingFormData } from "./OnBoardingForm";

const GoalStep = () => {
  const { register } = useFormContext<OnboardingFormData>();

  return (
    <Box>
      <Heading size="lg">What are your goals?</Heading>

      <Text mb="4">
        Select all that apply.
      </Text>

      <Stack gap="3">
        <Checkbox.Root>
          <Checkbox.HiddenInput
            {...register("goals")}
            value="eat-healthier"
          />
          <Checkbox.Control />
          <Checkbox.Label>Eat healthier</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.HiddenInput
            {...register("goals")}
            value="lose-weight"
          />
          <Checkbox.Control />
          <Checkbox.Label>Lose weight</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.HiddenInput
            {...register("goals")}
            value="save-money"
          />
          <Checkbox.Control />
          <Checkbox.Label>Save money</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.HiddenInput
            {...register("goals")}
            value="meal-prep"
          />
          <Checkbox.Control />
          <Checkbox.Label>Meal prep</Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root>
          <Checkbox.HiddenInput
            {...register("goals")}
            value="discover-new-recipes"
          />
          <Checkbox.Control />
          <Checkbox.Label>Discover new recipes</Checkbox.Label>
        </Checkbox.Root>
      </Stack>
    </Box>
  );
};

export default GoalStep;