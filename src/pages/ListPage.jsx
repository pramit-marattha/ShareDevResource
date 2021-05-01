import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/shared/Layout";
import CreateItem from "../components/CreateItem";
import ItemList from "../components/ItemList";
import JoinList from "../components/JoinList";
import Error from "../components/shared/Error";
import Loading from "../components/shared/Loading";
import { UserContext } from "../index";
import * as db from "../firestore";
import useSWR from "swr";

function ListPage({ location }) {
  const user = React.useContext(UserContext);
  const listId = location.pathname;
  const { data: list, error } = useSWR(listId, db.getList);

  if (error) return <Error message={error.message} />;
  if (!list) return <Loading />;

  return (
    <Layout>
      <section className="text-gray-500 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-col px-5 py-4 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-bold text-white">
              {list.name}
            </h1>
            <p className="mb-8 leading-relaxed">{list.description}</p>
            <CreateItem user={user} listId={listId} />
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex text-gray-300">
              <button className="bg-purple-500 inline-flex py-3 px-5 rounded-full items-center hover:bg-orange-600 hover:text-white focus:outline-none">
                <span className="flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-200 mb-1">
                    Share with everyone
                  </span>
                  <span className="title-font font-medium">📎 Copy Link</span>
                </span>
              </button>
              <Link
                to="/"
                className="bg-gray-800 inline-flex py-3 px-5 rounded-full items-center ml-4 hover:bg-gray-700 hover:text-white focus:outline-none"
              >
                <span className="flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Go back to Home Page
                  </span>
                  <span className="flex align-center title-font font-medium justify-center">
                    ✨Create List
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ItemList listId={listId} />
    </Layout>
  );
}

export default ListPage;
