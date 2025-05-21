import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const validateAtendimentoData = (data) => {
  const requiredFields = ['id_mulher', 'tipo_atendimento', 'data_atendimento', 'profissional_resp', 'status_atendimento']
  const missingFields = requiredFields.filter(field => !data[field])
  
  if (missingFields.length > 0) {
    throw new Error(`Campos obrigatórios faltando: ${missingFields.join(', ')}`)
  }
}

export const checkMulherExists = async (id_mulher) => {
  const mulher = await prisma.mulher.findUnique({
    where: { id: id_mulher }
  })
  if (!mulher) {
    throw new Error('Mulher não encontrada')
  }
}