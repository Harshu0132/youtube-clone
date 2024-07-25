const Shimmer = () => {
    const shimmerContent = []

    const ShimmerJSX = (
        <div className="w-80 p-2">
            <div className="bg-gray-200 p-2">
                <div className='bg-white w-full h-40 rounded-md'>
                </div>
                <div className='bg-white w-full my-2 h-5 rounded-sm'>
                </div>
                <div className='bg-white w-8/12 my-2 h-5 rounded-sm'>
                </div>
                <div className='w-full h-5 flex'>
                    <div className="w-5/12 h-full rounded-sm bg-white me-2">
                    </div>
                    <div className="bg-white rounded-sm w-4/12 h-5 ">
                    </div>
                </div>
            </div>
        </div>
    )

    for (let i = 1; i <= 6; i++) {
        shimmerContent.push(ShimmerJSX)
    }

    return (
        <div className="flex flex-wrap -z-10">
            {
                shimmerContent.map((s, i) => <div key={s + i}>{s}</div>)
            }
        </div>
    )
}

export default Shimmer;
