import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const reponse = await fetch("https://api.examle.com(data")

      if (reponse.ok) {
        throw new Error("Error al optener datos")
      }

      const jsonData = await reponse.json()
      setData(jsonData)
    }catch (err){
      setError(err as string)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  if (loading){
    return <div>Cargando...</div>
  }

  if (error){
    return <div>UPS! Hay un error: {error}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
