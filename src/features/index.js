import { db } from "../services/firebase-config/firebase";
import Post from "./home/componets/post/Post";
import { addDoc, collection, onSnapshot, getDocs } from "firebase/firestore";
import userSlice from "./profile/reducers/userSlice";
import postSlice from "./home/reducers/postSlice";
import { addUser } from "./profile/reducers/userSlice";
import ProfileModal from "./profile/componets/profileModal/ProfileModal";
import Button from "../componets/Button";

export {
  db,
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  Post,
  addUser,
  ProfileModal,
  Button,
};
