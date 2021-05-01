import React, { useState } from "react";
import * as db from "../../firestore";
import Error from "../shared/Error";

function CreateItem({ user, listId }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmiting] = useState(false);

  async function handleCreateItem(event) {
    try {
      event.preventDefault();
      setSubmiting(true);
      const item = { name, link };
      await db.createTopicListItem({ user, listId, item });
      setName("");
      setLink("");
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmiting(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleCreateItem}
        className="flex lg:w-5/6 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0"
      >
        <input
          className="flex-grow w-full bg-purple-800 rounded border border-gray-700 text-white focus:outline-none focus:border-purple-800 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="name"
          placeholder="Topic name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
        />
        <input
          className="flex-grow w-full bg-purple-800 rounded border border-gray-700 text-white focus:outline-none focus:border-purple-800 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="link"
          placeholder="https://www."
          type="url"
          onChange={(event) => setLink(event.target.value)}
          value={link}
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          {submitting ? "Creating..." : "➕Create"}
        </button>
      </form>
      <Error message={error} />
    </>
  );
}

export default CreateItem;
