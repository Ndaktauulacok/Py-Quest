/* Soalan Hard tambahan: 1 soalan untuk setiap kategori */
(window.PYQUEST_QUESTIONS=window.PYQUEST_QUESTIONS||[]).push(...[
 {
  "id": "Q041",
  "category": "basics",
  "question": {
   "en": "What will this code output?\\nprint(0.1 + 0.2 == 0.3)",
   "ms": "Apakah output kod ini?\\nprint(0.1 + 0.2 == 0.3)"
  },
  "options": {
   "en": [
    "True",
    "False",
    "0.3",
    "Error"
   ],
   "ms": [
    "True",
    "False",
    "0.3",
    "Ralat"
   ]
  },
  "answer": 1,
  "explanation": {
   "en": "Floating-point numbers are stored in binary, so 0.1 + 0.2 is 0.30000000000000004, which is not equal to 0.3.",
   "ms": "Nombor perpuluhan disimpan dalam binari, jadi 0.1 + 0.2 ialah 0.30000000000000004 dan tidak sama dengan 0.3."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q042",
  "category": "variables",
  "question": {
   "en": "What will this code output?\\na = [1, 2]\\nb = a\\nb.append(3)\\nprint(a)",
   "ms": "Apakah output kod ini?\\na = [1, 2]\\nb = a\\nb.append(3)\\nprint(a)"
  },
  "options": {
   "en": [
    "[1, 2]",
    "[1, 2, 3]",
    "[3]",
    "Error"
   ],
   "ms": [
    "[1, 2]",
    "[1, 2, 3]",
    "[3]",
    "Ralat"
   ]
  },
  "answer": 1,
  "explanation": {
   "en": "b = a does not copy the list. Both names point to the same list, so changing b also changes a.",
   "ms": "b = a tidak menyalin list. Kedua-dua nama menunjuk kepada list yang sama, jadi perubahan pada b turut mengubah a."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q043",
  "category": "operators",
  "question": {
   "en": "What will this code output?\\nprint(-7 // 2, -7 % 2)",
   "ms": "Apakah output kod ini?\\nprint(-7 // 2, -7 % 2)"
  },
  "options": {
   "en": [
    "-3 -1",
    "-4 1",
    "-3 1",
    "-4 -1"
   ],
   "ms": [
    "-3 -1",
    "-4 1",
    "-3 1",
    "-4 -1"
   ]
  },
  "answer": 1,
  "explanation": {
   "en": "Floor division rounds down to -4, and the remainder keeps the sign of the divisor, so -7 % 2 is 1.",
   "ms": "Pembahagian lantai membundar ke bawah kepada -4, dan baki mengikut tanda pembahagi, jadi -7 % 2 ialah 1."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q044",
  "category": "if_else",
  "question": {
   "en": "What will this code output?\\nif not [] and \"0\":\\n    print(\"Yes\")\\nelse:\\n    print(\"No\")",
   "ms": "Apakah output kod ini?\\nif not [] and \"0\":\\n    print(\"Yes\")\\nelse:\\n    print(\"No\")"
  },
  "options": {
   "en": [
    "Yes",
    "No",
    "Error",
    "Nothing is printed"
   ],
   "ms": [
    "Yes",
    "No",
    "Ralat",
    "Tiada apa dipaparkan"
   ]
  },
  "answer": 0,
  "explanation": {
   "en": "An empty list is falsy, so not [] is True. The string \"0\" is not empty, so it is truthy. Both are true, so Yes is printed.",
   "ms": "List kosong bernilai palsu, jadi not [] ialah True. String \"0\" tidak kosong, jadi ia bernilai benar. Kedua-duanya benar, maka Yes dipaparkan."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q045",
  "category": "loops",
  "question": {
   "en": "What will this code output?\\nfor i in range(5):\\n    if i == 3:\\n        break\\n    print(i, end=\" \")\\nelse:\\n    print(\"Done\")",
   "ms": "Apakah output kod ini?\\nfor i in range(5):\\n    if i == 3:\\n        break\\n    print(i, end=\" \")\\nelse:\\n    print(\"Done\")"
  },
  "options": {
   "en": [
    "0 1 2 Done",
    "0 1 2",
    "0 1 2 3",
    "Done"
   ],
   "ms": [
    "0 1 2 Done",
    "0 1 2",
    "0 1 2 3",
    "Done"
   ]
  },
  "answer": 1,
  "explanation": {
   "en": "The else block of a loop runs only when the loop ends without break. Here break stops the loop at 3, so Done is not printed.",
   "ms": "Blok else pada gelung hanya berjalan jika gelung tamat tanpa break. Di sini break menghentikan gelung pada 3, jadi Done tidak dipaparkan."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q046",
  "category": "lists",
  "question": {
   "en": "What will this code output?\\nnums = [1, 2, 3, 4, 5]\\nprint(nums[::-2])",
   "ms": "Apakah output kod ini?\\nnums = [1, 2, 3, 4, 5]\\nprint(nums[::-2])"
  },
  "options": {
   "en": [
    "[5, 3, 1]",
    "[1, 3, 5]",
    "[5, 4, 3]",
    "[4, 2]"
   ],
   "ms": [
    "[5, 3, 1]",
    "[1, 3, 5]",
    "[5, 4, 3]",
    "[4, 2]"
   ]
  },
  "answer": 0,
  "explanation": {
   "en": "A step of -2 walks the list backwards, taking every second item starting from the end: 5, 3, 1.",
   "ms": "Langkah -2 melalui list ke belakang, mengambil setiap item kedua bermula dari hujung: 5, 3, 1."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q047",
  "category": "functions",
  "question": {
   "en": "What will this code output?\\ndef f(x, lst=[]):\\n    lst.append(x)\\n    return lst\\nf(1)\\nprint(f(2))",
   "ms": "Apakah output kod ini?\\ndef f(x, lst=[]):\\n    lst.append(x)\\n    return lst\\nf(1)\\nprint(f(2))"
  },
  "options": {
   "en": [
    "[2]",
    "[1]",
    "[1, 2]",
    "[2, 1]"
   ],
   "ms": [
    "[2]",
    "[1]",
    "[1, 2]",
    "[2, 1]"
   ]
  },
  "answer": 2,
  "explanation": {
   "en": "A default list is created only once when the function is defined and is shared between calls, so the second call sees the 1 from the first.",
   "ms": "List lalai dicipta sekali sahaja semasa fungsi ditakrif dan dikongsi antara panggilan, jadi panggilan kedua turut mengandungi 1 daripada panggilan pertama."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q048",
  "category": "strings",
  "question": {
   "en": "What will this code output?\\ns = \"Python\"\\nprint(s[1:4] + s[-1])",
   "ms": "Apakah output kod ini?\\ns = \"Python\"\\nprint(s[1:4] + s[-1])"
  },
  "options": {
   "en": [
    "ythn",
    "Pytn",
    "ython",
    "tho"
   ],
   "ms": [
    "ythn",
    "Pytn",
    "ython",
    "tho"
   ]
  },
  "answer": 0,
  "explanation": {
   "en": "s[1:4] takes characters at index 1, 2 and 3 which is \"yth\", and s[-1] is the last character \"n\".",
   "ms": "s[1:4] mengambil aksara pada indeks 1, 2 dan 3 iaitu \"yth\", dan s[-1] ialah aksara terakhir \"n\"."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q049",
  "category": "dictionaries",
  "question": {
   "en": "What will this code output?\\nd = {\"a\": 1, \"b\": 2}\\nd.update({\"b\": 3, \"c\": 4})\\nprint(len(d), d[\"b\"])",
   "ms": "Apakah output kod ini?\\nd = {\"a\": 1, \"b\": 2}\\nd.update({\"b\": 3, \"c\": 4})\\nprint(len(d), d[\"b\"])"
  },
  "options": {
   "en": [
    "3 2",
    "4 3",
    "3 3",
    "2 3"
   ],
   "ms": [
    "3 2",
    "4 3",
    "3 3",
    "2 3"
   ]
  },
  "answer": 2,
  "explanation": {
   "en": "update() overwrites the existing key b with 3 and adds the new key c, so there are 3 keys and d[\"b\"] is 3.",
   "ms": "update() menimpa kunci b yang sedia ada dengan 3 dan menambah kunci baharu c, jadi ada 3 kunci dan d[\"b\"] ialah 3."
  },
  "difficulty": "hard",
  "points": 20
 },
 {
  "id": "Q050",
  "category": "intermediate",
  "question": {
   "en": "What will this code output?\\nprint([x ** 2 for x in range(6) if x % 2 == 0])",
   "ms": "Apakah output kod ini?\\nprint([x ** 2 for x in range(6) if x % 2 == 0])"
  },
  "options": {
   "en": [
    "[0, 4, 16]",
    "[0, 1, 4, 9, 16, 25]",
    "[4, 16]",
    "[1, 9, 25]"
   ],
   "ms": [
    "[0, 4, 16]",
    "[0, 1, 4, 9, 16, 25]",
    "[4, 16]",
    "[1, 9, 25]"
   ]
  },
  "answer": 0,
  "explanation": {
   "en": "The comprehension keeps only even x (0, 2, 4) and squares them, giving [0, 4, 16].",
   "ms": "Comprehension hanya mengekalkan x genap (0, 2, 4) dan memangkatkannya, menghasilkan [0, 4, 16]."
  },
  "difficulty": "hard",
  "points": 20
 }
]);
