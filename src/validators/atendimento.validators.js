import { z } from 'zod'

export const atendimentoSchema = z.object({
  id_mulher: z.string().uuid(),
  tipo_atendimento: z.string().min(3),
  observacoes: z.string().optional(),
  data_atendimento: z.string().datetime(),
  profissional_resp: z.string().min(3),
  status_atendimento: z.string().min(3)
})