import type { NextApiRequest, NextApiResponse } from 'next'
import { SkillDataPOSTScheme } from '~/interfaces/api/skill/POSTRequest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      await POST(req, res)
      return
    default:
      res.status(404).end(null)
  }
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = SkillDataPOSTScheme.parse(req.body)
  console.log(data)
  res.status(201).end(null)
}
