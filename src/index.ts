import add from "@src/math/add"
import dotevn from 'dotenv-safe'

dotevn.config()
const hello = 'world'
console.log(add(1,6))
console.log(`say hello to my little friend!!! ${process.env.MY_SHIT}`)