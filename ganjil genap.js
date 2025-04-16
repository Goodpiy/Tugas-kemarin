let platnomor = "D 4567 AB";
let tanggal = 9;

let angkaPlat = parseInt(platnomor.split(" ")[1]);

if (tanggal % 2 === 0) {
  console.log("Tanggal genap");
} else {
  console.log("Tanggal ganjil");
}

if (angkaPlat % 2 === 0) {
  console.log("Plat nomor genap");
} else {
  console.log("Plat nomor ganjil");
}