import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldErrors } from "react-hook-form";
import * as yup from "yup";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  channel: yup.string().required("Channel is required"),
});

let renderCount = 0;
const YupYouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Aniket1074",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
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

export default YupYouTubeForm;
