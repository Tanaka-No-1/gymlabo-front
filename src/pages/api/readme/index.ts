import type { NextApiRequest, NextApiResponse } from 'next'
import {
  ReadmeRequestDataScheme,
  ReadmeRequestDataValidate,
} from '~/interfaces/api/readme/POSTRequest'
import generateReadme from '~/lib/generateReadme'
import ReadmeService from '~/service/readme/readmeService'

const readmeService = new ReadmeService(generateReadme)

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
  const data = ReadmeRequestDataScheme.parse(req.body)
  ReadmeRequestDataValidate(data)
  const text = await readmeService.generate(data.skillSet, data.idea)
  res.status(200).json({ text })
}
