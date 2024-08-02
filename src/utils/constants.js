export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY



export const SEARCH_ICON = "https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"

export const USER_IMG_URL = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

export const LIVE_CHAT_COUNT = 1000


// Youtube API

export const YT_SUGGESTION_API_URL = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=12&chart=mostPopular&regionCode=IN&key=" + YOUTUBE_API_KEY

export const SEARCH_LIST_BY_KEYWORD = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="

export const YOUTUBE_CATEGORY = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=" + YOUTUBE_API_KEY

export const YOUTUBE_VIDEOS_BY_CHANNEl_ID = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=' + YOUTUBE_API_KEY + '&id='