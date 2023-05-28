
export default function redirectWa() {
  const message = "halo, saya ingin memesan barang ini! apakah masih tersedia?"
  const url = `https://wa.me/6281312168535?text=`

  return url + encodeURIComponent(message) ;
}