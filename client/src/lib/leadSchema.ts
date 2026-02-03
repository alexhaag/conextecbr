import { z } from 'zod';

export const insertLeadSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
