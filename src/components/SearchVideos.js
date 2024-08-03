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
  const pageToken = useRef(null)
  const searchRef = useRef(null);
  const [isMdOrMore, setIsMdOrMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();

  const handleSearch = async (query) => {
    if (pageToken.current === false) return

    try {
      if (query.length === 0) return
      const data = await fetch(SEARCH_LIST_BY_KEYWORD + query + "&key=" + YOUTUBE_API_KEY + (pageToken.current ? "&pageToken=" + pageToken.current : ""));
      const json = await data.json()
      if (json.nextPageToken) {
        if (pageToken.current === null) dispatch(addSearchVideos(json.items))
        else dispatch(appendSearchVideos(json.items))
        pageToken.current = json.nextPageToken
      } else {
        pageToken.current = false
      }
      setLoading(false)
    } catch (error) { }
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const innerHeight = window.innerHeight
    if (scrollTop + innerHeight >= scrollHeight - 176) {
      if (pageToken.current === false) return
      setLoading(true)
      searchRef.current = setTimeout(() => {
        handleSearch(searchParams.get('search_query'))
      }, 400)
    }
  }

  useEffect(() => {
    handleSearch(searchParams.get('search_query'))
  }, [])
  useEffect(() => {
    handleMdOrMore(setIsMdOrMore)
  }, [isMdOrMore])

  useEffect(() => {
    if (isMdOrMore) {
      !isMenuOpen && document.addEventListener('scroll', handleScroll)
    } else {
      document.addEventListener('scroll', handleScroll)
    }
    return () => {
      document.removeEventListener('scroll', handleScroll)
      clearTimeout(searchRef.current)
    }
  }, [isMenuOpen])

  if (!searchVideos) return

  return (
    <>
      <div className={"mx-5"}>
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