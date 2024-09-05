import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useGetProductsByNameQuery } from "../services/productApi";
import { LineWave } from "react-loader-spinner";
import { useSelector } from "react-redux";

function AllProducts() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductsByNameQuery(id);
  console.log(data, 'is data')
  const wishList = useSelector((state) => state.wishList.wishBox)
  console.log(wishList, 'toggle wishlist')

  return (
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
            <Sidebar />
            <div className="w-full h-full  px-5">
              <div className="flex justify-start items-start gap-x-4 gap-y-8 mt-5 flex-wrap">
                {data?.map((item) => {
                  return <ProductCard key={item?.id} data={item} wishListData={wishList} />;
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default AllProducts;
