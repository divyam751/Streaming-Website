import { useEffect } from "react";
import "./App.css";
import { fethDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fethDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <div>
      App
      {url?.total_pages}
    </div>
  );
}

export default App;
