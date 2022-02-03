// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

Data = {
  name: string
}

export default handler(
  req, NextApiRequest,
  res, NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
