import { prisma } from "./lib/prisma";


async function main() {
     

    const user = await prisma.user.create({
         data:{
             name :"majharul islam",
             email:"majharul@gmail.com"
         }
    })

    console.log(user);

}


main();