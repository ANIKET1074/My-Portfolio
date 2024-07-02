import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: { number: string }[];
  age: number;
  dob: Date;
};

let renderCount = 0;
const YouTubeForm = () => {
  //   const form = useForm<FormValues>({
  //     defaultValues: {
  //       username: "",
  //       channel: "",
  //       email: "",
  //     },
  //   });
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();

      return {
        username: "Aniket1074",
        email: data.email,
        channel: "",
        social: {
          facebook: "",
          twitter: "",
        },
        phoneNumbers: ["", ""],
        phNumbers: [
          {
            number: "",
          },
        ],
        age: 0,
        dob: new Date(),
      };
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
  } = form;

  const { errors, touchedFields, dirtyFields } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });
  //   const { name, onBlur, onChange, ref } = register("username");

  const onSubmit = (data: FormValues) => {
    console.log("Form is submitted", data);
  };

  console.log(touchedFields, dirtyFields);

  //   useEffect(() => {
  //     const subscription = watch((value, { name, type }) =>
  //       console.log(value, name, type)
  //     );
  //     return () => subscription.unsubscribe();
  //   }, [watch]);

  const handleGetValues = () => {
    console.log("form values", getValues());
  };

  const handleSetValue = () => {
    setValue("username", "", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  renderCount++;
  return (
    <div>
      <h1>Render Component ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            //   name="name"
            //   onChange={onChange}
            //   onBlur={onBlur}
            //   ref={ref}
            {...register("username", {
              required: "Username is Required",
            })}
          />
          <p className="error-Msg">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different Email"
                  );
                },

                notBlockListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
          />
          <p className="error-Msg">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel name is required",
              },
            })}
          />
          <p className="error-Msg">{errors.channel?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: "Facebook Link is required",
            })}
          />
          <p className="error-Msg">{errors.social?.facebook?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: "Twitter Link is required",
            })}
          />
          <p className="error-Msg">{errors.social?.twitter?.message}</p>
        </div>
        <div>
          <label>List of All phone numbers</label>
          <div>
            {fields.map((field, index) => (
              <div className="form-control" key={field.id}>
                <input
                  type="text"
                  {...register(`phNumbers.${index}.number` as const)}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => append({ number: "" })}>
              Add
            </button>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Age is required",
              },
            })}
          />
          <p className="error-Msg">{errors.age?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: {
                value: true,
                message: "DOB is required",
              },
            })}
          />
          <p className="error-Msg">{errors.dob?.message}</p>
        </div>
        <button>Submit</button>
        <button type="button" onClick={handleGetValues}>
          Get Values
        </button>
        <button type="button" onClick={handleSetValue}>
          Set Values
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
