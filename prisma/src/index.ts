import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(userName: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            userName,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}

insertUser("admin1", "123456", "harkirat", "singh")