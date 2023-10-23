import { db, storage } from "../services/firebase-config/firebase";
import Post from "./home/componets/post/Post";
import {
  addDoc,
  collection,
  onSnapshot,
  getDocs,
  serverTimestamp,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import userSlice from "./profile/reducers/userSlice";
import postSlice from "./home/reducers/postSlice";
import { addUser } from "./profile/reducers/userSlice";
import ProfileModal from "./profile/componets/profileModal/ProfileModal";
import Button from "../componets/Button";
import {
  selectAllUsers,
  getUser,
  getCurrentUser,
} from "./profile/reducers/userSlice";
import { getUsers } from "./profile/reducers/userSlice";
import ProfileCard from "./userProfile/componets/profileCard/ProfileCard";
import ProfileLayout from "./userProfile/componets/profileLayout/ProfileLayout";

export {
  db,
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  Post,
  addUser,
  getUsers,
  getCurrentUser,
  getUser,
  selectAllUsers,
  ProfileModal,
  Button,
  ProfileCard,
  ProfileLayout,
};
