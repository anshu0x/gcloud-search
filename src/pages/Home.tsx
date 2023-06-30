import MoreInfo from "@/components/MoreInfo";
import { Data, Results } from "@/types";
import { maximizeParagraph } from "@/utils";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

const Home = () => {
  const [news, setNews] = useState<Data[]>([]);
  const fetchNews = async () => {
    try {
      const url =
        "https://discoveryengine.googleapis.com/v1alpha/projects/1030195965056/locations/global/collections/default_collection/dataStores/newsearchengine_1687959483479/servingConfigs/default_search:search";
      //  write accessTOken after Bearer
      let accessToken = "";
      const headers = {
        Authorization: `Bearer ${accessToken}}`,
        "Content-Type": "application/json",
      };
      const data = {
        query: values.search,
        page_size: "5",
        offset: 0,
      };
      const response = await axios.post(url, data, { headers });
      console.log(response.data.results);
      setNews(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      search: "Top 10 news about semiconductor shortage",
    },
    onSubmit: (values) => {
      console.log(values);
      fetchNews();
    },
  });
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState({});
  const OpenDialog = (data: Data) => {
    setData(data);
    setShowMore(true);
  };
  return (
    <div className="relative">
      <MoreInfo data={data} isOpen={showMore} setIsOpen={setShowMore} />
      <div className="bg-gradient-to-r from-blue-200 to-green-200 flex items-center justify-start h-20 p-4 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full h-full"
        >
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              value={values.search}
              onChange={handleChange}
              name="search"
              id="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-3.5"
              placeholder="What industry are most impacted by semiconductor shortage?"
              required
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:p-4 p-6">
        {[...Array(10)].map((item) => (
          <div
            key={item?.id}
            className="max-w-md hover:bg-slate-100 cursor-pointer hover:scale-105 rounded overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4">
              <p className="font-semibold text-2xl  mb-2">
                Maersk North America Market Update - May 2023 - Maersk
                {item?.document?.structData?.title}
              </p>
              <p className="bg-blue-100 text-blue-600 text-sm w-fit font-medium my-4 mr-2 px-2.5 py-2 rounded">
                External
              </p>
              <p className="text-gray-700 text-base">
                {maximizeParagraph(
                  "News Maersk North America Market Update - May 2023 Share LinkedIn Facebook Twitter Email Copy link WeChat Ocean Updates Our North American gateway terminals are mainly stable at this time, and we have sufficient availability of dry and reefer equipment to cover customer requirements. After the May 1 Labor Day holiday in Asia, we have seen a return of pre-holiday demand levels. Sea-Intelligence reported Maersk as the most reliable carrier in the first quarter of 2023, with schedule reliability of 63.6%.\n\nSome vessels on our services routing into the U.S. East Coast via the Panama Canal have been impacted as a result of low water levels. The Panama Canal Authorityâ\u0080\u0099s May 3 advisory stated that, based on the present and projected level"
                )}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <p className="text-base font-medium my-4 ">Topics</p>
              <div className="flex flex-wrap w-full flex-1 gap-2">
                {[...Array(3)].map((_) => (
                  <span className="inline-block border rounded-full px-4 py-1.5 text-sm font-semibold text-gray-700">
                    Photography
                  </span>
                ))}
              </div>
              <button
                onClick={() => OpenDialog(item)}
                className="text-blue-800 my-4 border px-6 w-fit py-2 rounded-full border-blue-800"
              >
                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
