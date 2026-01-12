import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

import { type Dish } from './interface/Dish'
import { useEffect, useState } from 'react'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  const [dishes, setDishes] = useState<Dish[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data: Dish[] = await response.json()
        setDishes(data)
      } catch (error) {
        console.error('Error fetching dishes:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          <Student
            apellidos="Meza Solis"
            nombres="Samuel Diego"            
            paralelo="2"
          />

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          <DishTable data={dishes}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
