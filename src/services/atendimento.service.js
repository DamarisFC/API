import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const validateAtendimentoData = async (data) => {
    return await prisma.atendimento.create({
        data: {
            idEncaminhamento: data.idEncaminhamento,
            observacoes: data.observacoes,
            data: new Date(data.data),
            status_atendimento: data.status_atendimento
        }
    })
}

export const checkMulherExists = async (id_mulher) => {
  const mulher = await prisma.mulher.findUnique({
    where: { id: id_mulher }
  })
  if (!mulher) {
    throw new Error('Mulher não encontrada')
  }
}