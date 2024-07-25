import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { addSuggestion } from "../utils/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_ICON, SEARCH_LIST_BY_KEYWORD, YOUTUBE_API_KEY } from "../utils/constants";
import { addSearchVideos } from "../utils/videoSlice";
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchText, setSearchText] = useState("dsfa");
    const searchResult = useSelector(store => store.search.suggestion)
    const [showSuggestion, setShowSuggestion] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const getSearchSuggestion = async () => {
        try {
            if (searchText.length === 0 || searchResult[searchText]) return
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async () => {
        if (searchText.length === 0) return
        const data = await fetch(SEARCH_LIST_BY_KEYWORD + searchText + "&key=" + YOUTUBE_API_KEY);
        const json = await data.json()
        dispatch(addSearchVideos(json.items))
        navigate("/results?search_query=" + searchText)

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
                    <input onFocus={() => setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)} type="text" className='border border-gray-500 rounded-l-full px-3 w-3/4  py-1' value={searchText} placeholder='Search' onChange={(e) => setSearchText(e.target.value)} />
                    <button className='border border-gray-500 bg-gray-200 px-3 py-2 rounded-r-full' onClick={handleSearch}>
                        <img className='object-cover w-4' src={SEARCH_ICON} alt="" />
                    </button>
                    <br />

                </div>
                <div className="flex justify-center">
                    {
                        showSuggestion && (
                            <>
                                {
                                    searchResult[searchText] && <div className="w-1/2 rounded-lg my-2 px-2 text-black bg-white border border-gray-200 shadow-xl absolute">
                                        {
                                            searchResult[searchText].map((s) => <p key={s} className="my-2 rounded-md px-2 py-1 bg-gray-50 hover:bg-gray-100 flex items-center"><CiSearch className="w-4 mx-1" />{s}</p>)
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

