import { resStorage } from "@/network/firebase_config";
import { getDownloadURL, ref, } from "firebase/storage";

export default async function getImages() {
  var refs = ref(resStorage, 'test/products/IMG.png');
  var imageLink = await getDownloadURL(refs);
  return imageLink;
}