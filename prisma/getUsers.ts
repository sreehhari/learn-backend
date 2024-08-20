import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main(){
    // const users = await prisma.user.findMany({
    //     where:{
    //         email:"chunni@gmail.com"
    //     }
    // });


    const user = await prisma.user.findMany({
        where:{
            id:1,
        },
        include:{
            posts:true
        }

    });
    console.log(user);

}

main();