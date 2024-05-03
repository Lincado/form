import { useForm } from "react-hook-form";

import img from "../../assets/img/img-1.png";
import SchemaFormLogin from "../../utils/SchemaFormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ButtonSubmit";
import { ValidationFormLogin } from "../../utils/SchemaFormLogin";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationFormLogin>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(SchemaFormLogin),
  });

  const handleSubmitData = (data: ValidationFormLogin) => {
    console.log(data);
  };

  return (
    <>
      <div className="container bg-blue-200 h-screen p-5 max-w-full grid grid-flow-col place-content-center">
        <div className="max-w-[407px] max-h-[582px]">
          <img
            src={img}
            alt="garota sentada tomando café"
            className="rounded-md hidden xl:block"
          />
        </div>
        <form
          className="bg-white w-full md:w-[650px] h-[680px] p-14 rounded-md grid grid-cols-1 gap-10"
          onSubmit={handleSubmit(handleSubmitData)}
        >
          <div className="self-center">
            <h1 className="text-3xl font-bold text-black text-center">
              Log In!
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label className="text-gray-500 font-bold" htmlFor="email">
              Email
            </label>
            <div className="grid grid-cols-1">
              <input
                className="border rounded-md border-gray-500 h-12 p-3"
                type="text"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-rose-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <label className="text-gray-500 font-bold" htmlFor="password">
              Password
            </label>
            <div className="grid grid-cols-1 gap-2">
              <input
                className="border rounded-md border-gray-500 h-12 p-3"
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
