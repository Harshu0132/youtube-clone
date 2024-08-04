import { useEffect, useRef, useState } from "react";

const Practical = () => {
    const [cnt, setCnt] = useState(0)
    const cntRef = useRef(0)
    const timeoutRef = useRef()


    const handleCnt = function () {
        if (cntRef.current !== cnt) return
        console.log("cntRef.current.........>", cntRef.current)
        console.log("cnt.........>", cnt)
        setCnt(cnt + 1)
    }

    useEffect(() => {
        handleCnt()
        return () => clearTimeout(timeoutRef.current)
    }, [])


    const handleClick = function () {
        timeoutRef.current = setTimeout(() => {
            handleCnt()
        }, 400);
    }

    useEffect(() => {
        cntRef.current = cnt
    }, [cnt])

    return (
        <div>
            {cnt}
            <br />
            <button onClick={handleClick}>Btn</button>
        </div>
    )

}

export default Practical;