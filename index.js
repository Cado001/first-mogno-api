import express from 'express'
import cors from 'cors'
import {getAllPlants, addPlant} from './src/plants.js'
const PORT = 3005

const app = express()
app.use(express.json())
app.use(cors())

app.get("/plants", getAllPlants)
app.post("/plant", addPlant)
// app.delete ("/plants/:plantid",deletePlant)





app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})
