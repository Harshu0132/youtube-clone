import { useEffect, useState } from "react";
import { LIVE_CHAT_COUNT, USER_IMG_URL } from "../utils/constants";
import LiveMessage from "./LiveMessage"
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "../utils/chatSlice"
import { generateDesc, generateName } from "../helper/randomGenerator"
import { IoIosClose } from "react-icons/io";

const LiveChat = () => {
    const dispatch = useDispatch()
    const [replay, setReply] = useState("")
    const [showChat, isShowChat] = useState(true)
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
            <div className="text-center relative">
                {
                    showChat ?
                        <>
                            <div className="absolute right-4 top-2">
                                {
                                    showChat && <IoIosClose onClick={() => isShowChat((val) => !val)} className="w-8 h-auto hover:bg-slate-300 rounded-full cursor-pointer" />
                                }
                            </div>
                            <div className="md:mx-3 mx-0 mt-3 md:mt-0 px-3 box-border text-start h-[28rem] flex flex-col-reverse w-full rounded-lg border border-gray-400 overflow-y-scroll">

                                {liveChat &&
                                    liveChat.map((live, i) => (
                                        <LiveMessage key={live.name + i} message={live} />
                                    ))
                                }
                            </div>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="w-full flex mx-3 my-2">
                                    <input type="text" value={replay} className="border dark:text-slate-400 dark:bg-slate-800 rounded-lg py-1 w-full border-gray-400 px-2" placeholder="Reply...." onChange={(e) => setReply(e.target.value)} />
                                    <button disabled={!replay ? true : false} className="text-white dark:bg-slate-400 rounded-lg bg-green-400 ms-1 px-4" onClick={replyHandler}>Reply</button>
                                </div>
                            </form>
                        </>
                        :
                        <button onClick={() => isShowChat((val) => !val)} className="bg-gray-300 md:mt-0 mt-3 text-center px-2 py-1  rounded-lg mb-2 dark:bg-slate-800">Show Chat</button>
                }



            </div>
        </>
    )
}

export default LiveChat;