import type { NextApiRequest, NextApiResponse } from 'next'
import SkillDataGet from '~/interfaces/api/skill/GET'
import { SkillDataPOSTScheme } from '~/interfaces/api/skill/POST'
import topazScraper from '~/lib/topazScraper'
import TopazSkillStore from '~/service/api/topazSkillStore'

const store = new TopazSkillStore(topazScraper)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SkillDataGet>,
) {
  switch (req.method) {
    case 'GET':
      await GET(req, res)
      return
    case 'POST':
      await POST(req, res)
      return
    default:
      res.status(404)
  }
}

async function GET(req: NextApiRequest, res: NextApiResponse<SkillDataGet>) {
  res.status(200).json(await store.get())
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = SkillDataPOSTScheme.parse(req.body)
  console.log(data)
  res.status(201).end(null)
}
