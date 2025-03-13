// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "Gung Raja", peran = "Penyihir";

if(nama.length === 0) {
    console.log("Nama wajib diisi!")
} else if(peran.length === 0) {
    console.log("Pilih Peranmu untuk memulai game!")
} else if (peran === "Ksatria"){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir"){
    console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    (console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`))
}

// CONTOH SOAL SELESAI

//code disini gunakan console.log untuk outputnya

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12
let bulan = 1
let tahun = 2001

switch (bulan) {
    case 1 :
        console.log(`${tanggal} januari ${tahun}`)
        break
    case 2 :
        console.log(`${tanggal} februari ${tahun}`)
        break
    case 3 :
        console.log(`${tanggal} maret ${tahun}`)
        break
    case 4 :
        console.log(`${tanggal} april ${tahun}`)
        break
    case 5 :
        console.log(`${tanggal} mei ${tahun}`)
        break
    case 6 :
        console.log(`${tanggal} juni ${tahun}`)
        break
    case 7 :
        console.log(`${tanggal} juli ${tahun}`)
        break
    case 8 :
        console.log(`${tanggal} agustus ${tahun}`)
        break
    case 9 :
        console.log(`${tanggal} september ${tahun}`)
        break
    case 10 :
        console.log(`${tanggal} oktober ${tahun}`)
        break
    case 11 :
        console.log(`${tanggal} november ${tahun}`)
        break
    default :
        console.log(`${tanggal} desember ${tahun}`)
}
