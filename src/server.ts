import { app } from "./app"
import { env } from "./env"
import { prompt } from "./middleware/gemini/gemini"

const port  = env.PORT

app.listen({
  host: '0.0.0.0',
  port: port
}).then(()=>{
  console.log(`Server running on port: ${port}`)
})