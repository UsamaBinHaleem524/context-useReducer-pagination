import React, { useContext } from "react";
import { context } from "../context/context";
import Loader from "./Loader";


const Stories = () => {
  const { hits, isLoading, removeObject } = useContext(context);

  if (isLoading) {
    return (
      <Loader/>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {hits.map((item) => {
        const { title, author, num_comments, url, objectID } = item;

        return (
          <div
            key={objectID}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">
              {author} | {num_comments} comments
            </p>
            <div className="flex space-x-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
              <button
                onClick={() => removeObject(objectID)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
