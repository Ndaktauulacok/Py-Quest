/* PyQuest — halaman Info (EN / BM). Kandungan statik; dipaparkan oleh app-update-7.js */
(() => {
  'use strict';
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const code = (c) => `<pre class="info-code"><code>${esc(c)}</code></pre>`;

  const CODE = {
    print: '# This is a comment\nprint("Hello, Python!")   # shows text\nprint("Age:", 17)         # Age: 17',
    vars: 'name = "Aina"      # str\nage = 17           # int\nheight = 1.62      # float\nis_student = True  # bool\nprint(type(age))   # <class \'int\'>',
    ops: 'print(7 + 2)    # 9\nprint(7 / 2)    # 3.5\nprint(7 // 2)   # 3   (floor division)\nprint(7 % 2)    # 1   (remainder)\nprint(2 ** 3)   # 8   (power)',
    cond: 'score = 72\nif score >= 80:\n    print("A")\nelif score >= 60:\n    print("B")   # this one runs\nelse:\n    print("C")',
    loops: 'for i in range(3):     # 0, 1, 2\n    print(i)\n\ncount = 0\nwhile count < 3:\n    count += 1\nprint(count)          # 3',
    lists: 'fruits = ["apple", "banana"]\nfruits.append("mango")\nprint(fruits[0])      # apple\nprint(len(fruits))    # 3',
    dicts: 'student = {"name": "Aina", "age": 17}\nprint(student["name"])        # Aina\nstudent["city"] = "Alor Setar"\nprint(len(student))           # 3',
    funcs: 'def add(a, b):\n    return a + b\n\nprint(add(2, 3))   # 5',
    strs: 's = "python"\nprint(s.upper())        # PYTHON\nprint(s[0])             # p\nprint(s[::-1])          # nohtyp\nprint(f"I love {s}")    # I love python',
    errs: 'try:\n    number = int("abc")\nexcept ValueError:\n    print("That is not a number")',
    hello: 'print("Hello, world!")',
  };
  const SAMPLES = Object.values(CODE).filter((c) => c.indexOf('input(') < 0);

  const TYPES = {
    en: [['int', '42', 'Whole number'], ['float', '3.14', 'Number with decimals'], ['str', '"Hello"', 'Text'], ['bool', 'True', 'True or False'], ['list', '[1, 2, 3]', 'Ordered, can be changed'], ['tuple', '(1, 2)', 'Ordered, cannot be changed'], ['dict', '{"a": 1}', 'Key and value pairs'], ['set', '{1, 2}', 'Unique items only']],
    ms: [['int', '42', 'Nombor bulat'], ['float', '3.14', 'Nombor perpuluhan'], ['str', '"Hello"', 'Teks'], ['bool', 'True', 'True atau False'], ['list', '[1, 2, 3]', 'Tersusun, boleh diubah'], ['tuple', '(1, 2)', 'Tersusun, tidak boleh diubah'], ['dict', '{"a": 1}', 'Pasangan kunci dan nilai'], ['set', '{1, 2}', 'Item unik sahaja']],
  };
  const MISTAKES = {
    en: [['Missing colon', 'if x > 5', 'if x > 5:'], ['Wrong indentation', 'if x > 5:\nprint("big")', 'if x > 5:\n    print("big")'], ['Text without quotes', 'print(Hello)', 'print("Hello")'], ['= instead of ==', 'if x = 5:', 'if x == 5:'], ['print without brackets', 'print "Hi"', 'print("Hi")'], ['Joining text and number', '"Age: " + 18', '"Age: " + str(18)'], ['Index too large', 'nums = [1, 2, 3]\nnums[3]', 'nums[2]   # indexes start at 0']],
    ms: [['Tiada titik bertindih', 'if x > 5', 'if x > 5:'], ['Inden salah', 'if x > 5:\nprint("big")', 'if x > 5:\n    print("big")'], ['Teks tanpa petikan', 'print(Hello)', 'print("Hello")'], ['= dan bukan ==', 'if x = 5:', 'if x == 5:'], ['print tanpa kurungan', 'print "Hi"', 'print("Hi")'], ['Menyambung teks dan nombor', '"Age: " + 18', '"Age: " + str(18)'], ['Indeks terlalu besar', 'nums = [1, 2, 3]\nnums[3]', 'nums[2]   # indeks bermula dari 0']],
  };

  const L = {
    en: {
      eyebrow: 'Info', title: 'About PyQuest and Python', lead: 'Why this website exists, what Python is, and everything a beginner needs to start. Open the sections below at your own pace.',
      toc: [['why', 'Why PyQuest'], ['what', 'What is Python'], ['uses', 'What Python can do'], ['basics', 'Python basics'], ['mistakes', 'Common mistakes'], ['start', 'Get started'], ['app', 'How PyQuest works'], ['more', 'Learn more']],
      why: ['Why PyQuest was made', [
        'Many students find their first lines of code confusing. A missing colon or a wrong indent looks small, but it stops the whole program.',
        'PyQuest turns that into short, friendly games. In Quiz Battle you answer questions to defeat a bug monster. In Bug Hunt you read a small piece of Python and decide whether it runs or has a bug.',
        'Everything is in English and Bahasa Melayu, so learners can switch languages and understand the reasons, not only the answers. It is free. Sign up with just a username to keep your XP, or play as a Guest to try it out.']],
      goals: ['Our goals', ['Make the first steps in Python less scary.', 'Train you to read code before you write it.', 'Give quick feedback with a short explanation after every answer.', 'Support teachers who want simple practice for their class.']],
      what: ['What is Python?', [
        'Python is a popular programming language. It is high-level (close to human language), interpreted (the computer reads and runs it line by line) and general purpose (you can use it for many kinds of projects).',
        'Its biggest strength is readable code. Python uses indentation and simple words instead of many symbols, so programs are short and easy to follow.']],
      facts: [['Created by', 'Guido van Rossum'], ['First released', '1991'], ['Named after', 'The comedy group Monty Python, not the snake'], ['Type', 'High-level, interpreted, dynamically typed'], ['Today', 'Python 3 (Python 2 is no longer supported)'], ['Looked after by', 'Python Software Foundation and a global community'], ['File extension', '.py']],
      uses: ['What can you do with Python?', [['Websites', 'Frameworks such as Django and Flask build the server side of websites.'], ['Data and AI', 'Libraries such as pandas, NumPy and scikit-learn help you analyse data and build machine learning.'], ['Automation', 'Rename thousands of files, read spreadsheets or send reports with a short script.'], ['Games', 'Pygame lets you make simple 2D games.'], ['Science and education', 'Researchers and schools use it for calculations, simulations and teaching.'], ['Security and networks', 'Many tools for testing and monitoring networks are written in Python.']]],
      learn: ['Why learn Python first?', ['The syntax is short and close to English.', 'You see results quickly, even with one line of code.', 'A huge community and thousands of free libraries.', 'It is used in schools, universities and many companies.', 'The ideas you learn (variables, loops, functions) carry over to other languages.']],
      basics: ['Python basics at a glance', 'Tap a topic to see a short example. The text after # is a comment that explains the result.'],
      topics: [['print', 'Print and comments', 'print() shows something on the screen. A comment starts with # and is ignored by Python.'], ['vars', 'Variables and data types', 'A variable is a name that stores a value. Python works out the type by itself.'], ['ops', 'Operators', 'Operators calculate. Remember that / always gives a decimal and // drops it.'], ['cond', 'If, elif and else', 'Choose what to run. Each condition ends with a colon and the code under it is indented.'], ['loops', 'Loops', 'for repeats over a range or a list. while repeats as long as a condition is true.'], ['lists', 'Lists', 'A list keeps several items in order. The first item is at index 0.'], ['dicts', 'Dictionaries', 'A dictionary stores key and value pairs, like a small contact book.'], ['funcs', 'Functions', 'A function is a reusable block of code. return sends a result back.'], ['strs', 'Strings', 'Strings are text. You can change case, slice them and place values inside with f-strings.'], ['errs', 'Handling errors', 'try and except let your program deal with a problem instead of crashing.']],
      typesTitle: 'Common data types', typesHead: ['Type', 'Example', 'Meaning'],
      mistakes: ['Common beginner mistakes', 'These are exactly the kind of mistakes you will spot in the PyQuest Puzzle.'], mHead: ['Mistake', 'Wrong', 'Correct'],
      start: ['Start coding on your computer', [
        'Download Python from python.org. On Windows, tick "Add Python to PATH" during installation.',
        'Open a simple editor: IDLE (comes with Python), Thonny (very friendly for beginners) or VS Code.',
        'Create a file named hello.py and type the line below.',
        'Run it. In a terminal type python hello.py (on Windows you can also use py hello.py).']],
      startNote: 'No installation? Try an online notebook such as Google Colab, or the online shell on python.org.',
      habits: ['Good habits from day one', ['Use clear names: total_price is better than tp.', 'Indent with 4 spaces, always the same way.', 'Write a short comment when something is not obvious.', 'Read the error message from the bottom up: the last line tells you the type of error.', 'Run small pieces often instead of writing a lot and testing at the end.']],
      app: ['How PyQuest works', [['Game', 'Open Game and use the sidebar to choose Quiz Battle or Bug Hunt (Puzzle) and a level: Easy, Normal, Medium or Hard. Every round has 10 random questions, so it is different each time.'], ['Quiz Battle', '332 questions. Each right answer hits the bug monster. You have 5 hearts and one 50/50 power-up per round. Get all 10 right for a +50 XP bonus.'], ['Bug Hunt', '200 code puzzles. Decide if the code runs fine or has a bug, then read why. The Shield power-up blocks one mistake. Reach the treasure at the end of the trail!'], ['XP', 'Each right answer gives Easy +10, Normal +15, Medium +20 or Hard +25 XP. Speed mode adds a 30, 20, 15 or 10 second timer.'], ['Ranks and themes', 'There are 6 ranks, from Python Rookie to Python Legend. Pick a theme with the Theme button: the Pirate theme goes from Python Crew to Python Pirate King, and the Cyberpunk theme has its own robot ranks.'], ['Exit', 'You can exit a round at any time. The score of that unfinished round is not counted.'], ['Your data', 'With an account, your XP and badges are saved online. Guest progress disappears when you leave. Theme and language are remembered in your browser.'], ['Admin', 'Teachers sign in to edit the Puzzle questions and to see live visit statistics.']]],
      privacy: ['Privacy', 'Signing up needs only a username and password (email is optional, just for password reset). Passwords are kept securely by Firebase and never shown to anyone. If the teacher has switched on visit statistics, only anonymous counts are sent (how many people are online, which page is open, how many rounds were finished). Your name and score are not sent.'],
      more: ['Learn more', [['Python.org: the official site', 'https://www.python.org/'], ['The official Python tutorial', 'https://docs.python.org/3/tutorial/'], ['Beginner guide on python.org', 'https://www.python.org/about/gettingstarted/'], ['PEP 8: the Python style guide', 'https://peps.python.org/pep-0008/']]],
      foot: 'Tip: type import this in Python to read "The Zen of Python", a short list of its guiding ideas.', back: 'Back to top',
    },
    ms: {
      eyebrow: 'Info', title: 'Tentang PyQuest dan Python', lead: 'Kenapa laman web ini dibuat, apa itu Python, dan semua yang pemula perlu tahu untuk bermula. Buka bahagian di bawah mengikut kadar anda sendiri.',
      toc: [['why', 'Kenapa PyQuest'], ['what', 'Apa itu Python'], ['uses', 'Kegunaan Python'], ['basics', 'Asas Python'], ['mistakes', 'Kesilapan biasa'], ['start', 'Mula belajar'], ['app', 'Cara PyQuest berfungsi'], ['more', 'Belajar lagi']],
      why: ['Kenapa PyQuest dibuat', [
        'Ramai pelajar keliru dengan baris kod pertama mereka. Titik bertindih yang tertinggal atau inden yang salah nampak kecil, tetapi ia menghentikan seluruh atur cara.',
        'PyQuest menjadikannya permainan pendek yang mesra. Dalam Pertempuran Kuiz anda menjawab soalan untuk menewaskan raksasa bug. Dalam Buru Bug anda membaca sedikit kod Python dan memutuskan sama ada ia berjalan atau ada bug.',
        'Semuanya dalam Bahasa Inggeris dan Bahasa Melayu, supaya pelajar boleh bertukar bahasa dan memahami sebab, bukan sekadar jawapan. Ia percuma. Daftar dengan nama pengguna sahaja untuk menyimpan XP, atau main sebagai Tetamu untuk mencuba.']],
      goals: ['Matlamat kami', ['Menjadikan langkah pertama dalam Python tidak menakutkan.', 'Melatih anda membaca kod sebelum menulisnya.', 'Memberi maklum balas pantas dengan penerangan ringkas selepas setiap jawapan.', 'Membantu guru yang mahukan latihan mudah untuk kelas mereka.']],
      what: ['Apa itu Python?', [
        'Python ialah bahasa pengaturcaraan yang popular. Ia berperingkat tinggi (dekat dengan bahasa manusia), ditafsir (komputer membaca dan menjalankannya baris demi baris) dan serba guna (boleh digunakan untuk pelbagai jenis projek).',
        'Kekuatan terbesarnya ialah kod yang mudah dibaca. Python menggunakan inden dan perkataan ringkas, bukannya banyak simbol, jadi atur cara pendek dan mudah diikuti.']],
      facts: [['Dicipta oleh', 'Guido van Rossum'], ['Mula dilancarkan', '1991'], ['Dinamakan sempena', 'Kumpulan komedi Monty Python, bukan ular'], ['Jenis', 'Peringkat tinggi, ditafsir, jenis dinamik'], ['Hari ini', 'Python 3 (Python 2 tidak lagi disokong)'], ['Dijaga oleh', 'Python Software Foundation dan komuniti global'], ['Sambungan fail', '.py']],
      uses: ['Apa yang boleh dibuat dengan Python?', [['Laman web', 'Rangka kerja seperti Django dan Flask membina bahagian pelayan laman web.'], ['Data dan AI', 'Perpustakaan seperti pandas, NumPy dan scikit-learn membantu menganalisis data dan membina pembelajaran mesin.'], ['Automasi', 'Menamakan semula ribuan fail, membaca hamparan atau menghantar laporan dengan skrip pendek.'], ['Permainan', 'Pygame membolehkan anda membuat permainan 2D yang ringkas.'], ['Sains dan pendidikan', 'Penyelidik dan sekolah menggunakannya untuk pengiraan, simulasi dan pengajaran.'], ['Keselamatan dan rangkaian', 'Banyak alat untuk menguji dan memantau rangkaian ditulis dalam Python.']]],
      learn: ['Kenapa belajar Python dahulu?', ['Sintaksnya pendek dan dekat dengan bahasa Inggeris.', 'Anda nampak hasil dengan cepat, walaupun dengan satu baris kod.', 'Komuniti yang besar dan beribu perpustakaan percuma.', 'Digunakan di sekolah, universiti dan banyak syarikat.', 'Idea yang anda pelajari (pemboleh ubah, gelung, fungsi) boleh digunakan dalam bahasa lain.']],
      basics: ['Asas Python sepintas lalu', 'Ketik satu topik untuk melihat contoh ringkas. Teks selepas # ialah komen yang menerangkan hasilnya.'],
      topics: [['print', 'Print dan komen', 'print() memaparkan sesuatu di skrin. Komen bermula dengan # dan diabaikan oleh Python.'], ['vars', 'Pemboleh ubah dan jenis data', 'Pemboleh ubah ialah nama yang menyimpan nilai. Python mengenal pasti jenisnya sendiri.'], ['ops', 'Operator', 'Operator membuat pengiraan. Ingat bahawa / sentiasa memberi perpuluhan dan // membuangnya.'], ['cond', 'If, elif dan else', 'Pilih apa yang hendak dijalankan. Setiap syarat berakhir dengan titik bertindih dan kod di bawahnya berinden.'], ['loops', 'Gelung', 'for mengulang pada julat atau senarai. while mengulang selagi syarat benar.'], ['lists', 'Senarai (list)', 'List menyimpan beberapa item mengikut susunan. Item pertama berada pada indeks 0.'], ['dicts', 'Kamus (dictionary)', 'Kamus menyimpan pasangan kunci dan nilai, seperti buku alamat kecil.'], ['funcs', 'Fungsi', 'Fungsi ialah blok kod yang boleh digunakan semula. return menghantar hasil kembali.'], ['strs', 'String', 'String ialah teks. Anda boleh menukar huruf, menghiris dan meletakkan nilai di dalamnya dengan f-string.'], ['errs', 'Mengendalikan ralat', 'try dan except membolehkan atur cara menangani masalah dan bukannya terhenti.']],
      typesTitle: 'Jenis data biasa', typesHead: ['Jenis', 'Contoh', 'Maksud'],
      mistakes: ['Kesilapan biasa pemula', 'Inilah jenis kesilapan yang akan anda kesan dalam Puzzle PyQuest.'], mHead: ['Kesilapan', 'Salah', 'Betul'],
      start: ['Mula menulis kod di komputer anda', [
        'Muat turun Python dari python.org. Pada Windows, tandakan "Add Python to PATH" semasa pemasangan.',
        'Buka editor yang mudah: IDLE (disertakan bersama Python), Thonny (sangat mesra pemula) atau VS Code.',
        'Cipta fail bernama hello.py dan taip baris di bawah.',
        'Jalankannya. Dalam terminal taip python hello.py (pada Windows anda juga boleh guna py hello.py).']],
      startNote: 'Tidak mahu memasang apa-apa? Cuba buku nota dalam talian seperti Google Colab, atau shell dalam talian di python.org.',
      habits: ['Tabiat baik dari hari pertama', ['Gunakan nama yang jelas: total_price lebih baik daripada tp.', 'Inden dengan 4 ruang, sentiasa dengan cara yang sama.', 'Tulis komen ringkas apabila sesuatu tidak jelas.', 'Baca mesej ralat dari bawah: baris terakhir memberitahu jenis ralat.', 'Jalankan bahagian kecil dengan kerap, jangan menulis banyak dan menguji di penghujung.']],
      app: ['Cara PyQuest berfungsi', [['Game', 'Buka Game dan guna bar sisi untuk memilih Pertempuran Kuiz atau Buru Bug (Puzzle) serta tahap: Easy, Normal, Medium atau Hard. Setiap pusingan ada 10 soalan rawak, jadi ia berbeza setiap kali.'], ['Pertempuran Kuiz', '332 soalan. Setiap jawapan betul menyerang raksasa bug. Anda ada 5 nyawa dan satu kuasa 50/50 setiap pusingan. Betul kesemua 10 soalan untuk bonus +50 XP.'], ['Buru Bug', '200 puzzle kod. Tentukan sama ada kod berjalan lancar atau ada bug, kemudian baca sebabnya. Kuasa Perisai menahan satu kesilapan. Sampai ke harta karun di hujung laluan!'], ['XP', 'Setiap jawapan betul memberi Easy +10, Normal +15, Medium +20 atau Hard +25 XP. Mod pantas menambah pemasa 30, 20, 15 atau 10 saat.'], ['Pangkat dan tema', 'Ada 6 pangkat, dari Python Baharu hingga Legenda Python. Pilih tema dengan butang Tema: tema Lanun bermula dari Python Crew hingga Python Pirate King, dan tema Cyberpunk ada pangkat robotnya sendiri.'], ['Keluar', 'Anda boleh keluar dari pusingan bila-bila masa. Markah pusingan yang tidak selesai itu tidak dikira.'], ['Data anda', 'Dengan akaun, XP dan lencana anda disimpan dalam talian. Kemajuan Tetamu hilang apabila anda keluar. Tema dan bahasa diingati dalam pelayar anda.'], ['Admin', 'Guru log masuk untuk mengedit soalan Puzzle dan melihat statistik lawatan secara langsung.']]],
      privacy: ['Privasi', 'Pendaftaran hanya memerlukan nama pengguna dan kata laluan (emel adalah pilihan, untuk tetapan semula kata laluan). Kata laluan disimpan dengan selamat oleh Firebase dan tidak dipaparkan kepada sesiapa. Jika guru menghidupkan statistik lawatan, hanya kiraan tanpa nama dihantar (berapa orang dalam talian, halaman mana dibuka, berapa pusingan selesai). Nama dan markah anda tidak dihantar.'],
      more: ['Belajar lagi', [['Python.org: laman rasmi', 'https://www.python.org/'], ['Tutorial rasmi Python', 'https://docs.python.org/3/tutorial/'], ['Panduan pemula di python.org', 'https://www.python.org/about/gettingstarted/'], ['PEP 8: panduan gaya Python', 'https://peps.python.org/pep-0008/']]],
      foot: 'Tip: taip import this dalam Python untuk membaca "The Zen of Python", senarai ringkas prinsip panduannya.', back: 'Kembali ke atas',
    },
  };

  function render(lang) {
    const T = L[lang === 'ms' ? 'ms' : 'en'];
    const k = lang === 'ms' ? 'ms' : 'en';
    const sec = (id, inner) => `<article class="card info-card" id="info-${id}">${inner}</article>`;
    const paras = (arr) => arr.map((p) => `<p>${esc(p)}</p>`).join('');
    const list = (arr) => `<ul class="info-list">${arr.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
    const toc = T.toc.map(([id, label]) => `<button type="button" class="info-chip" data-jump="info-${id}">${esc(label)}</button>`).join('');
    const facts = `<dl class="info-facts">${T.facts.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>`;
    const uses = `<div class="info-grid">${T.uses[1].map(([a, b], i) => `<div class="info-tile"><span class="info-tile-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join('')}</div>`;
    const topics = T.topics.map(([key, title, text], i) => `<details class="info-acc"${i === 0 ? ' open' : ''}><summary>${esc(title)}</summary><div class="info-acc-body"><p>${esc(text)}</p>${code(CODE[key])}</div></details>`).join('');
    const types = `<div class="info-table-wrap"><table class="info-table"><thead><tr>${T.typesHead.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${TYPES[k].map(([a, b, c]) => `<tr><td><code>${esc(a)}</code></td><td><code>${esc(b)}</code></td><td>${esc(c)}</td></tr>`).join('')}</tbody></table></div>`;
    const mistakes = `<div class="info-table-wrap"><table class="info-table info-mistakes"><thead><tr>${T.mHead.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${MISTAKES[k].map(([a, b, c]) => `<tr><td>${esc(a)}</td><td><pre class="info-mini bad">${esc(b)}</pre></td><td><pre class="info-mini good">${esc(c)}</pre></td></tr>`).join('')}</tbody></table></div>`;
    const steps = `<ol class="info-steps">${T.start[1].map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`;
    const app = `<div class="info-grid">${T.app[1].map(([a, b]) => `<div class="info-tile"><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join('')}</div>`;
    const links = `<ul class="info-links">${T.more[1].map(([a, u]) => `<li><a href="${u}" target="_blank" rel="noopener noreferrer">${esc(a)}<span aria-hidden="true"> ↗</span></a></li>`).join('')}</ul>`;
    return `<section class="info-page">
      <header class="info-hero"><span class="eyebrow">${esc(T.eyebrow)}</span><h1 class="page-title">${esc(T.title)}</h1><p class="page-subtitle">${esc(T.lead)}</p><div class="info-toc" role="navigation">${toc}</div></header>
      ${sec('why', `<h2>${esc(T.why[0])}</h2>${paras(T.why[1])}<h3>${esc(T.goals[0])}</h3>${list(T.goals[1])}`)}
      ${sec('what', `<h2>${esc(T.what[0])}</h2>${paras(T.what[1])}${facts}${code('import this   # prints The Zen of Python')}`)}
      ${sec('uses', `<h2>${esc(T.uses[0])}</h2>${uses}<h3>${esc(T.learn[0])}</h3>${list(T.learn[1])}`)}
      ${sec('basics', `<h2>${esc(T.basics[0])}</h2><p>${esc(T.basics[1])}</p>${topics}<h3>${esc(T.typesTitle)}</h3>${types}`)}
      ${sec('mistakes', `<h2>${esc(T.mistakes[0])}</h2><p>${esc(T.mistakes[1])}</p>${mistakes}<h3>${esc(T.habits[0])}</h3>${list(T.habits[1])}`)}
      ${sec('start', `<h2>${esc(T.start[0])}</h2>${steps}${code(CODE.hello)}<p class="info-note">${esc(T.startNote)}</p>`)}
      ${sec('app', `<h2>${esc(T.app[0])}</h2>${app}<h3>${esc(T.privacy[0])}</h3><p>${esc(T.privacy[1])}</p>`)}
      ${sec('more', `<h2>${esc(T.more[0])}</h2>${links}<p class="info-note">${esc(T.foot)}</p>`)}
      <div class="info-back"><button type="button" class="btn btn-secondary" data-jump="info-top">${esc(T.back)}</button></div>
    </section>`;
  }

  window.PyQuestInfo = { render, samples: SAMPLES };
})();
