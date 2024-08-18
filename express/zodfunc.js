const z = require("zod");

function validate(obj){
    const schema=z.object({
        email:z.string().email(),
        password:z.string().min(8)

    })

    const response =schema.safeParse(obj)
    console.log(response)
}

validate({
    email:"sreehari@gmail.com",
    password:"23432323232"
})