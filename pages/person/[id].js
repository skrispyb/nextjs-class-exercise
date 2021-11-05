
// Dynamic pages have square brackets in their file name
import useSWR from "swr"
import {useRouter} from 'next/router'

const SingleComponent = () => {
  const { query } = useRouter()
  const {data, error} = useSWR(`/api/people/${query.id}`, (...args) => fetch(...args).then(res => res.json()))
  if(!data) {
    return <div>Loading...</div>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Hair Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{data.name}</td>
        <td>{data.height}</td>
        <td>{data.hair_color}</td>
      </tr>
      </tbody>
    </table>
  )
}

export default SingleComponent