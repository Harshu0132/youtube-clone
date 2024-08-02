const LiveMessage = ({ message }) => {
    const { img, name, desc } = message
    return (
            <div className="flex items-start my-2">
                <img src={img} className="w-10 object-contain mx-2 mt-2" alt="user" />
                <div className="pt-2">
                    <h5 className="font-bold">{name} </h5>
                    <p className="text-sm">{desc}</p>
                </div>
            </div>

    )
}
export default LiveMessage;