import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";

function Home() {
  const API_URL = `https://fakestoreapi.com/products`;

  const {
    isLoading,
    isError,
    data: posts,
  } = useQuery({
    queryKey: ["products",],
    queryFn: async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    },

    // This will cache the data for 10 seconds
    // staleTime: 10000,

    // This will cache the data for 10 seconds
    // cacheTime: 10000,

    // This will refetch the data every 5 seconds
    // refetchInterval: 5000,

    // This will refetch the data only when the tab is focused
    // refetchOnWindowFocus: true,

    // This will refetch the data only when the network status is online
    // refetchOnMount: "always",

    // This will refetch the data only when the network status is offline
    // refetchOnReconnect: true,

    // This will refetch the data only when the network status is offline
    // refetchIntervalInBackground: true,
  });

  // Normal way of fetching data
  
  // const [loading, setLoading] = useState(false);
  // const [posts, setPosts] = useState([]);
  // const [iserror, setIsError] = useState("");

  // async function fetchProductData() {
  //   setLoading(true);

  //   try {
  //     const response = await fetch(API_URL);
  //     const data = await response.json();
  //     setPosts(data);
  //   } catch (error) {
  //     setLoading(true);
  //     setIsError(
  //       error.message || error.response.data.message || "Something went wrong"
  //     );
  //     setPosts([]);
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchProductData();
  // }, []);



  return (
    <div>
      <div className="h-20"></div>
      {isLoading ? (
        <div className=" h-screen w-full flex justify-center items-center flex-col gap-y-4 ">
          <Spinner />
          <p>Loading...</p>
        </div>
      ) : posts.length > 0 ? (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 max-w-6xl p-2 mx-auto gap-y-10 gap-x-5 min-h[80vh]">
          {posts?.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col gap-y-4 justify-center items-center text-lg font-semibold">
          <Spinner />
          {isError}
        </div>
      )}
    </div>
  );
}

export default Home;
