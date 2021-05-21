import React, { useState, useEffect } from "react";
import * as db from "../../firestore";

function ItemList({ listId }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    return db.subscriptionTopicListItems(listId, {
      next: (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      },
    });
  }, [listId]);
  return (
    <section className="text-gray-500 body-font bg-gray-900">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <Item key={item.id} listId={listId} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ listId, item }) {
  const { id, image, link, author, name, created } = item;
  const date = created
    ? created.toDate().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  function handleDeleteItem() {
    if (window.confirm("Hold up!! Are you sure you want to delete this ?")) {
      db.deleteTopicListItem(listId, id);
    }
  }

  return (
    <div className="xl:w-2/6 md:w-1/2 p-4">
      <div className="bg-green-800 p-6 rounded-lg">
        <h2 className="text-lg text-white font-medium title-font mb-4 flex items-center justify-center">
          ✨ {name} ✨
        </h2>
        <a href={link} target="_blank" rel="noopener noreferer">
          <img
            className="h-40 rounded-full w-full object-cover object-center mb-4"
            src={image}
            alt={name}
          />
        </a>

        <h3 className="tracking-widest text-orange-500 text-xs font-medium title-font">
          {author.username}
        </h3>
        <span className="leading-relaxed text-base">Posted at {date}</span>

        <div className="flex items-center justify-center pt-4">
          {/* <button
            onClick={handleDeleteItem}
            className="inline-flex text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-300 rounded text-lg"
          >
            🗑️ Delete
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
