const Container = ({children}) => {
    return (
        <div className="bg-black-bb-mike flex-1 flex flex-col justify-between border-r border-gray-500/30">
            <div className="overflow-y-auto text-gray-400">
                <div className="flex mx-6 my-3 py-4 border-t border-gray-700">

                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container
