import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(){
    await prisma.user.update({
        where:{
            id:1
        },
        data:{
            posts:{
                deleteMany:{
                    published:true
                },
            },

        },
    })
}

main()
    .then(async()=>{
        console.log("done");
        await prisma.$disconnect();


    })
