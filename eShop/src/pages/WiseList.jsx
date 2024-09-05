import List from "../components/List"
import { useSelector } from "react-redux"
function WiseList(){
    const listData = useSelector((state) => state.wishList.wishBox)
    console.log(listData, 'listData');
    
    return(
        <>
            <div className="w-full px-8 lg:px-20 py-10">
                {listData.map((item) => {
                    return(
                        <List 
                            key={item.id}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            price={item.price}
                            id={item.id}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default WiseList