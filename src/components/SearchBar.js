import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { addSuggestion } from "../utils/searchSlice"
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_ICON, SEARCH_LIST_BY_KEYWORD, YOUTUBE_API_KEY, YT_SUGGESTION_API_URL } from "../utils/constants";
import { addSearchVideos } from "../utils/videoSlice";
import { useNavigate } from 'react-router-dom'
import useSearchVideos from "../hooks/useSearchVideos"

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const searchResult = useSelector(store => store.search.suggestion)
    const [showSuggestion, setShowSuggestion] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const getSearchSuggestion = async () => {
        try {
            if (searchText.length === 0 || searchResult[searchText]) return
            const data = await fetch(YT_SUGGESTION_API_URL + searchText)
            const json = await data.json()
            dispatch(addSuggestion({ [searchText]: json[1] }))
        } catch (error) { }
    }

    const handleSearch = async (query) => {
        if (query.length === 0) return
        navigate("/results?search_query=" + query)
    }

    const handleBlur = (s) => {
        setTimeout(() => {
            setShowSuggestion(false)
        }, 100);
    }

    useEffect(() => {
        const i = setTimeout(() => {
            getSearchSuggestion()
        }, 300);
        return () => { clearTimeout(i) }
    }, [searchText])

    return (
        <>
            <div className='col-span-8 w-full '>
                <div className="flex items-center justify-center">
                    <input
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={handleBlur}
                        type="text" className='border border-gray-500 rounded-l-full px-3 w-3/4  py-1' value={searchText} placeholder='Search' onChange={(e) => setSearchText(e.target.value)} />
                    <button className='border border-gray-500 bg-gray-200 px-3 py-2 rounded-r-full' onClick={() => handleSearch(searchText)}>
                        <img className='object-cover w-4' src={SEARCH_ICON} alt="" />
                    </button>
                    <br />

                </div>
                <div className="flex justify-center">
                    {
                        showSuggestion && (
                            <>
                                {
                                    searchResult[searchText] &&
                                    <div className="w-1/2 z-10 rounded-lg my-2 px-2 text-black bg-white border border-gray-200 shadow-xl absolute">
                                        {
                                            searchResult[searchText].map((s) =>
                                                <div key={s}>
                                                    <p onClick={() => handleSearch(s)} className="my-2 rounded-md px-2 py-1 bg-gray-50 hover:bg-gray-100 flex items-center"><CiSearch className="w-4 mx-1" />{s}</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SearchBar;

