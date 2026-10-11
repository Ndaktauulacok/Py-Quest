# PyQuest — Update 17 (Edisi Pertandingan)

## 1. Multiplayer dibaiki sepenuhnya
- **Kesemua 6 game boleh dimain multiplayer**: Pertempuran Kuiz, Buru Bug, Detektif Debug, Peti Besi Kod, Lumba Turbo, Wira Galaksi. Setiap game ada kad soalan sendiri (baris kod boleh diklik, kad kunci, gear, alien).
- **Hos pilih peranan** (untuk KEDUA-DUA mod "Hos mengawal" dan "Ikut kadar sendiri"):
  - **Main sekali** — hos menjawab dan masuk papan markah, sambil masih mengawal bilik.
  - **Tengok sahaja** — hos tidak menjawab; hanya memantau, tunjuk jawapan, skip dan tamatkan.
- **Butang Skip soalan untuk hos**:
  - Mod hos mengawal: semua terus ke soalan seterusnya, tiada mata untuk soalan itu.
  - Mod kadar sendiri: **Pemantau soalan** menunjukkan berapa pemain pada setiap soalan, dengan butang ⏭ untuk skip mana-mana soalan bagi semua.
- **Markah adil**: dalam mod hos mengawal, masa jawapan dicop oleh pelayan Firebase dan markah dikira oleh hos (jawapan pantas = lebih mata, tidak boleh ditipu, tiada markah berganda).
- **Keluarkan pemain** (butang ✕) — pemain yang dikeluarkan tidak boleh masuk semula.
- **Sambung semula**: jika halaman dimuat semula / telefon terputus, buka Multiplayer → "Kembali ke bilik" (hos & pemain).
- Amaran "Hos di luar talian", bilangan pemain dalam talian, papan markah dengan bilangan betul.
- **Main lagi dengan game lain**: di skrin keputusan, hos boleh pilih game & tahap seterusnya.
- XP **dan syiling** ditambah ke profil selepas setiap permainan multiplayer (sekali sahaja, walaupun halaman dimuat semula). Pusingan game baharu dikira dalam statistik & pencapaian.
- Kekunci 1–9 untuk menjawab, Enter untuk seterusnya.

## 2. Streak Python (gaya TikTok)
- Setiap hari bermain = +1 hari streak, dan **telur python membesar**: Telur (0) → Telur Retak (3) → Baru Menetas (5) → Anak Python (7) → Python Muda (14) → Python Dewasa (30) → Raja Python (60) → Python Legenda (100 hari).
- Mood python: **kenyang** (sudah main hari ini), **lapar** (belum main hari ini, ada kiraan masa sehingga tengah malam), **sakit** (terlepas semalam — main hari ini untuk selamatkan; penyelamat boleh dipakai sekali setiap 7 hari), **mati** (terlepas lebih lama — streak hilang, telur baharu bila main semula).
- Kad python besar di papan pemuka, pil python di bar atas (klik untuk lihat semua peringkat), 7 hari terakhir ditanda api 🔥.
- **Animasi sambutan** selepas pusingan pertama setiap hari: "Streak +1!", "Telur sudah menetas!", "Python anda berubah!", "Python diselamatkan!".
- Pencapaian baharu: **Penetas Telur** (5 hari), **Penjaga Python** (30 hari). Pencapaian 7 hari kini guna rekod streak terbaik (tidak hilang).
- Streak disimpan dalam akaun (Firebase). Data lama dipindah automatik.

## 3. Pembaikan lain
- Telefon: butang Tema dipindah ke menu ☰ dan butang bahasa dipadatkan supaya bar atas muat (tiada lagi skrol ke tepi).
- Detektif Debug: 7 matlamat BM yang masih separuh English telah diterjemah.

## PENTING selepas upload
1. **Publish semula `database.rules.json`** di Firebase → Realtime Database → Rules (peraturan bilik multiplayer berubah). Tanpa ini multiplayer akan beri "Kebenaran ditolak".
2. Ctrl+F5 (atau kosongkan cache) di pelayar.

Fail baharu: `assets/js/mp-update-17.js`, `engine-update-17.js`, `app-update-17.js`, `pet-update-17.js`, `info-update-17.js`, `assets/css/mp-update-17.css`, `pet-update-17.css`, `data/games-bug-update-17.js` (ganti `games-bug-update-16.js`). `index.html` dikemas kini.

---

# PyQuest — Update 16 (Edisi Pertandingan)

## Baharu dalam Update 16 — 4 game baharu (kini 6 game)
| Game | Daripada fail arked | Cara main | Kuasa |
|---|---|---|---|
| **Debug Detective / Detektif Debug** | Cari Bug | Klik baris tepat yang ada bug; selepas jawab, baris yang dibaiki dipaparkan. Hard = bug logik (kod berjalan tapi jawapan salah). | Petunjuk (separuh XP) |
| **Code Vault / Peti Besi Kod** | Pemecah Kata Laluan | Baca syarat dalam kod, pilih kata laluan / PIN yang mencetak ACCESS GRANTED. Pintu peti besi dengan 10 lampu. | Petunjuk (separuh XP) |
| **Turbo Race / Lumba Turbo** | Lumba Kereta | Isi tempat kosong ___ supaya kod mencetak output sasaran. Betul = pecutan; 7 betul untuk kalahkan pesaing. | 50/50 |
| **Galaxy Defender / Wira Galaksi** | Tembak Alien | Tembak alien yang membawa ungkapan dengan nilai sasaran; selepas tembak, nilai setiap alien dipaparkan. | Perisai |

- **Soalan baharu: 1,440** (360 setiap game, **90 setiap tahap** Easy / Normal / Medium / Hard). Soalan lama fail arked dibuang. Semua soalan dijana dan **setiap jawapan disemak dengan menjalankan Python sebenar** (2 kali: penjana + pengesah bebas). Penerangan dalam BM & English.
- Semua game baharu guna sistem sedia ada: 5 nyawa, kombo, XP ikut tahap, bonus +50 XP markah penuh, **syiling** (Easy 3 / Normal 6 / Medium 10 / Hard 15), mod pantas, kekunci 1–4 (Debug: 1–9), butang Back, semua 8 tema.
- **Admin**: tab baharu Debug, Peti Besi, Lumba, Galaksi — tambah pukal, edit, padam, tampal dari Excel, muat turun fail data, pulihkan asal, dan **terus berubah untuk semua akaun** (Firebase). Templat Excel dikemas kini dengan 4 tab baharu.
- **Pencapaian baharu (13 semuanya)**: Detektif Bug, Pemecah Peti, Juara Laju, Penjaga Galaksi, Serba Boleh (main 6 game), Pengumpul Syiling (300), Bintang Gaya (3 skin).
- Papan pemuka: grid 6 game, statistik "Pusingan dimain" & "Game dicuba". Statistik langsung admin: pusingan setiap game. Halaman Info dikemas kini.
- **PENTING:** Publish semula `database.rules.json` (Realtime Database → Rules) supaya admin boleh simpan soalan 4 game baharu ke Firebase.
- Fail baharu: `data/games-bug|vault|race|shoot-update-16.js`, `assets/js/engine-update-16.js`, `app-update-16.js`, `art-update-16.js`, `bank-update-16.js`, `analytics-update-16.js`, `info-update-16.js`, `assets/css/games-update-16.css`.

---

# Update 15

## Baharu dalam Update 15 — Pembaikan tema Permainan Klasik (8-bit)
- **Ular tidak lagi hilang** dalam pertempuran, dialog (contoh "Keluar dari permainan?") dan tempat lain: saiz blok piksel kini dikira ikut saiz ular di skrin.
- Safari / iPhone / iPad: ular dipaparkan tanpa penapis piksel (supaya sentiasa kelihatan).
- **Tulisan tidak lagi terkeluar**: tulisan piksel lebar (Press Start 2P) hanya untuk tajuk besar; teks lain guna tulisan piksel sempit VT323.
- Fail baharu: `assets/js/art-update-15.js`, `assets/css/theme-update-15.css`. `index.html` dan `reset.html` dikemas kini.

---

# Update 14

## Baharu dalam Update 14 — Tema Permainan Klasik (8-bit)
- Tema baharu **Permainan Klasik**: tulisan piksel, butang & kad bersudut tajam dengan bayang piksel, latar grid + garisan skrin CRT, ular jadi piksel (penapis SVG) dengan cermin mata & topi piksel.
- Pangkat: Python Player 1 → Python Arcade Legend. Mod: Boss Fight / Glitch Hunt, raksasa "Pixel Bug".
- 5 skin asli (diilhamkan oleh jenis permainan arked, bukan watak berhak cipta): Speed Runner (Normal 15), Jungle Commando (Normal 15), Block Stacker (Special 30), Arena Fighter (Epic 50), Arcade Champion (Legend 100).
- Fail baharu: `assets/js/skins-update-14.js`, `art-update-14.js`, `app-update-14.js`, `assets/css/theme-update-14.css`. `index.html` dan `reset.html` dikemas kini. Tiada perubahan pada `database.rules.json`.

---

# Update 13

## Baharu dalam Update 13
- **Profil** (tekan gambar/nama di bar atas): bar sisi **Profil** dan **Avatar**.
  - Gambar profil: muat naik gambar sendiri (dipotong segi empat 160px) atau pilih 12 gambar sedia ada, atau guna ular sendiri.
  - Nama paparan: boleh ditukar **sekali setiap 7 hari**. Log masuk tetap guna nama pengguna asal.
- **Syiling**: dapat selepas setiap pusingan Kuiz/Puzzle. Markah penuh: Easy 3, Normal 6, Medium 10, Hard 15. Ada salah = dipotong ikut jawapan betul (contoh Hard 9/10 = 13).
- **Kedai Skin** (Avatar): 5 skin untuk setiap tema — Normal 15, Special 30, Epic 50, Legend 100 syiling. Skin ikut tema yang sedang dipakai (Lanun = skin lanun, Cyber = skin cyber …). Skin yang dipakai muncul di papan pemuka, lobi, pertempuran dan keputusan.
- **Tema baharu**: Fantasi Gelap (tanduk, rune bercahaya) dan Fantasi Cahaya (lingkaran cahaya, sayap, mahkota daun), lengkap dengan nama pangkat dan raksasa sendiri.
- **PENTING:** Publish semula `database.rules.json` di Firebase (Realtime Database → Rules) supaya had tukar nama 7 hari dan nama paparan dalam senarai admin berfungsi.
- Fail baharu: `assets/js/skins-update-13.js`, `art-update-13.js`, `engine-update-13.js`, `auth-update-13.js`, `app-update-13.js`, `assets/css/theme-update-13.css`, `profile-update-13.css`. `index.html`, `reset.html`, `database.rules.json` dikemas kini.

---

# Update 12

## Baharu dalam Update 12 — Mesra telefon (butang Back / leret kembali)
- Butang **Back** Android dan **leret dari tepi kiri** iPhone kini berfungsi dalam laman: kembali ke skrin sebelumnya (Log masuk → Pilihan akaun → Laman utama, bab Nota Info, tab Admin, Multiplayer).
- Jika ada tetingkap terbuka (contoh pilih tema), Back **menutup tetingkap dahulu**.
- Semasa bermain Game, Back akan **bertanya dahulu** sebelum keluar (supaya markah tidak hilang tanpa sengaja). Dalam bilik Multiplayer, Back bertanya sebelum keluar bilik.
- Pautan terus seperti `pyquest.lol/#info` atau `#multi` berfungsi tanpa muat semula.
- Fail baharu: `assets/js/app-update-12.js` (index.html dikemas kini).

---

# Update 11

## Baharu dalam Update 11
- **Soalan dikongsi:** tambah / edit / padam soalan di Admin terus berubah untuk SEMUA akaun (Firebase). Lihat `SETUP-SOALAN-DIKONGSI-update-11.md`.
- **Lupa kata laluan:** pautan emel terus ke `reset.html` tanpa perlu "Customize action URL".
- Fail baharu: `assets/js/bank-update-11.js`, `app-update-11.js`, `auth-update-11.js`, `database.rules.json` (dikemas kini).

---

# Update 10

## Baharu dalam Update 10 — Lupa kata laluan dibaiki
- **Pepijat utama dibaiki:** borang Lupa kata laluan sebelum ini memuat semula halaman tanpa menghantar emel.
- Kad "Semak emel anda!", butang Hantar semula, `reset.html` baharu ikut tema. Lihat `SETUP-LUPA-PASSWORD-update-10.md`.
- Fail baharu: `assets/js/app-update-10.js`, `assets/js/auth-update-10.js`, `reset.html` (dikemas kini).

---

# Update 9

## Baharu dalam Update 9 (Admin)
- **Urus Kuiz** (baharu) di sebelah **Urus Puzzle**: senarai ikut tahap, carian, Edit, Padam, Pulihkan asal.
- **Tambah soalan secara pukal**: pilih 1 / 5 / 10 / 20 borang (atau "+ Satu lagi"), isi sekali gus, tekan Simpan. Borang kosong dilangkau. Lajur Bahasa Melayu pilihan (disalin dari English jika kosong).
- **Tampal dari Excel / Google Sheets**: salin baris dari helaian dan tampal; tekan *Semak* untuk lihat berapa sah / bermasalah, kemudian *Tambah*.
- **Muat turun fail data**: menghasilkan `questions-update-7.js` / `puzzles-update-7.js`. Muat naik ke folder `data/` di GitHub supaya soalan baharu muncul untuk SEMUA pelajar (tanpa langkah ini, perubahan hanya dalam pelayar guru).
- **Statistik langsung** dan **Pengguna berdaftar** direka semula: kad KPI dengan perbandingan semalam, carta 7 hari (Lawatan/Pelawat), carta pendaftaran 14 hari, senarai "Aktif baru-baru ini", jadual pengguna dengan carian, susunan dan pangkat.
- Fail baharu: `assets/js/app-update-9.js`, `assets/css/admin-update-9.css`.

---

# Update 8

## Baharu dalam Update 8
- **Info → bar sisi kiri** dengan *Kenapa PyQuest* (ditulis semula ikut matlamat projek), *Cara PyQuest berfungsi* dan **Nota Python penuh, 18 bab** (75 contoh kod; output setiap contoh dijana dengan menjalankan Python sebenar). Setiap bab ada Tip, *Uji diri*, butang *Tanda sudah baca* dan butang terus ke Game pada tahap yang sesuai.
- **Multiplayer** (menu atas): cipta bilik dan dapat kod 6 aksara, kawan masuk dengan kod. Dua mod: *Hos mengawal (mod guru)* atau *Ikut kadar sendiri*. Papan markah langsung dan podium akhir.
  **PENTING:** ikut `SETUP-MULTIPLAYER-update-8.md` (hidupkan Anonymous sign-in + Publish `database.rules.json` baharu).
- Fail baharu: `data/notes-update-8.js`, `assets/js/info-update-8.js`, `mp-update-8.js`, `engine-update-8.js`, `app-update-8.js`, `auth-update-8.js`, `assets/css/mp-update-8.css`.

---

# Update 7

## Apa yang baharu
- **5 tema** (butang 🎨 Tema di atas, atau "Cuba tema" di papan pemuka). Berubah serta-merta, termasuk ular pada logo PyQuest:
  - **Klasik Ceria** (lalai, kini berwarna-warni)
  - **Pengembaraan Lanun**: ular kapten lanun. Pangkat dari *Python Crew* hingga *Python Pirate King*
  - **Neon Cyberpunk**: ular robot dengan visor neon. Pangkat dari *Python Byte* hingga *Python Singularity*
  - **Wira Biru (Lelaki)** dan **Kilauan Merah Jambu (Perempuan)**: pangkat biasa (*Python Rookie* …)
- **6 pangkat** (0, 100, 250, 500, 850, 1300 XP).
- **Menu "Game"** menggantikan Puzzle + Quiz. Bar sisi: pilih mod (Quiz / Puzzle), tahap (**Easy / Normal / Medium / Hard**), mod pantas (pemasa) dan bunyi.
  - **Quiz Battle**: jawab soalan untuk menyerang raksasa bug. 5 nyawa, kuasa 50/50, kombo, bintang.
  - **Bug Hunt**: kod "Berjalan lancar" atau "Ada bug"? Laluan ke harta karun, kuasa Perisai, cop "BUG FOUND".
  - Setiap pusingan = 10 soalan **rawak** (soalan yang belum dilihat diutamakan).
- **332 soalan kuiz + 200 puzzle**. Setiap jawapan soalan kod disemak dengan **menjalankan kod Python sebenar**.
- **Log masuk interaktif**: maskot mata ikut tetikus, tutup mata dengan ekor bila taip kata laluan, senarai semak kata laluan, meter kekuatan.
- **Tiada lagi `confirm()`/`alert()` pelayar**. Semua dialog ialah dialog PyQuest sendiri.
- Gambar **ular adiwira** asli di halaman utama (berubah ikut tema).

## Fail yang digunakan sekarang
`index.html` memuatkan:
- `data/questions-update-7.js`, `data/puzzles-update-7.js`
- `assets/js/art-update-7.js`, `fx-update-7.js`, `engine-update-7.js`, `app-update-7.js`, `info-update-7.js`
- `assets/css/theme-update-7.css`, `game-update-7.css` (selepas CSS lama)

Fail lama (`app-update-2..6.js`, `engine-update-2/4.js`, `data/questions.js`, `questions-extra.js`, `puzzles.js`, `puzzles-extra.js`, `info-update-3.js`) **tidak dimuat lagi**. Boleh dibiarkan atau dipadam.

## Cara muat naik ke GitHub
Muat naik **semua** fail dalam folder ini (kekalkan struktur folder `assets/` dan `data/`). Firebase, akaun dan `database.rules.json` **tidak berubah**, jadi tidak perlu tetapan baharu.

## Nota Admin
Pengurus Puzzle kini disusun ikut tahap (Easy/Normal/Medium/Hard). Puzzle yang diedit disimpan dalam pelayar peranti itu. Butang **Pulihkan asal** mengembalikan bank 200 puzzle.
