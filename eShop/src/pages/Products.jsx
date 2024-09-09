import { useGetAllProductsQuery } from "../services/productApi"
import { LineWave } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";


function Products(){
    const {data, isLoading, isError} = useGetAllProductsQuery()
    const wishList = useSelector((state) => state.wishList.wishBox)
    const cartList = useSelector((state) => state.wishList.cartBox)
    console.log(cartList, 'cart')
    return(
    <>
      <main className="flex h-screen">
        {isLoading ? (
          <>
            <div className="w-full h-full flex justify-center items-center">
              <LineWave
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-full  px-5">
              <div className="flex justify-start items-start gap-x-4 gap-y-8 mt-5 flex-wrap">
                {data?.map((item) => {
                  return <ProductCard key={item?.id} data={item} wishListData={wishList} cartListData={cartList} />;
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Products