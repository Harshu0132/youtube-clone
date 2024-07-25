import { useEffect, useState } from "react";
import { LIVE_CHAT_COUNT, USER_IMG_URL } from "../utils/constants";
import LiveMessage from "./LiveMessage"
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "../utils/chatSlice"
import { generateDesc, generateName } from "../helper/randomGenerator"

const LiveChat = () => {
    const dispatch = useDispatch()
    const [replay, setReply] = useState("")
    const liveChat = useSelector(store => store.chat.liveChat)

    const replyHandler = () => {
        dispatch(addLiveChat({
            name: "Harshal",
            img: USER_IMG_URL,
            desc: replay,
        }))
        setReply("")
    }

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addLiveChat({
                name: generateName(),
                img: USER_IMG_URL,
                desc: generateDesc(),
            }))
        }, LIVE_CHAT_COUNT);
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="mx-3 px-3 box-border h-[28rem] flex flex-col-reverse w-full rounded-lg border border-gray-400 overflow-y-scroll">
                {liveChat &&
                    liveChat.map((live, i) => (
                        <LiveMessage key={live.name + i} message={live} />
                    ))
                }
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="w-full flex mx-3 my-2">
                    <input type="text" value={replay} className="border rounded-lg py-1 w-full border-gray-400 px-2" placeholder="Reply...." onChange={(e) => setReply(e.target.value)} />
                    <button disabled={!replay ? true: false} className="text-white rounded-lg bg-green-400 ms-1 px-4" onClick={replyHandler}>Reply</button>
                </div>
            </form>
        </>
    )
}

export default LiveChat;