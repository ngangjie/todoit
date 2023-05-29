import {collection} from "firebase/firestore";
import db from './Firebase'

const todoCollections = collection(db, 'todos')
export default todoCollections;