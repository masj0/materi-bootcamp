var angka = [1, 2, 3, 4, 5, 6, 7, 8]

// Menghitung item array
console.log(angka.length)

// Mengkonversi array ke string
var angkaBaru = angka.toString()
console.log(typeof angkaBaru)

// Memisahkan item array 
console.log(angka.join(" * "))


// Menghapus item terakhir di array
angka.pop()
console.log(angka)


// Menambah item di array
angka.push(9)
console.log(angka)

// Menghapus item pertama  
angka.shift()
angka.shift()
angka.shift()
console.log(angka)

// Menambah item pertama 
angka.unshift(3)
angka.unshift(2)
angka.unshift(1)
console.log(angka)

angka[angka.length] = 10
console.log(angka)

// Menghapus dengan index spesifik
// delete angka[0]
console.log(angka)

// Merge array
var angka2 = [1,2,3,4,5]
var angka3 = [11, 12, 13, 14]
var result = angka.concat(1, [1,3,2,4,5])
console.log(result)


// Untuk memotong array
var resultAngka = angka.slice(3)
console.log(resultAngka)

// Menghapus array
angka.splice(0, 3)
console.log(angka)




