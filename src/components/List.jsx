import { Container, Grid } from "@mui/material"
import React, { useEffect } from "react"
import { useState } from "react"
import Character from "./Character"

const List = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character')
      const { results } = await data.json()
      setCharacters(results)
      setLoading(false)
    }
    fetchData()
  }, [characters.length])
  return (
    <Container maxWidth="lg">
      <h2>Characters</h2>
      <Grid container spacing={2}>
        {loading ? (
          <Grid item xs={12}>Loading...</Grid>
        ): (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image}
            />
          ))
        )}
      </Grid>
    </Container>
  )
}

export default List