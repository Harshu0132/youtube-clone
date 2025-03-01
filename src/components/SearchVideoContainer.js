import { SearchVideoCard } from "./VideoCard"
const SearchVideoContainer = ({ data }) => {
  const { id, snippet } = data
  return (
    <div className="">
      {id.kind === "youtube#video" && <SearchVideoCard info={{ id, snippet }} />}
    </div>
  )
}

export default SearchVideoContainer