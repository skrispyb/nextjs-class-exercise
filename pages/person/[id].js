
// Dynamic pages have square brackets in their file name
import { useParams } from 'react-router-dom'
import { people } from '../../data/people';

const SingleComponent = () => {
  const {personId} = useParams();
  const person = people.find(el => el.id === personId)

  return (
    <div>{person.name}</div>
  )
}

export default SingleComponent