import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


// async function main(){
//     const post  = await prisma.post.update({
//         where:{
//             id:1
//         },
//         data:{
//             published:true,
//         },
//     })
//     console.log(post);
// }


async function main(){
   await prisma.post.create({
        data:{
            title:"title of the posst",
            content:"something",
            published:true,
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}

main()
   