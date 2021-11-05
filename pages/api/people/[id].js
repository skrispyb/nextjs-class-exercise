import { people } from '../../../data/people'

export default function getPerson({ query: { id } }, res) {
  const found = people.find(person => person.id === id)
  
  if(found) {
    res.status(200).json(found);
  } else {
    res.status(400).json({message: 'ID not found'})
  }

}