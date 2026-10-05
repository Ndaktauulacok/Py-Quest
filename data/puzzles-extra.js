/* Set Puzzle 2 & 3 (20 soalan setiap set). Format: [kod, betul?, penerangan EN, penerangan BM] */
(() => {
  const Q = { en: 'Is this Python code correct?', ms: 'Adakah kod Python ini betul?' };
  const make = (prefix, rows) => rows.map((r, i) => ({ id: prefix + String(i + 1).padStart(3, '0'), code: r[0], correct: r[1], explanation: { en: r[2], ms: r[3] }, question: Q }));
  const set2 = make('S2-', [
    ['x = 5\ny = 3\nprint(x + y)', true, 'Two numbers are added and printed.', 'Dua nombor ditambah lalu dipaparkan.'],
    ['x = 5\nprint(x +)', false, 'The + operator needs a value after it.', 'Operator + memerlukan nilai selepasnya.'],
    ['for i in range(3):\n    print(i)', true, 'The for line ends with a colon and the body is indented.', 'Baris for diakhiri titik bertindih dan kandungannya berinden.'],
    ['for i in range(3)\n    print(i)', false, 'A colon is missing after range(3).', 'Titik bertindih tiada selepas range(3).'],
    ['fruits = ["apple", "banana"]\nprint(fruits[0])', true, 'Index 0 gives the first item.', 'Indeks 0 memberikan item pertama.'],
    ['fruits = ["apple", "banana"]\nprint(fruits[5])', false, 'Index 5 is out of range and raises IndexError.', 'Indeks 5 di luar julat dan menyebabkan IndexError.'],
    ['def hello():\n    print("Hi")\nhello()', true, 'The function is defined and then called.', 'Fungsi ditakrif kemudian dipanggil.'],
    ['def hello()\n    print("Hi")', false, 'The def line needs a colon.', 'Baris def memerlukan titik bertindih.'],
    ['name = "Ali"\nprint(name.upper())', true, 'upper() is a valid string method.', 'upper() ialah kaedah string yang sah.'],
    ['name = "Ali"\nprint(name.uppercase())', false, 'The method is upper(), not uppercase().', 'Kaedahnya upper(), bukan uppercase().'],
    ['x = 10\nwhile x > 7:\n    x -= 1', true, 'The while loop is written correctly.', 'Gelung while ditulis dengan betul.'],
    ['x = 10\nwhile x > 7\n    x -= 1', false, 'The while condition needs a colon.', 'Syarat while memerlukan titik bertindih.'],
    ['student = {"name": "Siti", "age": 17}\nprint(student["name"])', true, 'A dictionary value is read using its key.', 'Nilai kamus dibaca menggunakan kuncinya.'],
    ['student = {"name": "Siti", "age": 17\nprint(student)', false, 'The closing brace } is missing.', 'Tanda penutup } tiada.'],
    ['print(len("Python"))', true, 'len() returns the length of the string.', 'len() memulangkan panjang string.'],
    ['print(length("Python"))', false, 'length() does not exist; use len().', 'length() tidak wujud; gunakan len().'],
    ['a = 7\nif a % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")', true, 'Both branches are valid and indented.', 'Kedua-dua cabang sah dan berinden.'],
    ['a = 7\nif a % 2 = 0:\n    print("Even")', false, 'Comparison needs == not a single =.', 'Perbandingan perlu == bukan satu =.'],
    ['nums = [1, 2, 3]\nnums.append(4)\nprint(nums)', true, 'append() adds an item to the list.', 'append() menambah item ke dalam list.'],
    ['nums = [1, 2, 3]\nnums.add(4)\nprint(nums)', false, 'Lists use append(), not add().', 'List menggunakan append(), bukan add().'],
  ]);
  const set3 = make('S3-', [
    ['print("Total:", 5 * 4)', true, 'print() can take several values separated by commas.', 'print() boleh menerima beberapa nilai dipisahkan koma.'],
    ['print("Total:" 5 * 4)', false, 'A comma is missing between the two values.', 'Koma tiada antara dua nilai itu.'],
    ['age = "20"\nprint(age + 1)', false, 'A string cannot be added to an integer.', 'String tidak boleh ditambah dengan integer.'],
    ['age = int("20")\nprint(age + 1)', true, 'int() converts the string to a number first.', 'int() menukar string kepada nombor dahulu.'],
    ['def add(a, b):\n    return a + b\nprint(add(2, 3))', true, 'The function returns a value that is printed.', 'Fungsi memulangkan nilai yang dipaparkan.'],
    ['def add(a, b):\nreturn a + b', false, 'The return line must be indented.', 'Baris return mesti berinden.'],
    ['word = "Python"\nprint(word[0])', true, 'Strings can be indexed; index 0 is "P".', 'String boleh diindeks; indeks 0 ialah "P".'],
    ['word = "Python"\nword[0] = "J"', false, 'Strings are immutable and cannot be changed this way.', 'String tidak boleh diubah dengan cara ini.'],
    ['for ch in "Hi":\n    print(ch)', true, 'A string can be looped through character by character.', 'String boleh dilalui aksara demi aksara.'],
    ['for ch in "Hi":\nprint(ch)', false, 'The loop body is not indented.', 'Kandungan gelung tidak berinden.'],
    ['x = 3\nif x > 1 and x < 5:\n    print("In range")', true, 'and combines two valid conditions.', 'and menggabungkan dua syarat yang sah.'],
    ['x = 3\nif x > 1 && x < 5:\n    print("In range")', false, 'Python uses and, not &&.', 'Python menggunakan and, bukan &&.'],
    ['d = {"a": 1}\nd["b"] = 2\nprint(d)', true, 'A new key can be added by assignment.', 'Kunci baharu boleh ditambah melalui tugasan.'],
    ['t = (1, 2, 3)\nt.append(4)', false, 'Tuples cannot be changed; they have no append().', 'Tuple tidak boleh diubah; ia tiada append().'],
    ['nums = [3, 1, 2]\nnums.sort()\nprint(nums)', true, 'sort() sorts the list in place.', 'sort() menyusun list di tempatnya.'],
    ['nums = [3, 1, 2]\nprint(nums.sorted())', false, 'Lists have sort(); sorted() is a separate function.', 'List mempunyai sort(); sorted() ialah fungsi berasingan.'],
    ['text = "hello world"\nprint(text.split())', true, 'split() breaks the string into a list of words.', 'split() memecahkan string kepada senarai perkataan.'],
    ['print("Hello)', false, 'The string is missing its closing quotation mark.', 'String tiada tanda petikan penutup.'],
    ['total = 0\nfor n in [1, 2, 3]:\n    total += n\nprint(total)', true, 'The loop adds each number to total.', 'Gelung menambah setiap nombor ke dalam total.'],
    ['import math\nprint(math.sqrt(16))', true, 'math is imported and sqrt() is a valid function.', 'math diimport dan sqrt() ialah fungsi yang sah.'],
  ]);
  window.PYQUEST_PUZZLE_SETS = [window.PYQUEST_DEFAULT_PUZZLES || [], set2, set3];
})();
