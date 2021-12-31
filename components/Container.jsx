const Container = ({children}) => {
    return (
        <div className="bg-gray-700-mike flex-1 flex flex-col justify-between border-r border-gray-500/30">
            <div className="overflow-y-auto">
            {children}
            </div>
        </div>
    )
}

export default Container
