import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main(){
   await prisma.user.create({
    data:{
        name:"akhil ennen",
        email:"chunni@gmail.com",
        posts:{
            create:{
                title:"hello world"
            },
        },
        profile:{
            create:{
                bio:"i like turtles"
            },
        },
    },
   })


   const allUsers = await prisma.user.findMany({
    include:{
        posts:true,
        profile:true,
    },
   })

   console.dir(allUsers,{depth:null})
}


main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch(async(e)=>{
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })