const getVuelo = async (id) => {
  const url = 'http://localhost:8080'

  const response = await fetch(url.concat(`/api/vuelos/ids/${id}`), {
    method: "GET"
  })

  return await response.json()
}

export default getVuelo