import {
  Box,
  Checkbox,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import type { OnboardingFormData } from "./OnBoardingForm";

const dietaryOptions = [
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Vegan", value: "vegan" },
  { label: "Pescatarian", value: "pescatarian" },
  { label: "Gluten-free", value: "gluten-free" },
  { label: "Dairy-free", value: "dairy-free" },
];

const DietaryStep = () => {
  const { register, watch, setValue } =
    useFormContext<OnboardingFormData>();

  const dietaryRequirements = watch("dietaryRequirements");

  const hasNoRequirements =
    dietaryRequirements.includes("none");

  const handleNoneChange = (
    checked: boolean | "indeterminate"
  ) => {
    if (checked === true) {
      setValue("dietaryRequirements", ["none"]);
    } else {
      setValue("dietaryRequirements", []);
    }
  };

  const handleRequirementChange = (
    value: string,
    checked: boolean | "indeterminate"
  ) => {
    if (checked === true) {
      setValue("dietaryRequirements", [
        ...dietaryRequirements.filter(
          (requirement) => requirement !== "none"
        ),
        value,
      ]);
    } else {
      setValue(
        "dietaryRequirements",
        dietaryRequirements.filter(
          (requirement) => requirement !== value
        )
      );
    }
  };

  return (
    <Box>
      <Heading size="lg">
        Do you have any dietary requirements?
      </Heading>

      <Text mb="4">
        Select all that apply.
      </Text>

      <Stack gap="3">
        <Checkbox.Root
          checked={hasNoRequirements}
          onCheckedChange={(details) =>
            handleNoneChange(details.checked)
          }
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>None</Checkbox.Label>
        </Checkbox.Root>

        {dietaryOptions.map((option) => {
          const checked = dietaryRequirements.includes(
            option.value
          );

          return (
            <Checkbox.Root
              key={option.value}
              checked={checked}
              disabled={hasNoRequirements}
              onCheckedChange={(details) =>
                handleRequirementChange(
                  option.value,
                  details.checked
                )
              }
            >
              <Checkbox.HiddenInput
                {...register("dietaryRequirements")}
                value={option.value}
              />
              <Checkbox.Control />
              <Checkbox.Label>
                {option.label}
              </Checkbox.Label>
            </Checkbox.Root>
          );
        })}
      </Stack>
    </Box>
  );
};

export default DietaryStep;