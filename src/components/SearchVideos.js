import { useSelector } from "react-redux";
import SearchVideoContainer from "./SearchVideoContainer";

const SearchVideos = () => {
  const searchVideos = useSelector(store => store.youtubeData.searchVideos)

  if (!searchVideos) return
  return (
    <div className="w-screen mx-5">
      {
        searchVideos.map((info,i) => <SearchVideoContainer key={info.id + i} data={info} />)
      }
    </div>
  )
}

export default SearchVideos