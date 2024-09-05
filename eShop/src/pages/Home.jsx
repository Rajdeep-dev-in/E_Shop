import CatagoryCard from "../components/CatagoryCard";
import { useGetAllCatagoriesQuery } from "../services/productApi";
import { LineWave } from "react-loader-spinner";

function Home() {
  const { data, isLoading, isError } = useGetAllCatagoriesQuery();

  return (
    <>
      <main className="px-20 py-8">
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
            <div className="text-center">
              <h1 className=" font-bold text-zinc-700 text-3xl px-2">
                Categories for you!
              </h1>
            </div>
            <div className="flex justify-center items-center gap-4 flex-wrap my-8">
              {data?.map((item) => {
                return (
                  <CatagoryCard
                    key={item?.id}
                    id={item?.id}
                    name={item?.name}
                    image={item?.image}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Home;
