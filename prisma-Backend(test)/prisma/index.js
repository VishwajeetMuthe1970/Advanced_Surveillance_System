const { PrismaClient } = require ('@prisma/client')
const prisma = new PrismaClient()
// prisma take care of database, how to connect it.
// so we have to take care of only prisma

module.exports = prisma
