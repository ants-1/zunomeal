import { Box, Button, Card, Heading, Stack, Text } from "@chakra-ui/react";

interface QuickActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  variant?: "solid" | "outline";
  onClick?: () => void;
}

const QuickActionCard = ({
  title,
  description,
  buttonText,
  variant = "solid",
  onClick,
}: QuickActionCardProps) => {
  return (
    <Card.Root>
      <Card.Body>
        <Stack gap="4">
          <Box>
            <Heading size="md">{title}</Heading>

            <Text color="gray.500" mt="1">
              {description}
            </Text>
          </Box>

          <Button
            variant={variant}
            alignSelf="start"
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default QuickActionCard;