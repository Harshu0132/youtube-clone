import { useDispatch, useSelector } from "react-redux";
import SearchVideoContainer from "./SearchVideoContainer";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { SEARCH_LIST_BY_KEYWORD, YOUTUBE_API_KEY } from "../utils/constants";
import { addSearchVideos, appendSearchVideos } from "../utils/videoSlice";
import { handleMdOrMore } from "../helper/handleResize";
import Shimmer from "./Shimmer";

const SearchVideos = () => {
  const searchVideos = useSelector(store => store.youtubeData.searchVideos)
  const pageTokenRef = useRef(null)
  const [pageToken, setPageToken] = useState(null)
  const [isMdOrMore, setIsMdOrMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  const [searchParams] = useSearchParams()
  const [searchText, setSearchText] = useState("")
  const dispatch = useDispatch();


  const handleSearch = async (query) => {
    if (searchText !== query)  pageTokenRef.current = null

    try {
      if (query.length === 0 || pageTokenRef.current === false) return
      setLoading(true)
      const data = await fetch(SEARCH_LIST_BY_KEYWORD + query + "&key=" + YOUTUBE_API_KEY + (pageTokenRef.current ? "&pageToken=" + pageTokenRef.current : ""));
      const json = await data.json()
      if (json.nextPageToken) {
        if (pageTokenRef.current === null) dispatch(addSearchVideos(json.items))
        else dispatch(appendSearchVideos(json.items))
        pageTokenRef.current = json.nextPageToken
      } else {
        pageTokenRef.current = false
      }
      setLoading(false)
      setSearchText(searchParams.get('search_query'))
    } catch (error) { }
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const innerHeight = window.innerHeight
    if (scrollTop + innerHeight >= scrollHeight - 176) {
      if (pageTokenRef.current === false) return
      
      setPageToken(pageTokenRef.current)
    }
  }

  useEffect(() => {
    handleSearch(searchParams.get('search_query'))
  }, [searchParams.get('search_query'), pageToken])

  useEffect(() => {
    handleMdOrMore(setIsMdOrMore)
  }, [isMdOrMore, searchVideos])

  useEffect(() => {
    if (isMdOrMore) {
      !isMenuOpen && document.addEventListener('scroll', handleScroll)
    } else {
      document.addEventListener('scroll', handleScroll)
    }
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  if (!searchVideos) return

  return (
    <>
      <div>
        {
          searchVideos.map((info, i) => <SearchVideoContainer key={info.id + i} data={info} />)
        }
        {
          loading && <Shimmer />
        }
      </div>
    </>
  )
}

export default SearchVideos