import { Button, Field, Input, Stack, Box } from "@chakra-ui/react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Box as="form" w="full" display="flex" justifyContent="center" onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" maxW="sm" w="full">
        <Field.Root invalid={!!errors.name}>
          <Field.Label>Name<Box as="span" color="red.500">*</Box></Field.Label>
          <Input {...register("name", { required: "Name is required" })} />
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email}>
          <Field.Label>Email<Box as="span" color="red.500">*</Box></Field.Label>
          <Input {...register("email", { required: "Email is required" })} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Password<Box as="span" color="red.500">*</Box></Field.Label>
          <Input type="password" {...register("password", { required: "Password is required" })} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.confirmPassword}>
          <Field.Label>Confirm Password<Box as="span" color="red.500">*</Box></Field.Label>
          <Input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Register</Button>
      </Stack>
    </Box>
  )
}

export default RegisterForm;