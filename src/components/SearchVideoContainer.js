import { SearchVideoCard } from "./VideoCard"
const SearchVideoContainer = ({ data }) => {
  const { id, snippet } = data
  // console.log(id, snippet);log
  console.log(data);
  return (
    <div>
      {id.kind === "youtube#video" && <SearchVideoCard info={{ id, snippet }} />}
    </div>
  )
}

export default SearchVideoContainer