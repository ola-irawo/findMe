import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updateCount } from "../features/home/reducers/postSlice";

const hankoApi = process.env.HANKO_API_URL;

const Home = () => {
  const dispatch = useDispatch()
  const count = useSelector(getPost)
  const num = 1

  console.log(count)
  return <div>
    <h1>{count}</h1>
    <button onClick={() => dispatch(updateCount(num))}>+</button>
  </div>
}

export default Home
