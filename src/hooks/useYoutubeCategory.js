import { useEffect } from "react";
import { YOUTUBE_CATEGORY } from "../utils/constants";
import { addYoutubeCategories } from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";

const useYoutubeCategory = () => {
    const dispatch = useDispatch()
    const youtubeCategories = useSelector(store => store.youtubeData.youtubeCategories)

    const fetchData = async () => {
        try {
            const data = await fetch(YOUTUBE_CATEGORY);
            const json = await data.json();
            dispatch(addYoutubeCategories(json.items))
        } catch (error) {
        }

    }

    useEffect(() => {
        !youtubeCategories && fetchData();
    }, [])
}

export default useYoutubeCategory;