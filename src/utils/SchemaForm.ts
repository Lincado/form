import { z } from "zod";

const SchemaForm = z.object({
  firstName: z.string().min(3, "Nome tem que ter 3 ou mais caracteres"),
  lastName: z.string().min(3, "Nome tem que ter 3 ou mais caracteres"),
  email: z.string().email("Insira um email válido"),
  mobileNumber: z.coerce.number().min(9, "Insira um numero de telfone válido"),
  password: z.string().min(8, "Senha deve ser maior que 8 caracteres"),
});

export type ValidationForm = z.infer<typeof SchemaForm>;
export default SchemaForm;
