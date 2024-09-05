function Sidebar(){
    const sidebarItems = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes','Miscellaneous', 'Sapatos-Sapatem', 'Chintos-Sapatem', 'Sports']
    return(
        <>
            <div 
                className="w-72 h-full bg-zinc-400 px-5 py-4"
            >
                <div className=" flex flex-col gap-y-3">
                    {sidebarItems.map((item) => {
                        return(
                            <h3 key={item} className=" text-2xl text-zinc-800 cursor-pointer">
                                {item}
                            </h3>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Sidebar