import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";
import { z } from "zod";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const schema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().nonempty("Email is required").email("Email is not valid"),
  channel: z.string().nonempty("Channel is required"),
});

let renderCount = 0;
const ZodYouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Aniket1074",
      email: "",
      channel: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form is submitted", data);
  };

  const onError = (error: FieldErrors<FormValues>) => {
    console.log(error);
  };

  renderCount++;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <p className="error-Msg">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email")} />
          <p className="error-Msg">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")} />
          <p className="error-Msg">{errors.channel?.message}</p>
        </div>
        <div className="form-btn">
          <button>Submit</button>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default ZodYouTubeForm;
