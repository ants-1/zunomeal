import { Box, Button, Carousel, IconButton } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import WelcomeStep from "./WelcomeStep";
import GoalStep from "./GoalStep";
import DietaryStep from "./DietaryStep";
import FinishStep from "./FinishStep";

export interface OnboardingFormData {
  goals: string[];
  dietaryRequirements: string[];
}

const carouselItems = [
  <WelcomeStep />,
  <GoalStep />,
  <DietaryStep />,
  <FinishStep />,
];

const OnBoardingForm = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const methods = useForm<OnboardingFormData>({
    defaultValues: {
      goals: [],
      dietaryRequirements: [],
    },
  });

  const onSubmit = (data: OnboardingFormData) => {
    console.log(data);

    // Later save the onboarding data here
    // await updateOnboarding(data);

    navigate("/dashboard");
  };

  return (
    <FormProvider {...methods}>
      <Box
        as="form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Carousel.Root
          slideCount={carouselItems.length}
          maxW="md"
          mx="auto"
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <Carousel.ItemGroup>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index} index={index}>
                <Box w="100%" minH="300px" rounded="lg">
                  {item}
                </Box>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.Control justifyContent="center" gap="4">
            <Carousel.PrevTrigger asChild>
              <IconButton
                type="button"
                size="xs"
                variant="ghost"
              >
                <LuChevronLeft />
              </IconButton>
            </Carousel.PrevTrigger>

            <Carousel.Indicators />

            {page === carouselItems.length - 1 ? (
              <Button type="submit" size="sm">
                Start Planning
              </Button>
            ) : (
              <Carousel.NextTrigger asChild>
                <IconButton
                  type="button"
                  size="xs"
                  variant="ghost"
                >
                  <LuChevronRight />
                </IconButton>
              </Carousel.NextTrigger>
            )}
          </Carousel.Control>
        </Carousel.Root>
      </Box>
    </FormProvider>
  );
};

export default OnBoardingForm;