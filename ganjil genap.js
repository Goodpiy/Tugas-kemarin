let platnomor = "[D 4567 AB]";
let tanggal = 9;

let angkaPlat = parseInt(platnomor.split(" ")[1]);

switch (true) {
  case tanggal % 2 === 0:
    console.log("Tanggal genap");
    break;
  default:
    console.log("Tanggal ganjil");
    break;
}
switch (true) {
  case angkaPlat % 2 === 0:
    console.log("Plat nomor genap");
    break;
  default:
    console.log("Plat nomor ganjil");
    break;
}
switch (true) {
  case (tanggal % 2 === 0 && angkaPlat % 2 === 0 || tanggal % 2 !== 0 && angkaPlat % 2 !== 0):
    console.log("Kendaraan boleh lanjut");
    break;
  default:
    console.log("Kendaraan di tilang");
    break;
}
