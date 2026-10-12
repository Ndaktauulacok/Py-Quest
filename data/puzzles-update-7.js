/* PyQuest — bank Puzzle (update 7). 200 puzzle, 4 tahap. correct=true bermaksud kod berjalan tanpa ralat
   (disemak dengan menjalankan setiap kod dalam Python 3). */
window.PYQUEST_PUZZLES=[
{
"id": "EP001",
"difficulty": "easy",
"code": "print(\"Hello\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The text is quoted and print() is written correctly.",
"ms": "Teks diapit tanda petikan dan print() ditulis dengan betul."
}
},
{
"id": "EP002",
"difficulty": "easy",
"code": "print(Hello)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Hello is text and needs quotation marks.",
"ms": "Hello ialah teks dan memerlukan tanda petikan."
}
},
{
"id": "EP003",
"difficulty": "easy",
"code": "name = \"Ali\"\nprint(name)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The variable is assigned and its value is printed.",
"ms": "Pembolehubah diberikan nilai dan nilainya dipaparkan."
}
},
{
"id": "EP004",
"difficulty": "easy",
"code": "age = 18\nprint(ag)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The variable is age, but the code tries to print ag.",
"ms": "Nama pembolehubah ialah age, tetapi kod cuba memaparkan ag."
}
},
{
"id": "EP005",
"difficulty": "easy",
"code": "age = 20\nif age >= 18:\n    print(\"Adult\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The if condition ends with a colon and its body is indented.",
"ms": "Syarat if diakhiri dengan titik bertindih dan kandungannya berinden."
}
},
{
"id": "EP006",
"difficulty": "easy",
"code": "age = 20\nif age >= 18\n    print(\"Adult\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A colon is missing after the if condition.",
"ms": "Simbol : selepas syarat if tiada."
}
},
{
"id": "EP007",
"difficulty": "easy",
"code": "numbers = [1, 2, 3]\nprint(numbers)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The list brackets are balanced and print() is valid.",
"ms": "Kurungan list sepadan dan print() adalah sah."
}
},
{
"id": "EP008",
"difficulty": "easy",
"code": "numbers = [1, 2, 3\nprint(numbers)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The list is missing its closing square bracket ].",
"ms": "Kurang tanda ] untuk menutup list."
}
},
{
"id": "EP009",
"difficulty": "easy",
"code": "def greet():\n    print(\"Hello\")\n\ngreet()",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The function definition has a colon, an indented body, and a valid call.",
"ms": "Definisi fungsi mempunyai titik bertindih, kandungan berinden dan panggilan yang sah."
}
},
{
"id": "EP010",
"difficulty": "easy",
"code": "def greet()\n    print(\"Hello\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A colon is missing after the function definition.",
"ms": "Simbol : selepas definisi fungsi tiada."
}
},
{
"id": "EP011",
"difficulty": "easy",
"code": "total = 4 + 6\nprint(total)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The numbers are added and the result is stored in total.",
"ms": "Nombor ditambah dan hasilnya disimpan dalam total."
}
},
{
"id": "NP001",
"difficulty": "normal",
"code": "age = 18\nprint(\"Age: \" + age)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "This tries to join text and an integer with +. Convert age to text or use a comma.",
"ms": "Kod cuba menggabungkan teks dengan integer menggunakan +. Tukar age kepada teks atau gunakan koma."
}
},
{
"id": "EP012",
"difficulty": "easy",
"code": "for number in range(1, 4):\n    print(number)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The for loop has a colon and an indented body.",
"ms": "Gelung for mempunyai titik bertindih dan kandungan berinden."
}
},
{
"id": "EP013",
"difficulty": "easy",
"code": "count = 1\nwhile count <= 3:\n    print(count)\n    count += 1",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The while loop condition and indented body are valid, and count changes each time.",
"ms": "Syarat gelung while dan kandungan berinden adalah sah, dan count berubah setiap ulangan."
}
},
{
"id": "NP002",
"difficulty": "normal",
"code": "score = 10\nif score => 10:\n    print(\"Pass\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python uses >= for “greater than or equal”; => is not a valid comparison operator.",
"ms": "Python menggunakan >= untuk “lebih besar atau sama”; => bukan operator perbandingan yang sah."
}
},
{
"id": "EP014",
"difficulty": "easy",
"code": "colors = [\"red\", \"blue\"]\nprint(colors[0])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The list is valid and index 0 selects its first item.",
"ms": "List ini sah dan indeks 0 memilih item pertama."
}
},
{
"id": "EP015",
"difficulty": "easy",
"code": "if True:\nprint(\"Hello\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The print() line must be indented inside the if block.",
"ms": "Baris print() perlu diindenkan di dalam blok if."
}
},
{
"id": "EP016",
"difficulty": "easy",
"code": "name = \"Ali\"\nprint name",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "print needs parentheses in Python 3: print(name).",
"ms": "print memerlukan kurungan dalam Python 3: print(name)."
}
},
{
"id": "EP017",
"difficulty": "easy",
"code": "score = 75\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Both if and else branches have colons and indented code.",
"ms": "Kedua-dua cabang if dan else mempunyai titik bertindih serta kod berinden."
}
},
{
"id": "NP003",
"difficulty": "normal",
"code": "age = int(input(\"Age: \"))\nprint(age)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "input() is converted to an integer before it is printed.",
"ms": "input() ditukar kepada integer sebelum dipaparkan."
}
},
{
"id": "NP004",
"difficulty": "normal",
"code": "x = 5\ny = 3\nprint(x + y)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Two numbers are added and printed.",
"ms": "Dua nombor ditambah lalu dipaparkan."
}
},
{
"id": "NP005",
"difficulty": "normal",
"code": "x = 5\nprint(x +)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The + operator needs a value after it.",
"ms": "Operator + memerlukan nilai selepasnya."
}
},
{
"id": "NP006",
"difficulty": "normal",
"code": "for i in range(3):\n    print(i)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The for line ends with a colon and the body is indented.",
"ms": "Baris for diakhiri titik bertindih dan kandungannya berinden."
}
},
{
"id": "NP007",
"difficulty": "normal",
"code": "for i in range(3)\n    print(i)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A colon is missing after range(3).",
"ms": "Titik bertindih tiada selepas range(3)."
}
},
{
"id": "NP008",
"difficulty": "normal",
"code": "fruits = [\"apple\", \"banana\"]\nprint(fruits[0])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Index 0 gives the first item.",
"ms": "Indeks 0 memberikan item pertama."
}
},
{
"id": "NP009",
"difficulty": "normal",
"code": "fruits = [\"apple\", \"banana\"]\nprint(fruits[5])",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Index 5 is out of range and raises IndexError.",
"ms": "Indeks 5 di luar julat dan menyebabkan IndexError."
}
},
{
"id": "NP010",
"difficulty": "normal",
"code": "def hello():\n    print(\"Hi\")\nhello()",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The function is defined and then called.",
"ms": "Fungsi ditakrif kemudian dipanggil."
}
},
{
"id": "NP011",
"difficulty": "normal",
"code": "def hello()\n    print(\"Hi\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The def line needs a colon.",
"ms": "Baris def memerlukan titik bertindih."
}
},
{
"id": "NP012",
"difficulty": "normal",
"code": "name = \"Ali\"\nprint(name.upper())",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "upper() is a valid string method.",
"ms": "upper() ialah kaedah string yang sah."
}
},
{
"id": "NP013",
"difficulty": "normal",
"code": "name = \"Ali\"\nprint(name.uppercase())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The method is upper(), not uppercase().",
"ms": "Kaedahnya upper(), bukan uppercase()."
}
},
{
"id": "NP014",
"difficulty": "normal",
"code": "x = 10\nwhile x > 7:\n    x -= 1",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The while loop is written correctly.",
"ms": "Gelung while ditulis dengan betul."
}
},
{
"id": "NP015",
"difficulty": "normal",
"code": "x = 10\nwhile x > 7\n    x -= 1",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The while condition needs a colon.",
"ms": "Syarat while memerlukan titik bertindih."
}
},
{
"id": "NP016",
"difficulty": "normal",
"code": "student = {\"name\": \"Siti\", \"age\": 17}\nprint(student[\"name\"])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A dictionary value is read using its key.",
"ms": "Nilai kamus dibaca menggunakan kuncinya."
}
},
{
"id": "NP017",
"difficulty": "normal",
"code": "student = {\"name\": \"Siti\", \"age\": 17\nprint(student)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The closing brace } is missing.",
"ms": "Tanda penutup } tiada."
}
},
{
"id": "NP018",
"difficulty": "normal",
"code": "print(len(\"Python\"))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "len() returns the length of the string.",
"ms": "len() memulangkan panjang string."
}
},
{
"id": "NP019",
"difficulty": "normal",
"code": "print(length(\"Python\"))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "length() does not exist; use len().",
"ms": "length() tidak wujud; gunakan len()."
}
},
{
"id": "NP020",
"difficulty": "normal",
"code": "a = 7\nif a % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Both branches are valid and indented.",
"ms": "Kedua-dua cabang sah dan berinden."
}
},
{
"id": "NP021",
"difficulty": "normal",
"code": "a = 7\nif a % 2 = 0:\n    print(\"Even\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Comparison needs == not a single =.",
"ms": "Perbandingan perlu == bukan satu =."
}
},
{
"id": "NP022",
"difficulty": "normal",
"code": "nums = [1, 2, 3]\nnums.append(4)\nprint(nums)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "append() adds an item to the list.",
"ms": "append() menambah item ke dalam list."
}
},
{
"id": "NP023",
"difficulty": "normal",
"code": "nums = [1, 2, 3]\nnums.add(4)\nprint(nums)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Lists use append(), not add().",
"ms": "List menggunakan append(), bukan add()."
}
},
{
"id": "MP001",
"difficulty": "medium",
"code": "print(\"Total:\", 5 * 4)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "print() can take several values separated by commas.",
"ms": "print() boleh menerima beberapa nilai dipisahkan koma."
}
},
{
"id": "MP002",
"difficulty": "medium",
"code": "print(\"Total:\" 5 * 4)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A comma is missing between the two values.",
"ms": "Koma tiada antara dua nilai itu."
}
},
{
"id": "MP003",
"difficulty": "medium",
"code": "age = \"20\"\nprint(age + 1)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A string cannot be added to an integer.",
"ms": "String tidak boleh ditambah dengan integer."
}
},
{
"id": "MP004",
"difficulty": "medium",
"code": "age = int(\"20\")\nprint(age + 1)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "int() converts the string to a number first.",
"ms": "int() menukar string kepada nombor dahulu."
}
},
{
"id": "MP005",
"difficulty": "medium",
"code": "def add(a, b):\n    return a + b\nprint(add(2, 3))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The function returns a value that is printed.",
"ms": "Fungsi memulangkan nilai yang dipaparkan."
}
},
{
"id": "MP006",
"difficulty": "medium",
"code": "def add(a, b):\nreturn a + b",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The return line must be indented.",
"ms": "Baris return mesti berinden."
}
},
{
"id": "MP007",
"difficulty": "medium",
"code": "word = \"Python\"\nprint(word[0])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Strings can be indexed; index 0 is \"P\".",
"ms": "String boleh diindeks; indeks 0 ialah \"P\"."
}
},
{
"id": "MP008",
"difficulty": "medium",
"code": "word = \"Python\"\nword[0] = \"J\"",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Strings are immutable and cannot be changed this way.",
"ms": "String tidak boleh diubah dengan cara ini."
}
},
{
"id": "MP009",
"difficulty": "medium",
"code": "for ch in \"Hi\":\n    print(ch)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A string can be looped through character by character.",
"ms": "String boleh dilalui aksara demi aksara."
}
},
{
"id": "MP010",
"difficulty": "medium",
"code": "for ch in \"Hi\":\nprint(ch)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The loop body is not indented.",
"ms": "Kandungan gelung tidak berinden."
}
},
{
"id": "MP011",
"difficulty": "medium",
"code": "x = 3\nif x > 1 and x < 5:\n    print(\"In range\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "and combines two valid conditions.",
"ms": "and menggabungkan dua syarat yang sah."
}
},
{
"id": "MP012",
"difficulty": "medium",
"code": "x = 3\nif x > 1 && x < 5:\n    print(\"In range\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python uses and, not &&.",
"ms": "Python menggunakan and, bukan &&."
}
},
{
"id": "MP013",
"difficulty": "medium",
"code": "d = {\"a\": 1}\nd[\"b\"] = 2\nprint(d)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A new key can be added by assignment.",
"ms": "Kunci baharu boleh ditambah melalui tugasan."
}
},
{
"id": "MP014",
"difficulty": "medium",
"code": "t = (1, 2, 3)\nt.append(4)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Tuples cannot be changed; they have no append().",
"ms": "Tuple tidak boleh diubah; ia tiada append()."
}
},
{
"id": "MP015",
"difficulty": "medium",
"code": "nums = [3, 1, 2]\nnums.sort()\nprint(nums)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "sort() sorts the list in place.",
"ms": "sort() menyusun list di tempatnya."
}
},
{
"id": "MP016",
"difficulty": "medium",
"code": "nums = [3, 1, 2]\nprint(nums.sorted())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Lists have sort(); sorted() is a separate function.",
"ms": "List mempunyai sort(); sorted() ialah fungsi berasingan."
}
},
{
"id": "MP017",
"difficulty": "medium",
"code": "text = \"hello world\"\nprint(text.split())",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "split() breaks the string into a list of words.",
"ms": "split() memecahkan string kepada senarai perkataan."
}
},
{
"id": "MP018",
"difficulty": "medium",
"code": "print(\"Hello)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The string is missing its closing quotation mark.",
"ms": "String tiada tanda petikan penutup."
}
},
{
"id": "MP019",
"difficulty": "medium",
"code": "total = 0\nfor n in [1, 2, 3]:\n    total += n\nprint(total)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The loop adds each number to total.",
"ms": "Gelung menambah setiap nombor ke dalam total."
}
},
{
"id": "MP020",
"difficulty": "medium",
"code": "import math\nprint(math.sqrt(16))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "math is imported and sqrt() is a valid function.",
"ms": "math diimport dan sqrt() ialah fungsi yang sah."
}
},
{
"id": "EP018",
"difficulty": "easy",
"code": "print(\"Good morning!\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The text is in quotes and the brackets are closed.",
"ms": "Teks dalam petikan dan kurungan ditutup."
}
},
{
"id": "EP019",
"difficulty": "easy",
"code": "print(\"Good morning!\"",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The closing bracket ) is missing.",
"ms": "Kurungan penutup ) tertinggal."
}
},
{
"id": "EP020",
"difficulty": "easy",
"code": "Print(\"Hi\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python is case-sensitive. It must be print, not Print.",
"ms": "Python sensitif huruf. Mesti print, bukan Print."
}
},
{
"id": "EP021",
"difficulty": "easy",
"code": "print('Hi')",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Single quotes work just as well as double quotes.",
"ms": "Petikan tunggal juga sah seperti petikan berganda."
}
},
{
"id": "EP022",
"difficulty": "easy",
"code": "print(\"Hi')",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The quotes do not match: it starts with \" but ends with '.",
"ms": "Petikan tidak sepadan: bermula dengan \" tetapi berakhir dengan '."
}
},
{
"id": "EP023",
"difficulty": "easy",
"code": "# My first program\nprint(\"Hello\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The first line is a comment, which Python ignores.",
"ms": "Baris pertama ialah komen, yang diabaikan oleh Python."
}
},
{
"id": "EP024",
"difficulty": "easy",
"code": "score = 10\nprint(score)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The variable is created and then printed.",
"ms": "Pemboleh ubah dicipta kemudian dipaparkan."
}
},
{
"id": "EP025",
"difficulty": "easy",
"code": "score = 10\nprint(Score)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "score and Score are different names. Score was never created.",
"ms": "score dan Score ialah nama berbeza. Score tidak pernah dicipta."
}
},
{
"id": "EP026",
"difficulty": "easy",
"code": "2players = 2\nprint(2players)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A variable name cannot start with a number.",
"ms": "Nama pemboleh ubah tidak boleh bermula dengan nombor."
}
},
{
"id": "EP027",
"difficulty": "easy",
"code": "players2 = 2\nprint(players2)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Numbers are allowed in a name, just not at the start.",
"ms": "Nombor dibenarkan dalam nama, cuma bukan di awal."
}
},
{
"id": "EP028",
"difficulty": "easy",
"code": "my name = \"Ali\"",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Variable names cannot contain spaces. Use my_name.",
"ms": "Nama pemboleh ubah tidak boleh ada ruang. Guna my_name."
}
},
{
"id": "EP029",
"difficulty": "easy",
"code": "my_name = \"Ali\"\nprint(my_name)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Underscores are allowed in variable names.",
"ms": "Garis bawah dibenarkan dalam nama pemboleh ubah."
}
},
{
"id": "EP030",
"difficulty": "easy",
"code": "print(5 + 3)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python can add numbers inside print().",
"ms": "Python boleh menambah nombor dalam print()."
}
},
{
"id": "EP031",
"difficulty": "easy",
"code": "print(5 x 3)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python uses * for multiplication, not x.",
"ms": "Python menggunakan * untuk darab, bukan x."
}
},
{
"id": "EP032",
"difficulty": "easy",
"code": "print(5 * 3)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "* is the multiplication symbol.",
"ms": "* ialah simbol darab."
}
},
{
"id": "EP033",
"difficulty": "easy",
"code": "print(10 / 2)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "/ divides two numbers.",
"ms": "/ membahagi dua nombor."
}
},
{
"id": "EP034",
"difficulty": "easy",
"code": "print(10 ÷ 2)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python does not know the ÷ symbol. Use /.",
"ms": "Python tidak mengenali simbol ÷. Guna /."
}
},
{
"id": "EP035",
"difficulty": "easy",
"code": "print(True)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "True is a Boolean value and can be printed.",
"ms": "True ialah nilai Boolean dan boleh dipaparkan."
}
},
{
"id": "EP036",
"difficulty": "easy",
"code": "print(true)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Booleans need a capital letter: True.",
"ms": "Boolean memerlukan huruf besar: True."
}
},
{
"id": "EP037",
"difficulty": "easy",
"code": "pets = [\"cat\", \"dog\"]\nprint(pets)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A list uses square brackets and commas.",
"ms": "List menggunakan kurungan segi empat dan koma."
}
},
{
"id": "EP038",
"difficulty": "easy",
"code": "pets = [\"cat\" \"dog\"\nprint(pets)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The closing ] is missing (and a comma is missing too).",
"ms": "Tanda ] tertinggal (dan koma juga tertinggal)."
}
},
{
"id": "EP039",
"difficulty": "easy",
"code": "if 5 > 3:\n    print(\"Yes\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The if line has a colon and the body is indented.",
"ms": "Baris if ada titik bertindih dan kandungannya berinden."
}
},
{
"id": "EP040",
"difficulty": "easy",
"code": "if 5 > 3:\nprint(\"Yes\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The line inside the if must be indented.",
"ms": "Baris di dalam if mesti berinden."
}
},
{
"id": "EP041",
"difficulty": "easy",
"code": "x = 4\nif x == 4:\n    print(\"Four\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "== compares the two values.",
"ms": "== membandingkan dua nilai."
}
},
{
"id": "EP042",
"difficulty": "easy",
"code": "x = 4\nif x = 4:\n    print(\"Four\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A single = assigns. To compare, use ==.",
"ms": "Satu = untuk memberi nilai. Untuk membanding, guna ==."
}
},
{
"id": "EP043",
"difficulty": "easy",
"code": "for i in range(3):\n    print(\"Hi\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The for loop is written correctly with a colon and indentation.",
"ms": "Gelung for ditulis dengan betul dengan titik bertindih dan inden."
}
},
{
"id": "EP044",
"difficulty": "easy",
"code": "for i in range(3)\n    print(\"Hi\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The colon after range(3) is missing.",
"ms": "Titik bertindih selepas range(3) tertinggal."
}
},
{
"id": "EP045",
"difficulty": "easy",
"code": "print(\"I am\", 12, \"years old\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Commas let print() show text and numbers together.",
"ms": "Koma membolehkan print() memaparkan teks dan nombor bersama."
}
},
{
"id": "EP046",
"difficulty": "easy",
"code": "print(\"Hello\" \"World\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Two strings side by side are joined automatically. It prints HelloWorld.",
"ms": "Dua string bersebelahan dicantum secara automatik. Ia memaparkan HelloWorld."
}
},
{
"id": "EP047",
"difficulty": "easy",
"code": "print(\"Hello\",)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A trailing comma inside print() is allowed.",
"ms": "Koma di hujung dalam print() dibenarkan."
}
},
{
"id": "EP048",
"difficulty": "easy",
"code": "print(\"Hi\" + 5)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "You cannot add text and a number. Use str(5).",
"ms": "Anda tidak boleh menambah teks dan nombor. Guna str(5)."
}
},
{
"id": "EP049",
"difficulty": "easy",
"code": "print(len(\"snake\"))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "len() counts the letters in the string.",
"ms": "len() mengira huruf dalam string."
}
},
{
"id": "EP050",
"difficulty": "easy",
"code": "print(len(snake))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "snake has no quotes, so Python looks for a variable that does not exist.",
"ms": "snake tiada petikan, jadi Python mencari pemboleh ubah yang tidak wujud."
}
},
{
"id": "NP024",
"difficulty": "normal",
"code": "x = 7\nprint(x % 2)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "% gives the remainder, here 1.",
"ms": "% memberi baki, di sini 1."
}
},
{
"id": "NP025",
"difficulty": "normal",
"code": "print(7 // 0)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Dividing by zero raises ZeroDivisionError.",
"ms": "Bahagi dengan sifar menimbulkan ZeroDivisionError."
}
},
{
"id": "NP026",
"difficulty": "normal",
"code": "age = 12\nprint(\"Age: \" + str(age))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "str() turns the number into text so it can be joined.",
"ms": "str() menukar nombor kepada teks supaya boleh dicantum."
}
},
{
"id": "NP027",
"difficulty": "normal",
"code": "n = int(\"abc\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "\"abc\" is not a number, so int() raises ValueError.",
"ms": "\"abc\" bukan nombor, jadi int() menimbulkan ValueError."
}
},
{
"id": "NP028",
"difficulty": "normal",
"code": "n = int(\"42\")\nprint(n + 8)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "\"42\" converts to 42, and 42 + 8 works.",
"ms": "\"42\" ditukar kepada 42, dan 42 + 8 berjaya."
}
},
{
"id": "NP029",
"difficulty": "normal",
"code": "word = \"cat\"\nprint(word[3])",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "\"cat\" only has indexes 0, 1 and 2, so word[3] is an IndexError.",
"ms": "\"cat\" hanya ada indeks 0, 1 dan 2, jadi word[3] ialah IndexError."
}
},
{
"id": "NP030",
"difficulty": "normal",
"code": "word = \"cat\"\nprint(word[-1])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Index -1 gives the last letter, \"t\".",
"ms": "Indeks -1 memberi huruf terakhir, \"t\"."
}
},
{
"id": "NP031",
"difficulty": "normal",
"code": "x = 5\nif x > 3:\n    print(\"big\")\nelse:\n    print(\"small\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "if and else are both followed by colons and indented blocks.",
"ms": "if dan else diikuti titik bertindih dan blok berinden."
}
},
{
"id": "NP032",
"difficulty": "normal",
"code": "x = 5\nif x > 3:\n    print(\"big\")\nelse\n    print(\"small\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "else also needs a colon.",
"ms": "else juga memerlukan titik bertindih."
}
},
{
"id": "NP033",
"difficulty": "normal",
"code": "x = 5\nif x > 3:\n    print(\"big\")\nelif x > 1:\n    print(\"medium\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "elif is the correct keyword for another condition.",
"ms": "elif ialah kata kunci yang betul untuk syarat lain."
}
},
{
"id": "NP034",
"difficulty": "normal",
"code": "x = 5\nif x > 3:\n    print(\"big\")\nelse if x > 1:\n    print(\"medium\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python uses elif, not \"else if\".",
"ms": "Python menggunakan elif, bukan \"else if\"."
}
},
{
"id": "NP035",
"difficulty": "normal",
"code": "items = [1, 2, 3]\nitems.append(4)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "append() adds an item to the end of a list.",
"ms": "append() menambah item di hujung list."
}
},
{
"id": "NP036",
"difficulty": "normal",
"code": "items = [1, 2, 3]\nitems.push(4)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python lists have no push(). Use append().",
"ms": "List Python tiada push(). Guna append()."
}
},
{
"id": "NP037",
"difficulty": "normal",
"code": "text = \"hi\"\nprint(text.upper())",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "upper() is a real string method.",
"ms": "upper() ialah kaedah string yang sebenar."
}
},
{
"id": "NP038",
"difficulty": "normal",
"code": "text = \"hi\"\nprint(text.toUpper())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "toUpper() does not exist in Python. Use upper().",
"ms": "toUpper() tiada dalam Python. Guna upper()."
}
},
{
"id": "NP039",
"difficulty": "normal",
"code": "count = 0\nwhile count < 3:\n    count = count + 1\nprint(count)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "count goes up each round, so the loop ends.",
"ms": "count bertambah setiap pusingan, jadi gelung tamat."
}
},
{
"id": "NP040",
"difficulty": "normal",
"code": "total = 0\nfor n in range(5):\n    total += n\nprint(total)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "+= adds n to total each time.",
"ms": "+= menambah n kepada total setiap kali."
}
},
{
"id": "NP041",
"difficulty": "normal",
"code": "total = 0\nfor n in range(5):\n    total =+ n\nprint(total)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Trick! =+ is valid (it means total = +n), so it runs — but it does NOT add. The correct operator is +=.",
"ms": "Helah! =+ sah (bermaksud total = +n), jadi ia berjalan — tetapi ia TIDAK menambah. Operator yang betul ialah +=."
}
},
{
"id": "NP042",
"difficulty": "normal",
"code": "def double(n):\n    return n * 2\nprint(double(5))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The function returns n * 2 and the result is printed.",
"ms": "Fungsi memulangkan n * 2 dan hasilnya dipaparkan."
}
},
{
"id": "NP043",
"difficulty": "normal",
"code": "def double(n):\n    return n * 2\nprint(double())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "double() needs one argument but none was given (TypeError).",
"ms": "double() memerlukan satu argumen tetapi tiada diberi (TypeError)."
}
},
{
"id": "NP044",
"difficulty": "normal",
"code": "def greet(name):\n    print(\"Hi\", name)\ngreet(\"Ana\", \"Bo\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "greet() takes one argument but two were given.",
"ms": "greet() menerima satu argumen tetapi dua diberi."
}
},
{
"id": "NP045",
"difficulty": "normal",
"code": "pet = {\"name\": \"Milo\"}\nprint(pet[\"name\"])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The key \"name\" exists, so its value is printed.",
"ms": "Kunci \"name\" wujud, jadi nilainya dipaparkan."
}
},
{
"id": "NP046",
"difficulty": "normal",
"code": "pet = {\"name\": \"Milo\"}\nprint(pet[\"age\"])",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The key \"age\" does not exist, so this raises KeyError.",
"ms": "Kunci \"age\" tiada, jadi ini menimbulkan KeyError."
}
},
{
"id": "NP047",
"difficulty": "normal",
"code": "pet = {\"name\" = \"Milo\"}",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Dictionaries use a colon between key and value, not =.",
"ms": "Kamus menggunakan titik bertindih antara kunci dan nilai, bukan =."
}
},
{
"id": "NP048",
"difficulty": "normal",
"code": "nums = [4, 5, 6]\nprint(sum(nums) / len(nums))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "sum / len gives the average, 5.0.",
"ms": "sum / len memberi purata, 5.0."
}
},
{
"id": "NP049",
"difficulty": "normal",
"code": "is_on = True\nif is_on:\n    print(\"Light\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A Boolean can be used directly as a condition.",
"ms": "Boolean boleh digunakan terus sebagai syarat."
}
},
{
"id": "NP050",
"difficulty": "normal",
"code": "print(\"Score: %d\" % 90)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "This older % formatting style still works in Python 3.",
"ms": "Gaya format % yang lama masih berfungsi dalam Python 3."
}
},
{
"id": "MP021",
"difficulty": "medium",
"code": "s = \"python\"\nprint(s[1:4])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Slicing [1:4] is valid and gives \"yth\".",
"ms": "Hirisan [1:4] sah dan memberi \"yth\"."
}
},
{
"id": "MP022",
"difficulty": "medium",
"code": "s = \"python\"\nprint(s[10:])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Slicing past the end does not crash; it just gives an empty string.",
"ms": "Hirisan melepasi hujung tidak menimbulkan ralat; ia hanya memberi string kosong."
}
},
{
"id": "MP023",
"difficulty": "medium",
"code": "s = \"python\"\nprint(s[10])",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Indexing past the end raises IndexError (slicing would not).",
"ms": "Pengindeksan melepasi hujung menimbulkan IndexError (hirisan tidak)."
}
},
{
"id": "MP024",
"difficulty": "medium",
"code": "name = \"Ira\"\nprint(f\"Hi {name}!\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A correct f-string: f before the quote, variable in braces.",
"ms": "f-string yang betul: f sebelum petikan, pemboleh ubah dalam kurungan kerinting."
}
},
{
"id": "MP025",
"difficulty": "medium",
"code": "name = \"Ira\"\nprint(f\"Hi {nama}!\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The f-string uses nama, but the variable is called name (NameError).",
"ms": "f-string menggunakan nama, tetapi pemboleh ubahnya bernama name (NameError)."
}
},
{
"id": "MP026",
"difficulty": "medium",
"code": "words = \"a b c\".split()\nprint(words[2])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "split() gives [\"a\", \"b\", \"c\"], and index 2 exists.",
"ms": "split() memberi [\"a\", \"b\", \"c\"], dan indeks 2 wujud."
}
},
{
"id": "MP027",
"difficulty": "medium",
"code": "print(\", \".join([1, 2, 3]))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "join() only works with strings. These are numbers (TypeError).",
"ms": "join() hanya untuk string. Ini nombor (TypeError)."
}
},
{
"id": "MP028",
"difficulty": "medium",
"code": "print(\", \".join([\"1\", \"2\", \"3\"]))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "All items are strings, so join() works.",
"ms": "Semua item ialah string, jadi join() berfungsi."
}
},
{
"id": "MP029",
"difficulty": "medium",
"code": "nums = [5, 2, 9]\nnums.sort()\nprint(nums[0])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "After sorting, nums[0] is the smallest, 2.",
"ms": "Selepas disusun, nums[0] ialah yang terkecil, 2."
}
},
{
"id": "MP030",
"difficulty": "medium",
"code": "nums = [5, 2, 9]\nnums.remove(7)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "7 is not in the list, so remove() raises ValueError.",
"ms": "7 tiada dalam list, jadi remove() menimbulkan ValueError."
}
},
{
"id": "MP031",
"difficulty": "medium",
"code": "nums = []\nprint(nums.pop())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "You cannot pop from an empty list (IndexError).",
"ms": "Anda tidak boleh pop daripada list kosong (IndexError)."
}
},
{
"id": "MP032",
"difficulty": "medium",
"code": "nums = [1, 2, 3]\nnums.insert(1, 9)\nprint(nums)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "insert(1, 9) puts 9 at index 1.",
"ms": "insert(1, 9) meletakkan 9 pada indeks 1."
}
},
{
"id": "MP033",
"difficulty": "medium",
"code": "grid = [[1, 2], [3, 4]]\nprint(grid[1][1])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "grid[1] is [3, 4] and [1] of that is 4.",
"ms": "grid[1] ialah [3, 4] dan [1] daripadanya ialah 4."
}
},
{
"id": "MP034",
"difficulty": "medium",
"code": "grid = [[1, 2], [3, 4]]\nprint(grid[2][0])",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "grid has only rows 0 and 1, so grid[2] is an IndexError.",
"ms": "grid hanya ada baris 0 dan 1, jadi grid[2] ialah IndexError."
}
},
{
"id": "MP035",
"difficulty": "medium",
"code": "d = {\"a\": 1}\nprint(d.get(\"b\", 0))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "get() with a default never crashes on a missing key.",
"ms": "get() dengan nilai lalai tidak menimbulkan ralat jika kunci tiada."
}
},
{
"id": "MP036",
"difficulty": "medium",
"code": "d = {\"a\": 1}\nfor k, v in d.items():\n    print(k, v)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "items() gives key-value pairs that can be unpacked.",
"ms": "items() memberi pasangan kunci-nilai yang boleh dibuka."
}
},
{
"id": "MP037",
"difficulty": "medium",
"code": "d = {\"a\": 1}\nfor k, v in d:\n    print(k, v)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Looping over a dict gives only keys. \"a\" cannot be split into k and v (ValueError).",
"ms": "Gelung atas dict hanya memberi kunci. \"a\" tidak boleh dipecah kepada k dan v (ValueError)."
}
},
{
"id": "MP038",
"difficulty": "medium",
"code": "n = 10\nwhile n > 0:\n    n -= 3\nprint(n)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "n keeps going down, so the loop ends (n becomes -2).",
"ms": "n terus berkurang, jadi gelung tamat (n menjadi -2)."
}
},
{
"id": "MP039",
"difficulty": "medium",
"code": "def area(w, h=1):\n    return w * h\nprint(area(4))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "h has a default value, so one argument is enough.",
"ms": "h ada nilai lalai, jadi satu argumen sudah cukup."
}
},
{
"id": "MP040",
"difficulty": "medium",
"code": "def area(w=1, h):\n    return w * h",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Parameters with defaults must come AFTER those without (SyntaxError).",
"ms": "Parameter dengan nilai lalai mesti datang SELEPAS parameter tanpa nilai lalai (SyntaxError)."
}
},
{
"id": "MP041",
"difficulty": "medium",
"code": "def get_score():\n    score = 5\nget_score()\nprint(score)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "score only exists inside the function. Outside, it is a NameError.",
"ms": "score hanya wujud dalam fungsi. Di luar, ia NameError."
}
},
{
"id": "MP042",
"difficulty": "medium",
"code": "def get_score():\n    return 5\nscore = get_score()\nprint(score)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The function returns the value and it is stored outside.",
"ms": "Fungsi memulangkan nilai dan ia disimpan di luar."
}
},
{
"id": "MP043",
"difficulty": "medium",
"code": "def nothing():\n    pass\nprint(nothing() + 1)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "nothing() returns None, and None + 1 is a TypeError.",
"ms": "nothing() memulangkan None, dan None + 1 ialah TypeError."
}
},
{
"id": "MP044",
"difficulty": "medium",
"code": "try:\n    x = int(\"7a\")\nexcept ValueError:\n    x = 0\nprint(x)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The error is caught by except, so the program continues.",
"ms": "Ralat ditangkap oleh except, jadi program diteruskan."
}
},
{
"id": "MP045",
"difficulty": "medium",
"code": "try:\n    x = int(\"7a\")\nprint(x)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A try block must be followed by except or finally (SyntaxError).",
"ms": "Blok try mesti diikuti oleh except atau finally (SyntaxError)."
}
},
{
"id": "MP046",
"difficulty": "medium",
"code": "import random\nprint(random.randint(1, 6))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The module is imported before it is used.",
"ms": "Modul diimport sebelum digunakan."
}
},
{
"id": "MP047",
"difficulty": "medium",
"code": "print(random.randint(1, 6))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "random was never imported (NameError).",
"ms": "random tidak pernah diimport (NameError)."
}
},
{
"id": "MP048",
"difficulty": "medium",
"code": "t = (1, 2, 3)\nprint(t[0] + t[2])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Reading from a tuple is allowed: 1 + 3.",
"ms": "Membaca daripada tuple dibenarkan: 1 + 3."
}
},
{
"id": "MP049",
"difficulty": "medium",
"code": "x = 5\nprint(x > 3 and x < 10)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "and joins two comparisons correctly.",
"ms": "and menggabungkan dua perbandingan dengan betul."
}
},
{
"id": "MP050",
"difficulty": "medium",
"code": "print(max())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "max() needs at least one value (TypeError).",
"ms": "max() memerlukan sekurang-kurangnya satu nilai (TypeError)."
}
},
{
"id": "HP001",
"difficulty": "hard",
"code": "squares = [n * n for n in range(5)]\nprint(squares)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A valid list comprehension.",
"ms": "List comprehension yang sah."
}
},
{
"id": "HP002",
"difficulty": "hard",
"code": "squares = [n * n for n in range(5]\nprint(squares)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The bracket of range( is not closed before ] (SyntaxError).",
"ms": "Kurungan range( tidak ditutup sebelum ] (SyntaxError)."
}
},
{
"id": "HP003",
"difficulty": "hard",
"code": "evens = [n for n in range(10) if n % 2 == 0]",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A comprehension with a filter is valid.",
"ms": "Comprehension dengan penapis adalah sah."
}
},
{
"id": "HP004",
"difficulty": "hard",
"code": "evens = [n if n % 2 == 0 for n in range(10)]",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "An if without else must go at the END of the comprehension (SyntaxError).",
"ms": "if tanpa else mesti di HUJUNG comprehension (SyntaxError)."
}
},
{
"id": "HP005",
"difficulty": "hard",
"code": "labels = [\"even\" if n % 2 == 0 else \"odd\" for n in range(3)]",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "An if/else expression at the front is allowed.",
"ms": "Ungkapan if/else di hadapan dibenarkan."
}
},
{
"id": "HP006",
"difficulty": "hard",
"code": "nums = (1, 2, 3)\nnums[0] = 5",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Tuples are immutable, so item assignment is a TypeError.",
"ms": "Tuple tidak boleh diubah, jadi memberi nilai pada item ialah TypeError."
}
},
{
"id": "HP007",
"difficulty": "hard",
"code": "nums = (1, 2, 3)\nnums = nums + (4,)\nprint(nums)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "This builds a NEW tuple, which is allowed.",
"ms": "Ini membina tuple BAHARU, yang dibenarkan."
}
},
{
"id": "HP008",
"difficulty": "hard",
"code": "one = (5)\nprint(one + 1)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "(5) is just the number 5 in brackets, so 5 + 1 works. A one-item tuple needs a comma: (5,).",
"ms": "(5) hanyalah nombor 5 dalam kurungan, jadi 5 + 1 berjaya. Tuple satu item perlukan koma: (5,)."
}
},
{
"id": "HP009",
"difficulty": "hard",
"code": "one = (5,)\nprint(one + 1)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "(5,) is a tuple, and you cannot add a tuple and a number (TypeError).",
"ms": "(5,) ialah tuple, dan anda tidak boleh menambah tuple dengan nombor (TypeError)."
}
},
{
"id": "HP010",
"difficulty": "hard",
"code": "s = {1, 2, 3}\nprint(s[0])",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Sets have no order, so they cannot be indexed (TypeError).",
"ms": "Set tiada susunan, jadi tidak boleh diindeks (TypeError)."
}
},
{
"id": "HP011",
"difficulty": "hard",
"code": "s = {1, 2, 3}\ns.add(4)\nprint(len(s))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "add() puts a new value into the set.",
"ms": "add() memasukkan nilai baharu ke dalam set."
}
},
{
"id": "HP012",
"difficulty": "hard",
"code": "d = {[1]: \"a\"}",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A list cannot be a dict key because it can change (TypeError).",
"ms": "List tidak boleh jadi kunci dict kerana ia boleh berubah (TypeError)."
}
},
{
"id": "HP013",
"difficulty": "hard",
"code": "d = {(1, 2): \"a\"}\nprint(d[(1, 2)])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Tuples are unchangeable, so they can be dict keys.",
"ms": "Tuple tidak boleh berubah, jadi boleh jadi kunci dict."
}
},
{
"id": "HP014",
"difficulty": "hard",
"code": "count = 0\ndef bump():\n    count += 1\nbump()",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "count is assigned inside the function, so it is local and read before it has a value (UnboundLocalError).",
"ms": "count diberi nilai dalam fungsi, jadi ia tempatan dan dibaca sebelum ada nilai (UnboundLocalError)."
}
},
{
"id": "HP015",
"difficulty": "hard",
"code": "count = 0\ndef bump():\n    global count\n    count += 1\nbump()\nprint(count)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "global lets the function change the outer variable.",
"ms": "global membenarkan fungsi mengubah pemboleh ubah luar."
}
},
{
"id": "HP016",
"difficulty": "hard",
"code": "def f(*args):\n    return len(args)\nprint(f(1, 2, 3))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "*args collects any number of arguments.",
"ms": "*args mengumpul sebarang bilangan argumen."
}
},
{
"id": "HP017",
"difficulty": "hard",
"code": "def f(**info):\n    return info[\"name\"]\nprint(f(name=\"Ali\"))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "**info collects keyword arguments into a dict.",
"ms": "**info mengumpul argumen kata kunci ke dalam dict."
}
},
{
"id": "HP018",
"difficulty": "hard",
"code": "def f(a, b):\n    return a + b\nprint(f(1, a=2))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "a gets a value twice: from position and from a=2 (TypeError).",
"ms": "a menerima nilai dua kali: daripada kedudukan dan daripada a=2 (TypeError)."
}
},
{
"id": "HP019",
"difficulty": "hard",
"code": "def f(a, b):\n    return a + b\nprint(f(b=1, a=2))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Keyword arguments can be in any order.",
"ms": "Argumen kata kunci boleh dalam sebarang susunan."
}
},
{
"id": "HP020",
"difficulty": "hard",
"code": "add = lambda a, b: a + b\nprint(add(2, 3))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A lambda with two parameters is valid.",
"ms": "lambda dengan dua parameter adalah sah."
}
},
{
"id": "HP021",
"difficulty": "hard",
"code": "add = lambda a, b: return a + b",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A lambda cannot contain the word return (SyntaxError).",
"ms": "lambda tidak boleh mengandungi perkataan return (SyntaxError)."
}
},
{
"id": "HP022",
"difficulty": "hard",
"code": "words = [\"bb\", \"a\", \"ccc\"]\nprint(sorted(words, key=len))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "key=len is a valid way to sort by length.",
"ms": "key=len ialah cara sah untuk menyusun ikut panjang."
}
},
{
"id": "HP023",
"difficulty": "hard",
"code": "print(sorted([3, \"a\", 1]))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Python cannot compare numbers with strings when sorting (TypeError).",
"ms": "Python tidak boleh membandingkan nombor dengan string semasa menyusun (TypeError)."
}
},
{
"id": "HP024",
"difficulty": "hard",
"code": "for i, ch in enumerate(\"hi\"):\n    print(i, ch)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "enumerate() gives (index, item) pairs.",
"ms": "enumerate() memberi pasangan (indeks, item)."
}
},
{
"id": "HP025",
"difficulty": "hard",
"code": "for a, b in zip([1, 2], [3, 4]):\n    print(a * b)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "zip() pairs the lists item by item.",
"ms": "zip() memasangkan list item demi item."
}
},
{
"id": "HP026",
"difficulty": "hard",
"code": "a, b = [1, 2, 3]",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "There are 3 values but only 2 names (ValueError: too many values to unpack).",
"ms": "Ada 3 nilai tetapi hanya 2 nama (ValueError: terlalu banyak nilai untuk dibuka)."
}
},
{
"id": "HP027",
"difficulty": "hard",
"code": "a, *b = [1, 2, 3]\nprint(b)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "*b collects the remaining items into a list.",
"ms": "*b mengumpul baki item ke dalam list."
}
},
{
"id": "HP028",
"difficulty": "hard",
"code": "def fact(n):\n    if n == 0:\n        return 1\n    return n * fact(n - 1)\nprint(fact(5))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The base case n == 0 stops the recursion.",
"ms": "Kes asas n == 0 menghentikan rekursi."
}
},
{
"id": "HP029",
"difficulty": "hard",
"code": "def fact(n):\n    return n * fact(n - 1)\nprint(fact(5))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "There is no base case, so it calls itself forever until RecursionError.",
"ms": "Tiada kes asas, jadi ia memanggil dirinya tanpa henti sehingga RecursionError."
}
},
{
"id": "HP030",
"difficulty": "hard",
"code": "try:\n    print(1 / 0)\nexcept ZeroDivisionError as e:\n    print(\"Error:\", e)\nfinally:\n    print(\"done\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "try / except / finally in the correct order.",
"ms": "try / except / finally dalam susunan yang betul."
}
},
{
"id": "HP031",
"difficulty": "hard",
"code": "try:\n    print(1 / 0)\nfinally:\n    print(\"done\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "finally runs, but nothing catches the ZeroDivisionError, so the program still crashes.",
"ms": "finally berjalan, tetapi tiada yang menangkap ZeroDivisionError, jadi program tetap ranap."
}
},
{
"id": "HP032",
"difficulty": "hard",
"code": "try:\n    x = [1, 2][3]\nexcept KeyError:\n    print(\"missing\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The error is an IndexError, but only KeyError is caught, so it crashes.",
"ms": "Ralatnya IndexError, tetapi hanya KeyError ditangkap, jadi ia ranap."
}
},
{
"id": "HP033",
"difficulty": "hard",
"code": "try:\n    x = {\"a\": 1}[\"b\"]\nexcept KeyError:\n    print(\"missing\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "The KeyError is caught correctly.",
"ms": "KeyError ditangkap dengan betul."
}
},
{
"id": "HP034",
"difficulty": "hard",
"code": "nums = [1, 2, 3]\ncopy = nums.copy()\ncopy.append(4)\nprint(len(nums))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "copy() makes a separate list; nums still has 3 items.",
"ms": "copy() membuat list berasingan; nums masih ada 3 item."
}
},
{
"id": "HP035",
"difficulty": "hard",
"code": "print(\"abc\".reverse())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Strings have no reverse() method. Use \"abc\"[::-1].",
"ms": "String tiada kaedah reverse(). Guna \"abc\"[::-1]."
}
},
{
"id": "HP036",
"difficulty": "hard",
"code": "print(\"abc\"[::-1])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A slice with step -1 reverses the string.",
"ms": "Hirisan dengan langkah -1 menterbalikkan string."
}
},
{
"id": "HP037",
"difficulty": "hard",
"code": "x = 5\nprint(f\"{x:03d}\")",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": ":03d pads the number with zeros to 3 digits: 005.",
"ms": ":03d mengisi nombor dengan sifar hingga 3 digit: 005."
}
},
{
"id": "HP038",
"difficulty": "hard",
"code": "x = \"5\"\nprint(f\"{x:03d}\")",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "d formatting only works with integers, but x is a string (ValueError).",
"ms": "Format d hanya untuk integer, tetapi x ialah string (ValueError)."
}
},
{
"id": "HP039",
"difficulty": "hard",
"code": "print(int(\"3.5\"))",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "int() cannot read a decimal string directly. Use int(float(\"3.5\")).",
"ms": "int() tidak boleh membaca string perpuluhan terus. Guna int(float(\"3.5\"))."
}
},
{
"id": "HP040",
"difficulty": "hard",
"code": "print(int(float(\"3.5\")))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "First convert to 3.5, then int() cuts it to 3.",
"ms": "Mula-mula tukar kepada 3.5, kemudian int() memotongnya menjadi 3."
}
},
{
"id": "HP041",
"difficulty": "hard",
"code": "data = {\"a\": 1}\nfor k in data:\n    data[\"b\"] = 2",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "You cannot add keys to a dict while looping over it (RuntimeError).",
"ms": "Anda tidak boleh menambah kunci ke dict semasa menggelungnya (RuntimeError)."
}
},
{
"id": "HP042",
"difficulty": "hard",
"code": "data = {\"a\": 1}\nfor k in list(data):\n    data[k + \"!\"] = 2\nprint(len(data))",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Looping over a copy of the keys makes it safe to add new keys.",
"ms": "Menggelung salinan kunci menjadikannya selamat untuk menambah kunci baharu."
}
},
{
"id": "HP043",
"difficulty": "hard",
"code": "class Pet:\n    def __init__(self, name):\n        self.name = name\np = Pet(\"Milo\")\nprint(p.name)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A simple class: __init__ stores the name on the object.",
"ms": "Kelas ringkas: __init__ menyimpan nama pada objek."
}
},
{
"id": "HP044",
"difficulty": "hard",
"code": "class Pet:\n    def __init__(self, name):\n        self.name = name\np = Pet()\nprint(p.name)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Pet() needs a name argument (TypeError).",
"ms": "Pet() memerlukan argumen name (TypeError)."
}
},
{
"id": "HP045",
"difficulty": "hard",
"code": "class Pet:\n    def speak():\n        return \"Hi\"\nprint(Pet().speak())",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "Methods need self as the first parameter, so this is a TypeError.",
"ms": "Kaedah memerlukan self sebagai parameter pertama, jadi ini TypeError."
}
},
{
"id": "HP046",
"difficulty": "hard",
"code": "nums = [3, 1, 2]\nprint(nums.sort()[0])",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "sort() returns None, and None[0] is a TypeError.",
"ms": "sort() memulangkan None, dan None[0] ialah TypeError."
}
},
{
"id": "HP047",
"difficulty": "hard",
"code": "nums = [3, 1, 2]\nprint(sorted(nums)[0])",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "sorted() returns a new list, which can be indexed.",
"ms": "sorted() memulangkan list baharu, yang boleh diindeks."
}
},
{
"id": "HP048",
"difficulty": "hard",
"code": "matrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]\nprint(flat)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A nested comprehension that flattens the grid.",
"ms": "Comprehension bersarang yang meratakan grid."
}
},
{
"id": "HP049",
"difficulty": "hard",
"code": "x = 10\nresult = \"big\" if x > 5\nprint(result)",
"correct": false,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A one-line if expression must have an else part (SyntaxError).",
"ms": "Ungkapan if satu baris mesti ada bahagian else (SyntaxError)."
}
},
{
"id": "HP050",
"difficulty": "hard",
"code": "x = 10\nresult = \"big\" if x > 5 else \"small\"\nprint(result)",
"correct": true,
"question": {
"en": "Is this Python code correct?",
"ms": "Adakah kod Python ini betul?"
},
"explanation": {
"en": "A complete conditional expression.",
"ms": "Ungkapan bersyarat yang lengkap."
}
}
];
