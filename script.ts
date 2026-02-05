import { prisma } from "./lib/prisma";


async function main() {
     

    // const user = await prisma.user.create({
    //      data:{
    //          name :"Ariful islam",
    //          email:"majharul@gmail.com"
    //      }
    // })

    const result = await prisma.user.findMany();
     
    // const update_user = await prisma.user.update({
    //      where:{
    //         id:1
    //      },
    //      data:{
    //          name:"Mahadi hasan"
    //      }
    // })


    // const delete_user = await prisma.user.delete({
    //      where: {
    //         id:2
    //      }
    // })

    const orderBY = await prisma.user.findMany(
        {
             orderBy:{
                id:'asc'
             }
        }
    )

    const searching = await prisma.user.findMany({
         where:{
             name:{
                 contains:'ma',
                 mode:'insensitive'
             }
         }
    })

    console.log(searching)


}


main();