import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { addSuggestion } from "../utils/searchSlice"
import { useDispatch, useSelector } from "react-redux";
import { YT_SUGGESTION_API_URL } from "../utils/constants";
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ showSearchBar }) => {
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
    }, [showSearchBar])

    useEffect(() => {
        const i = setTimeout(() => {
            getSearchSuggestion()
        }, 300);
        return () => { clearTimeout(i) }
    }, [searchText])

    return (
        <>
            <div className={'col-span-8 my-auto md:block' + (showSearchBar ? " block" : " hidden")}>
                <div className="flex">
                    <input
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={handleBlur}
                        type="text" className='border dark:bg-gray-950 dark:text-slate-200 border-gray-500 rounded-l-full px-3 w-3/4  py-1' value={searchText} placeholder='Search' onChange={(e) => setSearchText(e.target.value)} />
                    <button className='border border-gray-500 dark:bg-slate-800 bg-gray-200 px-3 py-[8.5px] rounded-r-full' onClick={() => handleSearch(searchText)}>
                        <IoSearchOutline className='w-6 h-auto dark:text-slate-400' />
                    </button>
                    <br />
                </div>
                <div className="flex justify-center">
                    {
                        showSuggestion && (
                            <>
                                {
                                    searchResult[searchText] &&
                                    <div className="w-1/2 z-10 rounded-lg px-2 text-black bg-white border border-gray-200 shadow-xl absolute">
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

