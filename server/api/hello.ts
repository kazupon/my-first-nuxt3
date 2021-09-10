import { useBody } from 'h3'

export default async (req, res) => {
  const data = await useBody(req)
  console.log('server api', data)
  return data
}
