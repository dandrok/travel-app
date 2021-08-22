import axios from 'axios'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-key': 'f56505bf8amsh31b8332dedd4abap140e36jsna7b06ca5a9a6',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  },
}

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-key':
            'f56505bf8amsh31b8332dedd4abap140e36jsna7b06ca5a9a6',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
