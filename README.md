`Nama : Michael Krisna cahyadi`

`NIM : 00000033738`

`Kelas: AL`

<hr/>

# GameVerse NFT Marketplace

DApps yang saya bangun adalah <b>GameVerse</b>, sebuah Marketplace NFT Game berbasis EVM yang memanfaatkan fitur smart contract untuk melakukan transaksi secara otomatis tanpa perantara. DApps ini memanfaatkan fitur-fitur dari decentralized applications, antara lain:

1. Byzantine Fault Tolerant: dApps ini dibangun berbasis EVM dan karena konsensus pada blockchain ethereum adalah proof of work maka konsensus memiliki sifat Byzantine Fault Tolerance (BFT).
2. No Choke Point: smart contract dApps GameVerse NFT Marketplace adalah `GameVerse.sol` dan `GameVerseNFT.sol` yang keduanya di-deploy di Kovan Testnet, karena di-deploy di jaringan blockchain, maka tidak ada choke point, seperti single point of failure.
3. Transparent: smart contract serta source code merupakan open source dan transaksi dapat dilihat di https://kovan.etherscan.io/ sehingga dapat dikatakan sudah transparan
4. Scalable: dApps yang dikembangkan berbasis EVM sehingga dapat digunakan di berbagai blockchain dan menjadi scalable.

Framework, library, dan tools yang digunakan dalam pengembangan <b>GameVerse</b>:
- Frontend:
  - ReactJS
  - MaterialUI
  - React Bootstrap
- Backend:
  - Hardhat
- Integrating frontend and backend:
  - useDapp
  - web3
  - ethers
- Testing:
  - Remix IDE

## Cara Penggunaan

1. Clone repository github "GameVerse NFT MarketPlace"
```
git clone https://github.com/krisnamic/GameVerse-NFT-Marketplace.git
```

2. Masuk ke direktori project
```
cd GameVerse-NFT-Marketplace
```

3. Install dependency project
```
npm install
```

4. Compile smart contract dengan perintah hardhat sebagai berikut
```
npx hardhat compile
```

5. Jalankan dApps GameVerse NFT Marketplace
```
npm start
```

## Penggunaan Fitur

1. Pastikan extension metamask (https://metamask.io/download.html) sudah ter-install terlebih dahulu di browser pilihan kita
2. Pilih akun wallet yang ingin digunakan dan ubah jaringannya menjadi `Kovan Test Network`
![metamask](https://user-images.githubusercontent.com/53071013/145347127-8d85cc7b-79b3-4f03-aca9-4c7eb4549aeb.png)
3. Connect akun metamask dengan dApps melalui tombol dibawah ini
![homePage](https://user-images.githubusercontent.com/53071013/145347636-c60e55ce-30a2-425a-8577-120908321d5c.png)
4. Pilih akun yang diinginkan untuk melakukan transaksi dan tekan tombol `connect` pada pop-up extension metamask
![connect1](https://user-images.githubusercontent.com/53071013/145350073-8b4cb9bb-41e5-4cee-8279-7e4676b4fa31.png)
![connect2](https://user-images.githubusercontent.com/53071013/145350084-2d765104-5fdb-4bec-ade1-bd3f9bb4bc2d.png)
5. Pilih NFT yang ingin dibeli dengan menekan tombol `buy` dan konfirmasi melalui pop-up extension metamask
![buy1](https://user-images.githubusercontent.com/53071013/145351545-6fb52636-58ae-4263-b8d8-9cfe4f86f0b1.png)
![confirm](https://user-images.githubusercontent.com/53071013/145351849-499ec23e-2189-41a7-878c-002eabfab7ae.png)
6. Jika ETH belum terdapat di Kovan Testnet maka kita dapat mengakses https://faucets.chain.link/kovan untuk mendapat 0.1 test ETH
![faucet](https://user-images.githubusercontent.com/53071013/145353256-95562c7e-22e4-4c53-b614-ec2afc8e3dff.png)
![getTest](https://user-images.githubusercontent.com/53071013/145353261-4d159065-d287-45d1-85b5-782937677ec3.png)
7. Setelah transaksi berhasil kita dapat mengecek detail transaksi melalui tombol dibawah ini untuk diarahkan ke etherscan.io
![success](https://user-images.githubusercontent.com/53071013/145353718-87796203-1078-42cf-bc6e-e7359910fb04.png)
![transaction](https://user-images.githubusercontent.com/53071013/145353724-f75cee4b-ac43-4ea5-94d4-464ff76953c3.png)
8. Dapat dilihat bahwa transaksi berhasil dilakukan sehingga NFT sudah terkirim ke wallet metamask dan terlihat juga history transaksi yang pernah dilakukan pada dApps GameVerse pada bagian bawah halaman
![history](https://user-images.githubusercontent.com/53071013/145353954-c32c6ab4-17df-4460-a63e-a99fa7ce1adb.png)
dan kita juga dapat mengecek detail seluruh transaksi yang telah dilakukan melalui address contract (0x95caa1000f1376fa305489f0b943cf7a39129213) yang dapat diakses melalui https://kovan.etherscan.io/address/0x95caa1000f1376fa305489f0b943cf7a39129213
![contract](https://user-images.githubusercontent.com/53071013/145354133-be41942f-b94e-4f8d-bd4f-6bc5a094c625.png)

## Cara Melihat NFT Game yang telah Dibeli

1. Pastikan aplikasi metamask (https://metamask.io/download.html) sudah ter-install terlebih dahulu di smartphone kita
2. Pilih `import NFT` pada tab `NFT` dan isi address dengan address smart contract NFT (0x1Caa4BfF250bB70cC24219aBFE98A10A07347614) dan ID dengan Token ID yang terdapat pada detail transaksi di etherscan.io
![transaction](https://user-images.githubusercontent.com/53071013/145356712-3d127036-3d63-4208-8423-cb0c62d2fca9.png)
karena pada transaksi yang dilakukan terakhir memiliki Token ID yaitu 7 make kita masukan pada kolom ID dengan nilai 7
![nft1](https://user-images.githubusercontent.com/53071013/145358150-e3045887-a42b-477d-bed3-667b6ad4cb62.jpg)
3. Tunggu sesaat dan lihat kembali pada bagian NFT wallet metamask mobile, maka akan tertampilkan NFT yang telah dibeli oleh kita
![nft2](https://user-images.githubusercontent.com/53071013/145358253-15222e54-ffdc-4aa5-8a8f-d91b1ecd1155.jpg)
