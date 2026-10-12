# Lupa kata laluan — Update 10 (dibaiki)

## Apa yang rosak sebelum ini
Borang "Lupa kata laluan" ada medan bernama `id`. Ini mengelirukan kod, jadi borang itu **memuat semula halaman dan tiada emel dihantar langsung**. Sudah dibaiki dalam `app-update-10.js`.

## Apa yang baharu
- Selepas tekan *Hantar pautan*, pengguna nampak kad **"Semak emel anda!"** dengan emel tersembunyi (contoh `a**a@gmail.com`), 4 langkah jelas (semak Spam/Promosi, guna emel TERBARU, pautan sah 1 jam) dan butang **Hantar semula** (selepas 60 saat).
- Emel reset kini ada pautan *Continue* kembali ke halaman Log Masuk PyQuest. Jika domain belum dibenarkan di Firebase, emel tetap dihantar tanpa pautan itu.
- `reset.html` direka semula ikut tema PyQuest: tunjuk akaun yang sedang direset, senarai semak kata laluan, butang tunjuk kata laluan, dan mesej jelas untuk pautan **tamat tempoh**, **sudah digunakan/lama**, atau **tidak lengkap**.
- Akaun **tanpa emel pemulihan** kini mendapat mesej yang jelas. Medan emel semasa daftar ditanda *digalakkan*.

## Semak tetapan Firebase (sekali sahaja, 2 minit)
1. **Authentication → Settings → Authorized domains**: pastikan **pyquest.lol** ada dalam senarai (tekan *Add domain* jika tiada).
2. **Tidak perlu lagi "Customize action URL".** Sejak `auth-update-11.js`, kod sendiri meminta Firebase membawa pautan emel terus ke `https://pyquest.lol/reset.html`. (Jika Console memberi ralat "An error occurred when updating action URL", abaikan sahaja.)
3. (Pilihan) Dalam templat yang sama, tukar *Sender name* kepada **PyQuest** supaya pelajar kenal emel itu.

## Cara uji
1. Daftar akaun ujian **dengan emel Gmail anda**.
2. Log Masuk → *Lupa kata laluan?* → taip nama pengguna → *Hantar pautan*.
3. Buka Gmail (semak juga **Spam** dan **Promosi**) → tekan pautan → tetapkan kata laluan baharu → *Log masuk sekarang*.

## Had yang perlu diketahui
- Firebase menghantar **pautan**, bukan kod nombor (kod memerlukan pelan berbayar Blaze).
- Akaun yang didaftar **tanpa emel** tidak boleh direset. Padam akaun itu di *Authentication → Users*, kemudian pelajar daftar semula dengan emel.
