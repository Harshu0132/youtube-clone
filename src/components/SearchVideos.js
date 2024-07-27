import { useDispatch, useSelector } from "react-redux";
import SearchVideoContainer from "./SearchVideoContainer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { SEARCH_LIST_BY_KEYWORD, YOUTUBE_API_KEY } from "../utils/constants";
import { addSearchVideos } from "../utils/videoSlice";

const SearchVideos = () => {
  const searchVideos = useSelector(store => store.youtubeData.searchVideos)

  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSearch = async (query) => {
    try {
      if (query.length === 0) return
      const data = await fetch(SEARCH_LIST_BY_KEYWORD + query + "&key=" + YOUTUBE_API_KEY);
      const json = await data.json()
      dispatch(addSearchVideos(json.items))
    } catch (error) { }
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const innerHeight = window.innerHeight
    console.log(scrollHeight, innerHeight,scrollTop);
  }

  useEffect(() => {
    handleSearch(searchParams.get('search_query'))
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])


  if (!searchVideos) return
  return (
    <div className="w-screen mx-5">
      {
        searchVideos.map((info, i) => <SearchVideoContainer key={info.id + i} data={info} />)
      }
    </div>
  )
}

export default SearchVideos