import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import QuickActionCard from "@/components/dashboard/QuickActionCard";
import MealCard from "@/components/dashboard/MealCard";
import StatCard from "@/components/dashboard/StatCard";

import {
  dashboardStats,
  todaysMeals,
} from "@/lib/dashboardData";

const Dashboard = () => {
  return (
    <Box maxW="6xl" mx="auto" px="6" py="8">
      <Stack gap="8">
        <Box>
          <Heading size="xl">
            Welcome back 👋
          </Heading>

          <Text color="gray.500" mt="2">
            Here's what's happening with your meal plan.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
          <QuickActionCard
            title="Plan your meals"
            description="Create a meal plan for the week."
            buttonText="Create Meal Plan"
          />

          <QuickActionCard
            title="Shopping list"
            description="View and manage your shopping list."
            buttonText="View Shopping List"
            variant="outline"
          />
        </SimpleGrid>

        <Box>
          <HStack justify="space-between" mb="4">
            <Heading size="lg">
              Today's Meals
            </Heading>

            <Button variant="ghost" size="sm">
              View Plan
            </Button>
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
            {todaysMeals.map((meal) => (
              <MealCard key={meal.type} meal={meal} />
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading size="lg" mb="4">
            Your Goals
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
            {dashboardStats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;