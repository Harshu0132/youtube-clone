export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" + YOUTUBE_API_KEY

export const SEARCH_LIST_BY_KEYWORD = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="

export const SEARCH_ICON = "https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"

export const USER_IMG_URL = "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="

export const LIVE_CHAT_COUNT = 1000