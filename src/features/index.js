import { db } from "../services/firebase-config/firebase";
import Post from "./home/componets/post/Post";
import {
  addDoc,
  collection,
  onSnapshot,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import userSlice from "./profile/reducers/userSlice";
import postSlice from "./home/reducers/postSlice";
import { addUser } from "./profile/reducers/userSlice";
import ProfileModal from "./profile/componets/profileModal/ProfileModal";
import Button from "../componets/Button";
import {
  selectAllUsers,
  user,
  getCurrentUser,
} from "./profile/reducers/userSlice";
import { getUsers } from "./profile/reducers/userSlice";

export {
  db,
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  Post,
  addUser,
  getUsers,
  getCurrentUser,
  user,
  selectAllUsers,
  ProfileModal,
  Button,
};
