import type { NextApiRequest, NextApiResponse } from 'next'
import { SkillDataPOSTScheme } from '~/interfaces/api/skill/POSTRequest'
import generateIdeas from '~/lib/generateIdeas'
import IdeaService from '~/service/idea/ideaService'

const ideaService = new IdeaService(generateIdeas)

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
  const ideas = await ideaService.generate(data.skillSet)
  res.status(200).json({ ideas })
}
