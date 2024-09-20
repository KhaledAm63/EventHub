import express, { Request, Response } from "express"
import { createClient } from "@supabase/supabase-js";
import "dotenv/config"
import { Database, Tables } from "../supabase";
import { json } from "node:stream/consumers";
// db setup
const supabaseUrl = 'https://awnlynpjebobolknjntd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient<Database>(supabaseUrl, supabaseKey)
// app setup
const app = express()
const PORT = 8000
app.use(express.json())

// get requests
app.get("/", async (req: Request, res: Response) => {
  const { data: Events, error } = await supabase.from("Events").select("*")

  res.send(Events)
})

type ApiResponse = {
  message: string,
  succesful: boolean
}
app.post<{}, ApiResponse>("/add", (req: Request<Tables<Events>>, res: Response) => {

})

app.listen(PORT, () => {
  console.log(
    `App running on http:\\loacalhost:${PORT}`)
})
