import { useEffect } from "react";
import { YOUTUBE_CATEGORY } from "../utils/constants";
import { addYoutubeCategories } from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";

const useYoutubeCategory = () => {
    const dispatch = useDispatch()
    const youtubeCategories = useSelector(store => store.youtubeData.youtubeCategories)

    const fetchData = async () => {
        const data = await fetch(YOUTUBE_CATEGORY);
        const json = await data.json();
        dispatch(addYoutubeCategories(json.items))
    }

    useEffect(() => {
        !youtubeCategories && fetchData();
    }, [])
}

export default useYoutubeCategory;