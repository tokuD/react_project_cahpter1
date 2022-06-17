import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

const Character = (character) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardMedia
          component='img'
          alt={character.name}
          width='300'
          image={character.image}
        />
        <CardContent>
          <Typography variant='body' component='p'>
            {`Origin: ${character.origin && character.origin.name}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Character
