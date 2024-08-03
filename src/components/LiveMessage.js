const LiveMessage = ({ message }) => {
    const { img, name, desc } = message
    return (
            <div className="flex items-start my-2">
                <img src={img} className="w-10 object-contain mx-2 mt-2" alt="user" />
                <div className="pt-2">
                    <h5 className="font-bold dark:text-slate-100">{name} </h5>
                    <p className="text-sm dark:text-slate-400">{desc}</p>
                </div>
            </div>

    )
}
export default LiveMessage;