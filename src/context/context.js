import { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const context = createContext();

const InitialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};
let API = "https://hn.algolia.com/api/v1/search?";
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_Stories",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
          pg: data.page,
          isLoading: false,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  const removeObject = (id) => {
    dispatch({ type: "REMOVE_OBJECT", payload: id });
  };
  const searchPost = (event) => {
    dispatch({ type: "Search_Post", payload: event });
  };

  const handleNextPage = () => {
    dispatch({
      type: "Next_Page",
    });
  };
  const handlePrevPage = () => {
    dispatch({
      type: "Prev_Page",
    });
  };
  return (
    <>
      <context.Provider
        value={{
          ...state,
          removeObject,
          searchPost,
          handleNextPage,
          handlePrevPage,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};

export { context, AppProvider };
