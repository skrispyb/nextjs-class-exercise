import { people } from '../../../data/people'

export default function getPeople(req, res) {
  res.status(200).json(people)
}