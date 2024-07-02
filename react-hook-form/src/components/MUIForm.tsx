import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};
const MUIForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div style={{ width: "500px", margin: "auto", height: "50vh" }}>
      <h2 style={{ textAlign: "center" }}>Login Form</h2>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={500}>
          <TextField
            label="email"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="password"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default MUIForm;
