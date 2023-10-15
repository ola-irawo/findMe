import { useEffect, useMemo } from "react";
import { Hanko } from "@teamhanko/hanko-elements";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updateCount } from "../features/home/reducers/postSlice";
import { Post } from "../features";

const hankoApi = process.env.HANKO_API_URL;

const Home = () => {
  const dispatch = useDispatch()
  const count = useSelector(getPost)
  const num = 1

  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const incongi = "JTI1N0IlMjUyMnNlc3Npb24lMjUyMiUyNTNBJTI1N0IlMjUyMmV4cGlyeSUyNTIyJTI1M0ExNjk3MzU1NjQ1JTI1MkMlMjUyMnVzZXJJRCUyNTIyJTI1M0ElMjUyMjAwOWMxZTllLTFlOTgtNGRkMi1hYmFmLWMwMWU1ZWM1MzdlZCUyNTIyJTI1MkMlMjUyMmF1dGhGbG93Q29tcGxldGVkJTI1MjIlMjUzQXRydWUlMjU3RCUyNTdE"
  const tim = "JTI1N0IlMjUyMnNlc3Npb24lMjUyMiUyNTNBJTI1N0IlMjUyMmF1dGhGbG93Q29tcGxldGVkJTI1MjIlMjUzQXRydWUlMjUyQyUyNTIyZXhwaXJ5JTI1MjIlMjUzQTE2OTczNTUzMzQlMjUyQyUyNTIydXNlcklEJTI1MjIlMjUzQSUyNTIyZjJkYWJlY2MtODk3Ny00NTA4LTg4ZDItYzBlZTI4ZDY0ODdjJTI1MjIlMjU3RCUyNTdE"

  console.log(incongi === tim)
  console.log("tim" === "tim")

  return <div>
    <h1>{count}</h1>
    <button onClick={() => dispatch(updateCount(num))}>+</button>

    <Post />
  </div>
}

export default Home
