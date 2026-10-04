import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import type { DashboardStat } from  "@/lib/dashboardData";

interface StatCardProps {
  stat: DashboardStat;
}

const StatCard = ({ stat }: StatCardProps) => {
  return (
    <Card.Root>
      <Card.Body>
        <Stack gap="2">
          <Text color="gray.500">
            {stat.label}
          </Text>

          <Heading size="md">
            {stat.value}
          </Heading>

          <Text fontSize="sm">
            {stat.description}
          </Text>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default StatCard;