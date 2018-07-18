var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(arr) {
    arr.splice(1, 1, "Roman Alamsyah Elsharawy");
    arr.splice(2, 1, "Provinsi Bandar Lampung");
    arr.splice(4, 1, "Pria","SMA Internasional Metro");
    console.log(arr)
var tanggal = arr[3]
var tanggalsplit = tanggal.split('/')

var date = tanggalsplit[0]
var month = tanggalsplit[1]
var year = tanggalsplit[2]


if(date > 1 && date < 32) {
switch(month) {
    case '01': month = 'Janari';break;
    case '02': month = 'Februari';break;
    case '03': month = 'Maret';break;
    case '04': month = 'April';break;
    case '05': month = 'Mei';break;
    case '06': month = 'Juni';break;
    case '07': month = 'Juli';break;
    case '08': month = 'Agustus';break;
    case '09': month = 'September';break;
    case '10': month = 'Oktober';break;
    case '11': month = 'November';break;
    case '12': month = 'Desember';break;}
}
console.log(month)
//Sorting secara descending
tanggalsplit.sort(function(a, b){return b - a});
console.log(tanggalsplit)
//Join
tanggalsplit = tanggal.split('/')

var tanggalJoin = tanggalsplit.join('-');
console.log(tanggalJoin)
//Menghapus kelebihan karakter
var batasAngka = arr[1].slice(0,14)
console.log(batasAngka)
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */