import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import type { Meal } from "@/lib/dashboardData";

interface MealCardProps {
  meal: Meal;
}

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <Card.Root>
      <Card.Body>
        <Stack gap="2">
          <Text fontSize="sm" color="gray.500">
            {meal.type}
          </Text>

          <Heading size="md">
            {meal.name}
          </Heading>

          <Text fontSize="sm">
            {meal.calories} calories
          </Text>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default MealCard;