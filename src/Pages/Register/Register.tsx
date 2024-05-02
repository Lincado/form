import { useForm } from "react-hook-form";

import img from "../../assets/img/img-1.png";
import SchemaForm from "../../utils/SchemaForm";
import { ValidationForm } from "../../utils/SchemaForm";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ButtonSubmit";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationForm>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(SchemaForm),
  });

  const handleSubmitData = (data: unknown) => {
    console.log(data);
  };

  return (
    <>
      <div className="container bg-blue-200 h-screen p-5 max-w-full grid grid-flow-col place-content-center">
        <div className="max-w-[407px] max-h-[582px]">
          <img
            src={img}
            alt="garota sentada tomando café"
            className="rounded-md"
          />
        </div>
        <form
          className="bg-white w-[750px] h-[680px] p-10 rounded-md grid grid-cols-1 gap-10"
          onSubmit={handleSubmit(handleSubmitData)}
        >
          <div>
            <h1 className="text-3xl font-bold text-black text-center">
              Create new account!
            </h1>
          </div>
          <div className="grid grid-cols-2 h-5">
            <div className="grid grid-rows-2 w-80 h-20">
              <label className="text-gray-500" htmlFor="firstName">
                First name
              </label>
              <div className="grid grid-flow-row">
                <input
                  className="border rounded-md border-gray-500 h-10 p-3"
                  type="text"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-rose-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-rows-2 w-80 h-20">
              <label className="text-gray-500" htmlFor="lastName">
                Last Name
              </label>
              <div className="grid grid-flow-row">
                <input
                  className="border rounded-md border-gray-500 h-10 p-3"
                  type="text"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-rose-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-gray-500" htmlFor="email">
              Email
            </label>
            <div className="grid grid-cols-1">
              <input
                className="border rounded-md border-gray-500 h-10 p-3"
                type="text"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-rose-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <label className="text-gray-500" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="grid grid-cols-1">
              <input
                className="border rounded-md border-gray-500 h-10 p-3"
                type="text"
                {...register("mobileNumber")}
              />
              {errors.mobileNumber && (
                <p className="text-rose-500 text-sm">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>
            <label className="text-gray-500" htmlFor="password">
              Password
            </label>
            <div className="grid grid-cols-1 gap-2">
              <input
                className="border rounded-md border-gray-500 h-10 p-3"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-rose-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <Button />
        </form>
      </div>
    </>
  );
}
