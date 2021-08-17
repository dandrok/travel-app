import React from 'react'

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({ place }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.turnkeytec.com/wp-content/uploads/2020/07/placeholder-image.jpg'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
