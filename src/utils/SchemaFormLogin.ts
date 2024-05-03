import { z } from "zod";

const SchemaFormLogin = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().min(8, "Senha deve ser maior que 8 caracteres"),
});

export type ValidationFormLogin = z.infer<typeof SchemaFormLogin>;
export default SchemaFormLogin;
