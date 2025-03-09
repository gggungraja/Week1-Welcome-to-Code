const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Buat password: ", (password) => {
    if (password.length >= 6) {
        console.log("Password salah");
    } else {
        console.log("Password minimal 6 karakter");
    }

    if (password.includes(" ")) {
        console.log("Tidak boleh ada spasi");
    } else {
        console.log("Bagus, password tidak ada spasi");
    }

    rl.close();
});
