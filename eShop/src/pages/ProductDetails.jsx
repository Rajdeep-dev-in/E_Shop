import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { useGetProductByIdQuery } from "../services/productApi";
import { LineWave } from "react-loader-spinner";
function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductByIdQuery(id);
  console.log(data, "product details");

  return (
    <>
      <main className="lg:px-36 px-10 py-10">
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
            <Product data={data} />
          </>
        )}
      </main>
    </>
  );
}

export default ProductDetails;
