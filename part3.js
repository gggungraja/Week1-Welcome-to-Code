// function hitungTotal(harga, jumlah) {
//     console.log("Input:", { harga, jumlah });
    
//     const total = harga * jumlah;
//     console.log("Total:", total);
    
//     if (total > 1000000) {
//         console.warn("Transaksi besar terdeteksi");
//     }
    
//     return total;
// }

// // Aplikasi penentu kelulusan
// let nilai = 75
// if (nilai > 60 ) {
//     console.log("ANDA LULUS")
// } else {
//     console.log("ANDA TIDAK LULUS")
// }


// //Aplikasi saran saat hujan
// let cuaca = "mendung"
// if (cuaca === "cerah") {
//     console.log("Waktunya Piknik")
// } else if (cuaca === "mendung"){
//     console.log("Bawa payung jika ingin keluar")
// } else {
//     console.log("Cuaca tidak dapat diprediksi")
// }    


// let umur = 17
// let status = umur >= 18 ? "dewasa" : "remaja"

// console.log(status)

// let usia = 12
// let punyaSIM = 0

// if ( usia >= 17 && punyaSIM ) {
//     console.log("Anda boleh mengemudi")
// } else {
//     console.log("Anda tidak boleh mengemudi")   
// }

// let saldo = 100000
// let verifikasi = 0
// let limitHarian = false

// if (saldo >= 50000 && verifikasi && !limitHarian) {
//     console.log("Transaksi dapat diproses")
// } else {
//     console.log("Transaksi tidak dapat diproses")
// }



// const password = "grgr 23111"


// //password harus sepanjang 6 charackter
// if(password.length >= 6) {
//     if (password.indexOf('!')) {
//     } else {
//         console.log("Password harus memmiliki symbol")
//     }
// } else {
//     console.log("Password Minimal 6 Karakter")
// }

// if(password.indexOf (' ') === -1 ) {
// } else {
//     console.log("Password tidak boleh ada spasi")
// }

// let age = 21
// let gender = 'male'

// if(gender === 'male' && age >= 19) {
//     console.log("Sudah legal")
// }

// const password = "gung raja"

// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("password valid")
// } else {
//     console.log("Password Invalid, Harus lebih dari 6 karakter dan tidak boleh ada spasi")
// }

// const role = 'user'

// if(role === 'admin' || role === 'spv') {
//     console.log('boleh mengakses')
// } else {
//     console.log('akses ditolak')
// }


// const role = 'admin'

// if(role !== 'admin') {
//     console.log('tidak boleh mengakses')
// } else {
//     console.log('boleh mengakses')
// }

// SWITCCH BREAK = JIKA IF ELSE TERLALU BANYAK

// const balonku = 'kuning'

// switch(balonku){
//     case 'merah':
//         console.log("warna merah")
//         break
//     case 'hijau':
//         console.log("dor")
//         break
//     default:
//         console.log("bukan balon saya")
// }

// let metodePembayaran = "kartu"

// if(metodePembayaran === "transfer" || metodePembayaran === "kartu kredit" || metodePembayaran === "ewallet") {
//     console.log("Metode pembayaran diterima")
// }

// let namaPengguna = "gungraja"
// let displayName = namaPengguna || "Tamu"

// //ARRAY

// let warna = ['hijau', 'kuning', 'kelab', 'bu']

// let angka = [1,3,4,6,9]

// let playlist = ['glimpse of us', 'at the end', ]


// //for loop
// for (let i = 0; i<= 10; i+=2){
//     console.log('saya ada di dalam loop')
//     console.log(i)
// }

// const animals = ['cat', 'deer', 'hog', 'koala', 'zebra']

// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }



// const pilihan ='ABCD'

// for (let i = 1; i<=10; i++) {
//     console.log(`${i}. Soal nomor ${1}:`)
//     for (let j = 0; j < pilihan.length; i++){
//         console.log(`${pilihan[j]}. Pilihan Jawaban`)
//     }
// }

// const studentRow = [
//     ['Olivia', 'Liam', 'Emma', 'Noah'],
//     ['Amelia', 'Oliver', 'Ava', 'Elijah'],
//     ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
// ]

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i]
//     console.log(`Seat Row #${i+1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log("   "+ row[j])
//     }
// }

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// const password = 'Pass123'

// let guess = prompt('enter the password')
// while (guess !== password) {
//     guess = prompt('enter the password')
// }
// alert('congrats! the password is correct')

// let input = prompt('hei, say something!')
// while(true) {
//     input = prompt(input)
//     if(input === "stop"){
//         break
//     }
// }
// alert('ok')

// for (let i = 0; i < 10000; i++){
//     console.log(i)
//     if(i === 100) break
// }

// // GAME TEBAK TEBAKAN ANGKA DENGAN WHILE
// let maximum = parseInt(prompt('Masukan nilai maksimal!'))
// while(!maximum) {
//     maximum = parseInt(prompt('Masukan nilai maksimal!'))

// }

// const targetNum = Math.floor(Math.random()* maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Isi tebakan pertama kamu!'))
// let attemps = 1

// while(parseInt(guess) !== targetNum) {

//     attemps++

//     if (guess > targetNum) {
//         guess = prompt('Terlalu tinggi! tebak lagi: ')
//     } else {
//         guess = prompt('Terlalu rendah! tebak lagi: ')
//     }
// }

// alert(`Selamat Tebakan anda benar! Dengan percobaan ${attemps} kali` )


const fruits = ['Banana', 'Orage', 'Apple', 'Mango']
for (let fruit of fruits) {
    console.log(`Buah ${fruit}`)
}