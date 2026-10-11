/* PyQuest — bank soalan Kuiz (update 7). 332 soalan, 4 tahap: easy / normal / medium / hard.
   Setiap jawapan soalan kod telah disemak dengan menjalankan kod Python sebenar. */
window.PYQUEST_QUESTIONS=[
{
"id": "EQ001",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What is Python?",
"ms": "Apakah Python?"
},
"options": {
"en": [
"An operating system",
"A web browser",
"A programming language",
"A database"
],
"ms": [
"Sistem pengendalian",
"Pelayar web",
"Bahasa pengaturcaraan",
"Pangkalan data"
]
},
"answer": 2,
"explanation": {
"en": "Python is a high-level programming language used for web development, data analysis, automation, AI and many other applications.",
"ms": "Python ialah bahasa pengaturcaraan peringkat tinggi untuk pembangunan web, analisis data, automasi, AI dan banyak lagi."
},
"points": 10
},
{
"id": "EQ002",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "Which function is used to display output in Python?",
"ms": "Fungsi manakah digunakan untuk memaparkan output dalam Python?"
},
"options": {
"en": [
"echo()",
"output()",
"print()",
"display()"
],
"ms": [
"echo()",
"output()",
"print()",
"display()"
]
},
"answer": 2,
"explanation": {
"en": "The print() function displays information in the console.",
"ms": "Fungsi print() digunakan untuk memaparkan maklumat pada konsol."
},
"points": 10
},
{
"id": "EQ003",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "Which symbol is used to write a comment in Python?",
"ms": "Simbol manakah digunakan untuk menulis komen dalam Python?"
},
"options": {
"en": [
"//",
"#",
"/*",
"--"
],
"ms": [
"//",
"#",
"/*",
"--"
]
},
"answer": 1,
"explanation": {
"en": "Python uses # for single-line comments.",
"ms": "Python menggunakan # untuk komen satu baris."
},
"points": 10
},
{
"id": "EQ004",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"\"Hello Python\"",
"Hello Python",
"Hello",
"Python"
],
"ms": [
"\"Hello Python\"",
"Hello Python",
"Hello",
"Python"
]
},
"answer": 1,
"explanation": {
"en": "print() displays the text inside the quotation marks without the quotation marks.",
"ms": "print() memaparkan teks di dalam tanda petikan tanpa tanda petikan tersebut."
},
"points": 10,
"code": "print(\"Hello Python\")"
},
{
"id": "EQ005",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "Which of the following is a valid Python variable?",
"ms": "Manakah antara berikut ialah pemboleh ubah Python yang sah?"
},
"options": {
"en": [
"my_name = \"Ali\"",
"class = \"Ali\"",
"my-name = \"Ali\"",
"2name = \"Ali\""
],
"ms": [
"my_name = \"Ali\"",
"class = \"Ali\"",
"my-name = \"Ali\"",
"2name = \"Ali\""
]
},
"answer": 0,
"explanation": {
"en": "Variable names cannot start with a number or use reserved keywords. Underscores are allowed.",
"ms": "Nama pemboleh ubah tidak boleh bermula dengan nombor atau menggunakan kata kunci terpelihara. Garis bawah dibenarkan."
},
"points": 10
},
{
"id": "EQ006",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What data type is \"Hello\"?",
"ms": "Apakah jenis data bagi \"Hello\"?"
},
"options": {
"en": [
"String",
"Float",
"Integer",
"Boolean"
],
"ms": [
"String",
"Float",
"Integer",
"Boolean"
]
},
"answer": 0,
"explanation": {
"en": "Text surrounded by quotation marks is a string.",
"ms": "Teks yang diapit tanda petikan ialah string."
},
"points": 10
},
{
"id": "EQ007",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What data type is 25?",
"ms": "Apakah jenis data bagi 25?"
},
"options": {
"en": [
"Boolean",
"Integer",
"String",
"Float"
],
"ms": [
"Boolean",
"Integer",
"String",
"Float"
]
},
"answer": 1,
"explanation": {
"en": "Whole numbers such as 25 are integers.",
"ms": "Nombor bulat seperti 25 ialah integer."
},
"points": 10
},
{
"id": "EQ008",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What data type is 3.14?",
"ms": "Apakah jenis data bagi 3.14?"
},
"options": {
"en": [
"Integer",
"Boolean",
"String",
"Float"
],
"ms": [
"Integer",
"Boolean",
"String",
"Float"
]
},
"answer": 3,
"explanation": {
"en": "Numbers containing decimal values are floats.",
"ms": "Nombor yang mempunyai nilai perpuluhan ialah float."
},
"points": 10
},
{
"id": "EQ009",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "Which data type represents True or False?",
"ms": "Jenis data manakah mewakili True atau False?"
},
"options": {
"en": [
"Boolean",
"String",
"Integer",
"Float"
],
"ms": [
"Boolean",
"String",
"Integer",
"Float"
]
},
"answer": 0,
"explanation": {
"en": "Boolean values can be True or False.",
"ms": "Nilai boolean ialah True atau False."
},
"points": 10
},
{
"id": "NQ001",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"<class 'bool'>",
"<class 'float'>",
"<class 'str'>",
"<class 'int'>"
],
"ms": [
"<class 'bool'>",
"<class 'float'>",
"<class 'str'>",
"<class 'int'>"
]
},
"answer": 3,
"explanation": {
"en": "The value 10 is an integer, so Python identifies its type as int.",
"ms": "Nilai 10 ialah nombor bulat, jadi Python mengenal pasti jenisnya sebagai int."
},
"points": 15,
"code": "x = 10\nprint(type(x))"
},
{
"id": "EQ010",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What is the result of 10 + 5?",
"ms": "Apakah hasil bagi 10 + 5?"
},
"options": {
"en": [
"105",
"15",
"50",
"5"
],
"ms": [
"105",
"15",
"50",
"5"
]
},
"answer": 1,
"explanation": {
"en": "The + operator performs addition.",
"ms": "Operator + digunakan untuk operasi tambah."
},
"points": 10
},
{
"id": "NQ002",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What is the result of 10 // 3?",
"ms": "Apakah hasil bagi 10 // 3?"
},
"options": {
"en": [
"0",
"3",
"3.33",
"1"
],
"ms": [
"0",
"3",
"3.33",
"1"
]
},
"answer": 1,
"explanation": {
"en": "// performs floor division and returns the whole-number result.",
"ms": "// melakukan floor division dan mengembalikan hasil nombor bulat."
},
"points": 15
},
{
"id": "NQ003",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What is the result of 10 % 3?",
"ms": "Apakah hasil bagi 10 % 3?"
},
"options": {
"en": [
"0",
"10",
"1",
"3"
],
"ms": [
"0",
"10",
"1",
"3"
]
},
"answer": 2,
"explanation": {
"en": "% returns the remainder after division. 10 divided by 3 leaves a remainder of 1.",
"ms": "% mengembalikan baki selepas pembahagian. 10 dibahagi 3 mempunyai baki 1."
},
"points": 15
},
{
"id": "EQ011",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What does == mean in Python?",
"ms": "Apakah maksud == dalam Python?"
},
"options": {
"en": [
"Not equal",
"Addition",
"Equal comparison",
"Assignment"
],
"ms": [
"Tidak sama dengan",
"Penambahan",
"Perbandingan sama dengan",
"Penetapan nilai"
]
},
"answer": 2,
"explanation": {
"en": "== checks whether two values are equal.",
"ms": "== memeriksa sama ada dua nilai adalah sama."
},
"points": 10
},
{
"id": "EQ012",
"difficulty": "easy",
"category": "if_else",
"question": {
"en": "Which keyword is used to create a condition in Python?",
"ms": "Kata kunci manakah digunakan untuk membuat syarat dalam Python?"
},
"options": {
"en": [
"when",
"condition",
"if",
"check"
],
"ms": [
"when",
"condition",
"if",
"check"
]
},
"answer": 2,
"explanation": {
"en": "The if keyword executes code when a condition is true.",
"ms": "Kata kunci if menjalankan kod apabila sesuatu syarat adalah benar."
},
"points": 10
},
{
"id": "NQ004",
"difficulty": "normal",
"category": "if_else",
"question": {
"en": "What will this code print?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Adult",
"Minor",
"20",
"Error"
],
"ms": [
"Adult",
"Minor",
"20",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "20 is greater than or equal to 18, so the if condition is true.",
"ms": "20 lebih besar atau sama dengan 18, jadi syarat if adalah benar."
},
"points": 15,
"code": "age = 20\n\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")"
},
{
"id": "EQ013",
"difficulty": "easy",
"category": "if_else",
"question": {
"en": "Which keyword runs when the if condition is false?",
"ms": "Kata kunci manakah dijalankan apabila syarat if adalah salah?"
},
"options": {
"en": [
"otherwise",
"else",
"false",
"elif"
],
"ms": [
"otherwise",
"else",
"false",
"elif"
]
},
"answer": 1,
"explanation": {
"en": "else runs when the preceding if condition is false.",
"ms": "else dijalankan apabila syarat if sebelumnya adalah salah."
},
"points": 10
},
{
"id": "EQ014",
"difficulty": "easy",
"category": "loops",
"question": {
"en": "Which loop is commonly used to iterate through a list?",
"ms": "Gelung manakah biasanya digunakan untuk melalui setiap item dalam senarai?"
},
"options": {
"en": [
"if",
"select",
"switch",
"for"
],
"ms": [
"if",
"select",
"switch",
"for"
]
},
"answer": 3,
"explanation": {
"en": "A for loop commonly iterates over sequences such as lists.",
"ms": "Gelung for biasanya digunakan untuk melalui jujukan seperti senarai."
},
"points": 10
},
{
"id": "EQ015",
"difficulty": "easy",
"category": "loops",
"question": {
"en": "Which keyword stops a loop immediately?",
"ms": "Kata kunci manakah digunakan untuk menghentikan gelung serta-merta?"
},
"options": {
"en": [
"end",
"break",
"stop",
"exit"
],
"ms": [
"end",
"break",
"stop",
"exit"
]
},
"answer": 1,
"explanation": {
"en": "break immediately exits the current loop.",
"ms": "break menghentikan gelung semasa serta-merta."
},
"points": 10
},
{
"id": "EQ016",
"difficulty": "easy",
"category": "lists",
"question": {
"en": "Which syntax creates a Python list?",
"ms": "Sintaks manakah digunakan untuk membuat senarai Python?"
},
"options": {
"en": [
"[1, 2, 3]",
"{1, 2, 3}",
"(1, 2, 3)",
"<1, 2, 3>"
],
"ms": [
"[1, 2, 3]",
"{1, 2, 3}",
"(1, 2, 3)",
"<1, 2, 3>"
]
},
"answer": 0,
"explanation": {
"en": "Square brackets [] create lists.",
"ms": "Kurungan siku [] digunakan untuk membuat senarai."
},
"points": 10
},
{
"id": "EQ017",
"difficulty": "easy",
"category": "lists",
"question": {
"en": "What is the first index of a Python list?",
"ms": "Apakah indeks pertama bagi senarai Python?"
},
"options": {
"en": [
"1",
"-1",
"0",
"2"
],
"ms": [
"1",
"-1",
"0",
"2"
]
},
"answer": 2,
"explanation": {
"en": "Python uses zero-based indexing, so the first item has index 0.",
"ms": "Python menggunakan indeks bermula dari sifar, jadi item pertama mempunyai indeks 0."
},
"points": 10
},
{
"id": "NQ005",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"10",
"20",
"30",
"Error"
],
"ms": [
"10",
"20",
"30",
"Ralat"
]
},
"answer": 1,
"explanation": {
"en": "Index 1 refers to the second item, which is 20.",
"ms": "Indeks 1 merujuk item kedua, iaitu 20."
},
"points": 15,
"code": "numbers = [10, 20, 30]\nprint(numbers[1])"
},
{
"id": "EQ018",
"difficulty": "easy",
"category": "lists",
"question": {
"en": "Which method adds an item to the end of a list?",
"ms": "Kaedah manakah menambah item pada hujung senarai?"
},
"options": {
"en": [
"add()",
"insert()",
"push()",
"append()"
],
"ms": [
"add()",
"insert()",
"push()",
"append()"
]
},
"answer": 3,
"explanation": {
"en": "append() adds an item to the end of a list.",
"ms": "append() menambah item pada hujung senarai."
},
"points": 10
},
{
"id": "EQ019",
"difficulty": "easy",
"category": "functions",
"question": {
"en": "Which keyword is used to define a function?",
"ms": "Kata kunci manakah digunakan untuk mentakrifkan fungsi?"
},
"options": {
"en": [
"function",
"define",
"func",
"def"
],
"ms": [
"function",
"define",
"func",
"def"
]
},
"answer": 3,
"explanation": {
"en": "Python uses the def keyword to define functions.",
"ms": "Python menggunakan kata kunci def untuk mentakrifkan fungsi."
},
"points": 10
},
{
"id": "NQ006",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "What will this code print?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Nothing",
"greet",
"Hello",
"Error"
],
"ms": [
"Tiada apa-apa",
"greet",
"Hello",
"Ralat"
]
},
"answer": 2,
"explanation": {
"en": "Calling greet() executes the code inside the function.",
"ms": "Panggilan greet() menjalankan kod di dalam fungsi."
},
"points": 15,
"code": "def greet():\n    print(\"Hello\")\n\ngreet()"
},
{
"id": "EQ020",
"difficulty": "easy",
"category": "functions",
"question": {
"en": "Which keyword sends a value back from a function?",
"ms": "Kata kunci manakah mengembalikan nilai daripada fungsi?"
},
"options": {
"en": [
"give",
"send",
"return",
"output"
],
"ms": [
"give",
"send",
"return",
"output"
]
},
"answer": 2,
"explanation": {
"en": "return sends a value back to the caller.",
"ms": "return mengembalikan nilai kepada pemanggil fungsi."
},
"points": 10
},
{
"id": "EQ021",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "What will \"Python\".upper() return?",
"ms": "Apakah hasil \"Python\".upper()?"
},
"options": {
"en": [
"PYTHON",
"Python",
"Error",
"python"
],
"ms": [
"PYTHON",
"Python",
"Ralat",
"python"
]
},
"answer": 0,
"explanation": {
"en": "upper() converts all letters in a string to uppercase.",
"ms": "upper() menukar semua huruf dalam string kepada huruf besar."
},
"points": 10
},
{
"id": "EQ022",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "What does len() do?",
"ms": "Apakah fungsi len()?"
},
"options": {
"en": [
"Converts data",
"Deletes data",
"Returns the length",
"Prints data"
],
"ms": [
"Menukar data",
"Memadam data",
"Mengembalikan panjang",
"Memaparkan data"
]
},
"answer": 2,
"explanation": {
"en": "len() returns the number of items or characters.",
"ms": "len() mengembalikan jumlah item atau bilangan aksara."
},
"points": 10
},
{
"id": "NQ007",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5",
"6",
"Python",
"7"
],
"ms": [
"5",
"6",
"Python",
"7"
]
},
"answer": 1,
"explanation": {
"en": "Python contains 6 characters.",
"ms": "Perkataan Python mempunyai 6 aksara."
},
"points": 15,
"code": "word = \"Python\"\nprint(len(word))"
},
{
"id": "EQ023",
"difficulty": "easy",
"category": "dictionaries",
"question": {
"en": "Which symbols create a Python dictionary?",
"ms": "Simbol manakah digunakan untuk membuat dictionary Python?"
},
"options": {
"en": [
"[]",
"()",
"{}",
"<>"
],
"ms": [
"[]",
"()",
"{}",
"<>"
]
},
"answer": 2,
"explanation": {
"en": "Dictionaries are created using curly braces {}.",
"ms": "Dictionary dibuat menggunakan kurungan berombak {}."
},
"points": 10
},
{
"id": "EQ024",
"difficulty": "easy",
"category": "dictionaries",
"question": {
"en": "What does a dictionary store?",
"ms": "Apakah yang disimpan oleh dictionary?"
},
"options": {
"en": [
"Key-value pairs",
"Only numbers",
"Only strings",
"Functions"
],
"ms": [
"Pasangan key-value",
"Nombor sahaja",
"String sahaja",
"Fungsi"
]
},
"answer": 0,
"explanation": {
"en": "Python dictionaries store data as key-value pairs.",
"ms": "Dictionary Python menyimpan data dalam bentuk pasangan key-value."
},
"points": 10
},
{
"id": "NQ008",
"difficulty": "normal",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"student",
"age",
"name",
"Ali"
],
"ms": [
"student",
"age",
"name",
"Ali"
]
},
"answer": 3,
"explanation": {
"en": "The key \"name\" contains the value \"Ali\".",
"ms": "Key \"name\" mempunyai nilai \"Ali\"."
},
"points": 15,
"code": "student = {\"name\": \"Ali\", \"age\": 20}\nprint(student[\"name\"])"
},
{
"id": "MQ001",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "What is the output?",
"ms": "Apakah outputnya?"
},
"options": {
"en": [
"A B",
"C",
"B",
"A"
],
"ms": [
"A B",
"C",
"B",
"A"
]
},
"answer": 3,
"explanation": {
"en": "The first condition x > 3 is true, so Python executes that block and skips the remaining conditions.",
"ms": "Syarat pertama x > 3 adalah benar, jadi Python menjalankan blok itu dan melangkau syarat selebihnya."
},
"points": 20,
"code": "x = 5\n\nif x > 3:\n    print(\"A\")\nelif x > 4:\n    print(\"B\")\nelse:\n    print(\"C\")"
},
{
"id": "MQ002",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"15",
"10",
"5",
"20"
],
"ms": [
"15",
"10",
"5",
"20"
]
},
"answer": 0,
"explanation": {
"en": "The loop adds 1 + 2 + 3 + 4 + 5, resulting in 15.",
"ms": "Gelung menjumlahkan 1 + 2 + 3 + 4 + 5, menghasilkan 15."
},
"points": 20,
"code": "numbers = [1, 2, 3, 4, 5]\ntotal = 0\nfor number in numbers:\n    total += number\nprint(total)"
},
{
"id": "NQ009",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1, 2, 3, 4]",
"[4, 1, 2, 3]",
"[1, 2, 3]",
"Error"
],
"ms": [
"[1, 2, 3, 4]",
"[4, 1, 2, 3]",
"[1, 2, 3]",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "append(4) adds 4 to the end of the list.",
"ms": "append(4) menambah 4 pada hujung senarai."
},
"points": 15,
"code": "x = [1, 2, 3]\nx.append(4)\nprint(x)"
},
{
"id": "EQ025",
"difficulty": "easy",
"category": "intermediate",
"question": {
"en": "What does input() do in Python?",
"ms": "Apakah fungsi input() dalam Python?"
},
"options": {
"en": [
"Creates a loop",
"Displays output",
"Gets input from the user",
"Deletes a variable"
],
"ms": [
"Mencipta gelung",
"Memaparkan output",
"Menerima input daripada pengguna",
"Memadam pemboleh ubah"
]
},
"answer": 2,
"explanation": {
"en": "input() lets a program receive text entered by the user.",
"ms": "input() membolehkan program menerima teks yang dimasukkan pengguna."
},
"points": 10
},
{
"id": "NQ010",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "What is the correct way to convert \"25\" into an integer?",
"ms": "Apakah cara yang betul untuk menukar \"25\" kepada integer?"
},
"options": {
"en": [
"str(\"25\")",
"number(\"25\")",
"int(\"25\")",
"float(\"25\")"
],
"ms": [
"str(\"25\")",
"number(\"25\")",
"int(\"25\")",
"float(\"25\")"
]
},
"answer": 2,
"explanation": {
"en": "int() converts a value into an integer when possible.",
"ms": "int() menukar nilai kepada integer jika boleh."
},
"points": 15
},
{
"id": "MQ003",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "Which keyword is used to handle errors?",
"ms": "Kata kunci manakah digunakan untuk mengendalikan ralat?"
},
"options": {
"en": [
"try",
"error",
"handle",
"catch"
],
"ms": [
"try",
"error",
"handle",
"catch"
]
},
"answer": 0,
"explanation": {
"en": "Python uses try and except to handle exceptions.",
"ms": "Python menggunakan try dan except untuk mengendalikan pengecualian."
},
"points": 20
},
{
"id": "NQ011",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"30",
"False",
"Error",
"True"
],
"ms": [
"30",
"False",
"Ralat",
"True"
]
},
"answer": 1,
"explanation": {
"en": "10 is not greater than 20, so the result is False.",
"ms": "10 tidak lebih besar daripada 20, jadi hasilnya ialah False."
},
"points": 15,
"code": "x = 10\ny = 20\nprint(x > y)"
},
{
"id": "HQ001",
"difficulty": "hard",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1, 2, 3]",
"Error",
"[3]",
"[1, 2]"
],
"ms": [
"[1, 2, 3]",
"Ralat",
"[3]",
"[1, 2]"
]
},
"answer": 0,
"explanation": {
"en": "b = a does not copy the list. Both names point to the same list, so changing b also changes a.",
"ms": "b = a tidak menyalin list. Kedua-dua nama menunjuk kepada list yang sama, jadi perubahan pada b turut mengubah a."
},
"points": 25,
"code": "a = [1, 2]\nb = a\nb.append(3)\nprint(a)"
},
{
"id": "HQ002",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[4, 2]",
"[5, 4, 3]",
"[5, 3, 1]",
"[1, 3, 5]"
],
"ms": [
"[4, 2]",
"[5, 4, 3]",
"[5, 3, 1]",
"[1, 3, 5]"
]
},
"answer": 2,
"explanation": {
"en": "A step of -2 walks the list backwards, taking every second item starting from the end: 5, 3, 1.",
"ms": "Langkah -2 melalui list ke belakang, mengambil setiap item kedua bermula dari hujung: 5, 3, 1."
},
"points": 25,
"code": "nums = [1, 2, 3, 4, 5]\nprint(nums[::-2])"
},
{
"id": "HQ003",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[0, 4, 16]",
"[0, 1, 4, 9, 16, 25]",
"[1, 9, 25]",
"[4, 16]"
],
"ms": [
"[0, 4, 16]",
"[0, 1, 4, 9, 16, 25]",
"[1, 9, 25]",
"[4, 16]"
]
},
"answer": 0,
"explanation": {
"en": "The comprehension keeps only even x (0, 2, 4) and squares them, giving [0, 4, 16].",
"ms": "Comprehension hanya mengekalkan x genap (0, 2, 4) dan memangkatkannya, menghasilkan [0, 4, 16]."
},
"points": 25,
"code": "print([x ** 2 for x in range(6) if x % 2 == 0])"
},
{
"id": "EQ026",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "Which file extension do Python files use?",
"ms": "Sambungan fail manakah digunakan oleh fail Python?"
},
"options": {
"en": [
".python",
".txt",
".py",
".pt"
],
"ms": [
".python",
".txt",
".py",
".pt"
]
},
"answer": 2,
"explanation": {
"en": "Python programs are saved in files that end with .py, for example game.py.",
"ms": "Program Python disimpan dalam fail yang berakhir dengan .py, contohnya game.py."
},
"points": 10
},
{
"id": "EQ027",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "Who reads and runs your Python code?",
"ms": "Siapakah yang membaca dan menjalankan kod Python anda?"
},
"options": {
"en": [
"The keyboard",
"The Python interpreter",
"The printer",
"The mouse"
],
"ms": [
"Papan kekunci",
"Penterjemah Python",
"Pencetak",
"Tetikus"
]
},
"answer": 1,
"explanation": {
"en": "The Python interpreter reads your code line by line and carries out each instruction.",
"ms": "Penterjemah (interpreter) Python membaca kod anda baris demi baris dan menjalankan setiap arahan."
},
"points": 10
},
{
"id": "EQ028",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What is a \"bug\" in programming?",
"ms": "Apakah maksud \"bug\" dalam pengaturcaraan?"
},
"options": {
"en": [
"A type of variable",
"A mistake in the code",
"A Python keyword",
"A fast computer"
],
"ms": [
"Sejenis pemboleh ubah",
"Kesilapan dalam kod",
"Kata kunci Python",
"Komputer yang laju"
]
},
"answer": 1,
"explanation": {
"en": "A bug is a mistake that makes a program break or give the wrong result. Fixing it is called debugging.",
"ms": "Bug ialah kesilapan yang menyebabkan program rosak atau memberi hasil yang salah. Membaikinya dipanggil debugging."
},
"points": 10
},
{
"id": "EQ029",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "Which line prints the word Hi?",
"ms": "Baris manakah memaparkan perkataan Hi?"
},
"options": {
"en": [
"print \"Hi\"",
"print(Hi)",
"print(\"Hi\")",
"Print(\"Hi\")"
],
"ms": [
"print \"Hi\"",
"print(Hi)",
"print(\"Hi\")",
"Print(\"Hi\")"
]
},
"answer": 2,
"explanation": {
"en": "Text must be inside quotation marks, print is lowercase, and Python 3 needs brackets.",
"ms": "Teks mesti di dalam tanda petikan, print ditulis huruf kecil, dan Python 3 memerlukan kurungan."
},
"points": 10
},
{
"id": "EQ030",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "Is Python case-sensitive? (Is Name different from name?)",
"ms": "Adakah Python sensitif huruf besar/kecil? (Adakah Name berbeza daripada name?)"
},
"options": {
"en": [
"Only on Mondays",
"Only for numbers",
"Yes, they are different",
"No, they are the same"
],
"ms": [
"Hanya pada hari Isnin",
"Hanya untuk nombor",
"Ya, ia berbeza",
"Tidak, ia sama"
]
},
"answer": 2,
"explanation": {
"en": "Python treats uppercase and lowercase letters as different, so Name and name are two different names.",
"ms": "Python menganggap huruf besar dan kecil berbeza, jadi Name dan name ialah dua nama yang berlainan."
},
"points": 10
},
{
"id": "EQ031",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What does a comment do in Python?",
"ms": "Apakah fungsi komen dalam Python?"
},
"options": {
"en": [
"It makes the code faster",
"It is a note that Python ignores",
"It prints text",
"It stops the program"
],
"ms": [
"Menjadikan kod lebih laju",
"Nota yang diabaikan oleh Python",
"Memaparkan teks",
"Menghentikan program"
]
},
"answer": 1,
"explanation": {
"en": "Comments start with # and are notes for humans. Python skips them when running the code.",
"ms": "Komen bermula dengan # dan ialah nota untuk manusia. Python melangkaunya semasa menjalankan kod."
},
"points": 10
},
{
"id": "EQ032",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What is a variable?",
"ms": "Apakah itu pemboleh ubah (variable)?"
},
"options": {
"en": [
"An error message",
"A named box that stores a value",
"A Python file",
"A type of loop"
],
"ms": [
"Mesej ralat",
"Kotak bernama yang menyimpan nilai",
"Fail Python",
"Sejenis gelung"
]
},
"answer": 1,
"explanation": {
"en": "A variable is like a labelled box: score = 10 puts the value 10 into a box named score.",
"ms": "Pemboleh ubah seperti kotak berlabel: score = 10 memasukkan nilai 10 ke dalam kotak bernama score."
},
"points": 10
},
{
"id": "EQ033",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "Which symbol puts a value into a variable?",
"ms": "Simbol manakah memasukkan nilai ke dalam pemboleh ubah?"
},
"options": {
"en": [
"+",
":",
"==",
"="
],
"ms": [
"+",
":",
"==",
"="
]
},
"answer": 3,
"explanation": {
"en": "A single = assigns a value, for example lives = 3. Two equal signs == compare values.",
"ms": "Satu tanda = memberi nilai, contohnya lives = 3. Dua tanda == digunakan untuk membandingkan nilai."
},
"points": 10
},
{
"id": "EQ034",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What data type is \"123\" (with quotes)?",
"ms": "Apakah jenis data bagi \"123\" (dengan tanda petikan)?"
},
"options": {
"en": [
"Boolean",
"Float",
"Integer (int)",
"String (str)"
],
"ms": [
"Boolean",
"Float",
"Integer (int)",
"String (str)"
]
},
"answer": 3,
"explanation": {
"en": "Anything inside quotation marks is text, so \"123\" is a string even though it looks like a number.",
"ms": "Apa sahaja di dalam tanda petikan ialah teks, jadi \"123\" ialah string walaupun ia nampak seperti nombor."
},
"points": 10
},
{
"id": "EQ035",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "Which value is a Boolean?",
"ms": "Nilai manakah ialah Boolean?"
},
"options": {
"en": [
"1.0",
"\"True\"",
"yes",
"True"
],
"ms": [
"1.0",
"\"True\"",
"yes",
"True"
]
},
"answer": 3,
"explanation": {
"en": "True and False (capital T and F, no quotes) are the two Boolean values.",
"ms": "True dan False (huruf besar T dan F, tanpa petikan) ialah dua nilai Boolean."
},
"points": 10
},
{
"id": "EQ036",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "Which variable name is the clearest for storing a player's score?",
"ms": "Nama pemboleh ubah manakah paling jelas untuk menyimpan markah pemain?"
},
"options": {
"en": [
"player_score",
"x",
"thing",
"a1b2"
],
"ms": [
"player_score",
"x",
"thing",
"a1b2"
]
},
"answer": 0,
"explanation": {
"en": "Good names describe what they store. player_score tells everyone exactly what is inside.",
"ms": "Nama yang baik menerangkan apa yang disimpan. player_score memberitahu dengan jelas apa isinya."
},
"points": 10
},
{
"id": "EQ037",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "Which of these is NOT allowed as a variable name?",
"ms": "Antara berikut, yang manakah TIDAK dibenarkan sebagai nama pemboleh ubah?"
},
"options": {
"en": [
"score2",
"my score",
"my_score",
"_score"
],
"ms": [
"score2",
"my score",
"my_score",
"_score"
]
},
"answer": 1,
"explanation": {
"en": "Variable names cannot contain spaces. Use an underscore instead: my_score.",
"ms": "Nama pemboleh ubah tidak boleh mengandungi ruang kosong. Gunakan garis bawah: my_score."
},
"points": 10
},
{
"id": "EQ038",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "Which symbol is used for multiplication in Python?",
"ms": "Simbol manakah digunakan untuk darab dalam Python?"
},
"options": {
"en": [
"×",
"*",
"x",
"#"
],
"ms": [
"×",
"*",
"x",
"#"
]
},
"answer": 1,
"explanation": {
"en": "Python uses * for multiplication, for example 3 * 4 gives 12.",
"ms": "Python menggunakan * untuk darab, contohnya 3 * 4 memberi 12."
},
"points": 10
},
{
"id": "EQ039",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "Which symbol is used for division in Python?",
"ms": "Simbol manakah digunakan untuk bahagi dalam Python?"
},
"options": {
"en": [
"\\",
"/",
":",
"÷"
],
"ms": [
"\\",
"/",
":",
"÷"
]
},
"answer": 1,
"explanation": {
"en": "Python uses / for division, for example 8 / 2 gives 4.0.",
"ms": "Python menggunakan / untuk bahagi, contohnya 8 / 2 memberi 4.0."
},
"points": 10
},
{
"id": "EQ040",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "Which symbol means \"not equal to\"?",
"ms": "Simbol manakah bermaksud \"tidak sama dengan\"?"
},
"options": {
"en": [
"!=",
"<>",
"=/=",
"=!"
],
"ms": [
"!=",
"<>",
"=/=",
"=!"
]
},
"answer": 0,
"explanation": {
"en": "!= checks whether two values are different. 5 != 3 is True.",
"ms": "!= menyemak sama ada dua nilai berbeza. 5 != 3 ialah True."
},
"points": 10
},
{
"id": "EQ041",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "Which symbol means \"greater than or equal to\"?",
"ms": "Simbol manakah bermaksud \"lebih besar atau sama dengan\"?"
},
"options": {
"en": [
"=>",
">=",
">>",
"≥="
],
"ms": [
"=>",
">=",
">>",
"≥="
]
},
"answer": 1,
"explanation": {
"en": "Write >= with the > first. For example age >= 13.",
"ms": "Tulis >= dengan > di hadapan. Contohnya age >= 13."
},
"points": 10
},
{
"id": "EQ042",
"difficulty": "easy",
"category": "if_else",
"question": {
"en": "What must come at the end of an if line?",
"ms": "Apakah yang mesti ada di hujung baris if?"
},
"options": {
"en": [
"Nothing",
"A semicolon ;",
"A full stop .",
"A colon :"
],
"ms": [
"Tiada apa-apa",
"Koma bertitik ;",
"Noktah .",
"Titik bertindih :"
]
},
"answer": 3,
"explanation": {
"en": "Every if, elif, else, for, while and def line ends with a colon.",
"ms": "Setiap baris if, elif, else, for, while dan def mesti diakhiri dengan titik bertindih."
},
"points": 10
},
{
"id": "EQ043",
"difficulty": "easy",
"category": "if_else",
"question": {
"en": "Why are lines inside an if statement pushed to the right (indented)?",
"ms": "Kenapa baris di dalam if ditolak ke kanan (inden)?"
},
"options": {
"en": [
"To make the text bigger",
"To make it a comment",
"It does not matter",
"To show they belong to the if"
],
"ms": [
"Untuk membesarkan teks",
"Untuk menjadikannya komen",
"Tidak penting",
"Untuk menunjukkan ia milik if"
]
},
"answer": 3,
"explanation": {
"en": "Indentation tells Python which lines are inside the if block. Wrong indentation causes errors.",
"ms": "Inden memberitahu Python baris mana berada dalam blok if. Inden yang salah menyebabkan ralat."
},
"points": 10
},
{
"id": "EQ044",
"difficulty": "easy",
"category": "if_else",
"question": {
"en": "Which keyword checks another condition after if?",
"ms": "Kata kunci manakah menyemak syarat lain selepas if?"
},
"options": {
"en": [
"elseif",
"then",
"else if",
"elif"
],
"ms": [
"elseif",
"then",
"else if",
"elif"
]
},
"answer": 3,
"explanation": {
"en": "Python uses elif (short for \"else if\") to test another condition.",
"ms": "Python menggunakan elif (singkatan \"else if\") untuk menguji syarat lain."
},
"points": 10
},
{
"id": "EQ045",
"difficulty": "easy",
"category": "loops",
"question": {
"en": "What does a loop do?",
"ms": "Apakah fungsi gelung (loop)?"
},
"options": {
"en": [
"Deletes code",
"Repeats code",
"Saves a file",
"Makes a comment"
],
"ms": [
"Memadam kod",
"Mengulang kod",
"Menyimpan fail",
"Membuat komen"
]
},
"answer": 1,
"explanation": {
"en": "A loop repeats a block of code, so you do not have to write the same line many times.",
"ms": "Gelung mengulang satu blok kod supaya anda tidak perlu menulis baris yang sama berkali-kali."
},
"points": 10
},
{
"id": "EQ046",
"difficulty": "easy",
"category": "loops",
"question": {
"en": "Which loop keeps running while a condition is True?",
"ms": "Gelung manakah terus berjalan selagi syarat True?"
},
"options": {
"en": [
"for",
"while",
"if",
"repeat"
],
"ms": [
"for",
"while",
"if",
"repeat"
]
},
"answer": 1,
"explanation": {
"en": "A while loop checks its condition each time and stops when it becomes False.",
"ms": "Gelung while menyemak syaratnya setiap kali dan berhenti apabila ia menjadi False."
},
"points": 10
},
{
"id": "EQ047",
"difficulty": "easy",
"category": "loops",
"question": {
"en": "How many numbers does range(4) give?",
"ms": "Berapa banyak nombor diberi oleh range(4)?"
},
"options": {
"en": [
"1",
"4",
"5",
"3"
],
"ms": [
"1",
"4",
"5",
"3"
]
},
"answer": 1,
"explanation": {
"en": "range(4) gives 0, 1, 2 and 3 — that is four numbers.",
"ms": "range(4) memberi 0, 1, 2 dan 3 — iaitu empat nombor."
},
"points": 10
},
{
"id": "EQ048",
"difficulty": "easy",
"category": "lists",
"question": {
"en": "Which brackets are used to make a list?",
"ms": "Kurungan manakah digunakan untuk membuat list?"
},
"options": {
"en": [
"< >",
"{ }",
"[ ]",
"( )"
],
"ms": [
"< >",
"{ }",
"[ ]",
"( )"
]
},
"answer": 2,
"explanation": {
"en": "Lists use square brackets, for example colours = [\"red\", \"blue\"].",
"ms": "List menggunakan kurungan segi empat, contohnya colours = [\"red\", \"blue\"]."
},
"points": 10
},
{
"id": "EQ049",
"difficulty": "easy",
"category": "lists",
"question": {
"en": "Which function tells you how many items are in a list?",
"ms": "Fungsi manakah memberitahu bilangan item dalam list?"
},
"options": {
"en": [
"len()",
"size()",
"count()",
"total()"
],
"ms": [
"len()",
"size()",
"count()",
"total()"
]
},
"answer": 0,
"explanation": {
"en": "len(my_list) returns the number of items in the list.",
"ms": "len(my_list) memulangkan bilangan item dalam list."
},
"points": 10
},
{
"id": "EQ050",
"difficulty": "easy",
"category": "functions",
"question": {
"en": "What do we call running a function, like greet()?",
"ms": "Apakah nama bagi menjalankan fungsi, seperti greet()?"
},
"options": {
"en": [
"Commenting the function",
"Deleting the function",
"Calling the function",
"Looping the function"
],
"ms": [
"Mengomen fungsi",
"Memadam fungsi",
"Memanggil fungsi",
"Mengulang fungsi"
]
},
"answer": 2,
"explanation": {
"en": "Writing the function name with brackets, such as greet(), calls (runs) the function.",
"ms": "Menulis nama fungsi dengan kurungan, seperti greet(), bermaksud memanggil (menjalankan) fungsi."
},
"points": 10
},
{
"id": "EQ051",
"difficulty": "easy",
"category": "functions",
"question": {
"en": "Which of these is a built-in Python function?",
"ms": "Antara berikut, yang manakah fungsi terbina dalam Python?"
},
"options": {
"en": [
"speak()",
"shout()",
"print()",
"write_text()"
],
"ms": [
"speak()",
"shout()",
"print()",
"write_text()"
]
},
"answer": 2,
"explanation": {
"en": "print() comes with Python. The others would need to be written by you first.",
"ms": "print() sudah tersedia dalam Python. Yang lain perlu ditulis sendiri dahulu."
},
"points": 10
},
{
"id": "EQ052",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "Which of these is a string?",
"ms": "Antara berikut, yang manakah string?"
},
"options": {
"en": [
"\"Malaysia\"",
"2026",
"True",
"Malaysia"
],
"ms": [
"\"Malaysia\"",
"2026",
"True",
"Malaysia"
]
},
"answer": 0,
"explanation": {
"en": "A string is text inside quotation marks.",
"ms": "String ialah teks di dalam tanda petikan."
},
"points": 10
},
{
"id": "EQ053",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "Can you use single quotes for a string, like 'Hi'?",
"ms": "Bolehkah anda guna petikan tunggal untuk string, seperti 'Hi'?"
},
"options": {
"en": [
"Yes, 'Hi' and \"Hi\" both work",
"Only for numbers",
"No, only double quotes work",
"Only inside lists"
],
"ms": [
"Ya, 'Hi' dan \"Hi\" kedua-duanya boleh",
"Hanya untuk nombor",
"Tidak, hanya petikan berganda",
"Hanya dalam list"
]
},
"answer": 0,
"explanation": {
"en": "Python accepts both single and double quotes, as long as they match.",
"ms": "Python menerima petikan tunggal dan berganda, asalkan kedua-duanya sepadan."
},
"points": 10
},
{
"id": "EQ054",
"difficulty": "easy",
"category": "dictionaries",
"question": {
"en": "In {\"name\": \"Ali\"}, what is \"name\"?",
"ms": "Dalam {\"name\": \"Ali\"}, apakah \"name\"?"
},
"options": {
"en": [
"The list",
"The value",
"The key",
"The index"
],
"ms": [
"List",
"Nilai (value)",
"Kunci (key)",
"Indeks"
]
},
"answer": 2,
"explanation": {
"en": "A dictionary stores key: value pairs. \"name\" is the key and \"Ali\" is its value.",
"ms": "Kamus menyimpan pasangan kunci: nilai. \"name\" ialah kunci dan \"Ali\" ialah nilainya."
},
"points": 10
},
{
"id": "EQ055",
"difficulty": "easy",
"category": "intermediate",
"question": {
"en": "What is an error message for?",
"ms": "Apakah tujuan mesej ralat?"
},
"options": {
"en": [
"It deletes your code",
"It tells you what went wrong and where",
"It means your computer is broken",
"It gives you XP"
],
"ms": [
"Memadam kod anda",
"Memberitahu apa yang salah dan di mana",
"Komputer anda rosak",
"Memberi anda XP"
]
},
"answer": 1,
"explanation": {
"en": "Error messages are helpful clues: they show the type of problem and the line number.",
"ms": "Mesej ralat ialah petunjuk berguna: ia menunjukkan jenis masalah dan nombor baris."
},
"points": 10
},
{
"id": "EQ056",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"\"PyQuest\"",
"Error",
"PyQuest",
"pyquest"
],
"ms": [
"\"PyQuest\"",
"Ralat",
"PyQuest",
"pyquest"
]
},
"answer": 2,
"explanation": {
"en": "print() shows the text without the quotation marks: PyQuest.",
"ms": "print() memaparkan teks tanpa tanda petikan: PyQuest."
},
"points": 10,
"code": "print(\"PyQuest\")"
},
{
"id": "EQ057",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"12",
"\"7\"",
"7",
"34"
],
"ms": [
"12",
"\"7\"",
"7",
"34"
]
},
"answer": 2,
"explanation": {
"en": "Python adds the numbers first, then prints 7.",
"ms": "Python menambah nombor dahulu, kemudian memaparkan 7."
},
"points": 10,
"code": "print(3 + 4)"
},
{
"id": "EQ058",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3 + 4",
"7",
"34",
"Error"
],
"ms": [
"3 + 4",
"7",
"34",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "Because 3 + 4 is inside quotes, it is text, so Python prints it exactly: 3 + 4.",
"ms": "Oleh kerana 3 + 4 berada dalam petikan, ia teks, jadi Python memaparkannya sebiji: 3 + 4."
},
"points": 10,
"code": "print(\"3 + 4\")"
},
{
"id": "EQ059",
"difficulty": "easy",
"category": "basics",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Hello",
"Bye",
"Hello Bye",
"Nothing"
],
"ms": [
"Hello",
"Bye",
"Hello Bye",
"Nothing"
]
},
"answer": 1,
"explanation": {
"en": "The first line is a comment, so only Bye is printed.",
"ms": "Baris pertama ialah komen, jadi hanya Bye dipaparkan."
},
"points": 10,
"code": "# print(\"Hello\")\nprint(\"Bye\")"
},
{
"id": "EQ060",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"-6",
"104",
"14",
"6"
],
"ms": [
"-6",
"104",
"14",
"6"
]
},
"answer": 3,
"explanation": {
"en": "10 minus 4 is 6.",
"ms": "10 tolak 4 ialah 6."
},
"points": 10,
"code": "print(10 - 4)"
},
{
"id": "EQ061",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"63",
"18",
"666",
"9"
],
"ms": [
"63",
"18",
"666",
"9"
]
},
"answer": 1,
"explanation": {
"en": "* means multiply: 6 × 3 = 18.",
"ms": "* bermaksud darab: 6 × 3 = 18."
},
"points": 10,
"code": "print(6 * 3)"
},
{
"id": "EQ062",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"9",
"20",
"24",
"14"
],
"ms": [
"9",
"20",
"24",
"14"
]
},
"answer": 3,
"explanation": {
"en": "Multiplication happens before addition: 3 * 4 = 12, then 2 + 12 = 14.",
"ms": "Darab dibuat sebelum tambah: 3 * 4 = 12, kemudian 2 + 12 = 14."
},
"points": 10,
"code": "print(2 + 3 * 4)"
},
{
"id": "EQ063",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"20",
"9",
"24",
"14"
],
"ms": [
"20",
"9",
"24",
"14"
]
},
"answer": 0,
"explanation": {
"en": "Brackets go first: 2 + 3 = 5, then 5 * 4 = 20.",
"ms": "Kurungan dahulu: 2 + 3 = 5, kemudian 5 * 4 = 20."
},
"points": 10,
"code": "print((2 + 3) * 4)"
},
{
"id": "EQ064",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"False",
"True",
"3",
"5"
],
"ms": [
"False",
"True",
"3",
"5"
]
},
"answer": 1,
"explanation": {
"en": "5 is greater than 2, so the comparison is True.",
"ms": "5 lebih besar daripada 2, jadi perbandingan ini True."
},
"points": 10,
"code": "print(5 > 2)"
},
{
"id": "EQ065",
"difficulty": "easy",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4",
"9",
"True",
"False"
],
"ms": [
"4",
"9",
"True",
"False"
]
},
"answer": 3,
"explanation": {
"en": "4 is not equal to 5, so == gives False.",
"ms": "4 tidak sama dengan 5, jadi == memberi False."
},
"points": 10,
"code": "print(4 == 5)"
},
{
"id": "EQ066",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"lives",
"\"3\"",
"3",
"Error"
],
"ms": [
"lives",
"\"3\"",
"3",
"Ralat"
]
},
"answer": 2,
"explanation": {
"en": "print(lives) shows the value stored in lives, which is 3.",
"ms": "print(lives) memaparkan nilai yang disimpan dalam lives, iaitu 3."
},
"points": 10,
"code": "lives = 3\nprint(lives)"
},
{
"id": "EQ067",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"\"Aina\"",
"Error",
"Aina",
"name"
],
"ms": [
"\"Aina\"",
"Ralat",
"Aina",
"name"
]
},
"answer": 3,
"explanation": {
"en": "Because \"name\" is in quotes, Python prints the word itself, not the variable: name.",
"ms": "Oleh kerana \"name\" dalam petikan, Python memaparkan perkataan itu sendiri, bukan pemboleh ubah: name."
},
"points": 10,
"code": "name = \"Aina\"\nprint(\"name\")"
},
{
"id": "EQ068",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"58",
"5",
"13",
"8"
],
"ms": [
"58",
"5",
"13",
"8"
]
},
"answer": 3,
"explanation": {
"en": "The second line replaces the old value, so coins is now 8.",
"ms": "Baris kedua menggantikan nilai lama, jadi coins kini 8."
},
"points": 10,
"code": "coins = 5\ncoins = 8\nprint(coins)"
},
{
"id": "EQ069",
"difficulty": "easy",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"26",
"8",
"ab",
"12"
],
"ms": [
"26",
"8",
"ab",
"12"
]
},
"answer": 1,
"explanation": {
"en": "a is 2 and b is 6, so a + b = 8.",
"ms": "a ialah 2 dan b ialah 6, jadi a + b = 8."
},
"points": 10,
"code": "a = 2\nb = 6\nprint(a + b)"
},
{
"id": "EQ070",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"HiThere",
"Hi There",
"Hi+There"
],
"ms": [
"Ralat",
"HiThere",
"Hi There",
"Hi+There"
]
},
"answer": 1,
"explanation": {
"en": "+ joins strings together with no space added: HiThere.",
"ms": "+ mencantumkan string tanpa menambah ruang: HiThere."
},
"points": 10,
"code": "print(\"Hi\" + \"There\")"
},
{
"id": "EQ071",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"HaHaHa",
"Ha3",
"Ha Ha Ha"
],
"ms": [
"Ralat",
"HaHaHa",
"Ha3",
"Ha Ha Ha"
]
},
"answer": 1,
"explanation": {
"en": "Multiplying a string repeats it: HaHaHa.",
"ms": "Mendarab string akan mengulangnya: HaHaHa."
},
"points": 10,
"code": "print(\"Ha\" * 3)"
},
{
"id": "EQ072",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4",
"2",
"cat",
"3"
],
"ms": [
"4",
"2",
"cat",
"3"
]
},
"answer": 3,
"explanation": {
"en": "\"cat\" has 3 letters, so len() gives 3.",
"ms": "\"cat\" ada 3 huruf, jadi len() memberi 3."
},
"points": 10,
"code": "print(len(\"cat\"))"
},
{
"id": "EQ073",
"difficulty": "easy",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"hello",
"Hello",
"HELLO",
"hELLO"
],
"ms": [
"hello",
"Hello",
"HELLO",
"hELLO"
]
},
"answer": 2,
"explanation": {
"en": "upper() turns every letter into a capital: HELLO.",
"ms": "upper() menukar semua huruf kepada huruf besar: HELLO."
},
"points": 10,
"code": "print(\"hello\".upper())"
},
{
"id": "EQ074",
"difficulty": "easy",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"mango",
"kiwi",
"fruits",
"apple"
],
"ms": [
"mango",
"kiwi",
"fruits",
"apple"
]
},
"answer": 3,
"explanation": {
"en": "Lists start counting at 0, so fruits[0] is the first item: apple.",
"ms": "List mula mengira dari 0, jadi fruits[0] ialah item pertama: apple."
},
"points": 10,
"code": "fruits = [\"apple\", \"mango\", \"kiwi\"]\nprint(fruits[0])"
},
{
"id": "EQ075",
"difficulty": "easy",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1",
"catdog",
"2",
"3"
],
"ms": [
"1",
"catdog",
"2",
"3"
]
},
"answer": 2,
"explanation": {
"en": "There are two items in the list, so len() gives 2.",
"ms": "Terdapat dua item dalam list, jadi len() memberi 2."
},
"points": 10,
"code": "pets = [\"cat\", \"dog\"]\nprint(len(pets))"
},
{
"id": "EQ076",
"difficulty": "easy",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Pass",
"score",
"Fail",
"Nothing"
],
"ms": [
"Pass",
"score",
"Fail",
"Nothing"
]
},
"answer": 0,
"explanation": {
"en": "90 is greater than 50, so the if block runs and prints Pass.",
"ms": "90 lebih besar daripada 50, jadi blok if berjalan dan memaparkan Pass."
},
"points": 10,
"code": "score = 90\nif score > 50:\n    print(\"Pass\")"
},
{
"id": "EQ077",
"difficulty": "easy",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Nothing",
"False",
"Umbrella",
"Sunglasses"
],
"ms": [
"Nothing",
"False",
"Umbrella",
"Sunglasses"
]
},
"answer": 3,
"explanation": {
"en": "rain is False, so the else part runs: Sunglasses.",
"ms": "rain ialah False, jadi bahagian else berjalan: Sunglasses."
},
"points": 10,
"code": "rain = False\nif rain:\n    print(\"Umbrella\")\nelse:\n    print(\"Sunglasses\")"
},
{
"id": "EQ078",
"difficulty": "easy",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Go Go Go",
"Go Go Go Go",
"Go Go",
"Go"
],
"ms": [
"Go Go Go",
"Go Go Go Go",
"Go Go",
"Go"
]
},
"answer": 0,
"explanation": {
"en": "range(3) repeats 3 times, so Go is printed three times: Go Go Go.",
"ms": "range(3) mengulang 3 kali, jadi Go dipaparkan tiga kali: Go Go Go."
},
"points": 10,
"code": "for i in range(3):\n    print(\"Go\", end=\" \")"
},
{
"id": "EQ079",
"difficulty": "easy",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"hi",
"Hi!",
"Nothing",
"Error"
],
"ms": [
"hi",
"Hi!",
"Nothing",
"Ralat"
]
},
"answer": 1,
"explanation": {
"en": "The function is defined and then called, so it prints Hi!.",
"ms": "Fungsi ditakrif kemudian dipanggil, jadi ia memaparkan Hi!."
},
"points": 10,
"code": "def hi():\n    print(\"Hi!\")\nhi()"
},
{
"id": "EQ080",
"difficulty": "easy",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"8",
"4",
"44",
"42"
],
"ms": [
"8",
"4",
"44",
"42"
]
},
"answer": 0,
"explanation": {
"en": "double(4) sends back 4 * 2, so print shows 8.",
"ms": "double(4) memulangkan 4 * 2, jadi print memaparkan 8."
},
"points": 10,
"code": "def double(n):\n    return n * 2\nprint(double(4))"
},
{
"id": "NQ012",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What type does input() always give back?",
"ms": "Apakah jenis data yang sentiasa dipulangkan oleh input()?"
},
"options": {
"en": [
"str (text)",
"float",
"int",
"bool"
],
"ms": [
"str (teks)",
"float",
"int",
"bool"
]
},
"answer": 0,
"explanation": {
"en": "input() always returns text. Use int(input()) if you need a whole number.",
"ms": "input() sentiasa memulangkan teks. Gunakan int(input()) jika anda perlukan nombor bulat."
},
"points": 15
},
{
"id": "NQ013",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "Which line turns the text \"7\" into the number 7?",
"ms": "Baris manakah menukar teks \"7\" kepada nombor 7?"
},
"options": {
"en": [
"\"7\".int()",
"str(7)",
"number(\"7\")",
"int(\"7\")"
],
"ms": [
"\"7\".int()",
"str(7)",
"number(\"7\")",
"int(\"7\")"
]
},
"answer": 3,
"explanation": {
"en": "int() converts text that contains a whole number into an integer.",
"ms": "int() menukar teks yang mengandungi nombor bulat kepada integer."
},
"points": 15
},
{
"id": "NQ014",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "Which line turns the number 10 into the text \"10\"?",
"ms": "Baris manakah menukar nombor 10 kepada teks \"10\"?"
},
"options": {
"en": [
"string(10)",
"text(10)",
"int(10)",
"str(10)"
],
"ms": [
"string(10)",
"text(10)",
"int(10)",
"str(10)"
]
},
"answer": 3,
"explanation": {
"en": "str() converts a value into a string.",
"ms": "str() menukar sesuatu nilai kepada string."
},
"points": 15
},
{
"id": "NQ015",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What is the difference between / and // ?",
"ms": "Apakah beza antara / dan // ?"
},
"options": {
"en": [
"/ drops the decimal part",
"// drops the decimal part",
"// multiplies",
"They are the same"
],
"ms": [
"/ membuang bahagian perpuluhan",
"// membuang bahagian perpuluhan",
"// mendarab",
"Kedua-duanya sama"
]
},
"answer": 1,
"explanation": {
"en": "/ gives an exact answer like 3.5, while // rounds down to a whole number like 3.",
"ms": "/ memberi jawapan tepat seperti 3.5, manakala // membundarkan ke bawah kepada nombor bulat seperti 3."
},
"points": 15
},
{
"id": "NQ016",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What does the % operator give you?",
"ms": "Apakah yang diberi oleh operator % ?"
},
"options": {
"en": [
"The remainder after dividing",
"The average",
"The percentage",
"The square"
],
"ms": [
"Baki selepas bahagi",
"Purata",
"Peratus",
"Kuasa dua"
]
},
"answer": 0,
"explanation": {
"en": "% gives the remainder. 7 % 3 is 1 because 7 = 3 × 2 + 1.",
"ms": "% memberi baki. 7 % 3 ialah 1 kerana 7 = 3 × 2 + 1."
},
"points": 15
},
{
"id": "NQ017",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "How do you check if a number n is even?",
"ms": "Bagaimana menyemak sama ada nombor n genap?"
},
"options": {
"en": [
"n * 2 == 0",
"n / 2 == 0",
"n // 2 == 1",
"n % 2 == 0"
],
"ms": [
"n * 2 == 0",
"n / 2 == 0",
"n // 2 == 1",
"n % 2 == 0"
]
},
"answer": 3,
"explanation": {
"en": "Even numbers have no remainder when divided by 2.",
"ms": "Nombor genap tiada baki apabila dibahagi dengan 2."
},
"points": 15
},
{
"id": "NQ018",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "Which operator means \"power of\", like 2 to the power of 3?",
"ms": "Operator manakah bermaksud \"kuasa\", seperti 2 kuasa 3?"
},
"options": {
"en": [
"*^",
"**",
"^^",
"^"
],
"ms": [
"*^",
"**",
"^^",
"^"
]
},
"answer": 1,
"explanation": {
"en": "Python uses ** for powers: 2 ** 3 is 8. The ^ symbol does something else.",
"ms": "Python menggunakan ** untuk kuasa: 2 ** 3 ialah 8. Simbol ^ melakukan perkara lain."
},
"points": 15
},
{
"id": "NQ019",
"difficulty": "normal",
"category": "if_else",
"question": {
"en": "Which keyword makes BOTH conditions need to be True?",
"ms": "Kata kunci manakah memerlukan KEDUA-DUA syarat True?"
},
"options": {
"en": [
"or",
"not",
"both",
"and"
],
"ms": [
"or",
"not",
"both",
"and"
]
},
"answer": 3,
"explanation": {
"en": "A and B is True only when A and B are both True.",
"ms": "A and B hanya True apabila A dan B kedua-duanya True."
},
"points": 15
},
{
"id": "NQ020",
"difficulty": "normal",
"category": "if_else",
"question": {
"en": "Which keyword needs only ONE condition to be True?",
"ms": "Kata kunci manakah hanya memerlukan SATU syarat True?"
},
"options": {
"en": [
"and",
"not",
"elif",
"or"
],
"ms": [
"and",
"not",
"elif",
"or"
]
},
"answer": 3,
"explanation": {
"en": "A or B is True when at least one of them is True.",
"ms": "A or B ialah True apabila sekurang-kurangnya satu daripadanya True."
},
"points": 15
},
{
"id": "NQ021",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "Which keyword skips to the next round of a loop?",
"ms": "Kata kunci manakah melompat ke pusingan seterusnya dalam gelung?"
},
"options": {
"en": [
"continue",
"break",
"pass",
"skip"
],
"ms": [
"continue",
"break",
"pass",
"skip"
]
},
"answer": 0,
"explanation": {
"en": "continue skips the rest of this round and moves to the next one. break would stop the loop completely.",
"ms": "continue melangkau baki pusingan ini dan terus ke pusingan seterusnya. break pula menghentikan gelung sepenuhnya."
},
"points": 15
},
{
"id": "NQ022",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "What does range(1, 5) give?",
"ms": "Apakah yang diberi oleh range(1, 5)?"
},
"options": {
"en": [
"0, 1, 2, 3, 4",
"1, 5",
"1, 2, 3, 4, 5",
"1, 2, 3, 4"
],
"ms": [
"0, 1, 2, 3, 4",
"1, 5",
"1, 2, 3, 4, 5",
"1, 2, 3, 4"
]
},
"answer": 3,
"explanation": {
"en": "range(start, stop) starts at start and stops BEFORE stop.",
"ms": "range(mula, henti) bermula pada mula dan berhenti SEBELUM henti."
},
"points": 15
},
{
"id": "NQ023",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What index does the LAST item of a list have?",
"ms": "Apakah indeks bagi item TERAKHIR dalam list?"
},
"options": {
"en": [
"-1",
"last",
"0",
"1"
],
"ms": [
"-1",
"last",
"0",
"1"
]
},
"answer": 0,
"explanation": {
"en": "Negative indexes count from the end. my_list[-1] is always the last item.",
"ms": "Indeks negatif mengira dari belakang. my_list[-1] sentiasa item terakhir."
},
"points": 15
},
{
"id": "NQ024",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "Which method removes and returns the last item of a list?",
"ms": "Kaedah manakah membuang dan memulangkan item terakhir list?"
},
"options": {
"en": [
"add()",
"append()",
"pop()",
"last()"
],
"ms": [
"add()",
"append()",
"pop()",
"last()"
]
},
"answer": 2,
"explanation": {
"en": "pop() with no argument removes the last item and gives it back.",
"ms": "pop() tanpa argumen membuang item terakhir dan memulangkannya."
},
"points": 15
},
{
"id": "NQ025",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "In def add(a, b):, what are a and b called?",
"ms": "Dalam def add(a, b):, apakah nama bagi a dan b?"
},
"options": {
"en": [
"Loops",
"Comments",
"Parameters",
"Keywords"
],
"ms": [
"Gelung",
"Komen",
"Parameter",
"Kata kunci"
]
},
"answer": 2,
"explanation": {
"en": "a and b are parameters: placeholders for the values you pass in when you call the function.",
"ms": "a dan b ialah parameter: tempat letak untuk nilai yang dihantar semasa memanggil fungsi."
},
"points": 15
},
{
"id": "NQ026",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "What does a function return if it has no return line?",
"ms": "Apakah yang dipulangkan fungsi jika ia tiada baris return?"
},
"options": {
"en": [
"\"\"",
"0",
"False",
"None"
],
"ms": [
"\"\"",
"0",
"False",
"None"
]
},
"answer": 3,
"explanation": {
"en": "Without return, a function gives back the special value None.",
"ms": "Tanpa return, fungsi memulangkan nilai khas None."
},
"points": 15
},
{
"id": "NQ027",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What is the index of \"P\" in \"Python\"?",
"ms": "Apakah indeks bagi \"P\" dalam \"Python\"?"
},
"options": {
"en": [
"1",
"P",
"0",
"-0"
],
"ms": [
"1",
"P",
"0",
"-0"
]
},
"answer": 2,
"explanation": {
"en": "Strings also start counting from 0, so the first letter has index 0.",
"ms": "String juga mula mengira dari 0, jadi huruf pertama ada indeks 0."
},
"points": 15
},
{
"id": "NQ028",
"difficulty": "normal",
"category": "dictionaries",
"question": {
"en": "How do you get the value for the key \"age\" from dict d?",
"ms": "Bagaimana mendapatkan nilai bagi kunci \"age\" daripada dict d?"
},
"options": {
"en": [
"d.age",
"d(age)",
"d[age]",
"d[\"age\"]"
],
"ms": [
"d.age",
"d(age)",
"d[age]",
"d[\"age\"]"
]
},
"answer": 3,
"explanation": {
"en": "Use square brackets with the key (in quotes if it is a string): d[\"age\"].",
"ms": "Gunakan kurungan segi empat dengan kunci (dalam petikan jika ia string): d[\"age\"]."
},
"points": 15
},
{
"id": "NQ029",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "Which error happens when you use a variable that was never created?",
"ms": "Ralat manakah berlaku apabila anda guna pemboleh ubah yang tidak pernah dicipta?"
},
"options": {
"en": [
"NameError",
"IndexError",
"TypeError",
"ZeroDivisionError"
],
"ms": [
"NameError",
"IndexError",
"TypeError",
"ZeroDivisionError"
]
},
"answer": 0,
"explanation": {
"en": "Python raises NameError when it cannot find a name, often because of a typo.",
"ms": "Python menimbulkan NameError apabila ia tidak menjumpai sesuatu nama, selalunya kerana salah ejaan."
},
"points": 15
},
{
"id": "NQ030",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "Which error happens when you divide by zero?",
"ms": "Ralat manakah berlaku apabila anda bahagi dengan sifar?"
},
"options": {
"en": [
"ValueError",
"SyntaxError",
"ZeroDivisionError",
"NameError"
],
"ms": [
"ValueError",
"SyntaxError",
"ZeroDivisionError",
"NameError"
]
},
"answer": 2,
"explanation": {
"en": "Dividing by 0 is not possible, so Python raises ZeroDivisionError.",
"ms": "Bahagi dengan 0 tidak boleh dilakukan, jadi Python menimbulkan ZeroDivisionError."
},
"points": 15
},
{
"id": "NQ031",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "Which error is caused by a missing colon or bracket?",
"ms": "Ralat manakah disebabkan oleh titik bertindih atau kurungan yang tertinggal?"
},
"options": {
"en": [
"KeyError",
"SyntaxError",
"TypeError",
"NameError"
],
"ms": [
"KeyError",
"SyntaxError",
"TypeError",
"NameError"
]
},
"answer": 1,
"explanation": {
"en": "Grammar mistakes in the code itself are SyntaxErrors. Python finds them before running.",
"ms": "Kesilapan tatabahasa dalam kod ialah SyntaxError. Python mengesannya sebelum menjalankan kod."
},
"points": 15
},
{
"id": "NQ032",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3.5",
"4",
"3",
"3.0"
],
"ms": [
"3.5",
"4",
"3",
"3.0"
]
},
"answer": 0,
"explanation": {
"en": "/ always gives a float, so 7 / 2 is 3.5.",
"ms": "/ sentiasa memberi float, jadi 7 / 2 ialah 3.5."
},
"points": 15,
"code": "print(7 / 2)"
},
{
"id": "NQ033",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3.5",
"2",
"4",
"3"
],
"ms": [
"3.5",
"2",
"4",
"3"
]
},
"answer": 3,
"explanation": {
"en": "// divides and rounds down: 7 // 2 is 3.",
"ms": "// membahagi dan membundar ke bawah: 7 // 2 ialah 3."
},
"points": 15,
"code": "print(7 // 2)"
},
{
"id": "NQ034",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"12",
"2",
"3.4",
"3"
],
"ms": [
"12",
"2",
"3.4",
"3"
]
},
"answer": 1,
"explanation": {
"en": "17 = 5 × 3 + 2, so the remainder is 2.",
"ms": "17 = 5 × 3 + 2, jadi bakinya ialah 2."
},
"points": 15,
"code": "print(17 % 5)"
},
{
"id": "NQ035",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"24",
"16",
"6",
"8"
],
"ms": [
"24",
"16",
"6",
"8"
]
},
"answer": 1,
"explanation": {
"en": "2 ** 4 means 2 × 2 × 2 × 2 = 16.",
"ms": "2 ** 4 bermaksud 2 × 2 × 2 × 2 = 16."
},
"points": 15,
"code": "print(2 ** 4)"
},
{
"id": "NQ036",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2.0",
"2",
"0.5",
"32"
],
"ms": [
"2.0",
"2",
"0.5",
"32"
]
},
"answer": 0,
"explanation": {
"en": "/ always produces a float, even when it divides evenly: 2.0.",
"ms": "/ sentiasa menghasilkan float walaupun bahagi tepat: 2.0."
},
"points": 15,
"code": "print(8 / 4)"
},
{
"id": "NQ037",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"7",
"52",
"2",
"5"
],
"ms": [
"7",
"52",
"2",
"5"
]
},
"answer": 0,
"explanation": {
"en": "x + 2 is 7, and that new value is stored back in x: 7.",
"ms": "x + 2 ialah 7, dan nilai baharu itu disimpan semula dalam x: 7."
},
"points": 15,
"code": "x = 5\nx = x + 2\nprint(x)"
},
{
"id": "NQ038",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"-3",
"13",
"7",
"3"
],
"ms": [
"-3",
"13",
"7",
"3"
]
},
"answer": 2,
"explanation": {
"en": "x -= 3 is short for x = x - 3, so x becomes 7.",
"ms": "x -= 3 ialah singkatan x = x - 3, jadi x menjadi 7."
},
"points": 15,
"code": "x = 10\nx -= 3\nprint(x)"
},
{
"id": "NQ039",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"12",
"4",
"7",
"43"
],
"ms": [
"12",
"4",
"7",
"43"
]
},
"answer": 0,
"explanation": {
"en": "score *= 3 means score = score * 3 = 12.",
"ms": "score *= 3 bermaksud score = score * 3 = 12."
},
"points": 15,
"code": "score = 4\nscore *= 3\nprint(score)"
},
{
"id": "NQ040",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"False",
"True",
"5",
"Error"
],
"ms": [
"False",
"True",
"5",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "3 < 5 is True but 5 < 2 is False. With and, both must be True, so the result is False.",
"ms": "3 < 5 ialah True tetapi 5 < 2 ialah False. Dengan and, kedua-duanya mesti True, jadi hasilnya False."
},
"points": 15,
"code": "print(3 < 5 and 5 < 2)"
},
{
"id": "NQ041",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3",
"Error",
"True",
"False"
],
"ms": [
"3",
"Ralat",
"True",
"False"
]
},
"answer": 2,
"explanation": {
"en": "With or, one True side is enough, so the result is True.",
"ms": "Dengan or, satu bahagian True sudah cukup, jadi hasilnya True."
},
"points": 15,
"code": "print(3 < 5 or 5 < 2)"
},
{
"id": "NQ042",
"difficulty": "normal",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"None",
"False",
"Error",
"True"
],
"ms": [
"None",
"False",
"Ralat",
"True"
]
},
"answer": 1,
"explanation": {
"en": "not flips a Boolean, so not True is False.",
"ms": "not menterbalikkan Boolean, jadi not True ialah False."
},
"points": 15,
"code": "print(not True)"
},
{
"id": "NQ043",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"<class 'float'>",
"<class 'int'>",
"<class 'bool'>",
"<class 'str'>"
],
"ms": [
"<class 'float'>",
"<class 'int'>",
"<class 'bool'>",
"<class 'str'>"
]
},
"answer": 0,
"explanation": {
"en": "3.0 has a decimal point, so it is a float: <class 'float'>.",
"ms": "3.0 ada titik perpuluhan, jadi ia float: <class 'float'>."
},
"points": 15,
"code": "print(type(3.0))"
},
{
"id": "NQ044",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"<class 'int'>",
"<class 'number'>",
"<class 'float'>",
"<class 'str'>"
],
"ms": [
"<class 'int'>",
"<class 'number'>",
"<class 'float'>",
"<class 'str'>"
]
},
"answer": 3,
"explanation": {
"en": "\"5\" is in quotes, so it is a string: <class 'str'>.",
"ms": "\"5\" dalam petikan, jadi ia string: <class 'str'>."
},
"points": 15,
"code": "print(type(\"5\"))"
},
{
"id": "NQ045",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"\"15\"",
"123",
"15"
],
"ms": [
"Ralat",
"\"15\"",
"123",
"15"
]
},
"answer": 3,
"explanation": {
"en": "int(\"12\") makes the number 12, and 12 + 3 = 15.",
"ms": "int(\"12\") menghasilkan nombor 12, dan 12 + 3 = 15."
},
"points": 15,
"code": "print(int(\"12\") + 3)"
},
{
"id": "NQ046",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"15",
"Error",
"123",
"12 3"
],
"ms": [
"15",
"Ralat",
"123",
"12 3"
]
},
"answer": 2,
"explanation": {
"en": "Both are strings, so + joins them: 123.",
"ms": "Kedua-duanya string, jadi + mencantumkannya: 123."
},
"points": 15,
"code": "print(\"12\" + \"3\")"
},
{
"id": "NQ047",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Age: 12",
"Age:12",
"Age: \"12\"",
"TypeError"
],
"ms": [
"Age: 12",
"Age:12",
"Age: \"12\"",
"TypeError"
]
},
"answer": 3,
"explanation": {
"en": "You cannot join a string and a number with +. Python raises a TypeError. Use str(12) instead.",
"ms": "Anda tidak boleh mencantum string dan nombor dengan +. Python menimbulkan TypeError. Gunakan str(12)."
},
"points": 15,
"code": "print(\"Age: \" + 12)"
},
{
"id": "NQ048",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Age:12",
"Age: 12",
"Error",
"Age: \"12\""
],
"ms": [
"Age:12",
"Age: 12",
"Ralat",
"Age: \"12\""
]
},
"answer": 1,
"explanation": {
"en": "print() with commas prints each value with a space between them: Age: 12.",
"ms": "print() dengan koma memaparkan setiap nilai dengan satu ruang di antaranya: Age: 12."
},
"points": 15,
"code": "print(\"Age:\", 12)"
},
{
"id": "NQ049",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"12",
"3",
"9",
"a"
],
"ms": [
"12",
"3",
"9",
"a"
]
},
"answer": 1,
"explanation": {
"en": "b got the value 3 before a changed. Changing a later does not change b, so b is 3.",
"ms": "b menerima nilai 3 sebelum a berubah. Mengubah a kemudian tidak mengubah b, jadi b ialah 3."
},
"points": 15,
"code": "a = 3\nb = a\na = 9\nprint(b)"
},
{
"id": "NQ050",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "The user types 5. What will this code output?",
"ms": "Pengguna menaip 5. Apakah output kod ini?"
},
"options": {
"en": [
"10",
"7",
"Error",
"55"
],
"ms": [
"10",
"7",
"Ralat",
"55"
]
},
"answer": 3,
"explanation": {
"en": "input() gives the string \"5\", and a string times 2 repeats it: 55.",
"ms": "input() memberi string \"5\", dan string darab 2 akan mengulangnya: 55."
},
"points": 15,
"code": "n = input()\nprint(n * 2)"
},
{
"id": "NQ051",
"difficulty": "normal",
"category": "variables",
"question": {
"en": "The user types 5. What will this code output?",
"ms": "Pengguna menaip 5. Apakah output kod ini?"
},
"options": {
"en": [
"10",
"52",
"55",
"Error"
],
"ms": [
"10",
"52",
"55",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "int() turns \"5\" into the number 5, and 5 * 2 = 10.",
"ms": "int() menukar \"5\" kepada nombor 5, dan 5 * 2 = 10."
},
"points": 15,
"code": "n = int(input())\nprint(n * 2)"
},
{
"id": "NQ052",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"P",
"o",
"y",
"h"
],
"ms": [
"P",
"o",
"y",
"h"
]
},
"answer": 2,
"explanation": {
"en": "Index 0 is P, so index 1 is the second letter: y.",
"ms": "Indeks 0 ialah P, jadi indeks 1 ialah huruf kedua: y."
},
"points": 15,
"code": "word = \"Python\"\nprint(word[1])"
},
{
"id": "NQ053",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"n",
"o",
"Error",
"P"
],
"ms": [
"n",
"o",
"Ralat",
"P"
]
},
"answer": 0,
"explanation": {
"en": "Index -1 means the last character: n.",
"ms": "Indeks -1 bermaksud aksara terakhir: n."
},
"points": 15,
"code": "word = \"Python\"\nprint(word[-1])"
},
{
"id": "NQ054",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"hello World",
"hello world",
"HELLO WORLD",
"Hello world"
],
"ms": [
"hello World",
"hello world",
"HELLO WORLD",
"Hello world"
]
},
"answer": 1,
"explanation": {
"en": "lower() turns every letter into lowercase: hello world.",
"ms": "lower() menukar semua huruf kepada huruf kecil: hello world."
},
"points": 15,
"code": "print(\"Hello World\".lower())"
},
{
"id": "NQ055",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"7",
"2",
"8",
"6"
],
"ms": [
"7",
"2",
"8",
"6"
]
},
"answer": 2,
"explanation": {
"en": "The space also counts as a character: h,i,space,t,h,e,r,e = 8.",
"ms": "Ruang kosong juga dikira sebagai aksara: h,i,ruang,t,h,e,r,e = 8."
},
"points": 15,
"code": "print(len(\"hi there\"))"
},
{
"id": "NQ056",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Hi Aiman!",
"HiAiman!",
"Hi name!",
"Hi + Aiman!"
],
"ms": [
"Hi Aiman!",
"HiAiman!",
"Hi name!",
"Hi + Aiman!"
]
},
"answer": 0,
"explanation": {
"en": "The three strings are joined together: Hi Aiman!.",
"ms": "Tiga string dicantum bersama: Hi Aiman!."
},
"points": 15,
"code": "name = \"Aiman\"\nprint(\"Hi \" + name + \"!\")"
},
{
"id": "NQ057",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3",
"True",
"a",
"False"
],
"ms": [
"3",
"True",
"a",
"False"
]
},
"answer": 1,
"explanation": {
"en": "in checks if the text appears inside the string. \"a\" is in \"banana\", so True.",
"ms": "in menyemak sama ada teks wujud dalam string. \"a\" ada dalam \"banana\", jadi True."
},
"points": 15,
"code": "print(\"a\" in \"banana\")"
},
{
"id": "NQ058",
"difficulty": "normal",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"ababcc",
"ababc",
"Error",
"abc2"
],
"ms": [
"ababcc",
"ababc",
"Ralat",
"abc2"
]
},
"answer": 1,
"explanation": {
"en": "\"ab\" * 2 is \"abab\", then + \"c\" gives ababc.",
"ms": "\"ab\" * 2 ialah \"abab\", kemudian + \"c\" memberi ababc."
},
"points": 15,
"code": "print(\"ab\" * 2 + \"c\")"
},
{
"id": "NQ059",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"-1",
"8",
"15",
"4"
],
"ms": [
"-1",
"8",
"15",
"4"
]
},
"answer": 2,
"explanation": {
"en": "-1 gives the last item: 15.",
"ms": "-1 memberi item terakhir: 15."
},
"points": 15,
"code": "nums = [4, 8, 15]\nprint(nums[-1])"
},
{
"id": "NQ060",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[3, 1, 2]",
"[1, 2, [3]]",
"[1, 2]",
"[1, 2, 3]"
],
"ms": [
"[3, 1, 2]",
"[1, 2, [3]]",
"[1, 2]",
"[1, 2, 3]"
]
},
"answer": 3,
"explanation": {
"en": "append() adds 3 to the end: [1, 2, 3].",
"ms": "append() menambah 3 di hujung: [1, 2, 3]."
},
"points": 15,
"code": "nums = [1, 2]\nnums.append(3)\nprint(nums)"
},
{
"id": "NQ061",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[5, 6, 9]",
"[9, 6, 7]",
"[5, 6, 7]",
"[9, 5, 6, 7]"
],
"ms": [
"[5, 6, 9]",
"[9, 6, 7]",
"[5, 6, 7]",
"[9, 5, 6, 7]"
]
},
"answer": 1,
"explanation": {
"en": "nums[0] = 9 replaces the first item: [9, 6, 7].",
"ms": "nums[0] = 9 menggantikan item pertama: [9, 6, 7]."
},
"points": 15,
"code": "nums = [5, 6, 7]\nnums[0] = 9\nprint(nums)"
},
{
"id": "NQ062",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"None",
"IndexError",
"a",
"c"
],
"ms": [
"None",
"IndexError",
"a",
"c"
]
},
"answer": 1,
"explanation": {
"en": "The indexes are 0, 1 and 2 only. Index 3 does not exist, so Python raises an IndexError.",
"ms": "Indeks hanya 0, 1 dan 2. Indeks 3 tidak wujud, jadi Python menimbulkan IndexError."
},
"points": 15,
"code": "items = [\"a\", \"b\", \"c\"]\nprint(items[3])"
},
{
"id": "NQ063",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"6",
"15",
"5",
"4"
],
"ms": [
"6",
"15",
"5",
"4"
]
},
"answer": 2,
"explanation": {
"en": "There are five items, so len() is 5.",
"ms": "Terdapat lima item, jadi len() ialah 5."
},
"points": 15,
"code": "print(len([1, 2, 3, 4, 5]))"
},
{
"id": "NQ064",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"False",
"3",
"True",
"2"
],
"ms": [
"False",
"3",
"True",
"2"
]
},
"answer": 2,
"explanation": {
"en": "3 is one of the items, so in gives True.",
"ms": "3 ialah salah satu item, jadi in memberi True."
},
"points": 15,
"code": "print(3 in [1, 2, 3])"
},
{
"id": "NQ065",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"12",
"6",
"246",
"3"
],
"ms": [
"12",
"6",
"246",
"3"
]
},
"answer": 0,
"explanation": {
"en": "sum() adds all the items: 2 + 4 + 6 = 12.",
"ms": "sum() menjumlahkan semua item: 2 + 4 + 6 = 12."
},
"points": 15,
"code": "print(sum([2, 4, 6]))"
},
{
"id": "NQ066",
"difficulty": "normal",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"14",
"2",
"3",
"9"
],
"ms": [
"14",
"2",
"3",
"9"
]
},
"answer": 3,
"explanation": {
"en": "max() returns the biggest item: 9.",
"ms": "max() memulangkan item paling besar: 9."
},
"points": 15,
"code": "print(max([3, 9, 2]))"
},
{
"id": "NQ067",
"difficulty": "normal",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Even",
"1",
"Odd",
"Error"
],
"ms": [
"Even",
"1",
"Odd",
"Ralat"
]
},
"answer": 2,
"explanation": {
"en": "7 % 2 is 1, not 0, so the else branch prints Odd.",
"ms": "7 % 2 ialah 1, bukan 0, jadi cabang else memaparkan Odd."
},
"points": 15,
"code": "x = 7\nif x % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")"
},
{
"id": "NQ068",
"difficulty": "normal",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Warm",
"Hot",
"Hot Warm",
"Cool"
],
"ms": [
"Warm",
"Hot",
"Hot Warm",
"Cool"
]
},
"answer": 0,
"explanation": {
"en": "30 is not above 35, but it is above 25, so Warm is printed.",
"ms": "30 tidak melebihi 35, tetapi melebihi 25, jadi Warm dipaparkan."
},
"points": 15,
"code": "temp = 30\nif temp > 35:\n    print(\"Hot\")\nelif temp > 25:\n    print(\"Warm\")\nelse:\n    print(\"Cool\")"
},
{
"id": "NQ069",
"difficulty": "normal",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Teen",
"12",
"Kid",
"Teen Kid"
],
"ms": [
"Teen",
"12",
"Kid",
"Teen Kid"
]
},
"answer": 2,
"explanation": {
"en": "12 is not >= 13, so the else branch prints Kid.",
"ms": "12 tidak >= 13, jadi cabang else memaparkan Kid."
},
"points": 15,
"code": "age = 12\nif age >= 13:\n    print(\"Teen\")\nelse:\n    print(\"Kid\")"
},
{
"id": "NQ070",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"0 1 2",
"1 2 3 4",
"0 1 2 3",
"1 2 3"
],
"ms": [
"0 1 2",
"1 2 3 4",
"0 1 2 3",
"1 2 3"
]
},
"answer": 3,
"explanation": {
"en": "range(1, 4) starts at 1 and stops before 4: 1 2 3.",
"ms": "range(1, 4) bermula pada 1 dan berhenti sebelum 4: 1 2 3."
},
"points": 15,
"code": "for i in range(1, 4):\n    print(i, end=\" \")"
},
{
"id": "NQ071",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"0 3 6",
"0 3 6 9",
"0 3 6 9 10",
"3 6 9"
],
"ms": [
"0 3 6",
"0 3 6 9",
"0 3 6 9 10",
"3 6 9"
]
},
"answer": 1,
"explanation": {
"en": "range(0, 10, 3) jumps by 3 and stops before 10: 0 3 6 9.",
"ms": "range(0, 10, 3) melompat 3 dan berhenti sebelum 10: 0 3 6 9."
},
"points": 15,
"code": "for n in range(0, 10, 3):\n    print(n, end=\" \")"
},
{
"id": "NQ072",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4",
"6",
"0",
"3"
],
"ms": [
"4",
"6",
"0",
"3"
]
},
"answer": 0,
"explanation": {
"en": "The loop runs 4 times and adds 1 each time, so total is 4.",
"ms": "Gelung berjalan 4 kali dan menambah 1 setiap kali, jadi total ialah 4."
},
"points": 15,
"code": "total = 0\nfor i in range(4):\n    total += 1\nprint(total)"
},
{
"id": "NQ073",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"a-b-c-",
"a b c",
"abc",
"a-b-c"
],
"ms": [
"a-b-c-",
"a b c",
"abc",
"a-b-c"
]
},
"answer": 0,
"explanation": {
"en": "A for loop goes through each letter and prints it followed by \"-\": a-b-c-.",
"ms": "Gelung for melalui setiap huruf dan memaparkannya diikuti \"-\": a-b-c-."
},
"points": 15,
"code": "for ch in \"abc\":\n    print(ch, end=\"-\")"
},
{
"id": "NQ074",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1 2 3",
"3 2 1",
"3 2 1 0",
"2 1 0"
],
"ms": [
"1 2 3",
"3 2 1",
"3 2 1 0",
"2 1 0"
]
},
"answer": 1,
"explanation": {
"en": "The loop prints 3, 2, 1 and stops when count becomes 0: 3 2 1.",
"ms": "Gelung memaparkan 3, 2, 1 dan berhenti apabila count menjadi 0: 3 2 1."
},
"points": 15,
"code": "count = 3\nwhile count > 0:\n    print(count, end=\" \")\n    count -= 1"
},
{
"id": "NQ075",
"difficulty": "normal",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"0 0 0",
"1 2 3",
"1.0 2.0 3.0",
"10 20 30"
],
"ms": [
"0 0 0",
"1 2 3",
"1.0 2.0 3.0",
"10 20 30"
]
},
"answer": 1,
"explanation": {
"en": "Each item is divided by 10 with //: 1 2 3.",
"ms": "Setiap item dibahagi 10 dengan //: 1 2 3."
},
"points": 15,
"code": "for x in [10, 20, 30]:\n    print(x // 10, end=\" \")"
},
{
"id": "NQ076",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"8",
"None",
"35",
"a + b"
],
"ms": [
"8",
"None",
"35",
"a + b"
]
},
"answer": 0,
"explanation": {
"en": "add(3, 5) returns 3 + 5, so 8 is printed.",
"ms": "add(3, 5) memulangkan 3 + 5, jadi 8 dipaparkan."
},
"points": 15,
"code": "def add(a, b):\n    return a + b\nprint(add(3, 5))"
},
{
"id": "NQ077",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Hi name",
"Hi",
"Hi Mei",
"greet Mei"
],
"ms": [
"Hi name",
"Hi",
"Hi Mei",
"greet Mei"
]
},
"answer": 2,
"explanation": {
"en": "\"Mei\" goes into the parameter name, so the function prints Hi Mei.",
"ms": "\"Mei\" masuk ke parameter name, jadi fungsi memaparkan Hi Mei."
},
"points": 15,
"code": "def greet(name):\n    print(\"Hi \" + name)\ngreet(\"Mei\")"
},
{
"id": "NQ078",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"9",
"10",
"16",
"7"
],
"ms": [
"9",
"10",
"16",
"7"
]
},
"answer": 1,
"explanation": {
"en": "square(3) is 9, and 9 + 1 = 10.",
"ms": "square(3) ialah 9, dan 9 + 1 = 10."
},
"points": 15,
"code": "def square(x):\n    return x * x\nprint(square(3) + 1)"
},
{
"id": "NQ079",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"8",
"8.0",
"-8",
"0"
],
"ms": [
"8",
"8.0",
"-8",
"0"
]
},
"answer": 0,
"explanation": {
"en": "abs() gives the distance from zero, always positive: 8.",
"ms": "abs() memberi jarak dari sifar, sentiasa positif: 8."
},
"points": 15,
"code": "print(abs(-8))"
},
{
"id": "NQ080",
"difficulty": "normal",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4.0",
"4.6",
"4",
"5"
],
"ms": [
"4.0",
"4.6",
"4",
"5"
]
},
"answer": 3,
"explanation": {
"en": "round() rounds to the nearest whole number: 5.",
"ms": "round() membundarkan kepada nombor bulat terdekat: 5."
},
"points": 15,
"code": "print(round(4.6))"
},
{
"id": "NQ081",
"difficulty": "normal",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2",
"cat",
"type",
"Error"
],
"ms": [
"2",
"cat",
"type",
"Ralat"
]
},
"answer": 1,
"explanation": {
"en": "pet[\"type\"] gives the value stored with the key \"type\": cat.",
"ms": "pet[\"type\"] memberi nilai yang disimpan dengan kunci \"type\": cat."
},
"points": 15,
"code": "pet = {\"type\": \"cat\", \"age\": 2}\nprint(pet[\"type\"])"
},
{
"id": "NQ082",
"difficulty": "normal",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"6",
"4",
"2",
"1"
],
"ms": [
"6",
"4",
"2",
"1"
]
},
"answer": 2,
"explanation": {
"en": "len() of a dictionary counts its keys. There are 2.",
"ms": "len() bagi kamus mengira kuncinya. Terdapat 2."
},
"points": 15,
"code": "pet = {\"type\": \"cat\", \"age\": 2}\nprint(len(pet))"
},
{
"id": "NQ083",
"difficulty": "normal",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"['a', 'b']",
"{'a': 1, 'b': 2}",
"{'b': 2}",
"{'a': 1}"
],
"ms": [
"['a', 'b']",
"{'a': 1, 'b': 2}",
"{'b': 2}",
"{'a': 1}"
]
},
"answer": 1,
"explanation": {
"en": "Assigning to a new key adds it to the dictionary: {'a': 1, 'b': 2}.",
"ms": "Memberi nilai kepada kunci baharu akan menambahnya ke kamus: {'a': 1, 'b': 2}."
},
"points": 15,
"code": "d = {\"a\": 1}\nd[\"b\"] = 2\nprint(d)"
},
{
"id": "NQ084",
"difficulty": "normal",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"10",
"[7, 10]",
"7",
"17"
],
"ms": [
"10",
"[7, 10]",
"7",
"17"
]
},
"answer": 0,
"explanation": {
"en": "Using an existing key replaces its old value: 10.",
"ms": "Menggunakan kunci sedia ada akan menggantikan nilai lamanya: 10."
},
"points": 15,
"code": "scores = {\"Ali\": 7}\nscores[\"Ali\"] = 10\nprint(scores[\"Ali\"])"
},
{
"id": "NQ085",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Infinity",
"ZeroDivisionError",
"0",
"10"
],
"ms": [
"Infinity",
"ZeroDivisionError",
"0",
"10"
]
},
"answer": 1,
"explanation": {
"en": "Dividing by zero is not allowed, so Python raises a ZeroDivisionError.",
"ms": "Bahagi dengan sifar tidak dibenarkan, jadi Python menimbulkan ZeroDivisionError."
},
"points": 15,
"code": "print(10 / 0)"
},
{
"id": "NQ086",
"difficulty": "normal",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"ValueError",
"hello",
"5",
"0"
],
"ms": [
"ValueError",
"hello",
"5",
"0"
]
},
"answer": 0,
"explanation": {
"en": "\"hello\" is not a number, so int() raises a ValueError.",
"ms": "\"hello\" bukan nombor, jadi int() menimbulkan ValueError."
},
"points": 15,
"code": "print(int(\"hello\"))"
},
{
"id": "MQ004",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "Which method splits \"a,b,c\" into [\"a\", \"b\", \"c\"]?",
"ms": "Kaedah manakah memecahkan \"a,b,c\" kepada [\"a\", \"b\", \"c\"]?"
},
"options": {
"en": [
"split(\"a,b,c\")",
"\"a,b,c\".cut(\",\")",
"\"a,b,c\".split(\",\")",
"\"a,b,c\".join(\",\")"
],
"ms": [
"split(\"a,b,c\")",
"\"a,b,c\".cut(\",\")",
"\"a,b,c\".split(\",\")",
"\"a,b,c\".join(\",\")"
]
},
"answer": 2,
"explanation": {
"en": "split(\",\") cuts the string at every comma and returns a list.",
"ms": "split(\",\") memotong string pada setiap koma dan memulangkan list."
},
"points": 20
},
{
"id": "MQ005",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "Which is an f-string that shows the value of name?",
"ms": "Manakah f-string yang memaparkan nilai name?"
},
"options": {
"en": [
"f\"Hi {name}\"",
"f\"Hi name\"",
"f(Hi {name})",
"\"Hi {name}\""
],
"ms": [
"f\"Hi {name}\"",
"f\"Hi name\"",
"f(Hi {name})",
"\"Hi {name}\""
]
},
"answer": 0,
"explanation": {
"en": "An f-string starts with f before the quote, and variables go inside curly braces.",
"ms": "f-string bermula dengan f sebelum petikan, dan pemboleh ubah diletak dalam kurungan kerinting."
},
"points": 20
},
{
"id": "MQ006",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "Can you change one letter of a string with s[0] = \"X\"?",
"ms": "Bolehkah anda menukar satu huruf string dengan s[0] = \"X\"?"
},
"options": {
"en": [
"Only inside a loop",
"Yes, always",
"No, strings cannot be changed in place",
"Only for capital letters"
],
"ms": [
"Hanya dalam gelung",
"Ya, sentiasa",
"Tidak, string tidak boleh diubah terus",
"Hanya untuk huruf besar"
]
},
"answer": 2,
"explanation": {
"en": "Strings are immutable. You must build a new string instead, for example \"X\" + s[1:].",
"ms": "String tidak boleh diubah (immutable). Anda perlu membina string baharu, contohnya \"X\" + s[1:]."
},
"points": 20
},
{
"id": "MQ007",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "Which method adds an item at a chosen position?",
"ms": "Kaedah manakah menambah item pada kedudukan yang dipilih?"
},
"options": {
"en": [
"extend()",
"put()",
"insert()",
"append()"
],
"ms": [
"extend()",
"put()",
"insert()",
"append()"
]
},
"answer": 2,
"explanation": {
"en": "insert(index, item) puts the item at that index and shifts the rest to the right.",
"ms": "insert(indeks, item) meletakkan item pada indeks itu dan mengalihkan item lain ke kanan."
},
"points": 20
},
{
"id": "MQ008",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What is the difference between a list and a tuple?",
"ms": "Apakah beza antara list dan tuple?"
},
"options": {
"en": [
"There is no difference",
"A list cannot be changed",
"A tuple cannot be changed after it is made",
"Tuples hold only numbers"
],
"ms": [
"Tiada beza",
"List tidak boleh diubah",
"Tuple tidak boleh diubah selepas dibuat",
"Tuple hanya simpan nombor"
]
},
"answer": 2,
"explanation": {
"en": "Lists are mutable (changeable). Tuples, written with ( ), are immutable.",
"ms": "List boleh diubah (mutable). Tuple, ditulis dengan ( ), tidak boleh diubah (immutable)."
},
"points": 20
},
{
"id": "MQ009",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "Which method gets a value but returns None instead of crashing when the key is missing?",
"ms": "Kaedah manakah mendapatkan nilai tetapi memulangkan None (bukan ralat) jika kunci tiada?"
},
"options": {
"en": [
"get()",
"fetch()",
"find()",
"pop()"
],
"ms": [
"get()",
"fetch()",
"find()",
"pop()"
]
},
"answer": 0,
"explanation": {
"en": "d.get(\"key\") returns None (or a default you give) when the key does not exist, instead of a KeyError.",
"ms": "d.get(\"key\") memulangkan None (atau nilai lalai yang diberi) jika kunci tiada, bukannya KeyError."
},
"points": 20
},
{
"id": "MQ010",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "Which error happens when you ask a dict for a key that does not exist?",
"ms": "Ralat manakah berlaku apabila anda meminta kunci yang tiada dalam dict?"
},
"options": {
"en": [
"IndexError",
"ValueError",
"KeyError",
"NameError"
],
"ms": [
"IndexError",
"ValueError",
"KeyError",
"NameError"
]
},
"answer": 2,
"explanation": {
"en": "Missing dictionary keys raise KeyError.",
"ms": "Kunci kamus yang tiada menimbulkan KeyError."
},
"points": 20
},
{
"id": "MQ011",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What happens if a while loop's condition never becomes False?",
"ms": "Apakah berlaku jika syarat gelung while tidak pernah menjadi False?"
},
"options": {
"en": [
"It becomes a for loop",
"It runs forever (infinite loop)",
"Python skips it",
"It runs once"
],
"ms": [
"Ia menjadi gelung for",
"Ia berjalan selama-lamanya (gelung tak terhingga)",
"Python melangkaunya",
"Ia berjalan sekali"
]
},
"answer": 1,
"explanation": {
"en": "The loop never ends. Make sure something inside the loop changes the condition.",
"ms": "Gelung tidak akan berhenti. Pastikan sesuatu dalam gelung mengubah syaratnya."
},
"points": 20
},
{
"id": "MQ012",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What is the main benefit of writing a function?",
"ms": "Apakah kelebihan utama menulis fungsi?"
},
"options": {
"en": [
"It removes the need for variables",
"You can reuse the same code many times",
"It makes code run without errors",
"It hides the code from users"
],
"ms": [
"Tidak perlu pemboleh ubah",
"Kod yang sama boleh diguna berkali-kali",
"Kod berjalan tanpa ralat",
"Menyembunyikan kod daripada pengguna"
]
},
"answer": 1,
"explanation": {
"en": "Functions let you write a piece of logic once and call it whenever you need it.",
"ms": "Fungsi membolehkan anda menulis logik sekali dan memanggilnya bila-bila perlu."
},
"points": 20
},
{
"id": "MQ013",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "Which block runs only if an error happens inside try?",
"ms": "Blok manakah hanya berjalan jika ralat berlaku dalam try?"
},
"options": {
"en": [
"except",
"finally",
"catch",
"else"
],
"ms": [
"except",
"finally",
"catch",
"else"
]
},
"answer": 0,
"explanation": {
"en": "try: risky code, except: what to do if it fails. Python uses except, not catch.",
"ms": "try: kod berisiko, except: apa yang dibuat jika gagal. Python guna except, bukan catch."
},
"points": 20
},
{
"id": "MQ014",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "Which line imports the random module?",
"ms": "Baris manakah mengimport modul random?"
},
"options": {
"en": [
"include random",
"require(\"random\")",
"import random",
"using random"
],
"ms": [
"include random",
"require(\"random\")",
"import random",
"using random"
]
},
"answer": 2,
"explanation": {
"en": "import random loads the module so you can use random.randint() and friends.",
"ms": "import random memuatkan modul supaya anda boleh guna random.randint() dan lain-lain."
},
"points": 20
},
{
"id": "MQ015",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "random.randint(1, 6) can return which numbers?",
"ms": "random.randint(1, 6) boleh memulangkan nombor apa?"
},
"options": {
"en": [
"1 to 5 only",
"0 to 6",
"0 to 5",
"1 to 6, including 6"
],
"ms": [
"1 hingga 5 sahaja",
"0 hingga 6",
"0 hingga 5",
"1 hingga 6, termasuk 6"
]
},
"answer": 3,
"explanation": {
"en": "Unlike range(), randint includes both ends, just like a dice.",
"ms": "Tidak seperti range(), randint merangkumi kedua-dua hujung, sama seperti dadu."
},
"points": 20
},
{
"id": "MQ016",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Pyth",
"Py",
"Pyt",
"yth"
],
"ms": [
"Pyth",
"Py",
"Pyt",
"yth"
]
},
"answer": 2,
"explanation": {
"en": "Slicing [0:3] takes indexes 0, 1 and 2 (stops before 3): Pyt.",
"ms": "Hirisan [0:3] mengambil indeks 0, 1 dan 2 (berhenti sebelum 3): Pyt."
},
"points": 20,
"code": "s = \"Python\"\nprint(s[0:3])"
},
{
"id": "MQ017",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"tho",
"thon",
"yth",
"Py"
],
"ms": [
"tho",
"thon",
"yth",
"Py"
]
},
"answer": 1,
"explanation": {
"en": "[2:] starts at index 2 and goes to the end: thon.",
"ms": "[2:] bermula pada indeks 2 hingga akhir: thon."
},
"points": 20,
"code": "s = \"Python\"\nprint(s[2:])"
},
{
"id": "MQ018",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"yt",
"Pyt",
"Py",
"on"
],
"ms": [
"yt",
"Pyt",
"Py",
"on"
]
},
"answer": 2,
"explanation": {
"en": "[:2] starts at the beginning and stops before index 2: Py.",
"ms": "[:2] bermula dari awal dan berhenti sebelum indeks 2: Py."
},
"points": 20,
"code": "s = \"Python\"\nprint(s[:2])"
},
{
"id": "MQ019",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"r",
"racecar",
"rac"
],
"ms": [
"Ralat",
"r",
"racecar",
"rac"
]
},
"answer": 2,
"explanation": {
"en": "[::-1] reverses the string. \"racecar\" is a palindrome, so it reads the same: racecar.",
"ms": "[::-1] menterbalikkan string. \"racecar\" ialah palindrom, jadi ia sama: racecar."
},
"points": 20,
"code": "s = \"racecar\"\nprint(s[::-1])"
},
{
"id": "MQ020",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"6",
"3",
"2",
"1"
],
"ms": [
"6",
"3",
"2",
"1"
]
},
"answer": 1,
"explanation": {
"en": "count(\"a\") counts how many times \"a\" appears: 3.",
"ms": "count(\"a\") mengira berapa kali \"a\" muncul: 3."
},
"points": 20,
"code": "print(\"banana\".count(\"a\"))"
},
{
"id": "MQ021",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"dogs",
"I like dogs",
"I like catsdogs",
"I like cats"
],
"ms": [
"dogs",
"I like dogs",
"I like catsdogs",
"I like cats"
]
},
"answer": 1,
"explanation": {
"en": "replace() swaps the old text for the new text: I like dogs.",
"ms": "replace() menukar teks lama kepada teks baharu: I like dogs."
},
"points": 20,
"code": "print(\"I like cats\".replace(\"cats\", \"dogs\"))"
},
{
"id": "MQ022",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2",
"3",
"1",
"l"
],
"ms": [
"2",
"3",
"1",
"l"
]
},
"answer": 0,
"explanation": {
"en": "find() gives the index of the FIRST match. The first \"l\" is at index 2.",
"ms": "find() memberi indeks padanan PERTAMA. \"l\" pertama berada pada indeks 2."
},
"points": 20,
"code": "print(\"hello\".find(\"l\"))"
},
{
"id": "MQ023",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"-1",
"Error",
"0",
"None"
],
"ms": [
"-1",
"Ralat",
"0",
"None"
]
},
"answer": 0,
"explanation": {
"en": "When the text is not found, find() returns -1 instead of crashing.",
"ms": "Jika teks tidak dijumpai, find() memulangkan -1 dan tidak menimbulkan ralat."
},
"points": 20,
"code": "print(\"hello\".find(\"z\"))"
},
{
"id": "MQ024",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"hi!",
"hi  !",
"  hi  !",
"  hi!"
],
"ms": [
"hi!",
"hi  !",
"  hi  !",
"  hi!"
]
},
"answer": 0,
"explanation": {
"en": "strip() removes spaces at both ends, giving \"hi\", then \"!\" is added: hi!.",
"ms": "strip() membuang ruang di kedua-dua hujung, memberi \"hi\", kemudian \"!\" ditambah: hi!."
},
"points": 20,
"code": "print(\"  hi  \".strip() + \"!\")"
},
{
"id": "MQ025",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"['a', 'b', 'c']",
"a-b-c",
"abc",
"-a-b-c-"
],
"ms": [
"['a', 'b', 'c']",
"a-b-c",
"abc",
"-a-b-c-"
]
},
"answer": 1,
"explanation": {
"en": "join() puts the \"-\" between each item: a-b-c.",
"ms": "join() meletakkan \"-\" di antara setiap item: a-b-c."
},
"points": 20,
"code": "print(\"-\".join([\"a\", \"b\", \"c\"]))"
},
{
"id": "MQ026",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"13",
"1",
"3",
"11"
],
"ms": [
"13",
"1",
"3",
"11"
]
},
"answer": 2,
"explanation": {
"en": "split() with no argument splits at spaces, giving 3 words: 3.",
"ms": "split() tanpa argumen memecah pada ruang, memberi 3 perkataan: 3."
},
"points": 20,
"code": "words = \"I love Python\".split()\nprint(len(words))"
},
{
"id": "MQ027",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Siti is 13",
"name is age",
"{name} is {age}",
"Siti is age"
],
"ms": [
"Siti is 13",
"name is age",
"{name} is {age}",
"Siti is age"
]
},
"answer": 0,
"explanation": {
"en": "An f-string replaces {name} and {age} with their values: Siti is 13.",
"ms": "f-string menggantikan {name} dan {age} dengan nilainya: Siti is 13."
},
"points": 20,
"code": "name = \"Siti\"\nage = 13\nprint(f\"{name} is {age}\")"
},
{
"id": "MQ028",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Py",
"False",
"True",
"thon"
],
"ms": [
"Py",
"False",
"True",
"thon"
]
},
"answer": 2,
"explanation": {
"en": "\"Python\" begins with \"Py\", so the result is True.",
"ms": "\"Python\" bermula dengan \"Py\", jadi hasilnya True."
},
"points": 20,
"code": "print(\"Python\".startswith(\"Py\"))"
},
{
"id": "MQ029",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"True",
"False",
"abc",
"Error"
],
"ms": [
"True",
"False",
"abc",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "Strings are compared letter by letter. \"c\" comes before \"d\", so the result is True.",
"ms": "String dibanding huruf demi huruf. \"c\" datang sebelum \"d\", jadi hasilnya True."
},
"points": 20,
"code": "print(\"abc\" < \"abd\")"
},
{
"id": "MQ030",
"difficulty": "medium",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"15",
"Error",
"555",
"5 5 5"
],
"ms": [
"15",
"Ralat",
"555",
"5 5 5"
]
},
"answer": 2,
"explanation": {
"en": "\"5\" is text, so * 3 repeats it: 555.",
"ms": "\"5\" ialah teks, jadi * 3 mengulangnya: 555."
},
"points": 20,
"code": "print(\"5\" * 3)"
},
{
"id": "MQ031",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[20, 30, 40, 50]",
"[10, 20, 30, 40]",
"[20, 30, 40]",
"[20, 30]"
],
"ms": [
"[20, 30, 40, 50]",
"[10, 20, 30, 40]",
"[20, 30, 40]",
"[20, 30]"
]
},
"answer": 2,
"explanation": {
"en": "Slicing [1:4] takes indexes 1, 2, 3: [20, 30, 40].",
"ms": "Hirisan [1:4] mengambil indeks 1, 2, 3: [20, 30, 40]."
},
"points": 20,
"code": "nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])"
},
{
"id": "MQ032",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[3, 1, 2]",
"[1, 2, 3]",
"[3, 2, 1]",
"None"
],
"ms": [
"[3, 1, 2]",
"[1, 2, 3]",
"[3, 2, 1]",
"None"
]
},
"answer": 1,
"explanation": {
"en": "sort() arranges the list from smallest to largest: [1, 2, 3].",
"ms": "sort() menyusun list dari kecil ke besar: [1, 2, 3]."
},
"points": 20,
"code": "nums = [3, 1, 2]\nnums.sort()\nprint(nums)"
},
{
"id": "MQ033",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3 [1, 2]",
"[1, 2] 3",
"1 [2, 3]",
"3 [1, 2, 3]"
],
"ms": [
"3 [1, 2]",
"[1, 2] 3",
"1 [2, 3]",
"3 [1, 2, 3]"
]
},
"answer": 0,
"explanation": {
"en": "pop() removes the last item (3) and returns it: 3 [1, 2].",
"ms": "pop() membuang item terakhir (3) dan memulangkannya: 3 [1, 2]."
},
"points": 20,
"code": "nums = [1, 2, 3]\nx = nums.pop()\nprint(x, nums)"
},
{
"id": "MQ034",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1, 9, 2, 3]",
"[9, 1, 2, 3]",
"[1, 2, 3, 9]",
"[9, 2, 3]"
],
"ms": [
"[1, 9, 2, 3]",
"[9, 1, 2, 3]",
"[1, 2, 3, 9]",
"[9, 2, 3]"
]
},
"answer": 1,
"explanation": {
"en": "insert(0, 9) puts 9 at the front: [9, 1, 2, 3].",
"ms": "insert(0, 9) meletakkan 9 di hadapan: [9, 1, 2, 3]."
},
"points": 20,
"code": "nums = [1, 2, 3]\nnums.insert(0, 9)\nprint(nums)"
},
{
"id": "MQ035",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"['blue']",
"['blue', 'red', 'red']",
"['red', 'blue']",
"['blue', 'red']"
],
"ms": [
"['blue']",
"['blue', 'red', 'red']",
"['red', 'blue']",
"['blue', 'red']"
]
},
"answer": 3,
"explanation": {
"en": "remove() deletes only the FIRST matching item: ['blue', 'red'].",
"ms": "remove() hanya memadam item sepadan yang PERTAMA: ['blue', 'red']."
},
"points": 20,
"code": "colours = [\"red\", \"blue\", \"red\"]\ncolours.remove(\"red\")\nprint(colours)"
},
{
"id": "MQ036",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1, 2, 3, 4]",
"[4, 6]",
"10",
"[[1, 2], [3, 4]]"
],
"ms": [
"[1, 2, 3, 4]",
"[4, 6]",
"10",
"[[1, 2], [3, 4]]"
]
},
"answer": 0,
"explanation": {
"en": "+ joins two lists into one: [1, 2, 3, 4].",
"ms": "+ mencantumkan dua list menjadi satu: [1, 2, 3, 4]."
},
"points": 20,
"code": "a = [1, 2]\nb = [3, 4]\nprint(a + b)"
},
{
"id": "MQ037",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[0]",
"0000",
"[4]",
"[0, 0, 0, 0]"
],
"ms": [
"[0]",
"0000",
"[4]",
"[0, 0, 0, 0]"
]
},
"answer": 3,
"explanation": {
"en": "Multiplying a list repeats its items: [0, 0, 0, 0].",
"ms": "Mendarab list mengulang itemnya: [0, 0, 0, 0]."
},
"points": 20,
"code": "print([0] * 4)"
},
{
"id": "MQ038",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2",
"0",
"7",
"1"
],
"ms": [
"2",
"0",
"7",
"1"
]
},
"answer": 3,
"explanation": {
"en": "index(7) tells you where 7 is. It is at index 1.",
"ms": "index(7) memberitahu kedudukan 7. Ia berada pada indeks 1."
},
"points": 20,
"code": "nums = [4, 7, 1]\nprint(nums.index(7))"
},
{
"id": "MQ039",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[5, 3, 8] [3, 5, 8]",
"[3, 5, 8] [5, 3, 8]",
"None [5, 3, 8]",
"[3, 5, 8] [3, 5, 8]"
],
"ms": [
"[5, 3, 8] [3, 5, 8]",
"[3, 5, 8] [5, 3, 8]",
"None [5, 3, 8]",
"[3, 5, 8] [3, 5, 8]"
]
},
"answer": 1,
"explanation": {
"en": "sorted() makes a NEW sorted list and leaves the original unchanged: [3, 5, 8] [5, 3, 8].",
"ms": "sorted() membuat list BAHARU yang tersusun dan tidak mengubah asal: [3, 5, 8] [5, 3, 8]."
},
"points": 20,
"code": "nums = [5, 3, 8]\nprint(sorted(nums), nums)"
},
{
"id": "MQ040",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3",
"1",
"4",
"2"
],
"ms": [
"3",
"1",
"4",
"2"
]
},
"answer": 0,
"explanation": {
"en": "grid[1] is [3, 4], and [0] of that is 3.",
"ms": "grid[1] ialah [3, 4], dan [0] daripadanya ialah 3."
},
"points": 20,
"code": "grid = [[1, 2], [3, 4]]\nprint(grid[1][0])"
},
{
"id": "MQ041",
"difficulty": "medium",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5",
"-9",
"9",
"11"
],
"ms": [
"5",
"-9",
"9",
"11"
]
},
"answer": 0,
"explanation": {
"en": "min is -2 and max is 7, so -2 + 7 = 5.",
"ms": "min ialah -2 dan max ialah 7, jadi -2 + 7 = 5."
},
"points": 20,
"code": "print(min([4, -2, 7]) + max([4, -2, 7]))"
},
{
"id": "MQ042",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"15",
"5",
"10",
"21"
],
"ms": [
"15",
"5",
"10",
"21"
]
},
"answer": 0,
"explanation": {
"en": "It adds 1 + 2 + 3 + 4 + 5 = 15.",
"ms": "Ia menambah 1 + 2 + 3 + 4 + 5 = 15."
},
"points": 20,
"code": "total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)"
},
{
"id": "MQ043",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2",
"0 1 2 3 4",
"0 1 3 4",
"0 1"
],
"ms": [
"2",
"0 1 2 3 4",
"0 1 3 4",
"0 1"
]
},
"answer": 2,
"explanation": {
"en": "continue skips 2, so the others are printed: 0 1 3 4.",
"ms": "continue melangkau 2, jadi yang lain dipaparkan: 0 1 3 4."
},
"points": 20,
"code": "for i in range(5):\n    if i == 2:\n        continue\n    print(i, end=\" \")"
},
{
"id": "MQ044",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5 6 7 8 9",
"4",
"0 1 2 3",
"0 1 2 3 4"
],
"ms": [
"5 6 7 8 9",
"4",
"0 1 2 3",
"0 1 2 3 4"
]
},
"answer": 2,
"explanation": {
"en": "break stops the loop as soon as i is 4, so 4 is never printed: 0 1 2 3.",
"ms": "break menghentikan gelung sebaik i menjadi 4, jadi 4 tidak dipaparkan: 0 1 2 3."
},
"points": 20,
"code": "for i in range(10):\n    if i == 4:\n        break\n    print(i, end=\" \")"
},
{
"id": "MQ045",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"10",
"20",
"16",
"32"
],
"ms": [
"10",
"20",
"16",
"32"
]
},
"answer": 3,
"explanation": {
"en": "n goes 1, 2, 4, 8, 16, 32. The loop stops when n is no longer below 20: 32.",
"ms": "n menjadi 1, 2, 4, 8, 16, 32. Gelung berhenti apabila n tidak lagi kurang daripada 20: 32."
},
"points": 20,
"code": "n = 1\nwhile n < 20:\n    n = n * 2\nprint(n)"
},
{
"id": "MQ046",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3",
"11",
"4",
"2"
],
"ms": [
"3",
"11",
"4",
"2"
]
},
"answer": 2,
"explanation": {
"en": "The loop counts every \"s\" in the word: 4.",
"ms": "Gelung mengira setiap \"s\" dalam perkataan: 4."
},
"points": 20,
"code": "count = 0\nfor ch in \"mississippi\":\n    if ch == \"s\":\n        count += 1\nprint(count)"
},
{
"id": "MQ047",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"***",
"*****",
"******",
"**"
],
"ms": [
"***",
"*****",
"******",
"**"
]
},
"answer": 2,
"explanation": {
"en": "The inner loop runs 2 times for each of the 3 outer rounds: 3 × 2 = 6 stars: ******.",
"ms": "Gelung dalam berjalan 2 kali bagi setiap 3 pusingan luar: 3 × 2 = 6 bintang: ******."
},
"points": 20,
"code": "for i in range(3):\n    for j in range(2):\n        print(\"*\", end=\"\")"
},
{
"id": "MQ048",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1 3 5",
"5 3 1 -1",
"5 3 1",
"5 4 3 2 1"
],
"ms": [
"1 3 5",
"5 3 1 -1",
"5 3 1",
"5 4 3 2 1"
]
},
"answer": 2,
"explanation": {
"en": "Start at 5 and step -2, stopping before 0: 5 3 1.",
"ms": "Mula pada 5 dan langkah -2, berhenti sebelum 0: 5 3 1."
},
"points": 20,
"code": "for i in range(5, 0, -2):\n    print(i, end=\" \")"
},
{
"id": "MQ049",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5",
"3 2",
"2",
"Ali Bo"
],
"ms": [
"5",
"3 2",
"2",
"Ali Bo"
]
},
"answer": 1,
"explanation": {
"en": "len(\"Ali\") is 3 and len(\"Bo\") is 2: 3 2.",
"ms": "len(\"Ali\") ialah 3 dan len(\"Bo\") ialah 2: 3 2."
},
"points": 20,
"code": "names = [\"Ali\", \"Bo\"]\nfor n in names:\n    print(len(n), end=\" \")"
},
{
"id": "MQ050",
"difficulty": "medium",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[2, 4, 6]",
"[1, 3, 5]",
"[2, 4, 6, 8]",
"[0, 2, 4, 6]"
],
"ms": [
"[2, 4, 6]",
"[1, 3, 5]",
"[2, 4, 6, 8]",
"[0, 2, 4, 6]"
]
},
"answer": 0,
"explanation": {
"en": "Only numbers with no remainder when divided by 2 are kept: [2, 4, 6].",
"ms": "Hanya nombor tanpa baki apabila dibahagi 2 disimpan: [2, 4, 6]."
},
"points": 20,
"code": "evens = []\nfor n in range(1, 7):\n    if n % 2 == 0:\n        evens.append(n)\nprint(evens)"
},
{
"id": "MQ051",
"difficulty": "medium",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"True",
"Teen number Other",
"Other",
"Teen number"
],
"ms": [
"True",
"Teen number Other",
"Other",
"Teen number"
]
},
"answer": 3,
"explanation": {
"en": "15 is above 10 AND below 20, so Teen number is printed.",
"ms": "15 melebihi 10 DAN kurang daripada 20, jadi Teen number dipaparkan."
},
"points": 20,
"code": "x = 15\nif x > 10 and x < 20:\n    print(\"Teen number\")\nelse:\n    print(\"Other\")"
},
{
"id": "MQ052",
"difficulty": "medium",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"A",
"B",
"BC",
"C"
],
"ms": [
"A",
"B",
"BC",
"C"
]
},
"answer": 1,
"explanation": {
"en": "Python checks from the top and stops at the first True condition (mark >= 65): B.",
"ms": "Python menyemak dari atas dan berhenti pada syarat True pertama (mark >= 65): B."
},
"points": 20,
"code": "mark = 72\nif mark >= 80:\n    grade = \"A\"\nelif mark >= 65:\n    grade = \"B\"\nelif mark >= 50:\n    grade = \"C\"\nelse:\n    grade = \"D\"\nprint(grade)"
},
{
"id": "MQ053",
"difficulty": "medium",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"No",
"Yes",
"0",
"Error"
],
"ms": [
"No",
"Yes",
"0",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "The number 0 counts as False in a condition, so No is printed.",
"ms": "Nombor 0 dikira sebagai False dalam syarat, jadi No dipaparkan."
},
"points": 20,
"code": "x = 0\nif x:\n    print(\"Yes\")\nelse:\n    print(\"No\")"
},
{
"id": "MQ054",
"difficulty": "medium",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Hello name",
"No name",
"Error",
"Hello "
],
"ms": [
"Hello name",
"No name",
"Ralat",
"Hello "
]
},
"answer": 1,
"explanation": {
"en": "An empty string counts as False, so the else branch runs: No name.",
"ms": "String kosong dikira sebagai False, jadi cabang else berjalan: No name."
},
"points": 20,
"code": "name = \"\"\nif name:\n    print(\"Hello \" + name)\nelse:\n    print(\"No name\")"
},
{
"id": "MQ055",
"difficulty": "medium",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"13",
"a",
"4",
"9"
],
"ms": [
"13",
"a",
"4",
"9"
]
},
"answer": 3,
"explanation": {
"en": "a > b is False, so the else branch prints b: 9.",
"ms": "a > b ialah False, jadi cabang else memaparkan b: 9."
},
"points": 20,
"code": "a = 4\nb = 9\nif a > b:\n    print(a)\nelse:\n    print(b)"
},
{
"id": "MQ056",
"difficulty": "medium",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Small",
"Big",
"Nothing",
"Medium"
],
"ms": [
"Small",
"Big",
"Nothing",
"Medium"
]
},
"answer": 3,
"explanation": {
"en": "x > 5 is True, then x > 10 is False, so the inner else prints Medium.",
"ms": "x > 5 ialah True, kemudian x > 10 ialah False, jadi else dalaman memaparkan Medium."
},
"points": 20,
"code": "x = 8\nif x > 5:\n    if x > 10:\n        print(\"Big\")\n    else:\n        print(\"Medium\")"
},
{
"id": "MQ057",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"24",
"14",
"7",
"10"
],
"ms": [
"24",
"14",
"7",
"10"
]
},
"answer": 1,
"explanation": {
"en": "area(3, 4) is 12 and area(1, 2) is 2, so the total is 14.",
"ms": "area(3, 4) ialah 12 dan area(1, 2) ialah 2, jadi jumlahnya 14."
},
"points": 20,
"code": "def area(w, h):\n    return w * h\nprint(area(3, 4) + area(1, 2))"
},
{
"id": "MQ058",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What does the LAST line of this code print?",
"ms": "Apakah yang dipaparkan oleh baris TERAKHIR kod ini?"
},
"options": {
"en": [
"Error",
"None",
"5 5",
"5"
],
"ms": [
"Ralat",
"None",
"5 5",
"5"
]
},
"answer": 1,
"explanation": {
"en": "Careful: the function prints 5 first, but it has no return, so result is None. The LAST line printed is None.",
"ms": "Berhati-hati: fungsi memaparkan 5 dahulu, tetapi tiada return, jadi result ialah None. Baris TERAKHIR yang dipaparkan ialah None."
},
"points": 20,
"code": "def show(x):\n    print(x)\nresult = show(5)\nprint(result)"
},
{
"id": "MQ059",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"6",
"3",
"9"
],
"ms": [
"Ralat",
"6",
"3",
"9"
]
},
"answer": 3,
"explanation": {
"en": "exp has a default value of 2, so power(3) is 3 ** 2 = 9.",
"ms": "exp ada nilai lalai 2, jadi power(3) ialah 3 ** 2 = 9."
},
"points": 20,
"code": "def power(base, exp=2):\n    return base ** exp\nprint(power(3))"
},
{
"id": "MQ060",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"25",
"10",
"32",
"4"
],
"ms": [
"25",
"10",
"32",
"4"
]
},
"answer": 2,
"explanation": {
"en": "Passing 5 replaces the default, so 2 ** 5 = 32.",
"ms": "Memberi 5 menggantikan nilai lalai, jadi 2 ** 5 = 32."
},
"points": 20,
"code": "def power(base, exp=2):\n    return base ** exp\nprint(power(2, 5))"
},
{
"id": "MQ061",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"not positive",
"-3",
"None",
"positive"
],
"ms": [
"not positive",
"-3",
"None",
"positive"
]
},
"answer": 0,
"explanation": {
"en": "n > 0 is False, so the function skips the first return and gives not positive.",
"ms": "n > 0 ialah False, jadi fungsi melangkau return pertama dan memberi not positive."
},
"points": 20,
"code": "def check(n):\n    if n > 0:\n        return \"positive\"\n    return \"not positive\"\nprint(check(-3))"
},
{
"id": "MQ062",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Hi name",
"Hi friend",
"Error",
"Hi "
],
"ms": [
"Hi name",
"Hi friend",
"Ralat",
"Hi "
]
},
"answer": 1,
"explanation": {
"en": "No argument was given, so the default \"friend\" is used: Hi friend.",
"ms": "Tiada argumen diberi, jadi nilai lalai \"friend\" digunakan: Hi friend."
},
"points": 20,
"code": "def greet(name=\"friend\"):\n    return \"Hi \" + name\nprint(greet())"
},
{
"id": "MQ063",
"difficulty": "medium",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"34",
"7",
"\"34\"",
"Error"
],
"ms": [
"34",
"7",
"\"34\"",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "The arguments are strings, so + joins them: 34.",
"ms": "Argumen ialah string, jadi + mencantumkannya: 34."
},
"points": 20,
"code": "def add(a, b):\n    return a + b\nprint(add(\"3\", \"4\"))"
},
{
"id": "MQ064",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"c",
"None",
"0",
"Error"
],
"ms": [
"c",
"None",
"0",
"Ralat"
]
},
"answer": 1,
"explanation": {
"en": "The key \"c\" does not exist, so get() returns None instead of an error.",
"ms": "Kunci \"c\" tiada, jadi get() memulangkan None dan bukan ralat."
},
"points": 20,
"code": "d = {\"a\": 1, \"b\": 2}\nprint(d.get(\"c\"))"
},
{
"id": "MQ065",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"0",
"None",
"Error",
"c"
],
"ms": [
"0",
"None",
"Ralat",
"c"
]
},
"answer": 0,
"explanation": {
"en": "get() returns the default value you give when the key is missing: 0.",
"ms": "get() memulangkan nilai lalai yang diberi jika kunci tiada: 0."
},
"points": 20,
"code": "d = {\"a\": 1, \"b\": 2}\nprint(d.get(\"c\", 0))"
},
{
"id": "MQ066",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"None",
"0",
"KeyError",
"c"
],
"ms": [
"None",
"0",
"KeyError",
"c"
]
},
"answer": 2,
"explanation": {
"en": "Using [ ] with a missing key raises a KeyError.",
"ms": "Menggunakan [ ] dengan kunci yang tiada menimbulkan KeyError."
},
"points": 20,
"code": "d = {\"a\": 1, \"b\": 2}\nprint(d[\"c\"])"
},
{
"id": "MQ067",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"{'x', 'y'}",
"['x', 5, 'y', 7]",
"['x', 'y']",
"[5, 7]"
],
"ms": [
"{'x', 'y'}",
"['x', 5, 'y', 7]",
"['x', 'y']",
"[5, 7]"
]
},
"answer": 2,
"explanation": {
"en": "keys() gives the keys of the dictionary: ['x', 'y'].",
"ms": "keys() memberi kunci-kunci kamus: ['x', 'y']."
},
"points": 20,
"code": "d = {\"x\": 5, \"y\": 7}\nprint(list(d.keys()))"
},
{
"id": "MQ068",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"xy",
"12",
"Error",
"2"
],
"ms": [
"xy",
"12",
"Ralat",
"2"
]
},
"answer": 1,
"explanation": {
"en": "values() gives 5 and 7, and sum() adds them: 12.",
"ms": "values() memberi 5 dan 7, dan sum() menjumlahkannya: 12."
},
"points": 20,
"code": "d = {\"x\": 5, \"y\": 7}\nprint(sum(d.values()))"
},
{
"id": "MQ069",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"True True",
"False True",
"True 5",
"True False"
],
"ms": [
"True True",
"False True",
"True 5",
"True False"
]
},
"answer": 3,
"explanation": {
"en": "in checks KEYS, not values. \"x\" is a key but 5 is only a value: True False.",
"ms": "in menyemak KUNCI, bukan nilai. \"x\" ialah kunci tetapi 5 hanya nilai: True False."
},
"points": 20,
"code": "d = {\"x\": 5}\nprint(\"x\" in d, 5 in d)"
},
{
"id": "MQ070",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"{'apple': 32}",
"{'apple': 3}",
"{'apple': 5}",
"{'apple': 2}"
],
"ms": [
"{'apple': 32}",
"{'apple': 3}",
"{'apple': 5}",
"{'apple': 2}"
]
},
"answer": 2,
"explanation": {
"en": "+= 2 adds 2 to the existing value 3: {'apple': 5}.",
"ms": "+= 2 menambah 2 kepada nilai sedia ada 3: {'apple': 5}."
},
"points": 20,
"code": "stock = {\"apple\": 3}\nstock[\"apple\"] += 2\nprint(stock)"
},
{
"id": "MQ071",
"difficulty": "medium",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1 2",
"(a, 1) (b, 2)",
"a 1 b 2",
"a b"
],
"ms": [
"1 2",
"(a, 1) (b, 2)",
"a 1 b 2",
"a b"
]
},
"answer": 3,
"explanation": {
"en": "Looping over a dictionary gives its keys: a b.",
"ms": "Gelung atas kamus memberi kuncinya: a b."
},
"points": 20,
"code": "d = {\"a\": 1, \"b\": 2}\nfor k in d:\n    print(k, end=\" \")"
},
{
"id": "MQ072",
"difficulty": "medium",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1 2",
"Error",
"(1, 2)",
"1,2"
],
"ms": [
"1 2",
"Ralat",
"(1, 2)",
"1,2"
]
},
"answer": 0,
"explanation": {
"en": "Python can assign several variables in one line: a gets 1 and b gets 2: 1 2.",
"ms": "Python boleh memberi nilai kepada beberapa pemboleh ubah dalam satu baris: 1 2."
},
"points": 20,
"code": "a, b = 1, 2\nprint(a, b)"
},
{
"id": "MQ073",
"difficulty": "medium",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3.9",
"4",
"3",
"3.0"
],
"ms": [
"3.9",
"4",
"3",
"3.0"
]
},
"answer": 2,
"explanation": {
"en": "int() cuts off the decimal part (it does not round): 3.",
"ms": "int() memotong bahagian perpuluhan (tidak membundar): 3."
},
"points": 20,
"code": "print(int(3.9))"
},
{
"id": "MQ074",
"difficulty": "medium",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5.0",
"4",
"2.52.5",
"Error"
],
"ms": [
"5.0",
"4",
"2.52.5",
"Ralat"
]
},
"answer": 0,
"explanation": {
"en": "float(\"2.5\") makes the number 2.5, and 2.5 * 2 = 5.0.",
"ms": "float(\"2.5\") menghasilkan nombor 2.5, dan 2.5 * 2 = 5.0."
},
"points": 20,
"code": "print(float(\"2.5\") * 2)"
},
{
"id": "MQ075",
"difficulty": "medium",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"True True",
"True False",
"False True",
"False False"
],
"ms": [
"True True",
"True False",
"False True",
"False False"
]
},
"answer": 2,
"explanation": {
"en": "An empty string is False and any non-empty string is True: False True.",
"ms": "String kosong ialah False dan string tidak kosong ialah True: False True."
},
"points": 20,
"code": "print(bool(\"\"), bool(\"hi\"))"
},
{
"id": "MQ076",
"difficulty": "medium",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"13",
"4",
"1",
"3"
],
"ms": [
"13",
"4",
"1",
"3"
]
},
"answer": 1,
"explanation": {
"en": "10 % 3 is 1 and 10 // 3 is 3, so 1 + 3 = 4.",
"ms": "10 % 3 ialah 1 dan 10 // 3 ialah 3, jadi 1 + 3 = 4."
},
"points": 20,
"code": "print(10 % 3 + 10 // 3)"
},
{
"id": "MQ077",
"difficulty": "medium",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"512",
"12",
"64",
"36"
],
"ms": [
"512",
"12",
"64",
"36"
]
},
"answer": 0,
"explanation": {
"en": "** is worked out from right to left: 3 ** 2 = 9, then 2 ** 9 = 512.",
"ms": "** dikira dari kanan ke kiri: 3 ** 2 = 9, kemudian 2 ** 9 = 512."
},
"points": 20,
"code": "print(2 ** 3 ** 2)"
},
{
"id": "MQ078",
"difficulty": "medium",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"True",
"7",
"False"
],
"ms": [
"Ralat",
"True",
"7",
"False"
]
},
"answer": 3,
"explanation": {
"en": "x > 5 is True, but 7 % 2 == 0 is False, so and gives False.",
"ms": "x > 5 ialah True, tetapi 7 % 2 == 0 ialah False, jadi and memberi False."
},
"points": 20,
"code": "x = 7\nprint(x > 5 and x % 2 == 0)"
},
{
"id": "MQ079",
"difficulty": "medium",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3.1",
"3.14",
"3",
"3.14159"
],
"ms": [
"3.1",
"3.14",
"3",
"3.14159"
]
},
"answer": 1,
"explanation": {
"en": "round(x, 2) keeps 2 decimal places: 3.14.",
"ms": "round(x, 2) mengekalkan 2 tempat perpuluhan: 3.14."
},
"points": 20,
"code": "print(round(3.14159, 2))"
},
{
"id": "MQ080",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Oops",
"Error",
"0",
"Infinity"
],
"ms": [
"Oops",
"Ralat",
"0",
"Infinity"
]
},
"answer": 0,
"explanation": {
"en": "The division fails, so the except block runs and prints Oops.",
"ms": "Pembahagian gagal, jadi blok except berjalan dan memaparkan Oops."
},
"points": 20,
"code": "try:\n    print(5 / 0)\nexcept ZeroDivisionError:\n    print(\"Oops\")"
},
{
"id": "MQ081",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"121",
"Bad",
"13"
],
"ms": [
"Ralat",
"121",
"Bad",
"13"
]
},
"answer": 3,
"explanation": {
"en": "\"12\" converts fine, so no error happens and 13 is printed.",
"ms": "\"12\" ditukar dengan baik, jadi tiada ralat dan 13 dipaparkan."
},
"points": 20,
"code": "try:\n    n = int(\"12\")\n    print(n + 1)\nexcept ValueError:\n    print(\"Bad\")"
},
{
"id": "MQ082",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"(3, 4)",
"34",
"Error",
"7"
],
"ms": [
"(3, 4)",
"34",
"Ralat",
"7"
]
},
"answer": 3,
"explanation": {
"en": "The tuple is unpacked: x = 3 and y = 4, so x + y = 7.",
"ms": "Tuple dibuka: x = 3 dan y = 4, jadi x + y = 7."
},
"points": 20,
"code": "point = (3, 4)\nx, y = point\nprint(x + y)"
},
{
"id": "MQ083",
"difficulty": "medium",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"IndexError",
"(9, 2, 3)",
"9",
"TypeError"
],
"ms": [
"IndexError",
"(9, 2, 3)",
"9",
"TypeError"
]
},
"answer": 3,
"explanation": {
"en": "Tuples cannot be changed, so assigning to t[0] raises a TypeError.",
"ms": "Tuple tidak boleh diubah, jadi memberi nilai kepada t[0] menimbulkan TypeError."
},
"points": 20,
"code": "t = (1, 2, 3)\nt[0] = 9"
},
{
"id": "HQ004",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "Which statement about list comprehensions is TRUE?",
"ms": "Kenyataan manakah tentang list comprehension yang BETUL?"
},
"options": {
"en": [
"They need a while loop",
"They only work with strings",
"They change the original list",
"They build a new list in one line"
],
"ms": [
"Ia memerlukan gelung while",
"Ia hanya untuk string",
"Ia mengubah list asal",
"Ia membina list baharu dalam satu baris"
]
},
"answer": 3,
"explanation": {
"en": "[x * 2 for x in nums] creates a brand new list without touching nums.",
"ms": "[x * 2 for x in nums] mencipta list baharu tanpa mengubah nums."
},
"points": 25
},
{
"id": "HQ005",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What is recursion?",
"ms": "Apakah rekursi (recursion)?"
},
"options": {
"en": [
"A loop inside a loop",
"A function that calls itself",
"A function with no parameters",
"Importing a module twice"
],
"ms": [
"Gelung dalam gelung",
"Fungsi yang memanggil dirinya sendiri",
"Fungsi tanpa parameter",
"Mengimport modul dua kali"
]
},
"answer": 1,
"explanation": {
"en": "A recursive function solves a problem by calling itself on a smaller piece, and needs a base case to stop.",
"ms": "Fungsi rekursif menyelesaikan masalah dengan memanggil dirinya untuk bahagian lebih kecil, dan perlukan kes asas untuk berhenti."
},
"points": 25
},
{
"id": "HQ006",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What does a lambda create?",
"ms": "Apakah yang dicipta oleh lambda?"
},
"options": {
"en": [
"A loop",
"A small one-line function",
"A dictionary",
"A new list"
],
"ms": [
"Gelung",
"Fungsi kecil satu baris",
"Kamus",
"List baharu"
]
},
"answer": 1,
"explanation": {
"en": "lambda x: x * 2 is a tiny function with no name, often used with sorted() or map().",
"ms": "lambda x: x * 2 ialah fungsi kecil tanpa nama, selalu digunakan bersama sorted() atau map()."
},
"points": 25
},
{
"id": "HQ007",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What is special about a set, like {1, 2, 3}?",
"ms": "Apakah keistimewaan set, seperti {1, 2, 3}?"
},
"options": {
"en": [
"It can only hold strings",
"It keeps items sorted forever",
"It cannot be looped over",
"It never keeps duplicate values"
],
"ms": [
"Hanya boleh simpan string",
"Item sentiasa tersusun",
"Tidak boleh digelung",
"Ia tidak menyimpan nilai berulang"
]
},
"answer": 3,
"explanation": {
"en": "A set stores each value only once, so {1, 1, 2} becomes {1, 2}.",
"ms": "Set menyimpan setiap nilai sekali sahaja, jadi {1, 1, 2} menjadi {1, 2}."
},
"points": 25
},
{
"id": "HQ008",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "Which creates an EMPTY set?",
"ms": "Manakah yang mencipta set KOSONG?"
},
"options": {
"en": [
"[]",
"{}",
"()",
"set()"
],
"ms": [
"[]",
"{}",
"()",
"set()"
]
},
"answer": 3,
"explanation": {
"en": "{} creates an empty dictionary, not a set. Use set() for an empty set.",
"ms": "{} mencipta kamus kosong, bukan set. Gunakan set() untuk set kosong."
},
"points": 25
},
{
"id": "HQ009",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "Which keyword lets a function change a variable created outside it?",
"ms": "Kata kunci manakah membenarkan fungsi mengubah pemboleh ubah yang dicipta di luarnya?"
},
"options": {
"en": [
"outside",
"public",
"static",
"global"
],
"ms": [
"outside",
"public",
"static",
"global"
]
},
"answer": 3,
"explanation": {
"en": "global x tells Python that x inside the function refers to the x outside it.",
"ms": "global x memberitahu Python bahawa x di dalam fungsi merujuk kepada x di luar."
},
"points": 25
},
{
"id": "HQ010",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What does the finally block do?",
"ms": "Apakah fungsi blok finally?"
},
"options": {
"en": [
"Stops the program",
"Runs only if there is no error",
"Runs only on errors",
"Always runs, error or not"
],
"ms": [
"Menghentikan program",
"Hanya jika tiada ralat",
"Hanya jika ada ralat",
"Sentiasa berjalan, ada ralat atau tidak"
]
},
"answer": 3,
"explanation": {
"en": "finally runs at the end of try/except no matter what happened — useful for clean-up.",
"ms": "finally sentiasa berjalan di akhir try/except walau apa pun berlaku — berguna untuk pembersihan."
},
"points": 25
},
{
"id": "HQ011",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "Why is it risky to use a list as a default value, like def f(items=[])?",
"ms": "Kenapa berisiko menggunakan list sebagai nilai lalai, seperti def f(items=[])?"
},
"options": {
"en": [
"The same list is shared between calls",
"It makes the function slower",
"It causes a SyntaxError",
"Lists cannot be parameters"
],
"ms": [
"List yang sama dikongsi antara panggilan",
"Fungsi menjadi perlahan",
"Menyebabkan SyntaxError",
"List tidak boleh jadi parameter"
]
},
"answer": 0,
"explanation": {
"en": "The default list is created once, so changes from one call stay for the next call. Use items=None instead.",
"ms": "List lalai dicipta sekali sahaja, jadi perubahan daripada satu panggilan kekal untuk panggilan seterusnya. Gunakan items=None."
},
"points": 25
},
{
"id": "HQ012",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "How do you make a real copy of list a (not just a second name for it)?",
"ms": "Bagaimana membuat salinan sebenar list a (bukan sekadar nama kedua)?"
},
"options": {
"en": [
"b = a.copy()",
"b == a",
"b = copy",
"b = a"
],
"ms": [
"b = a.copy()",
"b == a",
"b = copy",
"b = a"
]
},
"answer": 0,
"explanation": {
"en": "b = a only makes b point to the same list. a.copy() (or a[:]) creates a new list.",
"ms": "b = a hanya membuat b menunjuk kepada list yang sama. a.copy() (atau a[:]) mencipta list baharu."
},
"points": 25
},
{
"id": "HQ013",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[0, 1, 4, 9]",
"[1, 4, 9, 16]",
"[2, 4, 6, 8]",
"[1, 2, 3, 4]"
],
"ms": [
"[0, 1, 4, 9]",
"[1, 4, 9, 16]",
"[2, 4, 6, 8]",
"[1, 2, 3, 4]"
]
},
"answer": 1,
"explanation": {
"en": "The comprehension squares 1, 2, 3 and 4: [1, 4, 9, 16].",
"ms": "Comprehension ini mengkuasaduakan 1, 2, 3 dan 4: [1, 4, 9, 16]."
},
"points": 25,
"code": "print([n * n for n in range(1, 5)])"
},
{
"id": "HQ014",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"AC",
"['A', 'C']",
"['A', 'B', 'C']",
"['a', 'c']"
],
"ms": [
"AC",
"['A', 'C']",
"['A', 'B', 'C']",
"['a', 'c']"
]
},
"answer": 1,
"explanation": {
"en": "\"b\" is filtered out, the rest become capitals, and the result is a list: ['A', 'C'].",
"ms": "\"b\" ditapis keluar, yang lain menjadi huruf besar, dan hasilnya list: ['A', 'C']."
},
"points": 25,
"code": "print([c.upper() for c in \"abc\" if c != \"b\"])"
},
{
"id": "HQ015",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1, 2, 3]",
"[99]",
"[99, 2, 3]",
"[99, 1, 2, 3]"
],
"ms": [
"[1, 2, 3]",
"[99]",
"[99, 2, 3]",
"[99, 1, 2, 3]"
]
},
"answer": 2,
"explanation": {
"en": "b and a are the SAME list, so changing b also changes a: [99, 2, 3].",
"ms": "b dan a ialah list yang SAMA, jadi mengubah b turut mengubah a: [99, 2, 3]."
},
"points": 25,
"code": "a = [1, 2, 3]\nb = a\nb[0] = 99\nprint(a)"
},
{
"id": "HQ016",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[99, 2, 3]",
"[99]",
"[1, 2, 3]",
"[]"
],
"ms": [
"[99, 2, 3]",
"[99]",
"[1, 2, 3]",
"[]"
]
},
"answer": 2,
"explanation": {
"en": "a[:] makes a copy, so changing b does not affect a: [1, 2, 3].",
"ms": "a[:] membuat salinan, jadi mengubah b tidak menjejaskan a: [1, 2, 3]."
},
"points": 25,
"code": "a = [1, 2, 3]\nb = a[:]\nb[0] = 99\nprint(a)"
},
{
"id": "HQ017",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[[1, 0], [1, 0]]",
"[[1, 0], [0, 0]]",
"[[1, 1], [0, 0]]",
"[[1, 0], [1, 0], [1, 0]]"
],
"ms": [
"[[1, 0], [1, 0]]",
"[[1, 0], [0, 0]]",
"[[1, 1], [0, 0]]",
"[[1, 0], [1, 0], [1, 0]]"
]
},
"answer": 0,
"explanation": {
"en": "Multiplying the outer list copies the SAME inner list twice, so both rows change: [[1, 0], [1, 0]].",
"ms": "Mendarab list luar menyalin list dalam yang SAMA dua kali, jadi kedua-dua baris berubah: [[1, 0], [1, 0]]."
},
"points": 25,
"code": "grid = [[0] * 2] * 2\ngrid[0][0] = 1\nprint(grid)"
},
{
"id": "HQ018",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1, 2, 3, 4, 5]",
"[1, 3, 5]",
"[1, 3, 5, 6]",
"[2, 4]"
],
"ms": [
"[1, 2, 3, 4, 5]",
"[1, 3, 5]",
"[1, 3, 5, 6]",
"[2, 4]"
]
},
"answer": 1,
"explanation": {
"en": "Start at index 1, stop before 6, step 2: [1, 3, 5].",
"ms": "Mula pada indeks 1, berhenti sebelum 6, langkah 2: [1, 3, 5]."
},
"points": 25,
"code": "nums = [0, 1, 2, 3, 4, 5, 6]\nprint(nums[1:6:2])"
},
{
"id": "HQ019",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[2, 3, 4]",
"[3, 4]",
"[2, 3]",
"[4, 3]"
],
"ms": [
"[2, 3, 4]",
"[3, 4]",
"[2, 3]",
"[4, 3]"
]
},
"answer": 2,
"explanation": {
"en": "-3 is the item 2, and it stops before -1 (the item 4): [2, 3].",
"ms": "-3 ialah item 2, dan ia berhenti sebelum -1 (item 4): [2, 3]."
},
"points": 25,
"code": "nums = [1, 2, 3, 4]\nprint(nums[-3:-1])"
},
{
"id": "HQ020",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"[1, 2, 3]",
"[3, 1, 2]",
"None"
],
"ms": [
"Ralat",
"[1, 2, 3]",
"[3, 1, 2]",
"None"
]
},
"answer": 3,
"explanation": {
"en": "sort() changes the list in place and returns None, so result is None.",
"ms": "sort() mengubah list secara terus dan memulangkan None, jadi result ialah None."
},
"points": 25,
"code": "nums = [3, 1, 2]\nresult = nums.sort()\nprint(result)"
},
{
"id": "HQ021",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2",
"3",
"Error",
"4"
],
"ms": [
"2",
"3",
"Ralat",
"4"
]
},
"answer": 1,
"explanation": {
"en": "append() adds the whole list [3, 4] as ONE item, so the length is 3.",
"ms": "append() menambah seluruh list [3, 4] sebagai SATU item, jadi panjangnya 3."
},
"points": 25,
"code": "a = [1, 2]\na.append([3, 4])\nprint(len(a))"
},
{
"id": "HQ022",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4",
"[1, 2, 3, 4]",
"3",
"2"
],
"ms": [
"4",
"[1, 2, 3, 4]",
"3",
"2"
]
},
"answer": 0,
"explanation": {
"en": "extend() adds each item separately, so the length is 4.",
"ms": "extend() menambah setiap item secara berasingan, jadi panjangnya 4."
},
"points": 25,
"code": "a = [1, 2]\na.extend([3, 4])\nprint(len(a))"
},
{
"id": "HQ023",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"['kiwi', 'fig', 'banana']",
"['banana', 'kiwi', 'fig']",
"['banana', 'fig', 'kiwi']",
"['fig', 'kiwi', 'banana']"
],
"ms": [
"['kiwi', 'fig', 'banana']",
"['banana', 'kiwi', 'fig']",
"['banana', 'fig', 'kiwi']",
"['fig', 'kiwi', 'banana']"
]
},
"answer": 3,
"explanation": {
"en": "key=len sorts by length: fig (3), kiwi (4), banana (6): ['fig', 'kiwi', 'banana'].",
"ms": "key=len menyusun ikut panjang: fig (3), kiwi (4), banana (6): ['fig', 'kiwi', 'banana']."
},
"points": 25,
"code": "words = [\"kiwi\", \"fig\", \"banana\"]\nprint(sorted(words, key=len))"
},
{
"id": "HQ024",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[8, 5, 2]",
"2",
"5",
"8"
],
"ms": [
"[8, 5, 2]",
"2",
"5",
"8"
]
},
"answer": 3,
"explanation": {
"en": "Sorted from biggest to smallest, the first item is 8.",
"ms": "Disusun dari terbesar ke terkecil, item pertama ialah 8."
},
"points": 25,
"code": "nums = [5, 2, 8]\nprint(sorted(nums, reverse=True)[0])"
},
{
"id": "HQ025",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"0 1 a b",
"0 a 1 b",
"1 a 2 b",
"a 0 b 1"
],
"ms": [
"0 1 a b",
"0 a 1 b",
"1 a 2 b",
"a 0 b 1"
]
},
"answer": 1,
"explanation": {
"en": "enumerate() gives each index together with its value: 0 a 1 b.",
"ms": "enumerate() memberi setiap indeks bersama nilainya: 0 a 1 b."
},
"points": 25,
"code": "for i, v in enumerate([\"a\", \"b\"]):\n    print(i, v, end=\" \")"
},
{
"id": "HQ026",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[('Ali', 12), ('Mei', 14)]",
"['Ali', 12, 'Mei', 14]",
"{'Ali': 12, 'Mei': 14}",
"[['Ali', 12], ['Mei', 14]]"
],
"ms": [
"[('Ali', 12), ('Mei', 14)]",
"['Ali', 12, 'Mei', 14]",
"{'Ali': 12, 'Mei': 14}",
"[['Ali', 12], ['Mei', 14]]"
]
},
"answer": 0,
"explanation": {
"en": "zip() pairs items from both lists into tuples: [('Ali', 12), ('Mei', 14)].",
"ms": "zip() memasangkan item daripada kedua-dua list menjadi tuple: [('Ali', 12), ('Mei', 14)]."
},
"points": 25,
"code": "names = [\"Ali\", \"Mei\"]\nages = [12, 14]\nprint(list(zip(names, ages)))"
},
{
"id": "HQ027",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"'123'",
"[1, 2, 3]",
"['1, 2, 3']",
"['1', '2', '3']"
],
"ms": [
"'123'",
"[1, 2, 3]",
"['1, 2, 3']",
"['1', '2', '3']"
]
},
"answer": 3,
"explanation": {
"en": "map(str, ...) turns each number into a string: ['1', '2', '3'].",
"ms": "map(str, ...) menukar setiap nombor kepada string: ['1', '2', '3']."
},
"points": 25,
"code": "print(list(map(str, [1, 2, 3])))"
},
{
"id": "HQ028",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1, 2]",
"[True, False]",
"[3, 5]",
"[3, 5, 2]"
],
"ms": [
"[1, 2]",
"[True, False]",
"[3, 5]",
"[3, 5, 2]"
]
},
"answer": 2,
"explanation": {
"en": "filter() keeps only items where the lambda is True: [3, 5].",
"ms": "filter() hanya menyimpan item yang menjadikan lambda True: [3, 5]."
},
"points": 25,
"code": "print(list(filter(lambda x: x > 2, [1, 3, 5, 2])))"
},
{
"id": "HQ029",
"difficulty": "hard",
"category": "lists",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[2, 4]",
"Error",
"[1, 3]",
"[1, 2, 3, 4]"
],
"ms": [
"[2, 4]",
"Ralat",
"[1, 3]",
"[1, 2, 3, 4]"
]
},
"answer": 2,
"explanation": {
"en": "Removing items while looping shifts the list, but here each even number is still removed: [1, 3]. (Still, avoid changing a list while looping over it!)",
"ms": "Membuang item semasa gelung mengalihkan list, tetapi di sini setiap nombor genap tetap dibuang: [1, 3]. (Namun, elakkan mengubah list semasa menggelungnya!)"
},
"points": 25,
"code": "nums = [1, 2, 3, 4]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)"
},
{
"id": "HQ030",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"ythn",
"yton",
"Pyth",
"ythno"
],
"ms": [
"ythn",
"yton",
"Pyth",
"ythno"
]
},
"answer": 0,
"explanation": {
"en": "s[1:4] is \"yth\" and s[-1] is \"n\", so together ythn.",
"ms": "s[1:4] ialah \"yth\" dan s[-1] ialah \"n\", jadi bersama ythn."
},
"points": 25,
"code": "s = \"Python\"\nprint(s[1:4] + s[-1])"
},
{
"id": "HQ031",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"fdb",
"abc",
"ace",
"bdf"
],
"ms": [
"fdb",
"abc",
"ace",
"bdf"
]
},
"answer": 2,
"explanation": {
"en": "A step of 2 takes every second letter starting at index 0: ace.",
"ms": "Langkah 2 mengambil setiap huruf kedua bermula pada indeks 0: ace."
},
"points": 25,
"code": "s = \"abcdef\"\nprint(s[::2])"
},
{
"id": "HQ032",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"True",
"Bye",
"Hi"
],
"ms": [
"Ralat",
"True",
"Bye",
"Hi"
]
},
"answer": 2,
"explanation": {
"en": "This is a one-line if. 3 > 5 is False, so the value after else is used: Bye.",
"ms": "Ini if satu baris. 3 > 5 ialah False, jadi nilai selepas else digunakan: Bye."
},
"points": 25,
"code": "print(\"Hi\" if 3 > 5 else \"Bye\")"
},
{
"id": "HQ033",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2 + 3 = 2 + 3",
"5 + 5 = 5",
"{} + {} = {}",
"2 + 3 = 5"
],
"ms": [
"2 + 3 = 2 + 3",
"5 + 5 = 5",
"{} + {} = {}",
"2 + 3 = 5"
]
},
"answer": 3,
"explanation": {
"en": "format() fills each {} in order: 2 + 3 = 5.",
"ms": "format() mengisi setiap {} mengikut turutan: 2 + 3 = 5."
},
"points": 25,
"code": "print(\"{} + {} = {}\".format(2, 3, 2 + 3))"
},
{
"id": "HQ034",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3.50",
"3.5",
"3.500",
"3"
],
"ms": [
"3.50",
"3.5",
"3.500",
"3"
]
},
"answer": 0,
"explanation": {
"en": ":.2f formats the number with exactly 2 decimal places: 3.50.",
"ms": ":.2f memformat nombor dengan tepat 2 tempat perpuluhan: 3.50."
},
"points": 25,
"code": "print(f\"{7 / 2:.2f}\")"
},
{
"id": "HQ035",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"level",
"False",
"Error",
"True"
],
"ms": [
"level",
"False",
"Ralat",
"True"
]
},
"answer": 3,
"explanation": {
"en": "Reversing \"level\" gives \"level\" again, so it is a palindrome: True.",
"ms": "Menterbalikkan \"level\" memberi \"level\" semula, jadi ia palindrom: True."
},
"points": 25,
"code": "word = \"level\"\nprint(word == word[::-1])"
},
{
"id": "HQ036",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"None",
"\"\"",
"n",
"IndexError"
],
"ms": [
"None",
"\"\"",
"n",
"IndexError"
]
},
"answer": 3,
"explanation": {
"en": "Indexing (unlike slicing) past the end raises an IndexError.",
"ms": "Pengindeksan (tidak seperti hirisan) melepasi hujung menimbulkan IndexError."
},
"points": 25,
"code": "print(\"Python\"[10])"
},
{
"id": "HQ037",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1 2",
"65 B",
"65 66",
"A B"
],
"ms": [
"1 2",
"65 B",
"65 66",
"A B"
]
},
"answer": 1,
"explanation": {
"en": "ord() gives the code number of a letter (A is 65) and chr() does the opposite (66 is B): 65 B.",
"ms": "ord() memberi nombor kod huruf (A ialah 65) dan chr() melakukan sebaliknya (66 ialah B): 65 B."
},
"points": 25,
"code": "print(ord(\"A\"), chr(66))"
},
{
"id": "HQ038",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"['a', 'b', 'c']",
"['a', '-b-c']",
"['a', 'b-c']",
"['a-b', 'c']"
],
"ms": [
"['a', 'b', 'c']",
"['a', '-b-c']",
"['a', 'b-c']",
"['a-b', 'c']"
]
},
"answer": 2,
"explanation": {
"en": "The 1 means split only once, at the first \"-\": ['a', 'b-c'].",
"ms": "Angka 1 bermaksud pecah sekali sahaja, pada \"-\" pertama: ['a', 'b-c']."
},
"points": 25,
"code": "s = \"a-b-c\"\nprint(s.split(\"-\", 1))"
},
{
"id": "HQ039",
"difficulty": "hard",
"category": "strings",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4",
"5",
"6",
"1"
],
"ms": [
"4",
"5",
"6",
"1"
]
},
"answer": 1,
"explanation": {
"en": "\"python\".count(\"p\") is 1, and \"hihi\" has length 4, so 1 + 4 = 5.",
"ms": "\"python\".count(\"p\") ialah 1, dan \"hihi\" panjangnya 4, jadi 1 + 4 = 5."
},
"points": 25,
"code": "print(\"Python\".lower().count(\"p\") + len(\"hi\" * 2))"
},
{
"id": "HQ040",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[1]",
"[1, 2]",
"[2]",
"[2, 1]"
],
"ms": [
"[1]",
"[1, 2]",
"[2]",
"[2, 1]"
]
},
"answer": 1,
"explanation": {
"en": "The default list is shared between calls, so it already holds 1 when 2 is added: [1, 2].",
"ms": "List lalai dikongsi antara panggilan, jadi ia sudah ada 1 apabila 2 ditambah: [1, 2]."
},
"points": 25,
"code": "def f(x, lst=[]):\n    lst.append(x)\n    return lst\nf(1)\nprint(f(2))"
},
{
"id": "HQ041",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5",
"120",
"24",
"15"
],
"ms": [
"5",
"120",
"24",
"15"
]
},
"answer": 1,
"explanation": {
"en": "fact(5) = 5 × 4 × 3 × 2 × 1 = 120.",
"ms": "fact(5) = 5 × 4 × 3 × 2 × 1 = 120."
},
"points": 25,
"code": "def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(fact(5))"
},
{
"id": "HQ042",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"21",
"8",
"13",
"7"
],
"ms": [
"21",
"8",
"13",
"7"
]
},
"answer": 2,
"explanation": {
"en": "The Fibonacci numbers go 0, 1, 1, 2, 3, 5, 8, 13, so fib(7) is 13.",
"ms": "Nombor Fibonacci ialah 0, 1, 1, 2, 3, 5, 8, 13, jadi fib(7) ialah 13."
},
"points": 25,
"code": "def fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\nprint(fib(7))"
},
{
"id": "HQ043",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5",
"Error",
"None",
"10"
],
"ms": [
"5",
"Ralat",
"None",
"10"
]
},
"answer": 0,
"explanation": {
"en": "x = 10 inside the function creates a NEW local x. The outside x stays 5.",
"ms": "x = 10 dalam fungsi mencipta x tempatan BAHARU. x di luar kekal 5."
},
"points": 25,
"code": "x = 5\ndef change():\n    x = 10\nchange()\nprint(x)"
},
{
"id": "HQ044",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5",
"None",
"10",
"Error"
],
"ms": [
"5",
"None",
"10",
"Ralat"
]
},
"answer": 2,
"explanation": {
"en": "global x makes the function change the outside x, so it becomes 10.",
"ms": "global x membuat fungsi mengubah x di luar, jadi ia menjadi 10."
},
"points": 25,
"code": "x = 5\ndef change():\n    global x\n    x = 10\nchange()\nprint(x)"
},
{
"id": "HQ045",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5",
"6",
"NameError",
"UnboundLocalError"
],
"ms": [
"5",
"6",
"NameError",
"UnboundLocalError"
]
},
"answer": 3,
"explanation": {
"en": "Because x is assigned inside the function, Python treats it as local, but it is read before it has a value: UnboundLocalError.",
"ms": "Oleh kerana x diberi nilai dalam fungsi, Python menganggapnya tempatan, tetapi ia dibaca sebelum ada nilai: UnboundLocalError."
},
"points": 25,
"code": "x = 5\ndef add_one():\n    x = x + 1\nadd_one()\nprint(x)"
},
{
"id": "HQ046",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1",
"10",
"[1, 2, 3, 4]",
"Error"
],
"ms": [
"1",
"10",
"[1, 2, 3, 4]",
"Ralat"
]
},
"answer": 1,
"explanation": {
"en": "*nums collects all the arguments into a tuple, and sum() adds them: 10.",
"ms": "*nums mengumpul semua argumen ke dalam tuple, dan sum() menjumlahkannya: 10."
},
"points": 25,
"code": "def total(*nums):\n    return sum(nums)\nprint(total(1, 2, 3, 4))"
},
{
"id": "HQ047",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"6",
"12",
"9",
"36"
],
"ms": [
"6",
"12",
"9",
"36"
]
},
"answer": 1,
"explanation": {
"en": "double(3) is 6, then double(6) is 12.",
"ms": "double(3) ialah 6, kemudian double(6) ialah 12."
},
"points": 25,
"code": "double = lambda x: x * 2\nprint(double(double(3)))"
},
{
"id": "HQ048",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"name:age",
"Ira:13",
"13:Ira"
],
"ms": [
"Ralat",
"name:age",
"Ira:13",
"13:Ira"
]
},
"answer": 2,
"explanation": {
"en": "Keyword arguments are matched by name, not position: Ira:13.",
"ms": "Argumen kata kunci dipadankan mengikut nama, bukan kedudukan: Ira:13."
},
"points": 25,
"code": "def info(name, age):\n    return f\"{name}:{age}\"\nprint(info(age=13, name=\"Ira\"))"
},
{
"id": "HQ049",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"inside",
"Error",
"side",
"in"
],
"ms": [
"inside",
"Ralat",
"side",
"in"
]
},
"answer": 0,
"explanation": {
"en": "outer() calls inner(), which returns \"in\", then adds \"side\": inside.",
"ms": "outer() memanggil inner(), yang memulangkan \"in\", kemudian menambah \"side\": inside."
},
"points": 25,
"code": "def outer():\n    def inner():\n        return \"in\"\n    return inner() + \"side\"\nprint(outer())"
},
{
"id": "HQ050",
"difficulty": "hard",
"category": "functions",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Go! 1 2 3",
"3 2 1 Go!",
"3 2 1 0",
"3"
],
"ms": [
"Go! 1 2 3",
"3 2 1 Go!",
"3 2 1 0",
"3"
]
},
"answer": 1,
"explanation": {
"en": "Each call adds its number and passes a smaller one on, until 0 returns \"Go!\": 3 2 1 Go!.",
"ms": "Setiap panggilan menambah nombornya dan menghantar nombor lebih kecil, sehingga 0 memulangkan \"Go!\": 3 2 1 Go!."
},
"points": 25,
"code": "def count_down(n):\n    if n == 0:\n        return \"Go!\"\n    return str(n) + \" \" + count_down(n - 1)\nprint(count_down(3))"
},
{
"id": "HQ051",
"difficulty": "hard",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4 3",
"3 2",
"3 3",
"4 2"
],
"ms": [
"4 3",
"3 2",
"3 3",
"4 2"
]
},
"answer": 2,
"explanation": {
"en": "update() changes b to 3 and adds c, giving 3 keys: 3 3.",
"ms": "update() menukar b kepada 3 dan menambah c, menjadikan 3 kunci: 3 3."
},
"points": 25,
"code": "d = {\"a\": 1, \"b\": 2}\nd.update({\"b\": 3, \"c\": 4})\nprint(len(d), d[\"b\"])"
},
{
"id": "HQ052",
"difficulty": "hard",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1",
"5",
"2",
"0"
],
"ms": [
"1",
"5",
"2",
"0"
]
},
"answer": 2,
"explanation": {
"en": "This counts each letter. \"l\" appears twice: 2.",
"ms": "Ini mengira setiap huruf. \"l\" muncul dua kali: 2."
},
"points": 25,
"code": "d = {}\nfor ch in \"hello\":\n    d[ch] = d.get(ch, 0) + 1\nprint(d[\"l\"])"
},
{
"id": "HQ053",
"difficulty": "hard",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"6",
"9",
"KeyError",
"3"
],
"ms": [
"6",
"9",
"KeyError",
"3"
]
},
"answer": 1,
"explanation": {
"en": "A dict comprehension maps each n to n * n, so squares[3] is 9.",
"ms": "Dict comprehension memetakan setiap n kepada n * n, jadi squares[3] ialah 9."
},
"points": 25,
"code": "squares = {n: n * n for n in range(4)}\nprint(squares[3])"
},
{
"id": "HQ054",
"difficulty": "hard",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Error",
"1",
"2",
"3"
],
"ms": [
"Ralat",
"1",
"2",
"3"
]
},
"answer": 2,
"explanation": {
"en": "Keys are case-sensitive: \"a\" and \"A\" are different keys, so there are 2.",
"ms": "Kunci sensitif huruf: \"a\" dan \"A\" ialah kunci berbeza, jadi terdapat 2."
},
"points": 25,
"code": "d = {\"a\": 1}\nd[\"a\"] = 1\nd[\"A\"] = 2\nprint(len(d))"
},
{
"id": "HQ055",
"difficulty": "hard",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1 2",
"x y",
"Error",
"x yy"
],
"ms": [
"1 2",
"x y",
"Ralat",
"x yy"
]
},
"answer": 3,
"explanation": {
"en": "items() gives key and value. \"x\" * 1 is \"x\" and \"y\" * 2 is \"yy\": x yy.",
"ms": "items() memberi kunci dan nilai. \"x\" * 1 ialah \"x\" dan \"y\" * 2 ialah \"yy\": x yy."
},
"points": 25,
"code": "d = {\"x\": 1, \"y\": 2}\nfor k, v in d.items():\n    print(k * v, end=\" \")"
},
{
"id": "HQ056",
"difficulty": "hard",
"category": "dictionaries",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"a {'b': 2}",
"1 {'a': 1, 'b': 2}",
"1 {'b': 2}",
"{'b': 2} 1"
],
"ms": [
"a {'b': 2}",
"1 {'a': 1, 'b': 2}",
"1 {'b': 2}",
"{'b': 2} 1"
]
},
"answer": 2,
"explanation": {
"en": "pop(\"a\") removes the key \"a\" and returns its value: 1 {'b': 2}.",
"ms": "pop(\"a\") membuang kunci \"a\" dan memulangkan nilainya: 1 {'b': 2}."
},
"points": 25,
"code": "d = {\"a\": 1, \"b\": 2}\nv = d.pop(\"a\")\nprint(v, d)"
},
{
"id": "HQ057",
"difficulty": "hard",
"category": "dictionaries",
"question": {
"en": "What happens when this code runs?",
"ms": "Apakah yang berlaku apabila kod ini dijalankan?"
},
"options": {
"en": [
"TypeError",
"{[1, 2]: 'list'}",
"KeyError",
"Nothing happens"
],
"ms": [
"TypeError",
"{[1, 2]: 'list'}",
"KeyError",
"Nothing happens"
]
},
"answer": 0,
"explanation": {
"en": "Dictionary keys must be unchangeable (hashable). A list can change, so this raises a TypeError.",
"ms": "Kunci kamus mestilah tidak boleh berubah (hashable). List boleh berubah, jadi ini menimbulkan TypeError."
},
"points": 25,
"code": "d = {[1, 2]: \"list\"}"
},
{
"id": "HQ058",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"-3 -1",
"-4 -1",
"-4 1",
"-3 1"
],
"ms": [
"-3 -1",
"-4 -1",
"-4 1",
"-3 1"
]
},
"answer": 2,
"explanation": {
"en": "// rounds DOWN (towards minus infinity) to -4, and % follows so that -4 × 2 + 1 = -7: -4 1.",
"ms": "// membundar KE BAWAH (ke arah negatif infiniti) kepada -4, dan % mengikut supaya -4 × 2 + 1 = -7: -4 1."
},
"points": 25,
"code": "print(-7 // 2, -7 % 2)"
},
{
"id": "HQ059",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"True",
"Error",
"False",
"0.3"
],
"ms": [
"True",
"Ralat",
"False",
"0.3"
]
},
"answer": 2,
"explanation": {
"en": "Decimals are stored in binary, so 0.1 + 0.2 is 0.30000000000000004 — not exactly 0.3: False.",
"ms": "Perpuluhan disimpan dalam binari, jadi 0.1 + 0.2 ialah 0.30000000000000004 — bukan tepat 0.3: False."
},
"points": 25,
"code": "print(0.1 + 0.2 == 0.3)"
},
{
"id": "HQ060",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1",
"True",
"False",
"Error"
],
"ms": [
"1",
"True",
"False",
"Ralat"
]
},
"answer": 2,
"explanation": {
"en": "Chained comparisons mean 1 < 3 AND 3 < 2. The second part is False: False.",
"ms": "Perbandingan berantai bermaksud 1 < 3 DAN 3 < 2. Bahagian kedua False: False."
},
"points": 25,
"code": "print(1 < 3 < 2)"
},
{
"id": "HQ061",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"True",
"3",
"Error",
"TrueTrueTrue"
],
"ms": [
"True",
"3",
"Ralat",
"TrueTrueTrue"
]
},
"answer": 1,
"explanation": {
"en": "True behaves like the number 1 in maths, so 1 + 1 + 1 = 3.",
"ms": "True bertindak seperti nombor 1 dalam matematik, jadi 1 + 1 + 1 = 3."
},
"points": 25,
"code": "print(True + True + True)"
},
{
"id": "HQ062",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"5 5",
"0 0",
"True False",
"5 0"
],
"ms": [
"5 5",
"0 0",
"True False",
"5 0"
]
},
"answer": 3,
"explanation": {
"en": "or returns the first truthy value (5); and returns the first falsy value (0): 5 0.",
"ms": "or memulangkan nilai benar pertama (5); and memulangkan nilai palsu pertama (0): 5 0."
},
"points": 25,
"code": "print(5 or 0, 0 and 5)"
},
{
"id": "HQ063",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"False",
"0",
"[]",
"Error"
],
"ms": [
"False",
"0",
"[]",
"Ralat"
]
},
"answer": 1,
"explanation": {
"en": "not [] is True (an empty list is falsy), and \"0\" is a non-empty string, so and returns 0.",
"ms": "not [] ialah True (list kosong palsu), dan \"0\" ialah string tidak kosong, jadi and memulangkan 0."
},
"points": 25,
"code": "print(not [] and \"0\")"
},
{
"id": "HQ064",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2 4",
"3 3",
"2 3",
"3 4"
],
"ms": [
"2 4",
"3 3",
"2 3",
"3 4"
]
},
"answer": 0,
"explanation": {
"en": "Python rounds exact halves to the nearest EVEN number: 2 4.",
"ms": "Python membundar nilai separuh tepat kepada nombor GENAP terdekat: 2 4."
},
"points": 25,
"code": "print(round(2.5), round(3.5))"
},
{
"id": "HQ065",
"difficulty": "hard",
"category": "operators",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"9",
"6",
"100",
"11"
],
"ms": [
"9",
"6",
"100",
"11"
]
},
"answer": 0,
"explanation": {
"en": "x //= 3 makes x = 3, then x **= 2 makes it 9.",
"ms": "x //= 3 menjadikan x = 3, kemudian x **= 2 menjadikannya 9."
},
"points": 25,
"code": "x = 10\nx //= 3\nx **= 2\nprint(x)"
},
{
"id": "HQ066",
"difficulty": "hard",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3",
"0",
"NameError",
"2"
],
"ms": [
"3",
"0",
"NameError",
"2"
]
},
"answer": 3,
"explanation": {
"en": "After the loop ends, i keeps its last value: 2.",
"ms": "Selepas gelung tamat, i mengekalkan nilai terakhirnya: 2."
},
"points": 25,
"code": "for i in range(3):\n    pass\nprint(i)"
},
{
"id": "HQ067",
"difficulty": "hard",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"Done",
"0 1 2 Done",
"0 1 2 3",
"0 1 2"
],
"ms": [
"Done",
"0 1 2 Done",
"0 1 2 3",
"0 1 2"
]
},
"answer": 3,
"explanation": {
"en": "A loop's else only runs if the loop was NOT stopped by break. Here break happens: 0 1 2.",
"ms": "else bagi gelung hanya berjalan jika gelung TIDAK dihentikan oleh break. Di sini break berlaku: 0 1 2."
},
"points": 25,
"code": "for i in range(5):\n    if i == 3:\n        break\n    print(i, end=\" \")\nelse:\n    print(\"Done\")"
},
{
"id": "HQ068",
"difficulty": "hard",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"0 1 Done",
"Done",
"0 1 2 Done",
"0 1"
],
"ms": [
"0 1 Done",
"Done",
"0 1 2 Done",
"0 1"
]
},
"answer": 0,
"explanation": {
"en": "No break happened, so the else part runs after the loop: 0 1 Done.",
"ms": "Tiada break berlaku, jadi bahagian else berjalan selepas gelung: 0 1 Done."
},
"points": 25,
"code": "for i in range(2):\n    print(i, end=\" \")\nelse:\n    print(\"Done\")"
},
{
"id": "HQ069",
"difficulty": "hard",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"4",
"9",
"3",
"6"
],
"ms": [
"4",
"9",
"3",
"6"
]
},
"answer": 3,
"explanation": {
"en": "The inner loop runs 1, then 2, then 3 times: 1 + 2 + 3 = 6.",
"ms": "Gelung dalam berjalan 1, kemudian 2, kemudian 3 kali: 1 + 2 + 3 = 6."
},
"points": 25,
"code": "total = 0\nfor i in range(1, 4):\n    for j in range(i):\n        total += 1\nprint(total)"
},
{
"id": "HQ070",
"difficulty": "hard",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"10",
"6",
"7",
"5"
],
"ms": [
"10",
"6",
"7",
"5"
]
},
"answer": 1,
"explanation": {
"en": "n goes 10 → 5 → 16 → 8 → 4 → 2 → 1, which takes 6 steps.",
"ms": "n menjadi 10 → 5 → 16 → 8 → 4 → 2 → 1, iaitu 6 langkah."
},
"points": 25,
"code": "n = 10\nsteps = 0\nwhile n != 1:\n    n = n // 2 if n % 2 == 0 else 3 * n + 1\n    steps += 1\nprint(steps)"
},
{
"id": "HQ071",
"difficulty": "hard",
"category": "loops",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3",
"8",
"1",
"12"
],
"ms": [
"3",
"8",
"1",
"12"
]
},
"answer": 1,
"explanation": {
"en": "The loop keeps the biggest value seen so far: 8.",
"ms": "Gelung menyimpan nilai terbesar yang dijumpai setakat ini: 8."
},
"points": 25,
"code": "nums = [3, 8, 1]\nbest = nums[0]\nfor n in nums:\n    if n > best:\n        best = n\nprint(best)"
},
{
"id": "HQ072",
"difficulty": "hard",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"small",
"big",
"Error",
"medium"
],
"ms": [
"small",
"big",
"Ralat",
"medium"
]
},
"answer": 3,
"explanation": {
"en": "x > 10 is False, then x > 3 is True, so medium is chosen.",
"ms": "x > 10 ialah False, kemudian x > 3 ialah True, jadi medium dipilih."
},
"points": 25,
"code": "x = 5\nresult = \"big\" if x > 10 else \"medium\" if x > 3 else \"small\"\nprint(result)"
},
{
"id": "HQ073",
"difficulty": "hard",
"category": "if_else",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"IndexError",
"Yes",
"No",
"None"
],
"ms": [
"IndexError",
"Yes",
"No",
"None"
]
},
"answer": 2,
"explanation": {
"en": "items is empty (False), so and stops early and never reads items[0]. The else runs: No.",
"ms": "items kosong (False), jadi and berhenti awal dan tidak membaca items[0]. else berjalan: No."
},
"points": 25,
"code": "items = []\nif items and items[0] > 1:\n    print(\"Yes\")\nelse:\n    print(\"No\")"
},
{
"id": "HQ074",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3",
"3.0",
"6",
"1"
],
"ms": [
"3",
"3.0",
"6",
"1"
]
},
"answer": 0,
"explanation": {
"en": "A set removes duplicates, leaving {1, 2, 3}: 3.",
"ms": "Set membuang nilai berulang, tinggal {1, 2, 3}: 3."
},
"points": 25,
"code": "print(len({1, 2, 2, 3, 3, 3}))"
},
{
"id": "HQ075",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"{2, 3}",
"[2, 3]",
"{1, 2, 3, 4}",
"{1, 4}"
],
"ms": [
"{2, 3}",
"[2, 3]",
"{1, 2, 3, 4}",
"{1, 4}"
]
},
"answer": 0,
"explanation": {
"en": "& gives the items that are in BOTH sets: {2, 3}.",
"ms": "& memberi item yang ada dalam KEDUA-DUA set: {2, 3}."
},
"points": 25,
"code": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)"
},
{
"id": "HQ076",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"<class 'dict'>",
"<class 'list'>",
"<class 'set'>",
"<class 'tuple'>"
],
"ms": [
"<class 'dict'>",
"<class 'list'>",
"<class 'set'>",
"<class 'tuple'>"
]
},
"answer": 0,
"explanation": {
"en": "Empty curly braces make an empty dictionary: <class 'dict'>.",
"ms": "Kurungan kerinting kosong menghasilkan kamus kosong: <class 'dict'>."
},
"points": 25,
"code": "print(type({}))"
},
{
"id": "HQ077",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"nope",
"Error",
"checked nope",
"checked"
],
"ms": [
"nope",
"Ralat",
"checked nope",
"checked"
]
},
"answer": 2,
"explanation": {
"en": "finally runs (printing \"checked \") before the function's return value is printed: checked nope.",
"ms": "finally berjalan (memaparkan \"checked \") sebelum nilai pulangan fungsi dipaparkan: checked nope."
},
"points": 25,
"code": "def safe_div(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"nope\"\n    finally:\n        print(\"checked\", end=\" \")\nprint(safe_div(6, 0))"
},
{
"id": "HQ078",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"B",
"AB",
"AC",
"A"
],
"ms": [
"B",
"AB",
"AC",
"A"
]
},
"answer": 3,
"explanation": {
"en": "IndexError matches the first except, and else only runs when there is NO error: A.",
"ms": "IndexError sepadan dengan except pertama, dan else hanya berjalan jika TIADA ralat: A."
},
"points": 25,
"code": "try:\n    x = [1, 2][5]\nexcept IndexError:\n    print(\"A\", end=\"\")\nexcept Exception:\n    print(\"B\", end=\"\")\nelse:\n    print(\"C\", end=\"\")"
},
{
"id": "HQ079",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"[2, 3, 4]",
"[1]",
"[1, 2, 3]",
"4"
],
"ms": [
"[2, 3, 4]",
"[1]",
"[1, 2, 3]",
"4"
]
},
"answer": 0,
"explanation": {
"en": "a takes the first item and *rest collects everything else: [2, 3, 4].",
"ms": "a mengambil item pertama dan *rest mengumpul selebihnya: [2, 3, 4]."
},
"points": 25,
"code": "a, *rest = [1, 2, 3, 4]\nprint(rest)"
},
{
"id": "HQ080",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"2 1",
"1 1",
"2 2",
"1 2"
],
"ms": [
"2 1",
"1 1",
"2 2",
"1 2"
]
},
"answer": 0,
"explanation": {
"en": "This swaps the two values in one line: 2 1.",
"ms": "Ini menukar dua nilai dalam satu baris: 2 1."
},
"points": 25,
"code": "a = 1\nb = 2\na, b = b, a\nprint(a, b)"
},
{
"id": "HQ081",
"difficulty": "hard",
"category": "intermediate",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"3 []",
"True True",
"True False",
"False True"
],
"ms": [
"3 []",
"True True",
"True False",
"False True"
]
},
"answer": 2,
"explanation": {
"en": "any() is True if at least one item is truthy (3). all() is False because [] is falsy: True False.",
"ms": "any() True jika sekurang-kurangnya satu item benar (3). all() False kerana [] palsu: True False."
},
"points": 25,
"code": "print(any([0, \"\", 3]), all([1, \"a\", []]))"
},
{
"id": "HQ082",
"difficulty": "hard",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"16.9",
"14",
"15",
"Error"
],
"ms": [
"16.9",
"14",
"15",
"Ralat"
]
},
"answer": 2,
"explanation": {
"en": "int(\"7\") is 7, int(7.9) cuts to 7, and int(True) is 1: 7 + 7 + 1 = 15.",
"ms": "int(\"7\") ialah 7, int(7.9) dipotong menjadi 7, dan int(True) ialah 1: 7 + 7 + 1 = 15."
},
"points": 25,
"code": "print(int(\"7\") + int(7.9) + int(True))"
},
{
"id": "HQ083",
"difficulty": "hard",
"category": "variables",
"question": {
"en": "What will this code output?",
"ms": "Apakah output kod ini?"
},
"options": {
"en": [
"1010",
"20",
"5510",
"Error"
],
"ms": [
"1010",
"20",
"5510",
"Ralat"
]
},
"answer": 2,
"explanation": {
"en": "x * 2 repeats the text to \"55\", and str(10) is \"10\", so the joined result is 5510.",
"ms": "x * 2 mengulang teks menjadi \"55\", dan str(10) ialah \"10\", jadi hasil cantuman ialah 5510."
},
"points": 25,
"code": "x = \"5\"\ny = x * 2 + str(int(x) * 2)\nprint(y)"
}
];
