import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updateCount } from "../features/home/reducers/postSlice";
import { Post } from "../features";

const hankoApi = process.env.HANKO_API_URL;

const Home = () => {
  const dispatch = useDispatch()
  const count = useSelector(getPost)
  const num = 1

  return <div>
    {/* <h1>{count}</h1>
    <button onClick={() => dispatch(updateCount(num))}>+</button> */}
    <Post />
  </div>
}

export default Home
