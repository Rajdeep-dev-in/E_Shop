
function MainButton({children, onClick, className}){
    return(
        <>
            <button
                className={`px-2 py-2 bg-zinc-300 ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default MainButton