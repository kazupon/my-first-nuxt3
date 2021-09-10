let ctr = 0

export default async (req, res) => {
  req.someValue = ctr++
}