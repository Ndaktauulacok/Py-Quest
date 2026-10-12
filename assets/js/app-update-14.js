(() => {
  'use strict';
  const root = document.getElementById('app');
  const header = document.getElementById('site-header');
  const main = document.getElementById('main-content');
  const toastRegion = document.getElementById('toast-region');
  const translations = {
    en: {
      seeResults:'See results',home:'Home',exit:'Exit',exitConfirm:'Exit now? Your score for this attempt will not be counted.',backMain:'Back to Main Page',chooseSet:'Choose a puzzle set',setLabel:'Set',passwordLabel:'Password',loginFailed:'Wrong username or password.',teacherLoginHint:'Sign in with your admin username and password.',timedQuiz2:'x',puzzle:'Puzzle',quiz:'Quiz',tag:'Python, one quick challenge at a time',
      headline:'Spot the Python Code That Works.',subheadline:'Answer quick Correct or Wrong puzzles, then test your skills in the Python Quiz.',
      getStarted:'Get Started',namePrompt:'Enter your name',nameLabel:'Name',nameHelp:'No account or password needed.',namePlaceholder:'Your name',emptyName:'Please enter your name.',continue:'Continue',changeName:'Change Name',welcome:'Welcome, {name}!',
      overview:'Your PyQuest Overview',overviewHint:'Pick a short activity and build your score.',totalXp:'Total XP',level:'Level {number} · {name}',
      puzzleTitle:'Python Puzzles',puzzleDescription:'Decide whether each short Python code sample is correct or wrong.',quizTitle:'Python Quiz',quizDescription:'Choose a topic and test your Python knowledge.',
      menuPuzzle:'Python Puzzle',menuPuzzleDesc:'Check 20 short Python code samples.',menuQuiz:'Python Quiz',menuQuizDesc:'Answer multiple-choice questions.',
      startPuzzle:'Start Puzzles',startQuiz:'Start Quiz',timedLabel:'Timed mode · seconds per question',secondsBtn:'{n} seconds',timeUp:"Time's up!",untimedLabel:'No timer',quizSetup:'Build your quiz',quizSetupHint:'Choose a topic and challenge level. Questions and choices are shuffled.',
      allCategories:'All categories',allDifficulties:'All difficulties',category:'Category',difficulty:'Difficulty',easy:'Easy',medium:'Medium',hard:'Hard',questionCount:'{count} questions available',noMatchingQuestions:'No questions match those filters.',
      question:'Question',of:'of',nextQuestion:'Next Question',submitAnswer:'Lock in answer',chooseAnswer:'Select an answer to continue.',timeLeft:'Time left',quizComplete:'Quiz Complete!',score:'Score',correctCount:'Correct',wrongCount:'Wrong',xpEarned:'XP earned',accuracy:'Accuracy',tryAgain:'Try Again',nextQuiz:'Next Quiz',backDashboard:'Back to Main Page',perfect:'Perfect run! Bonus +50 XP!',performance:'Performance',explanationLabel:'Why?',
      puzzlePrompt:'Is this Python code correct?',puzzlePromptMs:'Adakah kod Python ini betul?',correctButton:'Correct / Betul',wrongButton:'Wrong / Salah',nextPuzzle:'Next Puzzle',puzzleComplete:'Puzzle Set Complete!',puzzlesCompleted:'Puzzle sets completed',puzzleAccuracy:'Puzzle accuracy',puzzleScore:'Puzzle score',puzzleCorrectChoice:'Correct! / Betul!',puzzleCorrectMessage:'You chose the correct answer. / Anda memilih jawapan yang betul.',puzzleWrongChoice:'Wrong! / Salah!',puzzleWrongMessage:'Look carefully at the Python code. / Perhatikan kod Python dengan teliti.',
      streak:'Activity streak',days:'days',achievements:'Achievements',unlocked:'UNLOCKED',locked:'Not unlocked yet',recentActivity:'Recent activity',noActivity:'Your completed activities will appear here.',recentPuzzle:'Last puzzle set',recentQuiz:'Last quiz',completedSets:'{count} puzzle sets completed',puzzleTotal:'20 puzzles per set',
      badgeQuiz:'Quiz Starter',badgePerfectQuiz:'Perfect Quiz',badgePuzzle:'First Puzzle',badgePerfectPuzzle:'Puzzle Pro',badgeStreak:'7-Day Streak',
      achievementQuiz:'Finish your first quiz.',achievementPerfectQuiz:'Get every answer right in a quiz.',achievementPuzzle:'Finish your first puzzle set.',achievementPerfectPuzzle:'Get every puzzle right in one set.',achievementStreak:'Take part on seven different days.',
      correct:'Correct!',wrong:'Not quite.',correctAnswer:'Correct answer',quizPerfect:'Perfect score!',footer:'Small Python puzzles and quick quizzes.',loading:'Loading…',networkError:'Something went wrong. Please try again.',
      admin:'Admin',teacherAdmin:'Teacher Admin',teacherUsernamePrompt:'Enter your teacher username.',teacherUsernameLabel:'Teacher Username',teacherWelcome:'Welcome, {name}!',adminPanel:'Admin Panel',adminWelcomeMs:'Selamat datang, {name}!',managePuzzles:'Manage Puzzle Questions',addQuestion:'Add Question',edit:'Edit',delete:'Delete',save:'Save',saveChanges:'Save Changes',cancel:'Cancel',logout:'Logout',continueAdmin:'Continue / Teruskan',logoutAdmin:'Logout / Log Keluar',questionEnglish:'Question (English)',questionMalay:'Question (Malay)',pythonCode:'Python Code',correctAnswerLabel:'Correct Answer',correctOption:'Correct / Betul',wrongOption:'Wrong / Salah',explanationEnglish:'Explanation (English)',explanationMalay:'Explanation (Malay)',deletePuzzleConfirm:'Delete this puzzle?',deletePuzzleConfirmMs:'Padam puzzle ini?',saved:'Puzzle question saved.',deleted:'Puzzle question deleted.',questionRequired:'Complete every question and explanation field.',adminEmpty:'No Puzzle questions yet. Add a question to begin.',
      levelRookie:'Python Rookie',levelExplorer:'Python Explorer',levelCoder:'Python Coder',levelMaster:'Python Master',language:'Language',correctButton:'Correct / Betul',wrongButton:'Wrong / Salah',
    },
    ms: {
      seeResults:'Lihat keputusan',home:'Utama',exit:'Keluar',exitConfirm:'Keluar sekarang? Markah percubaan ini tidak akan dikira.',backMain:'Kembali ke Halaman Utama',chooseSet:'Pilih set teka-teki',setLabel:'Set',passwordLabel:'Kata Laluan',loginFailed:'Nama pengguna atau kata laluan salah.',teacherLoginHint:'Log masuk dengan nama pengguna dan kata laluan admin.',timedQuiz2:'x',puzzle:'Teka-teki',quiz:'Kuiz',tag:'Python, satu cabaran ringkas pada satu masa',
      headline:'Kenal Pasti Kod Python Yang Betul.',subheadline:'Jawab teka-teki Betul atau Salah, kemudian uji kemahiran anda dalam Kuiz Python.',
      getStarted:'Mula',namePrompt:'Masukkan nama anda',nameLabel:'Nama',nameHelp:'Tiada akaun atau kata laluan diperlukan.',namePlaceholder:'Nama anda',emptyName:'Sila masukkan nama anda.',continue:'Teruskan',changeName:'Tukar Nama',welcome:'Selamat datang, {name}!',
      overview:'Ringkasan PyQuest Anda',overviewHint:'Pilih aktiviti ringkas dan kumpul skor.',totalXp:'Jumlah XP',level:'Tahap {number} · {name}',
      puzzleTitle:'Teka-teki Python',puzzleDescription:'Tentukan sama ada setiap contoh kod Python ringkas betul atau salah.',quizTitle:'Kuiz Python',quizDescription:'Pilih topik dan uji pengetahuan Python anda.',
      menuPuzzle:'Teka-teki Python',menuPuzzleDesc:'Semak 20 contoh kod Python ringkas.',menuQuiz:'Kuiz Python',menuQuizDesc:'Jawab soalan aneka pilihan.',
      startPuzzle:'Mula Teka-teki',startQuiz:'Mula Kuiz',timedLabel:'Mod bermasa · saat setiap soalan',secondsBtn:'{n} saat',timeUp:'Masa tamat!',untimedLabel:'Tanpa pemasa',quizSetup:'Tetapkan kuiz',quizSetupHint:'Pilih topik dan tahap cabaran. Soalan serta pilihan jawapan diacak.',
      allCategories:'Semua kategori',allDifficulties:'Semua tahap',category:'Kategori',difficulty:'Tahap kesukaran',easy:'Mudah',medium:'Sederhana',hard:'Sukar',questionCount:'{count} soalan tersedia',noMatchingQuestions:'Tiada soalan sepadan dengan tapisan ini.',
      question:'Soalan',of:'daripada',nextQuestion:'Soalan Seterusnya',submitAnswer:'Hantar jawapan',chooseAnswer:'Pilih jawapan untuk meneruskan.',timeLeft:'Masa',quizComplete:'Kuiz Selesai!',score:'Skor',correctCount:'Betul',wrongCount:'Salah',xpEarned:'XP diperoleh',accuracy:'Ketepatan',tryAgain:'Cuba Lagi',nextQuiz:'Kuiz Seterusnya',backDashboard:'Kembali ke Halaman Utama',perfect:'Sempurna! Bonus +50 XP!',performance:'Prestasi',explanationLabel:'Sebab?',
      puzzlePrompt:'Is this Python code correct?',puzzlePromptMs:'Adakah kod Python ini betul?',correctButton:'Correct / Betul',wrongButton:'Wrong / Salah',nextPuzzle:'Teka-teki Seterusnya',puzzleComplete:'Set Teka-teki Selesai!',puzzlesCompleted:'Set teka-teki selesai',puzzleAccuracy:'Ketepatan teka-teki',puzzleScore:'Skor teka-teki',puzzleCorrectChoice:'Correct! / Betul!',puzzleCorrectMessage:'You chose the correct answer. / Anda memilih jawapan yang betul.',puzzleWrongChoice:'Wrong! / Salah!',puzzleWrongMessage:'Look carefully at the Python code. / Perhatikan kod Python dengan teliti.',
      streak:'Rentetan aktiviti',days:'hari',achievements:'Pencapaian',unlocked:'DIBUKA',locked:'Belum dibuka',recentActivity:'Aktiviti terkini',noActivity:'Aktiviti yang selesai akan dipaparkan di sini.',recentPuzzle:'Set teka-teki terakhir',recentQuiz:'Kuiz terakhir',completedSets:'{count} set teka-teki selesai',puzzleTotal:'20 teka-teki setiap set',
      badgeQuiz:'Mula Kuiz',badgePerfectQuiz:'Kuiz Sempurna',badgePuzzle:'Teka-teki Pertama',badgePerfectPuzzle:'Jaguh Teka-teki',badgeStreak:'Rentetan 7 Hari',
      achievementQuiz:'Selesaikan kuiz pertama.',achievementPerfectQuiz:'Jawab semua soalan kuiz dengan betul.',achievementPuzzle:'Selesaikan set teka-teki pertama.',achievementPerfectPuzzle:'Jawab semua teka-teki dengan betul dalam satu set.',achievementStreak:'Sertai aktiviti pada tujuh hari berlainan.',
      correct:'Betul!',wrong:'Belum tepat.',correctAnswer:'Jawapan betul',quizPerfect:'Skor sempurna!',footer:'Teka-teki Python ringkas dan kuiz pantas.',loading:'Memuatkan…',networkError:'Ada masalah. Sila cuba lagi.',
      admin:'Admin',teacherAdmin:'Admin Cikgu',teacherUsernamePrompt:'Masukkan nama pengguna cikgu.',teacherUsernameLabel:'Nama Pengguna Cikgu',teacherWelcome:'Selamat datang, {name}!',adminPanel:'Panel Admin',adminWelcomeMs:'Selamat datang, {name}!',managePuzzles:'Urus Soalan Puzzle',addQuestion:'Tambah Soalan',edit:'Edit',delete:'Padam',save:'Simpan',saveChanges:'Simpan Perubahan',cancel:'Batal',logout:'Log Keluar',continueAdmin:'Continue / Teruskan',logoutAdmin:'Logout / Log Keluar',questionEnglish:'Soalan (Bahasa Inggeris)',questionMalay:'Soalan (Bahasa Melayu)',pythonCode:'Kod Python',correctAnswerLabel:'Jawapan Betul',correctOption:'Correct / Betul',wrongOption:'Wrong / Salah',explanationEnglish:'Penerangan (Bahasa Inggeris)',explanationMalay:'Penerangan (Bahasa Melayu)',deletePuzzleConfirm:'Delete this puzzle?',deletePuzzleConfirmMs:'Padam puzzle ini?',saved:'Soalan puzzle disimpan.',deleted:'Soalan puzzle dipadam.',questionRequired:'Lengkapkan semua medan soalan dan penerangan.',adminEmpty:'Belum ada soalan Puzzle. Tambah soalan untuk bermula.',
      levelRookie:'Python Baharu',levelExplorer:'Peneroka Python',levelCoder:'Pengekod Python',levelMaster:'Pakar Python',language:'Bahasa',correctButton:'Correct / Betul',wrongButton:'Wrong / Salah',
    }
  };

  Object.assign(translations.en,{info:'Info',menuInfo:'About Python & PyQuest',menuInfoDesc:'Why this site exists, what Python is and a quick guide to get started.',
    adminTabLive:'Live stats',adminTabPuzzles:'Puzzle manager',liveOnline:'Online now',liveConnected:'Connected · updating live',liveOffline:'Reconnecting…',
    liveToday:'Visits today',liveUniqueToday:'Visitors today',liveTotalViews:'Total visits',liveTotalVisitors:'Total visitors',liveWeek:'Last 7 days',
    livePages:'Most opened pages',liveActivity:'Finished rounds',liveQuizRounds:'Quiz rounds',livePuzzleRounds:'Puzzle sets',liveLang:'Language used',liveLoading:'Connecting to live data…',
    liveNobody:'Nobody else is online right now.',liveAdminHere:'admin',liveVisits:'visits',liveVisitors:'visitors',
    liveErrPerm:'Cannot read the statistics. Check that the rules from database.rules.json are published in Firebase.',
    liveErrSdk:'Could not load Firebase. Check the internet connection or an ad blocker.',
    livePrivacy:'Only anonymous counts are stored: no names, scores or personal data. A visitor is one browser, so someone using two devices counts twice.',
    liveSetupTitle:'Turn on live statistics',liveSetupIntro:'Live visit statistics need a free Firebase Realtime Database. It takes about five minutes:',
    liveStep1:'Go to console.firebase.google.com and create a project (the free Spark plan is enough).',
    liveStep2:'Open Build, then Realtime Database, then Create database (choose Singapore if offered).',
    liveStep3:'Open the Rules tab, paste the contents of database.rules.json from the project, and press Publish.',
    liveStep4:'Open Project settings, add a Web app, and copy the config values into assets/js/firebase-config-update-3.js. Upload the file to GitHub.',
    liveSetupFoot:'Until then the rest of the website works normally.'});
  Object.assign(translations.ms,{info:'Info',menuInfo:'Tentang Python & PyQuest',menuInfoDesc:'Kenapa laman ini dibuat, apa itu Python dan panduan ringkas untuk bermula.',
    adminTabLive:'Statistik langsung',adminTabPuzzles:'Urus Puzzle',liveOnline:'Dalam talian sekarang',liveConnected:'Bersambung · dikemas kini secara langsung',liveOffline:'Menyambung semula…',
    liveToday:'Lawatan hari ini',liveUniqueToday:'Pelawat hari ini',liveTotalViews:'Jumlah lawatan',liveTotalVisitors:'Jumlah pelawat',liveWeek:'7 hari lepas',
    livePages:'Halaman paling banyak dibuka',liveActivity:'Pusingan selesai',liveQuizRounds:'Pusingan Kuiz',livePuzzleRounds:'Set Puzzle',liveLang:'Bahasa digunakan',liveLoading:'Menyambung ke data langsung…',
    liveNobody:'Tiada orang lain dalam talian sekarang.',liveAdminHere:'admin',liveVisits:'lawatan',liveVisitors:'pelawat',
    liveErrPerm:'Tidak dapat membaca statistik. Pastikan peraturan daripada database.rules.json telah diterbitkan di Firebase.',
    liveErrSdk:'Firebase tidak dapat dimuatkan. Semak sambungan internet atau penyekat iklan.',
    livePrivacy:'Hanya kiraan tanpa nama disimpan: tiada nama, markah atau data peribadi. Seorang pelawat ialah satu pelayar, jadi orang yang menggunakan dua peranti dikira dua kali.',
    liveSetupTitle:'Hidupkan statistik langsung',liveSetupIntro:'Statistik lawatan langsung memerlukan Firebase Realtime Database yang percuma. Ia mengambil kira-kira lima minit:',
    liveStep1:'Pergi ke console.firebase.google.com dan cipta projek (pelan Spark yang percuma sudah memadai).',
    liveStep2:'Buka Build, kemudian Realtime Database, kemudian Create database (pilih Singapore jika ada).',
    liveStep3:'Buka tab Rules, tampal kandungan database.rules.json daripada projek, dan tekan Publish.',
    liveStep4:'Buka Project settings, tambah Web app, dan salin nilai config ke dalam assets/js/firebase-config-update-3.js. Muat naik fail itu ke GitHub.',
    liveSetupFoot:'Sehingga itu, bahagian lain laman web berfungsi seperti biasa.'});
  Object.assign(translations.en,{changeName:'Login / Sign Up',authTitle:'Join PyQuest',authIntro:'Choose how you want to play.',signUp:'Sign Up',logIn:'Log In',guest:'Guest',
    signUpDesc:'New here? Create an account to keep your XP and achievements.',logInDesc:'Already have an account? Carry on where you left off.',guestDesc:'Just trying it out? Nothing is saved once you leave.',
    username:'Username',usernameHelp:'Pick a username (3-20 letters, numbers or underscore). No email needed.',loginHint:'Enter your username and password.',passwordHelp:'Password must be at least 6 characters.',confirmPassword:'Confirm password',
    createAccount:'Create Account',back:'Back',signupTitle:'Create your account',loginTitle:'Welcome back',logOut:'Log Out',guestNote:'Guest mode: your progress will not be saved.',guestLeave:'Leave guest mode? Your progress will be lost.',
    errUsername:'Username must be 3-20 characters: letters, numbers or underscore.',errPass12:'Password must be at least 6 characters.',errMismatch:'Passwords do not match.',errTaken:'That username is already taken.',errBad:'Wrong username or password.',
    errNotEnabled:'Accounts are not switched on yet. Enable Email/Password in Firebase Authentication.',errRules:'Account created, but the record could not be saved. Publish database.rules.json in Firebase.',
    errNoConfig:'Accounts need Firebase to be set up first (see SETUP-AKAUN-update-4.md). You can still use Guest.',errNet:'Network problem. Check your connection and try again.',errMany:'Too many attempts. Please wait a moment.',
    adminTabUsers:'Registered users',usersTotal:'Total accounts',usersName:'Username',usersJoined:'Signed up',usersXp:'XP',usersActive:'Last active',usersEmpty:'Nobody has signed up yet.',
    usersErr:'Cannot read the user list. Publish database.rules.json in Firebase.',usersNote:'Passwords are never stored or shown here. Firebase keeps them securely.'});
  Object.assign(translations.ms,{changeName:'Log Masuk / Daftar',authTitle:'Sertai PyQuest',authIntro:'Pilih cara anda ingin bermain.',signUp:'Daftar',logIn:'Log Masuk',guest:'Tetamu',
    signUpDesc:'Baharu di sini? Cipta akaun untuk simpan XP dan pencapaian anda.',logInDesc:'Sudah ada akaun? Sambung semula dari tempat anda berhenti.',guestDesc:'Sekadar mencuba? Tiada apa disimpan selepas anda keluar.',
    username:'Nama pengguna',usernameHelp:'Pilih nama pengguna (3-20 huruf, nombor atau garis bawah). Tiada emel diperlukan.',loginHint:'Masukkan nama pengguna dan kata laluan anda.',passwordHelp:'Kata laluan mesti sekurang-kurangnya 6 aksara.',confirmPassword:'Sahkan kata laluan',
    createAccount:'Cipta Akaun',back:'Kembali',signupTitle:'Cipta akaun anda',loginTitle:'Selamat kembali',logOut:'Log Keluar',guestNote:'Mod tetamu: kemajuan anda tidak akan disimpan.',guestLeave:'Keluar daripada mod tetamu? Kemajuan anda akan hilang.',
    errUsername:'Nama pengguna mesti 3-20 aksara: huruf, nombor atau garis bawah.',errPass12:'Kata laluan mesti sekurang-kurangnya 6 aksara.',errMismatch:'Kata laluan tidak sama.',errTaken:'Nama pengguna itu sudah digunakan.',errBad:'Nama pengguna atau kata laluan salah.',
    errNotEnabled:'Akaun belum dihidupkan. Aktifkan Email/Password dalam Firebase Authentication.',errRules:'Akaun dicipta, tetapi rekod tidak dapat disimpan. Terbitkan database.rules.json di Firebase.',
    errNoConfig:'Akaun memerlukan Firebase disediakan dahulu (lihat SETUP-AKAUN-update-4.md). Anda masih boleh guna Tetamu.',errNet:'Masalah rangkaian. Semak sambungan dan cuba lagi.',errMany:'Terlalu banyak percubaan. Sila tunggu sebentar.',
    adminTabUsers:'Pengguna berdaftar',usersTotal:'Jumlah akaun',usersName:'Nama pengguna',usersJoined:'Tarikh daftar',usersXp:'XP',usersActive:'Aktif terakhir',usersEmpty:'Belum ada yang mendaftar.',
    usersErr:'Tidak dapat membaca senarai pengguna. Terbitkan database.rules.json di Firebase.',usersNote:'Kata laluan tidak pernah disimpan atau dipaparkan di sini. Firebase menyimpannya dengan selamat.'});
  Object.assign(translations.en,{correctButton:'Correct',wrongButton:'Wrong',puzzleCorrectChoice:'Correct!',puzzleCorrectMessage:'You chose the correct answer.',puzzleWrongChoice:'Wrong!',puzzleWrongMessage:'Look carefully at the Python code.',reasonLabel:'Reason'});
  Object.assign(translations.ms,{correctButton:'Betul',wrongButton:'Salah',puzzleCorrectChoice:'Betul!',puzzleCorrectMessage:'Anda memilih jawapan yang betul.',puzzleWrongChoice:'Salah!',puzzleWrongMessage:'Perhatikan kod Python dengan teliti.',reasonLabel:'Sebab'});
  Object.assign(translations.en,{emailOptional:'Recovery email (optional)',emailHelp:'Add an email so you can reset your password if you forget it. Check the spelling.',forgot:'Forgot password?',forgotTitle:'Reset your password',forgotHint:'Enter your recovery email or username. We will send a reset link.',forgotSend:'Send reset link',forgotSent:'If an account uses that email, a reset link has been sent. Check your inbox and spam folder.',
    usernameOrEmail:'Username or email',errEmail:'Please enter a valid email address.',errEmailTaken:'That email is already used by another account.',errNoRecovery:'This account has no recovery email, so it cannot be reset.',errForgotEmpty:'Enter your recovery email or username.',backToLogin:'Back to Log In'});
  Object.assign(translations.ms,{emailOptional:'Emel pemulihan (pilihan)',emailHelp:'Tambah emel supaya anda boleh tetapkan semula kata laluan jika terlupa. Semak ejaan.',forgot:'Lupa kata laluan?',forgotTitle:'Tetapkan semula kata laluan',forgotHint:'Masukkan emel pemulihan atau nama pengguna. Kami akan hantar pautan tetapan semula.',forgotSend:'Hantar pautan',forgotSent:'Jika ada akaun menggunakan emel itu, pautan tetapan semula telah dihantar. Semak peti masuk dan folder spam.',
    usernameOrEmail:'Nama pengguna atau emel',errEmail:'Sila masukkan alamat emel yang sah.',errEmailTaken:'Emel itu sudah digunakan oleh akaun lain.',errNoRecovery:'Akaun ini tiada emel pemulihan, jadi tidak boleh ditetapkan semula.',errForgotEmpty:'Masukkan emel pemulihan atau nama pengguna.',backToLogin:'Kembali ke Log Masuk'});

  /* =====================================================================
     UPDATE 7 — teks baharu
     ===================================================================== */
  Object.assign(translations.en,{game:'Game',theme:'Theme',themeTitle:'Pick your theme',themeIntro:'The whole website changes instantly — even the PyQuest snake!',
    th_default:'Classic Colour',th_default_d:'Bright and colourful — the PyQuest look.',th_pirate:'Pirate Adventure',th_pirate_d:'Sail the code seas and become the Python Pirate King.',
    th_cyber:'Cyberpunk Neon',th_cyber_d:'Neon city, robot snake, glitchy future.',th_boys:'Hero Blue (Boys)',th_boys_d:'Blue and orange action-hero style.',th_girls:'Sparkle Pink (Girls)',th_girls_d:'Pink, purple and lots of sparkle.',
    headline2:'Become a <span class="hl">Python Hero</span>, one game at a time.',sub2:'Battle bugs in the Quiz, hunt broken code in the Puzzle, rank up and unlock badges — in English or Bahasa Melayu.',
    tag2:'For young coders aged 17 and under',heroBubble:"Hi! I'm Py. Ready to code?",statQuiz:'quiz questions',statPuzzle:'code puzzles',statLevels:'levels',pickTheme:'Pick a theme',
    authTitle2:'Ready to play?',authIntro2:'Choose how you want to start your quest.',signUpTag:'Keeps your XP',logInTag:'Welcome back',guestTag:'Quick try',
    bubHi:'Hi again! Who are you?',bubSignup:"Let's make your hero account!",bubUser:'Pick a cool username!',bubPass:"I won't peek, promise!",bubPeek:'Okay… just a tiny peek!',bubReady:'Looking great! Press the button!',bubForgot:"Don't worry — heroes forget things too.",bubChoose:'Hover a card — I am watching!',
    ckUser:'3–20 letters, numbers or _',ckPass:'At least 6 characters',ckMatch:'Both passwords match',pwWeak:'Weak',pwOk:'Okay',pwStrong:'Strong!',showPass:'Show password',
    guestConfirmTitle:'Play as a Guest?',guestConfirmMsg:'You can play everything, but your XP and badges disappear when you leave. Sign up to keep them!',guestGo:"Let's play!",
    exitTitle:'Leave the game?',exitYes:'Yes, leave',exitNo:'Keep playing',guestLeaveTitle:'Leave guest mode?',logoutTitle:'Log out?',logoutMsg:'Your progress is saved. See you soon!',
    deleteTitle:'Delete this puzzle?',deleteMsg:'This cannot be undone.',yesDelete:'Delete',restoreTitle:'Restore default puzzles?',restoreMsg:'Puzzles edited on this device will be replaced by the original puzzle bank.',restoreBtn:'Restore defaults',restored:'Default puzzles restored.',
    adminLogoutTitle:'Log out of Admin?',ok:'OK',
    playNow:'Play now',nextRank:'{xp} XP to {rank}',maxRank:'Top rank reached!',rankLabel:'Rank',statQuizRounds:'Quiz rounds',statPuzzleRounds:'Puzzle rounds',statAccuracy:'Quiz accuracy',
    tryTheme:'Try a theme',tryThemeHint:'Tap one — everything changes instantly.',achXp:'XP Hunter',achXpDesc:'Collect 500 XP.',dashQuizDesc:'Answer questions to defeat the {boss}!',dashPuzzleDesc:'Is the code correct or buggy? Decide fast!',
    sideMode:'Game mode',sideLevel:'Level',sideSpeed:'Speed mode',off:'Off',sound:'Sound',lvl_easy:'Easy',lvl_normal:'Normal',lvl_medium:'Medium',lvl_hard:'Hard',
    lvlDesc_easy:'First steps: print, variables, simple maths',lvlDesc_normal:'Short code: if/else, lists, loops',lvlDesc_medium:'Slicing, functions, dictionaries',lvlDesc_hard:'Tricky code for Python pros',
    perAnswer:'+{n} XP each',rulesQuiz:'10 random questions|5 hearts — a wrong answer costs one heart|50/50 power-up once per round|All correct = +50 XP bonus',
    rulesPuzzle:'10 random code puzzles|Decide: runs fine, or has a bug?|Shield power-up blocks one mistake|Reach the treasure at the end of the trail!',
    startGame:'Start!',you:'You',combo:'Combo',fifty:'50/50',shield:'Shield',shieldOn:'Shield ready — your next mistake is free!',shieldUsed:'Shield blocked it!',
    puzzleRuns:'Runs fine',puzzleBug:'Has a bug',puzzleAsk:'Will this code run without an error?',stampOk:'CLEAN CODE',stampBug:'BUG FOUND',
    fbGood:'Awesome!|Great job!|Nailed it!|Super!|Brilliant!',fbBad:'Not quite!|Oops!|So close!|Almost!',
    pzIsOk:'This code is correct — it runs without errors.',pzIsBug:'This code has a bug — Python stops with an error.',next:'Next',
    victory:'Victory!',gameOver:'Game Over',outOfHearts:'You ran out of hearts — but every mistake teaches you something!',bestCombo:'Best combo',playAgain:'Play again',changeLevel:'Change level',
    levelUp:'LEVEL UP! You are now {rank}!',bossDefeated:'{boss} defeated!',bossEscaped:'{boss} escaped! Get more answers right to defeat it.',treasureFound:'You reached the treasure!',treasureMissed:'The treasure is still waiting — try again!',
    keysQuiz:'Tip: press 1–4 to answer and Enter for next.',keysPuzzle:'Tip: press ← for "Runs fine", → for "Has a bug", Enter for next.',lockedWhilePlaying:'Finish or exit the round to change settings.',
    xpRound:'XP this round',questionsLeft:'Question {n} of {total}',difficultyTab:'Difficulty',on:'On'});
  Object.assign(translations.ms,{game:'Game',theme:'Tema',themeTitle:'Pilih tema anda',themeIntro:'Seluruh laman berubah serta-merta — termasuk ular PyQuest!',
    th_default:'Klasik Ceria',th_default_d:'Terang dan berwarna-warni — gaya asal PyQuest.',th_pirate:'Pengembaraan Lanun',th_pirate_d:'Belayar di lautan kod dan jadi Python Pirate King.',
    th_cyber:'Neon Cyberpunk',th_cyber_d:'Bandar neon, ular robot, masa depan glitch.',th_boys:'Wira Biru (Lelaki)',th_boys_d:'Gaya wira aksi biru dan oren.',th_girls:'Kilauan Merah Jambu (Perempuan)',th_girls_d:'Merah jambu, ungu dan penuh kilauan.',
    headline2:'Jadi <span class="hl">Wira Python</span>, satu permainan demi satu.',sub2:'Lawan bug dalam Kuiz, buru kod rosak dalam Puzzle, naik pangkat dan buka lencana — dalam Bahasa Melayu atau English.',
    tag2:'Untuk pengekod muda 17 tahun ke bawah',heroBubble:'Hai! Saya Py. Jom belajar coding?',statQuiz:'soalan kuiz',statPuzzle:'puzzle kod',statLevels:'tahap',pickTheme:'Pilih tema',
    authTitle2:'Sedia untuk bermain?',authIntro2:'Pilih cara untuk mulakan pengembaraan anda.',signUpTag:'Simpan XP anda',logInTag:'Selamat kembali',guestTag:'Cuba pantas',
    bubHi:'Hai lagi! Siapa awak?',bubSignup:'Jom cipta akaun wira anda!',bubUser:'Pilih nama pengguna yang hebat!',bubPass:'Saya tak intai, janji!',bubPeek:'Okey… intai sikit je!',bubReady:'Nampak hebat! Tekan butang!',bubForgot:'Jangan risau — wira pun pernah terlupa.',bubChoose:'Gerakkan tetikus ke kad — saya perhatikan!',
    ckUser:'3–20 huruf, nombor atau _',ckPass:'Sekurang-kurangnya 6 aksara',ckMatch:'Kedua-dua kata laluan sama',pwWeak:'Lemah',pwOk:'Sederhana',pwStrong:'Kuat!',showPass:'Tunjuk kata laluan',
    guestConfirmTitle:'Main sebagai Tetamu?',guestConfirmMsg:'Anda boleh main semua, tetapi XP dan lencana akan hilang bila anda keluar. Daftar untuk menyimpannya!',guestGo:'Jom main!',
    exitTitle:'Keluar dari permainan?',exitYes:'Ya, keluar',exitNo:'Terus main',guestLeaveTitle:'Keluar mod tetamu?',logoutTitle:'Log keluar?',logoutMsg:'Kemajuan anda telah disimpan. Jumpa lagi!',
    deleteTitle:'Padam puzzle ini?',deleteMsg:'Tindakan ini tidak boleh dibatalkan.',yesDelete:'Padam',restoreTitle:'Pulihkan puzzle asal?',restoreMsg:'Puzzle yang diedit pada peranti ini akan diganti dengan bank puzzle asal.',restoreBtn:'Pulihkan asal',restored:'Puzzle asal dipulihkan.',
    adminLogoutTitle:'Log keluar daripada Admin?',ok:'OK',
    playNow:'Main sekarang',nextRank:'{xp} XP lagi ke {rank}',maxRank:'Pangkat tertinggi dicapai!',rankLabel:'Pangkat',statQuizRounds:'Pusingan kuiz',statPuzzleRounds:'Pusingan puzzle',statAccuracy:'Ketepatan kuiz',
    tryTheme:'Cuba tema',tryThemeHint:'Tekan satu — semuanya berubah serta-merta.',achXp:'Pemburu XP',achXpDesc:'Kumpul 500 XP.',dashQuizDesc:'Jawab soalan untuk tewaskan {boss}!',dashPuzzleDesc:'Kod ini betul atau ada bug? Tentukan cepat!',
    sideMode:'Mod permainan',sideLevel:'Tahap',sideSpeed:'Mod pantas',off:'Tutup',sound:'Bunyi',lvl_easy:'Easy',lvl_normal:'Normal',lvl_medium:'Medium',lvl_hard:'Hard',
    lvlDesc_easy:'Langkah pertama: print, pemboleh ubah, matematik mudah',lvlDesc_normal:'Kod pendek: if/else, list, gelung',lvlDesc_medium:'Hirisan, fungsi, kamus',lvlDesc_hard:'Kod mencabar untuk pro Python',
    perAnswer:'+{n} XP setiap satu',rulesQuiz:'10 soalan rawak|5 nyawa — jawapan salah tolak satu nyawa|Kuasa 50/50 sekali setiap pusingan|Semua betul = bonus +50 XP',
    rulesPuzzle:'10 puzzle kod rawak|Tentukan: berjalan lancar, atau ada bug?|Kuasa Perisai menahan satu kesilapan|Sampai ke harta karun di hujung laluan!',
    startGame:'Mula!',you:'Anda',combo:'Kombo',fifty:'50/50',shield:'Perisai',shieldOn:'Perisai sedia — kesilapan seterusnya percuma!',shieldUsed:'Perisai menahannya!',
    puzzleRuns:'Berjalan lancar',puzzleBug:'Ada bug',puzzleAsk:'Adakah kod ini berjalan tanpa ralat?',stampOk:'KOD BERSIH',stampBug:'BUG DIJUMPAI',
    fbGood:'Hebat!|Bagus!|Tepat sekali!|Power!|Cemerlang!',fbBad:'Belum tepat!|Alamak!|Hampir!|Sikit lagi!',
    pzIsOk:'Kod ini betul — ia berjalan tanpa ralat.',pzIsBug:'Kod ini ada bug — Python berhenti dengan ralat.',next:'Seterusnya',
    victory:'Menang!',gameOver:'Permainan Tamat',outOfHearts:'Nyawa anda habis — tapi setiap kesilapan ialah pelajaran!',bestCombo:'Kombo terbaik',playAgain:'Main lagi',changeLevel:'Tukar tahap',
    levelUp:'NAIK TAHAP! Anda kini {rank}!',bossDefeated:'{boss} ditewaskan!',bossEscaped:'{boss} terlepas! Jawab lebih banyak dengan betul untuk menewaskannya.',treasureFound:'Anda sampai ke harta karun!',treasureMissed:'Harta karun masih menunggu — cuba lagi!',
    keysQuiz:'Tip: tekan 1–4 untuk jawab dan Enter untuk seterusnya.',keysPuzzle:'Tip: tekan ← untuk "Berjalan lancar", → untuk "Ada bug", Enter untuk seterusnya.',lockedWhilePlaying:'Habiskan atau keluar pusingan untuk tukar tetapan.',
    xpRound:'XP pusingan ini',questionsLeft:'Soalan {n} daripada {total}',difficultyTab:'Tahap',on:'Buka'});

  /* =====================================================================
     UPDATE 13 — profil, syiling, kedai skin, tema fantasi
     ===================================================================== */
  Object.assign(translations.en,{th_retro:'Classic Game',th_retro_d:'8-bit pixels, arcade sounds and a high-score snake.',th_dark:'Dark Fantasy',th_dark_d:'Shadow castles, glowing runes and a horned snake knight.',th_light:'Light Fantasy',th_light_d:'Golden halos, angel wings and a magical sky kingdom.',
    profile:'Profile',avatarTab:'Avatar',myProfile:'My Profile',coins:'Coins',coinsShort:'coins',openProfile:'Open your profile',
    pfPicTitle:'Profile picture',pfPicHint:'Upload your own picture or pick a ready-made one.',pfUpload:'Upload picture',pfUseSkin:'Use my snake',pfReady:'Ready-made pictures',
    pfSaved:'Profile picture saved!',pfBadFile:'Please choose a picture file (JPG, PNG, GIF or WebP).',pfBig:'That file is too big. Choose a picture under 10 MB.',pfPicNote:'Your uploaded picture is only shown on your own screen. Do not use a photo with private details.',
    pfNameTitle:'Display name',pfNameHint:'This name is shown around PyQuest. You still log in with your username.',pfNameSave:'Change name',pfNameRule:'You can change your name once every 7 days.',
    pfNameWait:'You can change it again on {date} ({n} days left).',pfNameBad:'Use 2–20 characters: letters, numbers, spaces, _ - or .',pfNameSame:'That is already your name.',pfNameDone:'Your name is now {name}!',
    pfNameConfirm:'Change your name to "{name}"?',pfNameConfirmMsg:'After this you must wait 7 days before changing it again.',pfLoginName:'Username for log in',
    pfGuest:'Guest mode: your picture, name, coins and skins are lost when you leave. Sign up to keep them!',pfSaveErr:'Could not save. Check your internet and try again.',
    pfStatsTitle:'My stats',pfSkinsOwned:'Skins owned',pfRounds:'Rounds played',
    shopTitle:'Skin Shop',shopHint:'These skins are for the {theme} theme. Pick another theme to see its skins!',shopBase:'Original',shopFree:'Free',shopBuy:'Buy',shopEquip:'Use',shopEquipped:'Using',shopNeed:'Need {n} more',shopOwned:'Owned',
    buyTitle:'Buy {name}?',buyMsg:'This costs {price} coins. You will have {left} coins left.',buyDone:'{name} unlocked!',equipDone:'Now using {name}.',shopPreview:'Preview',
    rar_normal:'Normal',rar_special:'Special',rar_epic:'Epic',rar_legend:'Legend',
    coinRulesTitle:'How to earn coins',coinRules:'Finish a Quiz or Puzzle round. Full marks give all the coins for that level. Every mistake cuts some coins.',
    coinsEarned:'Coins',coinsFull:'Full marks — you got all {max} coins!',coinsCut:'Mistakes cut your coins: {got} of {max}. Get every answer right for all {max}!',perCoin:'up to {n}',
    dashShop:'Skin Shop',dashShopDesc:'Spend your coins on new looks for your snake.'});
  Object.assign(translations.ms,{th_retro:'Permainan Klasik',th_retro_d:'Piksel 8-bit, gaya arked dan ular pemburu skor tinggi.',th_dark:'Fantasi Gelap',th_dark_d:'Istana bayang, rune bercahaya dan kesatria ular bertanduk.',th_light:'Fantasi Cahaya',th_light_d:'Lingkaran cahaya emas, sayap dan kerajaan langit ajaib.',
    profile:'Profil',avatarTab:'Avatar',myProfile:'Profil Saya',coins:'Syiling',coinsShort:'syiling',openProfile:'Buka profil anda',
    pfPicTitle:'Gambar profil',pfPicHint:'Muat naik gambar sendiri atau pilih yang sedia ada.',pfUpload:'Muat naik gambar',pfUseSkin:'Guna ular saya',pfReady:'Gambar sedia ada',
    pfSaved:'Gambar profil disimpan!',pfBadFile:'Sila pilih fail gambar (JPG, PNG, GIF atau WebP).',pfBig:'Fail terlalu besar. Pilih gambar bawah 10 MB.',pfPicNote:'Gambar yang dimuat naik hanya dipaparkan pada skrin anda sendiri. Jangan guna foto yang ada maklumat peribadi.',
    pfNameTitle:'Nama paparan',pfNameHint:'Nama ini dipaparkan di PyQuest. Anda masih log masuk dengan nama pengguna.',pfNameSave:'Tukar nama',pfNameRule:'Nama boleh ditukar sekali setiap 7 hari.',
    pfNameWait:'Boleh tukar lagi pada {date} ({n} hari lagi).',pfNameBad:'Guna 2–20 aksara: huruf, nombor, jarak, _ - atau .',pfNameSame:'Itu memang nama anda sekarang.',pfNameDone:'Nama anda kini {name}!',
    pfNameConfirm:'Tukar nama kepada "{name}"?',pfNameConfirmMsg:'Selepas ini anda perlu tunggu 7 hari sebelum boleh tukar lagi.',pfLoginName:'Nama pengguna untuk log masuk',
    pfGuest:'Mod tetamu: gambar, nama, syiling dan skin hilang bila anda keluar. Daftar untuk menyimpannya!',pfSaveErr:'Tidak dapat disimpan. Semak internet dan cuba lagi.',
    pfStatsTitle:'Statistik saya',pfSkinsOwned:'Skin dimiliki',pfRounds:'Pusingan dimain',
    shopTitle:'Kedai Skin',shopHint:'Skin ini untuk tema {theme}. Pilih tema lain untuk lihat skinnya!',shopBase:'Asal',shopFree:'Percuma',shopBuy:'Beli',shopEquip:'Pakai',shopEquipped:'Dipakai',shopNeed:'Perlu {n} lagi',shopOwned:'Dimiliki',
    buyTitle:'Beli {name}?',buyMsg:'Harga {price} syiling. Baki anda nanti {left} syiling.',buyDone:'{name} dibuka!',equipDone:'Kini memakai {name}.',shopPreview:'Pratonton',
    rar_normal:'Normal',rar_special:'Special',rar_epic:'Epic',rar_legend:'Legend',
    coinRulesTitle:'Cara dapat syiling',coinRules:'Habiskan satu pusingan Kuiz atau Puzzle. Markah penuh dapat semua syiling tahap itu. Setiap kesilapan memotong sedikit syiling.',
    coinsEarned:'Syiling',coinsFull:'Markah penuh — anda dapat semua {max} syiling!',coinsCut:'Kesilapan memotong syiling: {got} daripada {max}. Jawab semua dengan betul untuk dapat {max}!',perCoin:'maks {n}',
    dashShop:'Kedai Skin',dashShopDesc:'Belanja syiling untuk rupa baharu ular anda.'});

  /* =====================================================================
     Tema
     ===================================================================== */
  const THEMES=['default','retro','pirate','cyber','dark','light','boys','girls'];
  const THEME_SW={default:['#6c4cf5','#ff5d73','#ffc93c','#2ec27e'],pirate:['#13304a','#0f6e7f','#f4b41a','#8e1b1b'],cyber:['#00e5ff','#ff2a6d','#f9f002','#b967ff'],boys:['#2563eb','#f97316','#22c55e','#0ea5e9'],girls:['#d63aa8','#a78bfa','#fbbf24','#34d399'],dark:['#1a1026','#8b5cf6','#e11d48','#f59e0b'],light:['#fbbf24','#7dd3fc','#a7f3d0','#f9a8d4'],retro:['#1e1b4b','#e11d48','#facc15','#22c55e']};
  const RANKS={
    classic:{en:['Python Rookie','Python Explorer','Python Coder','Python Hero','Python Master','Python Legend'],ms:['Python Baharu','Peneroka Python','Pengekod Python','Wira Python','Pakar Python','Legenda Python']},
    pirate:{en:['Python Crew','Python Navigator','Python First Mate','Python Captain','Python Commodore','Python Pirate King']},
    cyber:{en:['Python Byte','Python Glitch','Python Hacker','Python Cyborg','Python Mainframe','Python Singularity']},
    dark:{en:['Python Shadow','Python Rogue','Python Sorcerer','Python Dark Knight','Python Warlord','Python Shadow King']},
    retro:{en:['Python Player 1','Python Level Up','Python Combo Master','Python High Score','Python Boss Slayer','Python Arcade Legend']},
    light:{en:['Python Apprentice','Python Ranger','Python Mage','Python Paladin','Python Archmage','Python Light Guardian']},
  };
  const FLAVOR={
    default:{en:{quiz:'Quiz Battle',puzzle:'Bug Hunt',boss:'Bug Monster',file:'mission'},ms:{quiz:'Pertempuran Kuiz',puzzle:'Buru Bug',boss:'Raksasa Bug',file:'misi'}},
    pirate:{en:{quiz:'Sea Battle',puzzle:'Treasure Hunt',boss:'Kraken Bug',file:'map'},ms:{quiz:'Pertempuran Laut',puzzle:'Cari Harta Karun',boss:'Kraken Bug',file:'peta'}},
    cyber:{en:{quiz:'Cyber Duel',puzzle:'Data Run',boss:'VIRUS.EXE',file:'node'},ms:{quiz:'Duel Siber',puzzle:'Larian Data',boss:'VIRUS.EXE',file:'nod'}},
    boys:{en:{quiz:'Hero Battle',puzzle:'Bug Hunt',boss:'Space Bug',file:'mission'},ms:{quiz:'Pertempuran Wira',puzzle:'Buru Bug',boss:'Bug Angkasa',file:'misi'}},
    girls:{en:{quiz:'Sparkle Battle',puzzle:'Bug Hunt',boss:'Glitch Gremlin',file:'mission'},ms:{quiz:'Pertempuran Kilauan',puzzle:'Buru Bug',boss:'Gremlin Glitch',file:'misi'}},
    dark:{en:{quiz:'Shadow Duel',puzzle:'Rune Hunt',boss:'Shadow Bug',file:'scroll'},ms:{quiz:'Duel Bayang',puzzle:'Buru Rune',boss:'Bug Bayang',file:'skrol'}},
    retro:{en:{quiz:'Boss Fight',puzzle:'Glitch Hunt',boss:'Pixel Bug',file:'cartridge'},ms:{quiz:'Lawan Bos',puzzle:'Buru Glitch',boss:'Bug Piksel',file:'kartrij'}},
    light:{en:{quiz:'Spell Battle',puzzle:'Crystal Quest',boss:'Gloom Imp',file:'spell'},ms:{quiz:'Pertarungan Sihir',puzzle:'Misi Kristal',boss:'Jembalang Suram',file:'jampi'}},
  };
  let theme='default';
  try { const saved=localStorage.getItem('pyquest-theme'); if(THEMES.includes(saved))theme=saved; } catch(_) {}
  document.documentElement.dataset.theme=theme;
  const flavor=key=>(FLAVOR[theme][language]||FLAVOR[theme].en)[key];
  function rankName(number) {
    const set=RANKS[theme]||RANKS.classic;
    const list=set[language]||set.en;
    return list[Math.max(0,Math.min(list.length-1,(number||1)-1))];
  }
  function applyTheme(next) {
    if(!THEMES.includes(next)||next===theme)return;
    theme=next;
    try { localStorage.setItem('pyquest-theme',theme); } catch(_) {}
    document.documentElement.classList.add('theme-fade');
    document.documentElement.dataset.theme=theme;
    setTimeout(()=>document.documentElement.classList.remove('theme-fade'),500);
    const meta=document.querySelector('meta[name="theme-color"]'); if(meta)meta.content={default:'#5132d6',pirate:'#13304a',cyber:'#07040f',dark:'#120a1f',light:'#e9b949',retro:'#1e1b4b',boys:'#1d4ed8',girls:'#d63aa8'}[theme];
    window.PyQuestFX?.play('pop');
    render({keepScroll:true});
  }

  /* =====================================================================
     Dialog sendiri (ganti window.confirm / alert pelayar)
     ===================================================================== */
  function showDialog({title,message='',ok,cancel,tone='primary',art='hero',sad=false}) {
    return new Promise(resolve=>{
      const prev=document.activeElement;
      const wrap=document.createElement('div');
      wrap.className='pq-modal';
      wrap.innerHTML=`<div class="pq-dialog" role="alertdialog" aria-modal="true" aria-labelledby="dlg-t" aria-describedby="dlg-m">${art?`<div class="dlg-art${sad?' sad':''}">${art==='hero'?window.PyQuestArt.hero('no-bg'):art}</div>`:''}<h2 id="dlg-t">${escapeHtml(title)}</h2>${message?`<p id="dlg-m">${escapeHtml(message)}</p>`:''}<div class="dlg-actions">${cancel?`<button type="button" class="btn btn-secondary" data-dlg="no">${escapeHtml(cancel)}</button>`:''}<button type="button" class="btn ${tone==='danger'?'btn-danger':'btn-primary'}" data-dlg="yes">${escapeHtml(ok||t('ok'))}</button></div></div>`;
      const close=value=>{
        document.removeEventListener('keydown',onKey,true);
        wrap.classList.add('closing');
        setTimeout(()=>{wrap.remove();if(prev&&prev.focus)prev.focus();},170);
        resolve(value);
      };
      wrap._close=()=>close(false);
      const onKey=e=>{
        if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close(false);}
        if(e.key==='Tab'){const f=[...wrap.querySelectorAll('button')];const i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus();}
        if(e.key==='Enter'||e.key===' '){e.stopPropagation();}
      };
      wrap.addEventListener('click',e=>{
        const b=e.target.closest('[data-dlg]');
        if(b)close(b.dataset.dlg==='yes');
        else if(e.target===wrap&&cancel)close(false);
      });
      document.addEventListener('keydown',onKey,true);
      document.body.appendChild(wrap);
      window.PyQuestFX?.play('pop');
      setTimeout(()=>(wrap.querySelector(cancel?'[data-dlg="no"]':'[data-dlg="yes"]')||wrap).focus(),40);
    });
  }
  const confirmDialog=(title,message,ok,cancel,opts={})=>showDialog({title,message,ok,cancel:cancel||t('cancel'),...opts});

  function openThemePicker() {
    const prev=document.activeElement;
    const wrap=document.createElement('div');
    wrap.className='pq-modal';
    const cards=THEMES.map(id=>`<button type="button" class="theme-card${id===theme?' selected':''}" data-theme-pick="${id}" aria-pressed="${id===theme}"><span class="tc-prev tc-${id}">${window.PyQuestArt.miniHead(id)}<span class="tc-sw">${THEME_SW[id].map(c=>`<i style="background:${c}"></i>`).join('')}</span></span><span class="tc-tick">${window.PyQuestArt.ICON.check}</span><b>${t('th_'+id)}</b><small>${t('th_'+id+'_d')}</small></button>`).join('');
    wrap.innerHTML=`<div class="pq-dialog theme-dialog" role="dialog" aria-modal="true" aria-labelledby="th-t"><button type="button" class="dlg-close" data-close aria-label="${t('cancel')}">×</button><h2 id="th-t">${t('themeTitle')}</h2><p>${t('themeIntro')}</p><div class="theme-grid">${cards}</div></div>`;
    const close=()=>{document.removeEventListener('keydown',onKey,true);wrap.classList.add('closing');setTimeout(()=>{wrap.remove();prev?.focus?.();},170);};
    const onKey=e=>{if(e.key==='Escape'){e.stopPropagation();close();}};
    wrap._close=close;
    wrap.addEventListener('click',e=>{
      const pick=e.target.closest('[data-theme-pick]');
      if(pick){applyTheme(pick.dataset.themePick);wrap.querySelectorAll('.theme-card').forEach(c=>{const on=c.dataset.themePick===theme;c.classList.toggle('selected',on);c.setAttribute('aria-pressed',on);});setTimeout(close,260);return;}
      if(e.target===wrap||e.target.closest('[data-close]'))close();
    });
    document.addEventListener('keydown',onKey,true);
    document.body.appendChild(wrap);
    setTimeout(()=>wrap.querySelector('.theme-card.selected')?.focus(),40);
  }

  /* =====================================================================
     Keadaan aplikasi
     ===================================================================== */
  Object.assign(translations.en,{emailOptional:'Recovery email (recommended)',emailHelp:'Without an email, a forgotten password can NOT be reset. Check the spelling carefully.',
    forgotHint:'Type your username or the recovery email you used when you signed up. We will email you a reset link.',
    errNoRecovery:'This account was created without a recovery email, so its password cannot be reset. Ask your teacher (admin) to delete the old account in Firebase, then sign up again with an email.',
    fsTitle:'Check your email!',fsToUser:'We sent a reset link to the recovery email of this account:',fsToEmail:'If a PyQuest account uses this email, a reset link has been sent to:',
    fs1:'Open the email from PyQuest (sender ends with firebaseapp.com).',fs2:'Cannot find it? Look in Spam and Promotions. It can take 1–5 minutes.',fs3:'Press the link in the NEWEST email only — older links stop working. Each link works for 1 hour.',
    fs4:'Type your new password (at least 6 characters), then come back and log in.',fsResend:'Send again',fsWait:'Send again in {n}s',fsOther:'Use another username or email',fsResent:'A new link has been sent. Use this newest email.'});
  Object.assign(translations.ms,{emailOptional:'Emel pemulihan (digalakkan)',emailHelp:'Tanpa emel, kata laluan yang terlupa TIDAK boleh ditetapkan semula. Semak ejaan dengan teliti.',
    forgotHint:'Taip nama pengguna anda atau emel pemulihan yang digunakan semasa mendaftar. Kami akan hantar pautan tetapan semula ke emel.',
    errNoRecovery:'Akaun ini didaftar tanpa emel pemulihan, jadi kata laluannya tidak boleh ditetapkan semula. Minta cikgu (admin) padam akaun lama dalam Firebase, kemudian daftar semula dengan emel.',
    fsTitle:'Semak emel anda!',fsToUser:'Pautan tetapan semula telah dihantar ke emel pemulihan akaun ini:',fsToEmail:'Jika ada akaun PyQuest menggunakan emel ini, pautan tetapan semula telah dihantar ke:',
    fs1:'Buka emel daripada PyQuest (alamat penghantar berakhir dengan firebaseapp.com).',fs2:'Tak jumpa? Semak folder Spam dan Promosi (Promotions). Boleh ambil masa 1–5 minit.',fs3:'Tekan pautan dalam emel yang TERBARU sahaja — pautan lama tidak berfungsi lagi. Setiap pautan sah selama 1 jam.',
    fs4:'Taip kata laluan baharu (sekurang-kurangnya 6 aksara), kemudian kembali dan log masuk.',fsResend:'Hantar semula',fsWait:'Hantar semula dalam {n}s',fsOther:'Guna nama pengguna atau emel lain',fsResent:'Pautan baharu telah dihantar. Guna emel yang terbaharu ini.'});
  const forgotState={sent:null,idf:'',timer:null};
  Object.assign(translations.en,{bkOk:'Live for everyone: changes you save here appear for every player straight away.',bkAs:'Signed in as {name}.',bkChecking:'Checking admin access…',
    bkLogin:'To publish questions for everyone, log in with your PyQuest account first (press Log Out / Log In at the top, then log in). That account must be set as an admin.',
    bkNotAdmin:'This account ({name}) is not an admin yet. Do this once in Firebase:',bkStep1:'Open console.firebase.google.com → your project → Realtime Database → Data.',
    bkStep2:'Next to the top (root) item press +. Name: admins — then press + inside it.',bkStep3:'Name: the ID below. Value: true. Press Add.',bkStep4:'Come back here and press "Check again".',
    bkCopy:'Copy ID',bkCopied:'ID copied!',bkRecheck:'Check again',bkRules:'Firebase refused. Publish the newest database.rules.json in Realtime Database → Rules, then press "Check again".',
    bkPublished:'{n} question(s) published to everyone.',bkDeleted:'Question deleted for everyone.',bkRestored:'Default questions restored for everyone.',bkNeedAdmin:'Only an admin account can change questions. See the box above.',
    bkErr:'Could not save to Firebase. Check the internet or the admin setup above.'});
  Object.assign(translations.ms,{bkOk:'Langsung untuk semua: perubahan yang disimpan di sini terus dilihat oleh semua pemain.',bkAs:'Log masuk sebagai {name}.',bkChecking:'Menyemak akses admin…',
    bkLogin:'Untuk menerbitkan soalan kepada semua, log masuk dengan akaun PyQuest anda dahulu (tekan Log Keluar / Log Masuk di atas, kemudian log masuk). Akaun itu mesti ditetapkan sebagai admin.',
    bkNotAdmin:'Akaun ini ({name}) belum menjadi admin. Buat sekali sahaja di Firebase:',bkStep1:'Buka console.firebase.google.com → projek anda → Realtime Database → Data.',
    bkStep2:'Di sebelah item paling atas (root) tekan +. Name: admins — kemudian tekan + di dalamnya.',bkStep3:'Name: ID di bawah. Value: true. Tekan Add.',bkStep4:'Kembali ke sini dan tekan "Semak semula".',
    bkCopy:'Salin ID',bkCopied:'ID disalin!',bkRecheck:'Semak semula',bkRules:'Firebase menolak. Terbitkan database.rules.json yang terbaharu di Realtime Database → Rules, kemudian tekan "Semak semula".',
    bkPublished:'{n} soalan diterbitkan kepada semua.',bkDeleted:'Soalan dipadam untuk semua.',bkRestored:'Soalan asal dipulihkan untuk semua.',bkNeedAdmin:'Hanya akaun admin boleh mengubah soalan. Lihat kotak di atas.',
    bkErr:'Tidak dapat menyimpan ke Firebase. Semak internet atau tetapan admin di atas.'});
  let language = localStorage.getItem('pyquest-language') === 'ms' ? 'ms' : 'en';
  let state = null;
  let page = 'home';
  let namePromptOpen = false;
  let authView = 'choose', authBusy = false, mode = '';
  let usersUnsub = null, usersData = null, usersToken = 0;
  let pendingPage = 'home';
  let mobileMenuOpen = false;
  let contentInfo = {quiz_counts:{},puzzle_counts:{},points:{easy:10,normal:15,medium:20,hard:25}};
  const DIFFS=['easy','normal','medium','hard'];
  const ADMIN_HASH='1e1nb6rbuvq';
  const hashCred=s=>{let a=0xdeadbeef,b=0x41c6ce57;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677);}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return (4294967296*(2097151&b)+(a>>>0)).toString(36);};
  localStorage.removeItem('pyquest_teacher_username');
  let teacherName = (sessionStorage.getItem('pyquest_admin_session') || '').trim();
  let adminDiff = 'easy';
  let puzzleEditorId = null;
  let timerHandle = null;
  let adminTab = 'live';
  let liveUnsub = null, liveData = null, liveToken = 0, lastResult = null;
  const BASE_QUESTIONS=(window.PYQUEST_QUESTIONS||[]).map(q=>JSON.parse(JSON.stringify(q)));
  const BASE_PUZZLES=(window.PYQUEST_PUZZLES||[]).map(p=>({...p,question:{...p.question},explanation:{...p.explanation}}));
  const prefs={mode:'quiz',diff:'easy',seconds:0};
  try { const p=JSON.parse(localStorage.getItem('pyquest-game-prefs')||'{}'); if(['quiz','puzzle'].includes(p.mode))prefs.mode=p.mode; if(DIFFS.includes(p.diff))prefs.diff=p.diff; if([0,30,20,15,10].includes(p.seconds))prefs.seconds=p.seconds; } catch(_) {}
  const savePrefs=()=>{try{localStorage.setItem('pyquest-game-prefs',JSON.stringify(prefs));}catch(_){}};
  let session=null;   // pusingan permainan aktif
  const MAX_HEARTS=5;
  const playing=()=>Boolean(session&&!session.result);
  /* Bank soalan dikongsi (Firebase). Bila sedia, semua akaun nampak perubahan admin serta-merta. */
  const BANK=()=>window.PyQuestBank;
  const useShared=()=>Boolean(BANK()&&BANK().configured);
  let bankVal=null, bankPending=false, bankStatus=null, bankBusy=false;
  function validQuizEntry(q){return Boolean(q&&typeof q.id==='string'&&['easy','normal','medium','hard'].includes(q.difficulty)&&q.question&&typeof q.question.en==='string'&&q.options&&Array.isArray(q.options.en)&&q.options.en.length===4&&Array.isArray(q.options.ms)&&q.options.ms.length===4&&Number.isInteger(q.answer)&&q.explanation&&typeof q.explanation.en==='string');}
  function validPuzzleEntry(p){return Boolean(p&&typeof p.id==='string'&&['easy','normal','medium','hard'].includes(p.difficulty)&&typeof p.code==='string'&&typeof p.correct==='boolean'&&p.explanation&&typeof p.explanation.en==='string'&&p.question);}
  function applyBank(force) {
    if(!bankVal)return;
    if(playing()&&!force){bankPending=true;return;}   // jangan ubah soalan di tengah pusingan
    bankPending=false;
    const q=BANK().merge(BASE_QUESTIONS,bankVal.quiz,validQuizEntry), pz=BANK().merge(BASE_PUZZLES,bankVal.puzzle,validPuzzleEntry);
    const arr=window.PYQUEST_QUESTIONS; arr.splice(0,arr.length,...q);
    window.PYQUEST_PUZZLES=pz;
    contentInfo=window.PyQuestEngine.handle('content');
  }
  function startBank() {
    if(!useShared())return;
    BANK().watch((val,err)=>{
      if(err||val===null)return;
      bankVal=val; applyBank();
      if(!playing()&&!(page==='admin'&&adm.view!=='list'))render({keepScroll:true});
    });
  }
  async function refreshBankStatus() {
    if(!useShared()||bankBusy)return;
    bankBusy=true;
    try { bankStatus=await BANK().status(); } catch(e) { bankStatus={state:'error'}; }
    bankBusy=false;
    if(page==='admin'&&['quiz','puzzles'].includes(adminTab))render({keepScroll:true});
  }

  const t = (key, values={}) => {
    const text = (translations[language] && translations[language][key]) || translations.en[key] || key;
    return text.replace(/\{(\w+)\}/g,(_,name)=>values[name] ?? '');
  };
  const pick = key => { const list=t(key).split('|'); return list[Math.floor(Math.random()*list.length)]; };
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const percent = (a,b) => b ? Math.round(a/b*100) : 0;
  const ICON = () => window.PyQuestArt.ICON;
  const sfx = name => window.PyQuestFX?.play(name);
  /* Skin & profil (update 13) */
  const SKN=()=>window.PYQUEST_SKINS;
  const mySkin=(th=theme)=>{const id=state&&state.eq&&state.eq[th];return id&&id!=='base'&&SKN()&&SKN().get(id)?id:'';};
  const myHero=(extra='no-bg')=>window.PyQuestArt.hero(extra,mySkin());
  let prof={}, account=null, profView='profile', shopPreview='';
  const NAME2_RE=/^[\p{L}\p{N} _.\-]{2,20}$/u, WEEK=7*864e5;
  function myAvatar(){
    if(prof.pic&&/^data:image\//.test(prof.pic))return `<img src="${prof.pic}" alt="" class="pf-img">`;
    if(prof.av&&window.PyQuestArt.AVATARS.includes(prof.av))return window.PyQuestArt.avatar(prof.av);
    return window.PyQuestArt.miniHead(theme,mySkin());
  }
  const coinIc=()=>ICON().coin||'';

  /* Penyerlah sintaks Python ringkas */
  const PY_KW=new Set('False None True and as break class continue def elif else except finally for from global if import in is lambda not or pass return try while with yield'.split(' '));
  const PY_BI=new Set('print len range int str float bool list dict set tuple input type sum max min abs round sorted enumerate zip map filter any all ord chr isinstance open'.split(' '));
  function highlight(code) {
    const re=/(#[^\n]*)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_][A-Za-z0-9_]*)\b/g;
    let out='',last=0,m;
    while((m=re.exec(code))){
      out+=escapeHtml(code.slice(last,m.index));
      if(m[1])out+=`<span class="tk-c">${escapeHtml(m[1])}</span>`;
      else if(m[2])out+=`<span class="tk-s">${escapeHtml(m[2])}</span>`;
      else if(m[3])out+=`<span class="tk-n">${m[3]}</span>`;
      else if(PY_KW.has(m[4]))out+=`<span class="tk-k">${m[4]}</span>`;
      else if(PY_BI.has(m[4]))out+=`<span class="tk-b">${m[4]}</span>`;
      else out+=escapeHtml(m[4]);
      last=re.lastIndex;
    }
    return out+escapeHtml(code.slice(last));
  }

  window.PyQuestHighlight=highlight;
  async function api(action,payload={}) {
    const out=window.PyQuestEngine.handle(action,{...payload,lang:language});
    try {
      const A=window.PyQuestAnalytics;
      if(A&&out&&out.result&&out.result!==lastResult&&['answer_quiz','end_quiz','answer_puzzle','end_puzzle'].includes(action)){lastResult=out.result;A.event(action.includes('quiz')?'quiz':'puzzle');}
    } catch(_) {}
    return out;
  }
  function saveProfile(profile=state) {
    if (!profile?.name) return;
    const snapshot = {};
    for (const key of ['quiz_xp','puzzle_xp','quizzes_completed','quiz_correct','quiz_answered','perfect_quiz','recent_quiz','puzzles_completed','puzzle_correct','puzzle_answered','perfect_puzzle','recent_puzzle','streak','last_activity_date','coins','coins_total','skins','eq']) snapshot[key] = profile[key];
    if (mode==='user'&&window.PyQuestAuth) window.PyQuestAuth.saveProfile(snapshot,profile.xp);
  }
  function updateState(next) { if (!next) return; state = next; saveProfile(next); }
  function notify(message,success=false) {
    const node=document.createElement('div'); node.className=`toast${success?' success':''}`; node.textContent=message;
    toastRegion.appendChild(node); window.setTimeout(()=>node.remove(),3200);
  }

  /* Ular yang membelit tulisan PyQuest — warna & aksesori ikut tema (CSS). */
  function decorateBrand() {
    const host=document.querySelector('.brand-text');
    const word=host&&host.querySelector('.brand-word');
    if(!host||!word||!word.offsetWidth)return;
    host.querySelectorAll('.snake-layer').forEach(n=>n.remove());
    const PADL=10,PADR=22,W=word.offsetWidth,SH=56,cy=SH/2+3,A=12.5;
    const x1=PADL+W+3,x0=PADL-8,P=(x1-x0)/2.5,hostW=PADL+W+PADR;
    const theta=x=>Math.PI+2*Math.PI*(x-x1)/P;
    const yAt=x=>cy+A*Math.sin(theta(x));
    const back=[],front=[];let cur=null,curFront=null;
    for(let x=x0;x<=x1+0.01;x+=0.75){
      const isFront=Math.cos(theta(x))>0;
      if(curFront!==isFront){const prev=cur&&cur.length?cur[cur.length-1]:null;cur=prev?[prev]:[];curFront=isFront;(isFront?front:back).push(cur);}
      cur.push([x,yAt(x)]);
    }
    const toPath=segs=>segs.map(seg=>'M'+seg.map(p=>p[0].toFixed(2)+' '+p[1].toFixed(2)).join('L')).join(' ');
    const ns='http://www.w3.org/2000/svg';
    const layer=(cls,paths,head)=>{
      const svg=document.createElementNS(ns,'svg');
      svg.setAttribute('class','snake-layer '+cls);svg.setAttribute('width',hostW);svg.setAttribute('height',SH);
      svg.setAttribute('viewBox','0 0 '+hostW+' '+SH);svg.setAttribute('aria-hidden','true');
      svg.style.marginTop=(-SH/2)+'px';
      svg.innerHTML='<path class="sl-out" d="'+paths+'" fill="none" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>'+
        '<path class="sl-main" d="'+paths+'" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+
        '<path class="sl-dots" d="'+paths+'" fill="none" stroke-opacity=".8" stroke-width="1" stroke-linecap="round" stroke-dasharray="0.1 4.5"/>'+(head||'');
      host.appendChild(svg);
    };
    const dx=0.5,ang=Math.atan2(yAt(x1)-yAt(x1-dx),dx)*180/Math.PI;
    const headSvg='<g transform="translate('+x1.toFixed(2)+' '+yAt(x1).toFixed(2)+') rotate('+ang.toFixed(1)+')">'+
      '<path class="snake-tongue" d="M12.5 0 L17.5 0 M17.5 0 L20.5 -2.2 M17.5 0 L20.5 2.2" fill="none" stroke="#ff5a4a" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<ellipse class="hd-out" cx="6" cy="0" rx="8.4" ry="6"/><ellipse class="hd-main" cx="6" cy="0" rx="7.2" ry="4.9"/>'+
      '<g class="eyes-std"><g class="eye-l"><circle cx="7.6" cy="-2.1" r="1.9" fill="#fff"/><circle cx="8.2" cy="-2.1" r="1" fill="#12202f"/></g>'+
      '<g class="eye-r"><circle cx="7.6" cy="2.1" r="1.9" fill="#fff"/><circle cx="8.2" cy="2.1" r="1" fill="#12202f"/></g></g>'+
      /* Lanun: topi tiga segi + tampal mata */
      '<g class="acc acc-pirate"><circle cx="7.6" cy="2.1" r="2.1" fill="#1d1d1f"/><path d="M3 4.2 L 11 0.5" stroke="#1d1d1f" stroke-width=".7"/>'+
      '<path d="M-2.5 -9.5 C 0 -5, 1.5 -3.2, 3 -3 L 10 -3 C 11.5 -3.2, 13 -5, 15 -9.5 C 11 -6.5, 2 -6.5, -2.5 -9.5Z" fill="#1d1d1f"/><path d="M1 -6 C 3 -9, 10 -9, 12 -6" fill="#1d1d1f"/><path d="M-2.5 -9.5 C 2 -6.6, 11 -6.6, 15 -9.5" fill="none" stroke="#f4b41a" stroke-width=".8"/><circle cx="6.5" cy="-6.6" r="1.1" fill="#fff"/></g>'+
      /* Siber: visor neon + antena */
      '<g class="acc acc-cyber"><rect x="5.6" y="-4.2" width="4.6" height="8.4" rx="2" fill="#00e5ff" style="filter:drop-shadow(0 0 2px #00e5ff)"/><path d="M2 -4.8 L -1 -10" stroke="#9aa6b2" stroke-width="1"/><circle cx="-1" cy="-10.4" r="1.4" fill="#ff2a6d"/><rect x="0" y="2" width="3" height="1.6" rx=".6" fill="#55606d"/></g>'+
      /* Lelaki: topi terbalik */
      '<g class="acc acc-boys"><path d="M-1 -5.6 C 3 -6.6, 6.5 -3.4, 6.5 0 C 6.5 3.4, 3 6.6, -1 5.6 C -2.6 3, -2.6 -3, -1 -5.6Z" fill="#2563eb"/><path d="M-1 -3.4 L -6.5 -2.2 L -6.5 2.2 L -1 3.4Z" fill="#1e3a8a"/><circle cx="2.4" cy="0" r="1" fill="#f97316"/></g>'+
      /* Perempuan: reben */
      '<g class="acc acc-girls"><path d="M3 -5.5 l-4.2 -3.6 v6.6z M3 -5.5 l4.2 -3.6 v6.6z" fill="#ec4899"/><circle cx="3" cy="-5.6" r="1.4" fill="#f9a8d4"/></g>'+
      /* Fantasi Gelap: tanduk; Fantasi Cahaya: lingkaran cahaya */
      '<g class="acc acc-dark"><path d="M2 -4 C -1 -7, -2 -10, 0 -13 C 1 -10, 3 -8, 5 -5Z M2 4 C -1 7, -2 10, 0 13 C 1 10, 3 8, 5 5Z" fill="#e7dcc8" stroke="#1a1026" stroke-width=".5"/></g>'+
      '<g class="acc acc-retro" shape-rendering="crispEdges"><path d="M4 -5 h2 v10 h-2z M7 -5 h2 v4 h-2z M7 1 h2 v4 h-2z" fill="#111"/></g>'+
      '<g class="acc acc-light"><ellipse cx="0" cy="0" rx="2.2" ry="7.5" fill="none" stroke="#fbbf24" stroke-width="1.2" style="filter:drop-shadow(0 0 2px #fde68a)"/></g>'+
      '</g>';
    layer('snake-back',toPath(back),'');
    layer('snake-front',toPath(front),headSvg);
  }

  /* =====================================================================
     Navigasi
     ===================================================================== */
  async function confirmLeaveGame() {
    if(!playing())return true;
    const ok=await confirmDialog(t('exitTitle'),t('exitConfirm'),t('exitYes'),t('exitNo'),{tone:'danger',sad:true});
    if(ok)await cancelSession();
    return ok;
  }
  async function cancelSession() {
    stopTimer();
    const s=session; session=null;
    try { if(s&&!s.result){const r=await api(s.kind==='quiz'?'cancel_quiz':'cancel_puzzle');updateState(r.state);} } catch(_) {}
  }
  async function setPage(next,opts={}) {
    if(next==='quiz'||next==='puzzle'){prefs.mode=next;savePrefs();next='game';}
    if(page==='game'&&next!=='game'&&playing()){ if(!(await confirmLeaveGame()))return; }
    if(page==='multi'&&next!=='multi'&&mp.code&&mp.view==='room'){ if(!(await mpLeave()))return; }
    if(next!=='game'&&session&&session.result)session=null;
    page=next; mobileMenuOpen=false; render(); if(!opts.keepScroll)window.scrollTo({top:0,behavior:'smooth'});
  }
  function topNav() {
    const links=[['home','home'],['game','game'],['multi','multi'],['info','info'],['admin','admin']];
    const I=ICON();
    const userBits=state?.name?`<button type="button" class="profile-pill${page==='profile'?' active':''}" data-page="profile" title="${t('openProfile')}" aria-label="${t('openProfile')}"><span class="avatar">${myAvatar()}</span><span class="profile-name">${escapeHtml(state.name)}</span></button>${mode==='user'?`<button type="button" class="name-change" data-action="logout">${t('logOut')}</button>`:`<button type="button" class="name-change" data-action="change-name">${t('changeName')}</button>`}<span class="xp-pill">${state.xp} XP</span><button type="button" class="coin-pill" data-page="profile" data-pv="avatar" title="${t('shopTitle')}">${coinIc()}<b>${state.coins||0}</b></button>`:'';
    return `<div class="nav-wrap"><a class="brand" href="#home" data-page="home"><span class="brand-text"><span class="brand-word">Py<em>Quest</em></span></span></a><nav class="nav-links${mobileMenuOpen?' open':''}" aria-label="Main navigation">${links.map(([key,label])=>`<a href="#${key}" class="nav-link${page===key?' active':''}${key==='game'?' nav-game':''}" data-page="${key}">${key==='game'?'<span class="dot"></span>':''}${t(label)}</a>`).join('')}</nav><div class="nav-right"><button type="button" class="theme-btn" data-action="open-theme" aria-label="${t('theme')}">${I.palette}<span>${t('theme')}</span></button><div class="language-switch" aria-label="${t('language')}"><button type="button" data-lang="en" class="${language==='en'?'selected':''}" aria-pressed="${language==='en'}">EN</button><button type="button" data-lang="ms" class="${language==='ms'?'selected':''}" aria-pressed="${language==='ms'}">BM</button></div>${userBits}<button type="button" class="menu-toggle" data-action="toggle-menu" aria-label="Toggle menu">${mobileMenuOpen?'×':'☰'}</button></div></div>`;
  }

  /* =====================================================================
     Halaman utama (sebelum log masuk)
     ===================================================================== */
  function renderLanding() {
    const qn=Object.values(contentInfo.quiz_counts||{}).reduce((a,b)=>a+b,0), pn=Object.values(contentInfo.puzzle_counts||{}).reduce((a,b)=>a+b,0);
    return `<section class="landing"><div class="landing-copy"><span class="tag-pill">${ICON().star}${t('tag2')}</span><h1 class="landing-title">${t('headline2')}</h1><p>${t('sub2')}</p><div class="landing-actions"><button class="btn btn-primary btn-big" data-action="get-started">${t('getStarted')} →</button><button class="btn btn-secondary" data-action="open-theme">${ICON().palette} ${t('pickTheme')}</button></div><div class="landing-stats"><div><b>${qn}</b><span>${t('statQuiz')}</span></div><div><b>${pn}</b><span>${t('statPuzzle')}</span></div><div><b>4</b><span>${t('statLevels')}</span></div></div></div><div class="hero-stage">${window.PyQuestArt.hero()}<div class="hero-bubble">${t('heroBubble')}</div><div class="hero-chip c1">print(<b>"Hero!"</b>)</div><div class="hero-chip c2">xp += <b>25</b></div></div></section>`;
  }
  function renderNameEntry() {
    if (!namePromptOpen) return renderLanding();
    if (authView==='forgot') return renderForgot();
    if (authView==='signup'||authView==='login') return renderAuthForm(authView);
    return renderAuthChoice();
  }
  function renderAuthChoice() {
    const I=ICON();
    const card=(cls,attrs,icon,title,desc,tag)=>`<button type="button" class="auth-card ${cls}" ${attrs}><span class="ac-tag">${t(tag)}</span><span class="ac-icon">${icon}</span><h3>${t(title)}</h3><p>${t(desc)}</p><span class="ac-go">→</span></button>`;
    return `<section class="auth-wrap auth-choose"><div class="auth-mascot m-idle" id="auth-mascot">${window.PyQuestArt.hero('no-bg')}<div class="auth-bubble" id="auth-bubble">${t('bubChoose')}</div></div><div class="auth-head"><h1>${t('authTitle2')}</h1><p>${t('authIntro2')}</p></div><div class="auth-grid">${card('ac-signup','data-action="auth-view" data-view="signup"',I.plus,'signUp','signUpDesc','signUpTag')}${card('ac-login','data-action="auth-view" data-view="login"',I.login,'logIn','logInDesc','logInTag')}${card('ac-guest','data-action="guest-start"',I.ghost,'guest','guestDesc','guestTag')}</div></section>`;
  }
  function renderAuthForm(view) {
    const signup=view==='signup', I=ICON();
    const passField=(id,name,label,auto)=>`<label class="field-label" for="${id}">${label}</label><div class="pass-wrap"><input id="${id}" class="text-input" type="password" name="${name}" autocomplete="${auto}" required><button type="button" class="pass-eye" data-action="toggle-pass" data-for="${id}" aria-label="${t('showPass')}" aria-pressed="false">${I.eye}</button></div>`;
    return `<section class="auth-split ${signup?'is-signup':'is-login'}"><div class="auth-side"><div class="auth-mascot m-idle" id="auth-mascot">${window.PyQuestArt.hero('no-bg')}<div class="auth-bubble" id="auth-bubble">${t(signup?'bubSignup':'bubHi')}</div></div></div><div class="auth-form-card card"><div class="auth-steps"><span class="${signup?'on':''}">${t('signUp')}</span><span class="${signup?'':'on'}">${t('logIn')}</span></div><h1>${t(signup?'signupTitle':'loginTitle')}</h1><p class="auth-lead">${t(signup?'usernameHelp':'loginHint')}</p><form id="${signup?'signup-form':'login-form'}" novalidate><label class="field-label" for="auth-user">${t(signup?'username':'usernameOrEmail')}</label><div class="input-icon">${I.user}<input id="auth-user" class="text-input" name="username" maxlength="${signup?20:100}" autocomplete="username" autocapitalize="none" spellcheck="false" required></div>${passField('auth-pass','password',t('passwordLabel'),signup?'new-password':'current-password')}${signup?`<div class="pw-meter" id="pw-meter" data-level="0"><i></i><i></i><i></i><span id="pw-label"></span></div>${passField('auth-pass2','password2',t('confirmPassword'),'new-password')}<ul class="checklist" id="checklist"><li data-ck="user">${I.check}${t('ckUser')}</li><li data-ck="pass">${I.check}${t('ckPass')}</li><li data-ck="match">${I.check}${t('ckMatch')}</li></ul><label class="field-label" for="auth-email">${t('emailOptional')}</label><input id="auth-email" class="text-input" type="email" name="email" maxlength="100" autocomplete="email" autocapitalize="none" spellcheck="false"><p class="auth-hint">${t('emailHelp')}</p>`:`<p class="auth-hint"><a href="#" class="auth-link" data-action="auth-view" data-view="forgot">${t('forgot')}</a></p>`}<div class="form-error" id="auth-error" role="alert"></div><button class="btn btn-primary btn-big login-submit" type="submit">${signup?t('createAccount'):t('logIn')}</button><div class="auth-switch"><button type="button" class="btn btn-ghost" data-action="auth-view" data-view="choose">← ${t('back')}</button><button type="button" class="btn btn-ghost" data-action="auth-view" data-view="${signup?'login':'signup'}">${signup?t('logIn'):t('signUp')} →</button></div></form></div></section>`;
  }
  function renderForgot() {
    const side=`<div class="auth-side"><div class="auth-mascot ${forgotState.sent?'m-happy':'m-idle'}" id="auth-mascot">${window.PyQuestArt.hero('no-bg')}<div class="auth-bubble" id="auth-bubble">${forgotState.sent?t('fsTitle'):t('bubForgot')}</div></div></div>`;
    if(forgotState.sent){
      const f=forgotState.sent, left=Math.max(0,60-Math.floor((Date.now()-f.at)/1000));
      return `<section class="auth-split is-forgot">${side}<div class="auth-form-card card fs-card"><div class="fs-mail" aria-hidden="true">✉️</div><h1>${t('fsTitle')}</h1><p class="auth-lead">${t(f.byUsername?'fsToUser':'fsToEmail')}</p><p class="fs-to">${escapeHtml(f.to)}</p>${f.resent?`<p class="form-ok">${t('fsResent')}</p>`:''}<ol class="fs-steps"><li>${t('fs1')}</li><li>${t('fs2')}</li><li>${t('fs3')}</li><li>${t('fs4')}</li></ol><div class="form-error" id="auth-error" role="alert"></div><button type="button" class="btn btn-secondary login-submit" id="fs-resend" data-action="fs-resend" ${left?'disabled':''}>${left?t('fsWait',{n:left}):t('fsResend')}</button><button type="button" class="btn btn-primary btn-big login-submit" data-action="auth-view" data-view="login">${t('backToLogin')}</button><div class="auth-switch"><button type="button" class="btn btn-ghost" data-action="fs-other">${t('fsOther')}</button></div></div></section>`;
    }
    return `<section class="auth-split is-forgot">${side}<div class="auth-form-card card"><h1>${t('forgotTitle')}</h1><p class="auth-lead">${t('forgotHint')}</p><form id="forgot-form" novalidate><label class="field-label" for="forgot-id">${t('usernameOrEmail')}</label><div class="input-icon">${ICON().user}<input id="forgot-id" class="text-input" name="who" maxlength="100" autocomplete="username" autocapitalize="none" spellcheck="false" required value="${escapeHtml(forgotState.idf)}"></div><div class="form-error" id="auth-error" role="alert"></div><button class="btn btn-primary btn-big login-submit" type="submit">${t('forgotSend')}</button><div class="auth-switch"><button type="button" class="btn btn-ghost" data-action="auth-view" data-view="login">← ${t('backToLogin')}</button></div></form></div></section>`;
  }
  function forgotTick() {
    clearInterval(forgotState.timer);
    forgotState.timer=setInterval(()=>{
      const b=document.getElementById('fs-resend'); const f=forgotState.sent;
      if(!b||!f){clearInterval(forgotState.timer);return;}
      const left=Math.max(0,60-Math.floor((Date.now()-f.at)/1000));
      b.disabled=left>0; b.textContent=left?t('fsWait',{n:left}):t('fsResend');
      if(!left)clearInterval(forgotState.timer);
    },500);
  }
  async function sendForgot(idf,resend) {
    const A=window.PyQuestAuth, err=document.getElementById('auth-error');
    if(err)err.textContent='';
    if(!A||!A.configured){if(err)err.textContent=t('errNoConfig');mascotState('m-sad');return;}
    if(authBusy)return;
    authBusy=true;
    const btn=document.querySelector('#forgot-form button[type="submit"],#fs-resend'); if(btn){btn.disabled=true;btn.classList.add('loading');}
    try {
      const r=await A.forgot(idf,language);
      forgotState.idf=idf; forgotState.sent={to:(r&&r.to)||idf,byUsername:Boolean(r&&r.byUsername),at:Date.now(),resent:Boolean(resend)};
      sfx('win'); render({keepScroll:true}); forgotTick();
    } catch(e) {
      const msg=authError(e); const el=document.getElementById('auth-error'); if(el)el.textContent=msg; mascotState('m-sad',null,msg); sfx('wrong');
      if(btn){btn.disabled=false;btn.classList.remove('loading');}
    } finally { authBusy=false; }
  }
  /* Maskot: mata ikut tetikus, tutup mata bila taip kata laluan */
  function mascotState(cls,bubbleKey,raw) {
    const m=document.getElementById('auth-mascot'); if(!m)return;
    m.classList.remove('m-idle','m-typing','m-shy','m-peek','m-sad','m-happy');
    void m.offsetWidth; m.classList.add(cls);
    const b=document.getElementById('auth-bubble');
    if(b&&(bubbleKey||raw)){b.textContent=raw||t(bubbleKey);b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');}
  }
  function lookAt(x,y) {
    const m=document.getElementById('auth-mascot'); if(!m||m.classList.contains('m-shy'))return;
    const head=m.querySelector('.hx-head'); if(!head)return;
    const r=head.getBoundingClientRect(); const cx=r.left+r.width*.5, cy=r.top+r.height*.45;
    const dx=x-cx, dy=y-cy, d=Math.hypot(dx,dy)||1, k=Math.min(1,d/260);
    m.querySelectorAll('.hx-pupil,.hx-glint').forEach(p=>{p.style.transform=`translate(${(dx/d*6*k).toFixed(1)}px,${(dy/d*6*k).toFixed(1)}px)`;});
  }
  function updateSignupChecks() {
    const u=document.getElementById('auth-user'), p=document.getElementById('auth-pass'), p2=document.getElementById('auth-pass2');
    const list=document.getElementById('checklist'); if(!u||!p||!list)return;
    const okU=(window.PyQuestAuth?.NAME_RE||/^[A-Za-z0-9_]{3,20}$/).test(u.value.trim());
    const okP=[...p.value].length>=6, okM=okP&&p2&&p.value===p2.value;
    list.querySelector('[data-ck="user"]').classList.toggle('ok',okU);
    list.querySelector('[data-ck="pass"]').classList.toggle('ok',okP);
    list.querySelector('[data-ck="match"]').classList.toggle('ok',okM);
    let lvl=0; const v=p.value;
    if(v.length>=6)lvl=1;
    if(v.length>=8&&/\d/.test(v)&&/[A-Za-z]/.test(v))lvl=2;
    if(v.length>=10&&/\d/.test(v)&&/[a-z]/.test(v)&&/[A-Z]/.test(v)||v.length>=10&&/[^A-Za-z0-9]/.test(v)&&/\d/.test(v))lvl=3;
    const meter=document.getElementById('pw-meter'); if(meter){meter.dataset.level=v?String(Math.max(1,lvl)):'0';document.getElementById('pw-label').textContent=v?t(lvl>=3?'pwStrong':lvl===2?'pwOk':'pwWeak'):'';}
    return okU&&okP&&okM;
  }
  function authError(e) {
    const c=(e&&e.code)||'';
    if(c==='pq/username')return t('errUsername');
    if(c==='pq/password')return t('errPass12');
    if(c==='pq/rules')return t('errRules');
    if(c==='pq/taken')return t('errTaken');
    if(c==='pq/email')return t('errEmail');
    if(c==='pq/email-taken')return t('errEmailTaken');
    if(c==='pq/no-recovery')return t('errNoRecovery');
    if(c==='pq/forgot-empty')return t('errForgotEmpty');
    if(c==='auth/email-already-in-use')return t('errTaken');
    if(['auth/invalid-credential','auth/invalid-login-credentials','auth/user-not-found','auth/wrong-password','auth/invalid-email'].includes(c))return t('errBad');
    if(c==='auth/operation-not-allowed')return t('errNotEnabled');
    if(c==='auth/too-many-requests')return t('errMany');
    if(c==='auth/network-request-failed'||c==='sdk')return t('errNet');
    return t('networkError');
  }
  async function enterAccount(user,fresh,keepPage) {
    const A=window.PyQuestAuth;
    mode='';
    await api('reset');
    updateState((await api('start',{name:user.username})).state);
    if(!fresh){
      try { const saved=await A.loadProfile(); if(saved)updateState((await api('restore_profile',{profile:saved})).state); }
      catch(e){ await api('reset'); try{await A.logOut();}catch(_){} throw e; }
    }
    account={username:user.username}; prof={};
    if(!fresh&&A.loadProf){ try{ prof=(await A.loadProf())||{}; }catch(_){prof={};} }
    if(prof.n&&prof.n!==user.username){ try{ state=(await api('rename',{name:prof.n})).state; }catch(_){} }
    mode='user';
    if(fresh)saveProfile();
    namePromptOpen=false;
    if(!keepPage){page=pendingPage;mascotState('m-happy');window.PyQuestFX?.confetti({count:140});sfx('win');notify(t('welcome',{name:user.username}),true);}
    render();
  }
  async function leaveToAuth(view) {
    stopTimer();session=null;
    const r=await api('reset');
    state={...r.state,name:''};mode='';prof={};account=null;profView='profile';shopPreview='';
    namePromptOpen=view!=='landing';authView=view==='landing'?'choose':view;pendingPage='home';page='home';mobileMenuOpen=false;
    render();window.scrollTo({top:0});
  }
  async function startGuest() {
    const ok=await showDialog({title:t('guestConfirmTitle'),message:t('guestConfirmMsg'),ok:t('guestGo'),cancel:t('back')});
    if(!ok)return;
    await api('reset');
    const r=await api('start',{name:t('guest')});
    mode='guest';prof={};account=null;updateState(r.state);namePromptOpen=false;page=pendingPage;sfx('win');render();
  }

  /* =====================================================================
     PROFIL (update 13): bar sisi Profil / Avatar
     ===================================================================== */
  function nameLock() {
    const nt=Number(prof.nt)||0; if(!nt)return null;
    const until=nt+WEEK; if(Date.now()>=until)return null;
    return {until,days:Math.max(1,Math.ceil((until-Date.now())/864e5))};
  }
  function renderProfile() {
    const I=ICON(), L=state.level;
    const tab=(id,icon,label,extra='')=>`<button type="button" class="pf-tab${profView===id?' active':''}" data-action="pf-view" data-view="${id}" aria-pressed="${profView===id}">${icon}<span>${label}</span>${extra}</button>`;
    const side=`<aside class="pf-side card"><div class="pf-me"><span class="pf-big">${myAvatar()}</span><span class="pf-who"><b>${escapeHtml(state.name)}</b>${account?`<small>@${escapeHtml(account.username)}</small>`:`<small>${t('guest')}</small>`}<span class="pf-rank">${escapeHtml(rankName(L.number))}</span></span></div>
      <nav class="pf-tabs" aria-label="${t('myProfile')}">${tab('profile',I.user,t('profile'))}${tab('avatar',I.bag,t('avatarTab'),`<span class="pf-tabcoin">${coinIc()}${state.coins||0}</span>`)}</nav>
      ${mode==='user'?`<button type="button" class="btn btn-ghost pf-logout" data-action="logout">${I.door} ${t('logOut')}</button>`:`<button type="button" class="btn btn-ghost pf-logout" data-action="change-name">${I.login} ${t('changeName')}</button>`}</aside>`;
    const body=profView==='avatar'?renderShop():renderProfileMain();
    return `<section class="pf-page">${side}<div class="pf-main">${mode==='guest'?`<p class="guest-note pf-guest">${t('pfGuest')}</p>`:''}${body}</div></section>`;
  }
  function renderProfileMain() {
    const I=ICON(), lock=nameLock();
    const loc=language==='ms'?'ms-MY':'en-GB';
    const presets=window.PyQuestArt.AVATARS.map(id=>`<button type="button" class="pf-preset${prof.av===id&&!prof.pic?' on':''}" data-action="pf-av" data-av="${id}" aria-pressed="${prof.av===id&&!prof.pic}">${window.PyQuestArt.avatar(id)}</button>`).join('');
    const usingSkin=!prof.pic&&!prof.av;
    const owned=(state.skins||[]).length, total=SKN()?SKN().SKINS.length:0;
    return `<article class="card pf-card"><h2>${I.camera} ${t('pfPicTitle')}</h2><p class="muted">${t('pfPicHint')}</p>
      <div class="pf-pic-row"><span class="pf-pic-now">${myAvatar()}</span><div class="pf-pic-btns"><label class="btn btn-primary pf-upload" for="pf-file">${I.camera} ${t('pfUpload')}</label><input type="file" id="pf-file" accept="image/png,image/jpeg,image/gif,image/webp" hidden><button type="button" class="btn btn-secondary${usingSkin?' on':''}" data-action="pf-skinpic">${window.PyQuestArt.miniHead(theme,mySkin())} ${t('pfUseSkin')}</button></div></div>
      <h3 class="pf-sub">${t('pfReady')}</h3><div class="pf-presets">${presets}</div><p class="pf-note">${t('pfPicNote')}</p></article>
    <article class="card pf-card"><h2>${I.pencil} ${t('pfNameTitle')}</h2><p class="muted">${t('pfNameHint')}</p>
      <form id="pf-name-form" class="pf-name-form" novalidate><input id="pf-name" class="text-input" maxlength="20" value="${escapeHtml(state.name)}" ${lock?'disabled':''} autocomplete="off" aria-label="${t('pfNameTitle')}"><button type="submit" class="btn btn-accent" ${lock?'disabled':''}>${lock?I.lock:''} ${t('pfNameSave')}</button></form>
      <div class="form-error" id="pf-name-err" role="alert"></div>
      <p class="pf-rule${lock?' locked':''}">${lock?t('pfNameWait',{date:new Date(lock.until).toLocaleDateString(loc,{weekday:'short',day:'numeric',month:'short'}),n:lock.days}):t('pfNameRule')}</p>
      ${account?`<p class="pf-login">${t('pfLoginName')}: <b>${escapeHtml(account.username)}</b></p>`:''}</article>
    <article class="card pf-card"><h2>${I.trophy} ${t('pfStatsTitle')}</h2>${rankBlock(true)}<div class="pf-stats"><div><b>${state.xp}</b><span>XP</span></div><div><b>${coinIc()}${state.coins||0}</b><span>${t('coins')}</span></div><div><b>${owned}/${total}</b><span>${t('pfSkinsOwned')}</span></div><div><b>${state.quizzes_completed+state.puzzles_completed}</b><span>${t('pfRounds')}</span></div></div></article>`;
  }
  function renderShop() {
    const I=ICON(), K=SKN(); if(!K)return '';
    const list=K.forTheme(theme), cur=state.eq&&state.eq[theme]||'base';
    if(!shopPreview||(shopPreview!=='base'&&!list.some(x=>x.id===shopPreview)))shopPreview=cur&&cur!=='base'&&list.some(x=>x.id===cur)?cur:'base';
    const pv=shopPreview==='base'?null:K.get(shopPreview);
    const owns=id=>id==='base'||(state.skins||[]).includes(id);
    const btn=(id,price)=>{
      if(id===(mySkin()||'base'))return `<button type="button" class="btn sk-btn sk-on" disabled>${I.check} ${t('shopEquipped')}</button>`;
      if(owns(id))return `<button type="button" class="btn btn-primary sk-btn" data-action="sk-equip" data-id="${id}">${t('shopEquip')}</button>`;
      const need=price-(state.coins||0);
      return need>0?`<button type="button" class="btn sk-btn sk-need" data-action="sk-buy" data-id="${id}">${I.lock} ${t('shopNeed',{n:need})}</button>`:`<button type="button" class="btn btn-accent sk-btn" data-action="sk-buy" data-id="${id}">${coinIc()} ${t('shopBuy')} · ${price}</button>`;
    };
    const card=(id,sk)=>`<article class="sk-card rar-${sk?sk.rarity:'base'}${shopPreview===id?' sel':''}${id===(mySkin()||'base')?' equipped':''}"><button type="button" class="sk-look" data-action="sk-preview" data-id="${id}" aria-label="${t('shopPreview')}: ${escapeHtml(sk?sk.name[language]:t('shopBase'))}">${window.PyQuestArt.hero('no-bg',sk?sk.id:'')}</button><span class="sk-rar">${sk?t('rar_'+sk.rarity):t('shopFree')}</span><b class="sk-name">${escapeHtml(sk?sk.name[language]||sk.name.en:t('shopBase'))}</b><span class="sk-price">${sk?(owns(id)?`${I.check} ${t('shopOwned')}`:`${coinIc()} ${sk.price}`):t('shopFree')}</span>${btn(id,sk?sk.price:0)}</article>`;
    const themes=THEMES.map(id=>`<button type="button" class="mini-theme tc-${id}${id===theme?' selected':''}" data-theme-pick="${id}" title="${escapeHtml(t('th_'+id))}" aria-label="${escapeHtml(t('th_'+id))}">${window.PyQuestArt.miniHead(id,state.eq&&state.eq[id]!=='base'?state.eq[id]:'')}</button>`).join('');
    const C=contentInfo.coins||{easy:3,normal:6,medium:10,hard:15};
    return `<article class="card shop-head"><div class="shop-title"><h1 class="page-title">${I.bag} ${t('shopTitle')}</h1><span class="shop-wallet">${coinIc()}<b>${state.coins||0}</b><small>${t('coinsShort')}</small></span></div><p class="muted">${t('shopHint',{theme:`<b>${escapeHtml(t('th_'+theme))}</b>`})}</p><div class="mini-themes shop-themes">${themes}</div></article>
      <div class="shop-stage card rar-${pv?pv.rarity:'base'}"><div class="ss-hero">${window.PyQuestArt.hero('',pv?pv.id:'')}</div><div class="ss-info"><span class="sk-rar">${pv?t('rar_'+pv.rarity):t('shopFree')}</span><h2>${escapeHtml(pv?pv.name[language]||pv.name.en:t('shopBase'))}</h2><p class="muted">${escapeHtml(t('th_'+theme))}</p>${btn(shopPreview,pv?pv.price:0)}</div></div>
      <div class="sk-grid">${card('base',null)}${list.map(sk=>card(sk.id,sk)).join('')}</div>
      <article class="card coin-rules"><h3>${coinIc()} ${t('coinRulesTitle')}</h3><p>${t('coinRules')}</p><div class="cr-grid">${DIFFS.map(d=>`<div class="cr lvl-${d}"><b>${t('lvl_'+d)}</b><span>${coinIc()} ${C[d]}</span></div>`).join('')}</div></article>`;
  }
  async function saveProfPatch(patch) {
    if(mode==='user'&&window.PyQuestAuth&&window.PyQuestAuth.saveProf){ prof=await window.PyQuestAuth.saveProf(patch); }
    else { prof={...prof,...patch}; if('n' in patch)prof.nt=Date.now(); }
    return prof;
  }
  async function uploadPic(file) {
    if(!/^image\/(png|jpe?g|gif|webp)$/i.test(file.type||'')){notify(t('pfBadFile'));return;}
    if(file.size>10*1024*1024){notify(t('pfBig'));return;}
    try {
      const url=URL.createObjectURL(file); const img=new Image();
      await new Promise((res,rej)=>{img.onload=res;img.onerror=rej;img.src=url;});
      const S=160,c=document.createElement('canvas');c.width=c.height=S;
      const k=Math.min(img.naturalWidth,img.naturalHeight), ctx=c.getContext('2d');
      ctx.fillStyle='#fff';ctx.fillRect(0,0,S,S);
      ctx.drawImage(img,(img.naturalWidth-k)/2,(img.naturalHeight-k)/2,k,k,0,0,S,S);
      URL.revokeObjectURL(url);
      const data=c.toDataURL('image/jpeg',.82);
      await saveProfPatch({pic:data,av:null});
      sfx('win');notify(t('pfSaved'),true);render({keepScroll:true});
    } catch(e){ notify(e&&e.message==='name'?t('pfNameBad'):(e&&e.code?t('pfSaveErr'):t('pfBadFile'))); }
  }
  async function changeName() {
    const input=document.getElementById('pf-name'), err=document.getElementById('pf-name-err'); if(!input)return;
    const name=input.value.replace(/\s+/g,' ').trim();
    const show=m=>{if(err)err.textContent=m;sfx('wrong');};
    if(nameLock())return show(t('pfNameWait',{date:'',n:nameLock().days}));
    if(!NAME2_RE.test(name))return show(t('pfNameBad'));
    if(name===state.name)return show(t('pfNameSame'));
    const ok=await confirmDialog(t('pfNameConfirm',{name}),t('pfNameConfirmMsg'),t('pfNameSave'),t('cancel'));
    if(!ok)return;
    try {
      await saveProfPatch({n:name});
      state=(await api('rename',{name})).state; saveProfile();
      sfx('win');notify(t('pfNameDone',{name}),true);render({keepScroll:true});
    } catch(e){ show(t('pfSaveErr')); }
  }
  async function profAction(action,btn) {
    if(action==='pf-view'){profView=btn.dataset.view==='avatar'?'avatar':'profile';shopPreview='';sfx('click');render();window.scrollTo({top:0,behavior:'smooth'});return;}
    if(action==='pf-av'){try{await saveProfPatch({av:btn.dataset.av,pic:null});sfx('pop');notify(t('pfSaved'),true);}catch(_){notify(t('pfSaveErr'));} render({keepScroll:true});return;}
    if(action==='pf-skinpic'){try{await saveProfPatch({av:null,pic:null});sfx('pop');notify(t('pfSaved'),true);}catch(_){notify(t('pfSaveErr'));} render({keepScroll:true});return;}
    if(action==='sk-preview'){shopPreview=btn.dataset.id;sfx('click');render({keepScroll:true});return;}
    const K=SKN(), id=btn.dataset.id, sk=id==='base'?null:K&&K.get(id);
    if(action==='sk-equip'){
      try{ updateState((await api('equip_skin',{theme,id})).state); shopPreview=id; sfx('power'); notify(t('equipDone',{name:sk?(sk.name[language]||sk.name.en):t('shopBase')}),true); }catch(e){notify(e.message);}
      render({keepScroll:true});return;
    }
    if(action==='sk-buy'&&sk){
      shopPreview=id;
      if((state.coins||0)<sk.price){ sfx('wrong'); render({keepScroll:true}); notify(t('shopNeed',{n:sk.price-(state.coins||0)})+' — '+t('coinRules')); return; }
      const ok=await showDialog({title:t('buyTitle',{name:sk.name[language]||sk.name.en}),message:t('buyMsg',{price:sk.price,left:(state.coins||0)-sk.price}),ok:t('shopBuy'),cancel:t('cancel'),art:window.PyQuestArt.hero('no-bg',sk.id)});
      if(!ok){render({keepScroll:true});return;}
      try{ updateState((await api('buy_skin',{id})).state); window.PyQuestArt&&window.PyQuestFX?.confetti({count:120}); sfx('win'); notify(t('buyDone',{name:sk.name[language]||sk.name.en}),true); }catch(e){notify(e.message);}
      render({keepScroll:true});return;
    }
  }

  /* =====================================================================
     Papan pemuka
     ===================================================================== */
  function achievements() {
    return [
      ['badgeQuiz','achievementQuiz',state.quizzes_completed>0,ICON().quiz],
      ['badgePerfectQuiz','achievementPerfectQuiz',state.perfect_quiz,ICON().star],
      ['badgePuzzle','achievementPuzzle',state.puzzles_completed>0,ICON().puzzle],
      ['badgePerfectPuzzle','achievementPerfectPuzzle',state.perfect_puzzle,ICON().trophy],
      ['badgeStreak','achievementStreak',state.streak>=7,ICON().flame],
      ['achXp','achXpDesc',state.xp>=500,ICON().bolt],
    ];
  }
  function rankBlock(compact) {
    const L=state.level, name=rankName(L.number);
    const next=L.next_xp===null?null:rankName(L.number+1);
    return `<div class="rank-block${compact?' compact':''}"><div class="rank-top"><span class="rank-badge"><b>${L.number}</b></span><div><small>${t('rankLabel')} ${L.number}/${L.max}</small><strong>${escapeHtml(name)}</strong></div></div><div class="xp-track"><i style="width:${L.progress}%"></i></div><span class="rank-next">${next?t('nextRank',{xp:L.next_xp-state.xp,rank:escapeHtml(next)}):t('maxRank')}</span></div>`;
  }
  function renderDashboard() {
    const I=ICON();
    const tiles=[[state.xp,t('totalXp'),'c4'],[state.coins||0,t('coins'),'c2 coin-tile'],[state.quizzes_completed,t('statQuizRounds'),'c1'],[state.puzzles_completed,t('statPuzzleRounds'),'c3'],[state.streak+' '+t('days'),t('streak'),'c5']];
    const badges=achievements().map(([title,desc,on,icon])=>`<div class="badge${on?' on':''}" title="${escapeHtml(t(desc))}"><span class="badge-ic">${icon}</span><b>${t(title)}</b><small>${on?t('unlocked'):t(desc)}</small></div>`).join('');
    return `<section class="dash">
      <div class="dash-hero card"><button type="button" class="dash-mascot" data-page="profile" data-pv="avatar" title="${t('shopTitle')}">${myHero()}</button><div class="dash-hello"><h1 class="page-title">${t('welcome',{name:escapeHtml(state.name)})}</h1><p class="page-subtitle">${t('overviewHint')}</p>${mode==='guest'?`<p class="guest-note">${t('guestNote')}</p>`:''}</div>${rankBlock()}</div>
      <div class="play-grid">
        <a href="#game" class="play-card pc-quiz" data-page="quiz"><span class="pc-ic">${I.quiz}</span><span class="pc-body"><b>${escapeHtml(flavor('quiz'))}</b><small>${t('dashQuizDesc',{boss:escapeHtml(flavor('boss'))})}</small></span><span class="pc-cta">${t('playNow')} →</span><span class="pc-boss">${window.PyQuestArt.boss()}</span></a>
        <a href="#game" class="play-card pc-puzzle" data-page="puzzle"><span class="pc-ic">${I.puzzle}</span><span class="pc-body"><b>${escapeHtml(flavor('puzzle'))}</b><small>${t('dashPuzzleDesc')}</small></span><span class="pc-cta">${t('playNow')} →</span><span class="pc-chest">${I.chest}</span></a>
      </div>
      <a href="#profile" class="shop-banner" data-page="profile" data-pv="avatar"><span class="sb-skins">${(SKN()?SKN().forTheme(theme):[]).slice(2,5).map(sk=>window.PyQuestArt.miniHead(theme,sk.id)).join('')}</span><span class="mpb-body"><b>${t('dashShop')}</b><small>${t('dashShopDesc')}</small></span><span class="sb-coins">${coinIc()}<b>${state.coins||0}</b></span><span class="pc-cta">${t('shopTitle')} →</span></a>
      <a href="#multi" class="mp-banner" data-page="multi"><span class="mpb-art">${myHero()}${window.PyQuestArt.hero('no-bg mp-friend')}</span><span class="mpb-body"><b>${t('mpDashTitle')}</b><small>${t('mpDashDesc')}</small></span><span class="pc-cta">${t('playNow')} →</span></a>
      <div class="stat-tiles">${tiles.map(([v,l,c])=>`<div class="stat-tile ${c}"><b>${escapeHtml(v)}</b><span>${escapeHtml(l)}</span></div>`).join('')}</div>
      <div class="dash-row"><article class="card dash-badges"><h2>${t('achievements')}</h2><div class="badge-grid">${badges}</div></article>
      <article class="card dash-themes"><h2>${t('tryTheme')}</h2><p>${t('tryThemeHint')}</p><div class="mini-themes">${THEMES.map(id=>`<button type="button" class="mini-theme tc-${id}${id===theme?' selected':''}" data-theme-pick="${id}" title="${escapeHtml(t('th_'+id))}" aria-label="${escapeHtml(t('th_'+id))}">${window.PyQuestArt.miniHead(id)}</button>`).join('')}</div><a href="#info" data-page="info" class="dash-info">${I.info}<span><b>${t('menuInfo')}</b><small>${t('menuInfoDesc')}</small></span></a></article></div>
    </section>`;
  }

  /* =====================================================================
     GAME — lobi, sidebar, Quiz Battle, Bug Hunt
     ===================================================================== */
  function renderGame() {
    return `<section class="game-page${playing()?' is-playing':''}${session?' has-session':''}">${renderSidebar()}<div class="game-main" id="game-main">${session?(session.result?renderResult():session.kind==='quiz'?renderQuizArena():renderPuzzleArena()):renderLobby()}</div></section>`;
  }
  function renderSidebar() {
    const I=ICON(), lock=playing(), P=contentInfo.points||{};
    const counts=prefs.mode==='quiz'?contentInfo.quiz_counts:contentInfo.puzzle_counts;
    const modeBtn=(m,icon)=>`<button type="button" class="mode-btn mb-${m}${prefs.mode===m?' active':''}" data-action="set-mode" data-mode="${m}" ${lock?'disabled':''} aria-pressed="${prefs.mode===m}"><span class="mb-ic">${icon}</span><span><b>${escapeHtml(flavor(m))}</b><small>${m==='quiz'?t('quiz'):t('puzzle')}</small></span></button>`;
    const stars=n=>Array.from({length:4},(_,i)=>`<i class="${i<n?'on':''}"></i>`).join('');
    const lvl=DIFFS.map((d,i)=>`<button type="button" class="lvl-btn lvl-${d}${prefs.diff===d?' active':''}" data-action="set-diff" data-diff="${d}" ${lock?'disabled':''} aria-pressed="${prefs.diff===d}"><span class="lvl-stars">${stars(i+1)}</span><span class="lvl-txt"><b>${t('lvl_'+d)}</b><small>${t('perAnswer',{n:P[d]||10})} · ${counts?.[d]||0}</small><small class="lvl-coin">${coinIc()} ${t('perCoin',{n:(contentInfo.coins||{})[d]||0})}</small></span></button>`).join('');
    const speeds=[0,30,20,15,10].map(s=>`<button type="button" class="speed-btn${prefs.seconds===s?' active':''}" data-action="set-speed" data-seconds="${s}" ${lock?'disabled':''} aria-pressed="${prefs.seconds===s}">${s?s+'s':t('off')}</button>`).join('');
    const muted=window.PyQuestFX?.isMuted();
    return `<aside class="game-side card" aria-label="${t('sideMode')}"><div class="side-block"><h3>${t('sideMode')}</h3><div class="mode-list">${modeBtn('quiz',I.quiz)}${modeBtn('puzzle',I.puzzle)}</div></div><div class="side-block"><h3>${t('sideLevel')}</h3><div class="lvl-list">${lvl}</div></div><div class="side-block"><h3>${I.clock} ${t('sideSpeed')}</h3><div class="speed-row">${speeds}</div></div><div class="side-block side-foot"><a href="#multi" class="side-mp" data-page="multi">${I.user} ${t('mpGoSide')} →</a><button type="button" class="sound-btn" data-action="toggle-sound" aria-pressed="${!muted}">${muted?I.mute:I.sound}<span>${t('sound')}: ${muted?t('off'):t('on')}</span></button>${lock?`<p class="side-lock">${t('lockedWhilePlaying')}</p>`:''}</div></aside>`;
  }
  function renderLobby() {
    const quiz=prefs.mode==='quiz', I=ICON();
    const rules=t(quiz?'rulesQuiz':'rulesPuzzle').split('|');
    const stage=quiz?`<div class="lobby-stage ls-quiz"><div class="ls-hero">${myHero()}</div><span class="ls-vs">VS</span><div class="ls-boss">${window.PyQuestArt.boss()}</div></div>`
      :`<div class="lobby-stage ls-puzzle"><div class="ls-hero small">${myHero()}</div><div class="ls-trail">${Array.from({length:6},()=>'<i></i>').join('')}</div><div class="ls-chest">${I.chest}</div></div>`;
    return `<div class="lobby card mode-${prefs.mode}">${stage}<div class="lobby-body"><span class="lobby-chip lvl-${prefs.diff}">${t('lvl_'+prefs.diff)} · ${t('lvlDesc_'+prefs.diff)}</span><h1 class="page-title">${escapeHtml(flavor(prefs.mode))}</h1><ul class="rules">${rules.map((r,i)=>`<li><span class="r-ic">${[I.star,I.heart,quiz?I.half:I.shield,quiz?I.trophy:I.bolt][i]}</span>${escapeHtml(r)}</li>`).join('')}</ul><button class="btn btn-accent btn-big start-btn" data-action="start-game">${I.bolt} ${t('startGame')}</button><p class="keys-hint">${t(quiz?'keysQuiz':'keysPuzzle')}</p></div></div>`;
  }
  function hud() {
    const s=session, I=ICON();
    const hearts=Array.from({length:MAX_HEARTS},(_,i)=>`<span class="hp${i<s.hearts?'':' lost'}${s.ev==='hurt'&&i===s.hearts?' breaking':''}">${I.heart}</span>`).join('');
    const power=s.kind==='quiz'
      ?`<button type="button" class="power-btn" data-action="fifty" ${s.fiftyUsed||s.feedback?'disabled':''} title="50/50">${I.half}<span>${t('fifty')}</span></button>`
      :`<button type="button" class="power-btn${s.shield?' armed':''}" data-action="shield" ${s.shieldUsed||s.shield||s.feedback?'disabled':''} title="${t('shield')}">${I.shield}<span>${t('shield')}</span></button>`;
    return `<div class="hud"><div class="hud-hearts" aria-label="${s.hearts} / ${MAX_HEARTS}">${hearts}</div><div class="hud-mid"><span class="hud-q">${s.number}/${s.total}</span><span class="hud-combo${s.combo>=2?' hot':''}">${I.flame}${t('combo')} x${s.combo}</span><span class="hud-xp">+${s.xpRound} XP</span></div><div class="hud-right">${s.timed?`<span class="hud-timer${s.remaining<=5?' urgent':''}" id="timer">${I.clock}<b>${s.remaining}</b></span>`:''}${power}<button type="button" class="btn btn-exit hud-exit" data-action="exit-session" aria-label="${t('exit')}">${I.door}<span>${t('exit')}</span></button></div></div>${s.timed?`<div class="timer-bar"><i id="timer-fill" style="width:${percent(s.remaining,s.seconds)}%"></i></div>`:''}`;
  }
  function renderQuizArena() {
    const s=session, q=s.question, fb=s.feedback, I=ICON();
    const shapes=['▲','◆','●','■'];
    const answers=q.choices.map((c,i)=>{
      let cls='ans a'+i;
      if(fb){ if(i===fb.correctIndex)cls+=' right'; else if(i===fb.selectedIndex)cls+=' wrong'; else cls+=' dim'; }
      if(s.hidden.includes(i))cls+=' gone';
      return `<button type="button" class="${cls}" data-quiz-choice="${i}" ${fb||s.hidden.includes(i)?'disabled':''}><span class="ans-key">${i+1}</span><span class="ans-shape" aria-hidden="true">${shapes[i]}</span><span class="ans-txt">${escapeHtml(c)}</span></button>`;
    }).join('');
    const hp=Math.max(0,100-s.bossDamage*10);
    return `<div class="arena quiz-arena ev-${s.ev||'none'}">${hud()}<div class="battle"><div class="fighter f-hero"><div class="f-art">${myHero()}</div><span class="f-name">${escapeHtml(state.name)}</span></div><div class="beam" aria-hidden="true"></div><div class="fighter f-boss${hp===0?' ko':''}"><div class="f-art">${window.PyQuestArt.boss()}</div><div class="boss-hp"><i style="width:${hp}%"></i></div><span class="f-name">${escapeHtml(flavor('boss'))}</span></div></div>
      <article class="q-card card"><div class="q-meta"><span class="lobby-chip lvl-${q.difficulty}">${t('lvl_'+q.difficulty)}</span><span class="q-pts">${I.bolt}+${q.points} XP</span></div><h2 class="q-text">${escapeHtml(q.question)}</h2>${q.code?`<pre class="q-code"><code>${highlight(q.code)}</code></pre>`:''}<div class="answers">${answers}</div>${fb?feedbackPanel(fb.correct,fb.timeout,fb.explanation,fb.correct?'':`${t('correctAnswer')}: <b>${escapeHtml(fb.answer)}</b>`):''}</article></div>`;
  }
  function feedbackPanel(good,timeout,explanation,extra) {
    const I=ICON();
    return `<div class="fb-panel ${good?'good':'bad'}" role="status"><div class="fb-head"><span class="fb-ic">${good?I.check:I.cross}</span><strong>${good?escapeHtml(session.cheer):timeout?t('timeUp'):escapeHtml(session.cheer)}</strong>${good?`<span class="fb-xp">+${session.lastPoints} XP</span>`:''}</div>${extra?`<p class="fb-extra">${extra}</p>`:''}<div class="fb-why"><b>${t('explanationLabel')}</b><p>${escapeHtml(explanation)}</p></div><button class="btn btn-primary fb-next" data-action="game-next" autofocus>${session.pendingResult?t('seeResults'):t('next')} →</button></div>`;
  }
  function renderPuzzleArena() {
    const s=session, p=s.puzzle, fb=s.feedback, I=ICON();
    const nodes=Array.from({length:s.total},(_,i)=>{
      const st=s.path[i];
      return `<span class="node${st==='ok'?' ok':st==='bad'?' bad':st==='shield'?' shielded':''}${i===s.number-1&&!fb?' current':''}">${st==='ok'?I.check:st==='bad'?I.cross:st==='shield'?I.shield:i+1}</span>`;
    }).join('');
    const pos=Math.min(s.total,(fb?s.number:s.number-1));
    const stamp=fb?`<div class="stamp ${fb.answer?'st-ok':'st-bug'}">${fb.answer?t('stampOk'):t('stampBug')}</div>`:'';
    return `<div class="arena puzzle-arena ev-${s.ev||'none'}">${hud()}<div class="trail-wrap"><div class="trail"><div class="trail-line"><i style="width:${percent(pos,s.total)}%"></i></div>${nodes}<span class="node chest-node${s.result?' open':''}">${I.chest}</span><span class="trail-hero" style="left:calc(${percent(pos,s.total)}% * .92)">${window.PyQuestArt.miniHead(theme,mySkin())}</span></div></div>
      <article class="scan-card card${fb?' scanned':''}"><div class="scan-top"><span class="dots"><i></i><i></i><i></i></span><span class="scan-file">${escapeHtml(flavor('file'))}_${s.number}.py</span><span class="lobby-chip lvl-${p.difficulty}">${t('lvl_'+p.difficulty)}</span></div><div class="scan-body"><pre class="q-code"><code>${highlight(p.code)}</code></pre><div class="scan-line" aria-hidden="true"></div>${stamp}</div><p class="scan-ask">${t('puzzleAsk')}</p>
      ${fb?feedbackPanel(fb.correct,fb.timeout,fb.explanation[language]||fb.explanation.en,`${fb.answer?t('pzIsOk'):t('pzIsBug')}${fb.shielded?` <span class="fb-shield">${I.shield} ${t('shieldUsed')}</span>`:''}`)
        :`<div class="pz-choices"><button type="button" class="pz-btn pz-ok" data-action="answer-puzzle" data-choice="true"><span class="pz-ic">${I.check}</span><b>${t('puzzleRuns')}</b><kbd>←</kbd></button><button type="button" class="pz-btn pz-bug" data-action="answer-puzzle" data-choice="false"><span class="pz-ic">${I.bug}</span><b>${t('puzzleBug')}</b><kbd>→</kbd></button></div>${s.shield?`<p class="shield-note">${I.shield} ${t('shieldOn')}</p>`:''}`}</article></div>`;
  }
  function renderResult() {
    const s=session, r=s.result, I=ICON(), quiz=s.kind==='quiz';
    const dead=s.hearts<=0;
    const score=r.score, total=r.total;
    const starsN=dead?0:score>=9?3:score>=7?2:1;
    const won=!dead&&score>=7;
    const title=dead?t('gameOver'):won?t('victory'):(language==='ms'?'Pusingan Tamat!':'Round Complete!');
    const sub=dead?t('outOfHearts'):quiz?(won?t('bossDefeated',{boss:flavor('boss')}):t('bossEscaped',{boss:flavor('boss')})):(won?t('treasureFound'):t('treasureMissed'));
    const stars=Array.from({length:3},(_,i)=>`<span class="rs-star${i<starsN?' on':''}" style="animation-delay:${.25+i*.22}s">${I.star}</span>`).join('');
    const art=dead||!won?`<div class="rs-art lose">${quiz?window.PyQuestArt.boss():myHero()}</div>`:`<div class="rs-art win">${quiz?myHero():`<span class="big-chest">${I.chest}</span>`}</div>`;
    return `<div class="result card ${won?'is-win':'is-lose'}">${art}<h1 class="page-title">${title}</h1><div class="rs-stars">${stars}</div><p class="rs-sub">${escapeHtml(sub)}</p>${s.levelUp?`<div class="level-up">${I.bolt} ${escapeHtml(t('levelUp',{rank:rankName(state.level.number)}))}</div>`:''}${r.perfect&&quiz?`<div class="perfect-banner">${t('perfect')}</div>`:''}
      <div class="rs-stats"><div><b>${score}/${total}</b><span>${t('score')}</span></div><div><b>${r.accuracy}%</b><span>${t('accuracy')}</span></div><div><b>+${r.xp}</b><span>${t('xpEarned')}</span></div><div><b>x${s.bestCombo}</b><span>${t('bestCombo')}</span></div><div class="rs-coins"><b>${coinIc()}+${r.coins||0}</b><span>${t('coinsEarned')}</span></div></div>
      ${r.coins_max?`<p class="coin-note${r.coins>=r.coins_max?' full':''}">${coinIc()} ${r.coins>=r.coins_max?t('coinsFull',{max:r.coins_max}):t('coinsCut',{got:r.coins||0,max:r.coins_max})}</p>`:''}
      ${rankBlock(true)}<div class="result-actions"><button class="btn btn-accent btn-big" data-action="start-game">${I.bolt} ${t('playAgain')}</button><button class="btn btn-secondary" data-action="to-lobby">${t('changeLevel')}</button><button class="btn btn-ghost" data-action="back-main">${t('backDashboard')}</button></div></div>`;
  }

  /* ---------- logik permainan ---------- */
  async function startGame() {
    if(!state?.name)return;
    stopTimer();
    const before=state.level.number;
    try {
      const quiz=prefs.mode==='quiz';
      const r=await api(quiz?'start_quiz':'start_puzzle',{difficulty:prefs.diff,seconds:prefs.seconds});
      session={kind:prefs.mode,diff:prefs.diff,number:1,total:quiz?r.total:r.puzzle.total,timed:r.timed,seconds:r.seconds,remaining:r.seconds,hearts:MAX_HEARTS,combo:0,bestCombo:0,xpRound:0,
        feedback:null,result:null,pendingResult:null,ev:'start',hidden:[],fiftyUsed:false,shield:false,shieldUsed:false,bossDamage:0,path:[],levelBefore:before,levelUp:false,cheer:'',lastPoints:0};
      if(quiz)session.question=r.question; else session.puzzle=r.puzzle;
      page='game'; sfx('power'); render({keepScroll:true}); scrollToArena(); startTimer();
    } catch(e){notify(e.message);}
  }
  function scrollToArena() {
    const el=document.getElementById('game-main'); if(!el)return;
    const top=el.getBoundingClientRect().top+window.scrollY-80;
    if(Math.abs(window.scrollY-top)>40)window.scrollTo({top,behavior:'smooth'});
  }
  function afterAnswer(correct,points,rect) {
    const s=session;
    if(correct){
      s.combo++;s.bestCombo=Math.max(s.bestCombo,s.combo);s.xpRound+=points;s.lastPoints=points;s.ev='hit';s.cheer=pick('fbGood');
      sfx(s.combo>=3&&s.combo%2===1?'combo':'correct'); setTimeout(()=>sfx('hit'),180);
      if(rect)window.PyQuestFX?.floatText(`+${points} XP`,rect.left+rect.width/2,rect.top,'xp');
      if(s.combo>=3&&rect)setTimeout(()=>window.PyQuestFX?.floatText(`${t('combo')} x${s.combo}!`,rect.left+rect.width/2,rect.top-30,'combo'),250);
    } else {
      s.combo=0;s.cheer=pick('fbBad');
      if(s.kind==='puzzle'&&s.shield){s.shield=false;s.ev='block';sfx('power');}
      else {s.hearts=Math.max(0,s.hearts-1);s.ev='hurt';sfx('wrong');}
    }
  }
  async function answerQuiz(index) {
    const s=session; if(!s||s.kind!=='quiz'||s.feedback||s.busy)return;
    s.busy=true; stopTimer();
    const btn=document.querySelector(`[data-quiz-choice="${index}"]`); const rect=btn?btn.getBoundingClientRect():null;
    try {
      const r=await api('answer_quiz',{choice:index});
      updateState(r.state);
      s.feedback={...r.feedback,selectedIndex:index};
      afterAnswer(r.feedback.correct,r.feedback.points,rect);
      if(r.feedback.correct)s.bossDamage++;
      if(r.finished)s.pendingResult=r.result;
      else { s.next={question:r.question,number:r.number}; if(s.hearts<=0){const e=await api('end_quiz');updateState(e.state);s.pendingResult=e.result;} }
    } catch(e){notify(e.message);}
    s.busy=false; render({keepScroll:true});
  }
  async function answerPuzzle(choice) {
    const s=session; if(!s||s.kind!=='puzzle'||s.feedback||s.busy)return;
    s.busy=true; stopTimer();
    const btn=document.querySelector(choice===null?'.pz-btn':`.pz-btn[data-choice="${choice}"]`); const rect=btn?btn.getBoundingClientRect():null;
    try {
      const r=await api('answer_puzzle',{choice});
      updateState(r.state);
      const hadShield=s.shield;
      afterAnswer(r.feedback.correct,r.feedback.points,rect);
      const shielded=!r.feedback.correct&&hadShield;
      s.feedback={...r.feedback,shielded};
      s.path[s.number-1]=r.feedback.correct?'ok':shielded?'shield':'bad';
      if(r.finished)s.pendingResult=r.result;
      else { s.next={puzzle:r.puzzle,number:r.puzzle.number}; if(s.hearts<=0){const e=await api('end_puzzle');updateState(e.state);s.pendingResult=e.result;} }
    } catch(e){notify(e.message);}
    s.busy=false; render({keepScroll:true});
  }
  function gameNext() {
    const s=session; if(!s||!s.feedback)return;
    if(s.pendingResult){
      s.result=s.pendingResult; s.pendingResult=null; s.ev='';
      s.levelUp=state.level.number>s.levelBefore;
      const won=s.hearts>0&&s.result.score>=7;
      render({keepScroll:true}); window.scrollTo({top:Math.max(0,document.getElementById('game-main').getBoundingClientRect().top+scrollY-90),behavior:'smooth'});
      if(won||s.levelUp){sfx('win');setTimeout(()=>window.PyQuestFX?.confetti({count:s.result.perfect?220:140}),250);} else sfx('lose');
      return;
    }
    if(s.kind==='quiz'){s.question=s.next.question;} else {s.puzzle=s.next.puzzle;}
    s.number=s.next.number; s.next=null; s.feedback=null; s.hidden=[]; s.ev='';
    s.remaining=s.seconds; sfx('click'); render({keepScroll:true}); startTimer();
  }
  async function useFifty() {
    const s=session; if(!s||s.kind!=='quiz'||s.fiftyUsed||s.feedback)return;
    try { const r=await api('fifty_fifty'); s.fiftyUsed=true; s.hidden=r.hide; sfx('power'); render({keepScroll:true}); startTimer(true); } catch(e){notify(e.message);}
  }
  function useShield() {
    const s=session; if(!s||s.kind!=='puzzle'||s.shieldUsed||s.feedback)return;
    s.shield=true; s.shieldUsed=true; sfx('power'); render({keepScroll:true}); startTimer(true);
  }
  async function exitSession() {
    if(!playing()){session=null;render({keepScroll:true});return;}
    const ok=await confirmDialog(t('exitTitle'),t('exitConfirm'),t('exitYes'),t('exitNo'),{tone:'danger',sad:true});
    if(!ok)return;
    await cancelSession(); render({keepScroll:true});
  }
  function stopTimer() { if(timerHandle){clearInterval(timerHandle);timerHandle=null;} }
  function startTimer(resume) {
    stopTimer();
    const s=session;
    if(!s||!s.timed||s.result||s.feedback)return;
    s.deadline=Date.now()+s.remaining*1000;
    let lastShown=s.remaining;
    timerHandle=setInterval(()=>{
      if(!session||session!==s||s.result||s.feedback)return stopTimer();
      s.remaining=Math.max(0,Math.ceil((s.deadline-Date.now())/1000));
      const left=Math.max(0,(s.deadline-Date.now())/1000);
      const el=document.getElementById('timer'), fill=document.getElementById('timer-fill');
      if(el){el.querySelector('b').textContent=s.remaining;el.classList.toggle('urgent',s.remaining<=5);}
      if(fill)fill.style.width=(100*left/s.seconds).toFixed(1)+'%';
      if(s.remaining!==lastShown){lastShown=s.remaining;if(s.remaining<=5&&s.remaining>0)sfx('tick');}
      if(left<=0){stopTimer();if(s.kind==='quiz')answerQuiz(-1);else answerPuzzle(null);}
    },100);
  }

  /* =====================================================================
     Admin (statistik langsung, pengguna, pengurus puzzle)
     ===================================================================== */
  /* =====================================================================
     ADMIN (update 9): statistik langsung, pengguna, pengurus Kuiz & Puzzle (tambah pukal + import)
     ===================================================================== */
  Object.assign(translations.en,{adminTabQuiz:'Quiz manager',adminTabPuzzles:'Puzzle manager',manageQuiz:'Manage Quiz Questions',managePuzzles:'Manage Puzzle Questions',
    admAddMany:'Add questions',admImport:'Paste from Excel / Sheets',admDownload:'Download data file',admSearch:'Search questions…',admShown:'{n} shown',
    admBulkTitle:'Add several questions at once',admEditTitle:'Edit question',admHowMany:'How many forms?',admAddOne:'+ One more',admRemove:'Remove',admSaveAll:'Save {n} question(s)',
    admBlock:'Question {n}',admQEn:'Question (English)',admQMs:'Question (Malay) — optional',admCode:'Python code — optional',admCodeP:'Python code',admOptsEn:'Answer choices (English) — tick the correct one',
    admOptsMs:'Answer choices (Malay) — optional, leave empty to copy English',admExpEn:'Explanation (English)',admExpMs:'Explanation (Malay) — optional',admLevel:'Level',admRuns:'Code is correct (runs)',admBug:'Code has a bug (error)',
    admEmptySkip:'Empty forms are skipped automatically.',admErrQ:'Question {n}: fill in the question, 4 different choices and the explanation.',admErrP:'Question {n}: fill in the code and the explanation.',
    admSavedN:'{n} question(s) saved.',admNothing:'Nothing to save — all forms are empty.',admImportHelp:'Make a sheet with these columns (one question per row), select the rows, copy and paste them here. Malay columns can be empty.',
    admImportCols:'Columns',admCheck:'Check',admImportOk:'{n} question(s) ready to add',admImportBad:'{n} row(s) have problems',admImportAdd:'Add {n} question(s)',admRow:'Row {n}',
    admLocalNote:'Changes are saved in THIS browser only. To show them to every student, press "Download data file" and upload the file to the data folder on GitHub.',
    admRestoreQuiz:'Restore default quiz questions?',admRestoreQuizMsg:'Quiz questions edited on this device will be replaced by the original bank.',admCorrect:'Correct answer',
    usersNewToday:'New today',usersNewWeek:'New this week',usersActiveToday:'Active today',usersSignupChart:'Sign-ups in the last 14 days',usersRecent:'Recently active',usersSort:'Sort',
    usersSortNew:'Newest',usersSortXp:'Highest XP',usersSortActive:'Last active',usersSearch:'Search username…',usersOnline:'online',usersRank:'Rank',
    liveVsYesterday:'vs yesterday',liveMetricViews:'Visits',liveMetricUnique:'Visitors',liveShare:'share',justNow:'just now',minAgo:'{n} min ago',hrAgo:'{n} h ago',dayAgo:'{n} d ago',never:'never'});
  Object.assign(translations.ms,{adminTabQuiz:'Urus Kuiz',adminTabPuzzles:'Urus Puzzle',manageQuiz:'Urus Soalan Kuiz',managePuzzles:'Urus Soalan Puzzle',
    admAddMany:'Tambah soalan',admImport:'Tampal dari Excel / Sheets',admDownload:'Muat turun fail data',admSearch:'Cari soalan…',admShown:'{n} dipaparkan',
    admBulkTitle:'Tambah beberapa soalan sekali gus',admEditTitle:'Edit soalan',admHowMany:'Berapa borang?',admAddOne:'+ Satu lagi',admRemove:'Buang',admSaveAll:'Simpan {n} soalan',
    admBlock:'Soalan {n}',admQEn:'Soalan (Bahasa Inggeris)',admQMs:'Soalan (Bahasa Melayu) — pilihan',admCode:'Kod Python — pilihan',admCodeP:'Kod Python',admOptsEn:'Pilihan jawapan (Bahasa Inggeris) — tanda yang betul',
    admOptsMs:'Pilihan jawapan (Bahasa Melayu) — pilihan, biar kosong untuk salin Bahasa Inggeris',admExpEn:'Penerangan (Bahasa Inggeris)',admExpMs:'Penerangan (Bahasa Melayu) — pilihan',admLevel:'Tahap',admRuns:'Kod betul (berjalan)',admBug:'Kod ada bug (ralat)',
    admEmptySkip:'Borang yang kosong dilangkau secara automatik.',admErrQ:'Soalan {n}: isi soalan, 4 pilihan yang berbeza dan penerangan.',admErrP:'Soalan {n}: isi kod dan penerangan.',
    admSavedN:'{n} soalan disimpan.',admNothing:'Tiada apa untuk disimpan — semua borang kosong.',admImportHelp:'Sediakan helaian dengan lajur berikut (satu soalan setiap baris), pilih baris, salin dan tampal di sini. Lajur Bahasa Melayu boleh dibiarkan kosong.',
    admImportCols:'Lajur',admCheck:'Semak',admImportOk:'{n} soalan sedia untuk ditambah',admImportBad:'{n} baris ada masalah',admImportAdd:'Tambah {n} soalan',admRow:'Baris {n}',
    admLocalNote:'Perubahan disimpan dalam pelayar INI sahaja. Untuk paparkan kepada semua pelajar, tekan "Muat turun fail data" dan muat naik fail itu ke folder data di GitHub.',
    admRestoreQuiz:'Pulihkan soalan kuiz asal?',admRestoreQuizMsg:'Soalan kuiz yang diedit pada peranti ini akan diganti dengan bank asal.',admCorrect:'Jawapan betul',
    usersNewToday:'Baharu hari ini',usersNewWeek:'Baharu minggu ini',usersActiveToday:'Aktif hari ini',usersSignupChart:'Pendaftaran 14 hari lepas',usersRecent:'Aktif baru-baru ini',usersSort:'Susun',
    usersSortNew:'Terbaharu',usersSortXp:'XP tertinggi',usersSortActive:'Aktif terakhir',usersSearch:'Cari nama pengguna…',usersOnline:'dalam talian',usersRank:'Pangkat',
    liveVsYesterday:'berbanding semalam',liveMetricViews:'Lawatan',liveMetricUnique:'Pelawat',liveShare:'bahagian',justNow:'baru sahaja',minAgo:'{n} min lalu',hrAgo:'{n} jam lalu',dayAgo:'{n} hari lalu',never:'belum pernah'});

  const adm={view:'list',draft:[],editId:null,q:'',importText:'',preview:null,count:5};
  let liveMetric='views';
  const usersView={q:'',sort:'new'};
  const fmtN=n=>new Intl.NumberFormat(language==='ms'?'ms-MY':'en-US').format(Number(n)||0);
  function relTime(ms) {
    if(!ms)return t('never');
    const d=Math.max(0,Date.now()-ms)/1000;
    if(d<60)return t('justNow'); if(d<3600)return t('minAgo',{n:Math.floor(d/60)}); if(d<86400)return t('hrAgo',{n:Math.floor(d/3600)});
    return t('dayAgo',{n:Math.floor(d/86400)});
  }
  const hueOf=s=>(Array.from(String(s||'?')).reduce((a,c)=>a+c.codePointAt(0),0)*47)%360;
  const avatarHtml=name=>`<span class="mp-ava" style="--h:${hueOf(name)}">${escapeHtml(String(name||'?').slice(0,1).toUpperCase())}</span>`;
  function levelOfXp(xp) { const L=window.PyQuestEngine.LEVELS||[0]; let n=1; L.forEach((min,i)=>{if(xp>=min)n=i+1;}); return n; }
  /* Carta bar ringkas (satu siri): setiap bar ada tooltip semasa hover/fokus */
  function barChart(items,opts={}) {
    const max=Math.max(1,...items.map(d=>d.v));
    const ticks=[max,Math.round(max/2),0];
    return `<div class="vchart" style="--n:${items.length}"><div class="vc-grid">${ticks.map(v=>`<span><i>${fmtN(v)}</i></span>`).join('')}</div><div class="vc-bars">${items.map(d=>`<div class="vc-col${d.hi?' hi':''}" tabindex="0" data-tip="${escapeHtml(d.tip||'')}"><span class="vc-bar" style="height:${d.v?Math.max(3,100*d.v/max):0}%"></span><span class="vc-lab">${escapeHtml(d.label)}</span></div>`).join('')}</div></div>`;
  }

  /* ---------- Statistik langsung ---------- */
  function renderLive() {
    const A=window.PyQuestAnalytics, I=ICON();
    if(!A||!A.configured) return `<article class="card live-card live-setup"><h2>${t('liveSetupTitle')}</h2><p>${t('liveSetupIntro')}</p><ol class="live-steps"><li>${t('liveStep1')}</li><li>${t('liveStep2')}</li><li>${t('liveStep3')}</li><li>${t('liveStep4')}</li></ol><p class="live-note">${t('liveSetupFoot')}</p></article>`;
    if(!liveData)return `<article class="card live-card"><p class="empty-state">${t('liveLoading')}</p></article>`;
    if(liveData.error)return `<article class="card live-card"><p class="form-error">${t(liveData.error==='sdk'?'liveErrSdk':'liveErrPerm')}</p></article>`;
    const {presence,stats,offset,connected}=liveData;
    const now=Date.now()+(offset||0);
    const active=Object.values(presence||{}).filter(e=>e&&typeof e.t==='number'&&now-e.t<A.ONLINE_MS);
    const admins=active.filter(e=>e.p==='admin').length, visitors=active.filter(e=>e.p!=='admin');
    const names={home:t('home'),game:t('game'),multi:t('multi'),puzzle:t('puzzle'),quiz:t('quiz'),info:t('info'),admin:t('admin')};
    const byPage={}; visitors.forEach(e=>{byPage[e.p]=(byPage[e.p]||0)+1;});
    const chips=Object.keys(byPage).sort((a,b)=>byPage[b]-byPage[a]).map(k=>`<span class="lv-chip"><b>${byPage[k]}</b>${escapeHtml(names[k]||k)}</span>`).join('')||`<span class="lv-chip muted">${t('liveNobody')}</span>`;
    const s=stats||{}, daily=s.daily||{};
    const dk=i=>{const d=new Date();d.setDate(d.getDate()-i);return A.dayKey(d);};
    const td=daily[dk(0)]||{}, yd=daily[dk(1)]||{};
    const delta=(a,b)=>{a=a||0;b=b||0;if(!b)return '';const p=Math.round(100*(a-b)/b);return `<span class="lv-delta ${p>=0?'up':'down'}">${p>=0?'▲':'▼'} ${Math.abs(p)}% <small>${t('liveVsYesterday')}</small></span>`;};
    const kpi=(cls,icon,n,label,extra='')=>`<div class="lv-kpi ${cls}"><span class="lv-kpi-ic">${icon}</span><div><strong>${fmtN(n)}</strong><span>${label}</span>${extra}</div></div>`;
    const days=[];
    for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const v=daily[A.dayKey(d)]||{};const val=liveMetric==='views'?(v.views||0):(v.unique||0);days.push({label:d.toLocaleDateString(language==='ms'?'ms-MY':'en-GB',{weekday:'short'}),v:val,hi:i===0,tip:`${d.toLocaleDateString(language==='ms'?'ms-MY':'en-GB',{day:'numeric',month:'short'})}: ${fmtN(v.views||0)} ${t('liveVisits')} · ${fmtN(v.unique||0)} ${t('liveVisitors')}`});}
    const weekTotal=days.reduce((a,d)=>a+d.v,0);
    const pages=Object.entries(s.pages||{}).sort((a,b)=>b[1]-a[1]);
    const ptot=Math.max(1,pages.reduce((a,p)=>a+p[1],0)), pmax=Math.max(1,...pages.map(p=>p[1]));
    const pageRows=pages.map(([k,v])=>`<div class="lv-hbar" tabindex="0" data-tip="${fmtN(v)} ${t('liveVisits')} · ${Math.round(100*v/ptot)}%"><span class="lv-hb-name">${escapeHtml(names[k]||k)}</span><span class="lv-hb-track"><i style="width:${Math.max(2,Math.round(100*v/pmax))}%"></i></span><b>${fmtN(v)}</b></div>`).join('')||`<p class="empty-state">–</p>`;
    const en=(s.lang&&s.lang.en)||0, ms=(s.lang&&s.lang.ms)||0, ltot=Math.max(1,en+ms);
    const act=s.activity||{}, qr=act.quiz_rounds||0, pr=act.puzzle_rounds||0, atot=Math.max(1,qr+pr);
    const dots=visitors.slice(0,24).map((e,i)=>`<i style="--h:${(i*53)%360};animation-delay:${(i%6)*.15}s"></i>`).join('');
    const split=(a,la,b,lb)=>`<div class="lv-split"><i class="sa" style="width:${Math.round(100*a/(a+b||1))}%"></i><i class="sb" style="width:${Math.round(100*b/(a+b||1))}%"></i></div><div class="lv-split-legend"><span><i class="sw sa"></i>${la} <b>${fmtN(a)}</b> · ${Math.round(100*a/(a+b||1))}%</span><span><i class="sw sb"></i>${lb} <b>${fmtN(b)}</b> · ${Math.round(100*b/(a+b||1))}%</span></div>`;
    return `<div class="lv-top">
      <article class="card lv-now"><div class="lv-pulse"><span class="ring r1"></span><span class="ring r2"></span><span class="core${connected?' on':''}">${visitors.length}</span></div>
        <div class="lv-now-copy"><small>${t('liveOnline')}</small><strong>${fmtN(visitors.length)} <em>${t('liveVisitors')}</em></strong><span class="lv-status${connected?' on':''}"><span class="live-dot${connected?' on':''}"></span>${connected?t('liveConnected'):t('liveOffline')}${admins?` · ${admins} ${t('liveAdminHere')}`:''}</span><div class="lv-dots">${dots}</div></div>
        <div class="lv-chips">${chips}</div></article>
      <div class="lv-kpis">${kpi('k1',I.eye,td.views,t('liveToday'),delta(td.views,yd.views))}${kpi('k2',I.user,td.unique,t('liveUniqueToday'),delta(td.unique,yd.unique))}${kpi('k3',I.bolt,s.views,t('liveTotalViews'))}${kpi('k4',I.star,s.visitors,t('liveTotalVisitors'))}</div></div>
      <div class="lv-grid">
        <article class="card lv-card lv-wide"><div class="lv-card-head"><div><h3>${t('liveWeek')}</h3><p class="lv-sub"><b>${fmtN(weekTotal)}</b> ${liveMetric==='views'?t('liveVisits'):t('liveVisitors')}</p></div><div class="mp-seg">${[['views',t('liveMetricViews')],['unique',t('liveMetricUnique')]].map(([k,l])=>`<button type="button" class="speed-btn${liveMetric===k?' active':''}" data-action="adm-metric" data-k="${k}">${l}</button>`).join('')}</div></div>${barChart(days)}</article>
        <article class="card lv-card"><h3>${t('livePages')}</h3>${pageRows}</article>
        <article class="card lv-card"><h3>${t('liveActivity')}</h3><div class="lv-act"><div class="lv-act-n a">${I.quiz}<b>${fmtN(qr)}</b><span>${t('liveQuizRounds')}</span></div><div class="lv-act-n b">${I.puzzle}<b>${fmtN(pr)}</b><span>${t('livePuzzleRounds')}</span></div></div>${split(qr,t('quiz'),pr,t('puzzle'))}
          <h3 class="lv-sep">${t('liveLang')}</h3>${split(en,'English',ms,'Bahasa Melayu')}</article>
      </div><p class="live-note">${t('livePrivacy')}</p>`;
  }
  function liveShell() { return `<div id="live-panel" class="live-panel" aria-live="polite">${renderLive()}</div>`; }
  function paintLive() { const el=document.getElementById('live-panel'); if(el)el.innerHTML=renderLive(); }
  function startLive() {
    const A=window.PyQuestAnalytics;
    if(!A||!A.configured||liveUnsub)return;
    const token=++liveToken; liveUnsub=()=>{};
    A.subscribe(data=>{if(token===liveToken){liveData=data;paintLive();}}).then(unsub=>{if(token!==liveToken)unsub();else liveUnsub=unsub;});
  }
  function stopLive() { liveToken++; if(liveUnsub){liveUnsub();liveUnsub=null;} liveData=null; }

  /* ---------- Pengguna berdaftar ---------- */
  function usersTable() {
    const q=usersView.q.trim().toLowerCase();
    let list=(usersData&&usersData.list||[]).filter(u=>!q||String(u.u||'').toLowerCase().includes(q)||String(u.n||'').toLowerCase().includes(q));
    list=list.slice().sort(usersView.sort==='xp'?(a,b)=>(Number(b.x)||0)-(Number(a.x)||0):usersView.sort==='active'?(a,b)=>(b.a||0)-(a.a||0):(a,b)=>(b.t||0)-(a.t||0));
    const loc=language==='ms'?'ms-MY':'en-GB';
    const date=v=>v?new Date(v).toLocaleDateString(loc,{day:'numeric',month:'short',year:'numeric'}):'–';
    const maxXp=Math.max(1,...list.map(u=>Number(u.x)||0));
    if(!list.length)return `<p class="empty-state">${t('usersEmpty')}</p>`;
    return `<div class="ut-head"><span>${t('usersName')}</span><span>${t('usersJoined')}</span><span>${t('usersXp')}</span><span>${t('usersActive')}</span></div>${list.map(u=>{const x=Number(u.x)||0, on=u.a&&Date.now()-u.a<5*60000;return `<div class="ut-row"><span class="ut-user">${avatarHtml(u.u)}<span><b>${escapeHtml(u.u)}${u.n&&u.n!==u.u?` <em class="ut-dn">“${escapeHtml(u.n)}”</em>`:''}</b><small>${t('usersRank')} ${levelOfXp(x)} · ${escapeHtml(rankName(levelOfXp(x)))}</small></span></span><span class="ut-date"><b>${relTime(u.t)}</b><small>${date(u.t)}</small></span><span class="ut-xp"><b>${fmtN(x)}</b><i style="width:${Math.max(3,Math.round(100*x/maxXp))}%"></i></span><span class="ut-act${on?' on':''}">${on?`<span class="live-dot on mini"></span>${t('usersOnline')}`:relTime(u.a)}</span></div>`;}).join('')}`;
  }
  function renderUsers() {
    const A=window.PyQuestAuth, I=ICON();
    if(!A||!A.configured)return `<article class="card live-card"><p class="form-error">${t('errNoConfig')}</p></article>`;
    if(!usersData)return `<article class="card live-card"><p class="empty-state">${t('liveLoading')}</p></article>`;
    if(usersData.error)return `<article class="card live-card"><p class="form-error">${t(usersData.error==='sdk'?'liveErrSdk':'usersErr')}</p></article>`;
    const list=usersData.list, day=86400000, now=Date.now();
    const startToday=new Date(); startToday.setHours(0,0,0,0);
    const newToday=list.filter(u=>u.t>=startToday.getTime()).length, newWeek=list.filter(u=>u.t>=now-7*day).length, actToday=list.filter(u=>u.a>=startToday.getTime()).length;
    const days=[];
    for(let i=13;i>=0;i--){const s=new Date(startToday.getTime()-i*day), e=s.getTime()+day;const v=list.filter(u=>u.t>=s.getTime()&&u.t<e).length;days.push({label:i%2?'':s.toLocaleDateString(language==='ms'?'ms-MY':'en-GB',{day:'numeric',month:'numeric'}),v,hi:i===0,tip:`${s.toLocaleDateString(language==='ms'?'ms-MY':'en-GB',{day:'numeric',month:'short'})}: ${v}`});}
    const recent=list.filter(u=>u.a).sort((a,b)=>b.a-a.a).slice(0,6);
    const kpi=(cls,icon,n,label)=>`<div class="lv-kpi ${cls}"><span class="lv-kpi-ic">${icon}</span><div><strong>${fmtN(n)}</strong><span>${label}</span></div></div>`;
    return `<div class="lv-kpis four">${kpi('k1',I.user,list.length,t('usersTotal'))}${kpi('k2',I.plus,newToday,t('usersNewToday'))}${kpi('k3',I.star,newWeek,t('usersNewWeek'))}${kpi('k4',I.bolt,actToday,t('usersActiveToday'))}</div>
      <div class="lv-grid"><article class="card lv-card lv-wide2"><h3>${t('usersSignupChart')}</h3>${barChart(days)}</article>
      <article class="card lv-card"><h3>${t('usersRecent')}</h3>${recent.length?`<ul class="lv-recent">${recent.map(u=>{const on=Date.now()-u.a<5*60000;return `<li>${avatarHtml(u.u)}<b>${escapeHtml(u.u)}</b><span class="${on?'on':''}">${on?`<span class="live-dot on mini"></span>${t('usersOnline')}`:relTime(u.a)}</span></li>`;}).join('')}</ul>`:`<p class="empty-state">–</p>`}</article></div>
      <article class="card lv-card"><div class="lv-card-head"><h3>${t('adminTabUsers')} (${fmtN(list.length)})</h3><div class="ut-tools"><input type="search" id="users-q" class="text-input" placeholder="${t('usersSearch')}" value="${escapeHtml(usersView.q)}"><select id="users-sort" class="text-input"><option value="new"${usersView.sort==='new'?' selected':''}>${t('usersSortNew')}</option><option value="xp"${usersView.sort==='xp'?' selected':''}>${t('usersSortXp')}</option><option value="active"${usersView.sort==='active'?' selected':''}>${t('usersSortActive')}</option></select></div></div><div class="ut" id="users-table">${usersTable()}</div><p class="live-note">${t('usersNote')}</p></article>`;
  }
  function usersShell() { return `<div id="users-panel" class="live-panel" aria-live="polite">${renderUsers()}</div>`; }
  function paintUsers() {
    const el=document.getElementById('users-panel'); if(!el)return;
    const active=document.activeElement&&document.activeElement.id==='users-q';
    if(active&&document.getElementById('users-table')){document.getElementById('users-table').innerHTML=usersTable();return;}
    el.innerHTML=renderUsers();
  }
  function startUsers() {
    const A=window.PyQuestAuth;
    if(!A||!A.configured||usersUnsub)return;
    const token=++usersToken; usersUnsub=()=>{};
    A.subscribeSignups(d=>{if(token===usersToken){usersData=d;paintUsers();}}).then(unsub=>{if(token!==usersToken)unsub();else usersUnsub=unsub;});
  }
  function stopUsers() { usersToken++; if(usersUnsub){usersUnsub();usersUnsub=null;} usersData=null; }
  function renderTeacherLogin() {
    return `<section class="login-card card glass admin-login"><span class="eyebrow">${t('teacherAdmin')}</span><h1>${t('teacherAdmin')}</h1><p>${t('teacherLoginHint')}</p><form id="teacher-form"><label class="field-label" for="teacher-name">${t('teacherUsernameLabel')}</label><input id="teacher-name" class="text-input" name="teacher" autocomplete="username" required autofocus><label class="field-label" for="teacher-pass">${t('passwordLabel')}</label><input id="teacher-pass" class="text-input" type="password" name="password" autocomplete="current-password" required><div class="form-error" id="teacher-error"></div><button class="btn btn-primary login-submit" type="submit">${t('continueAdmin')}</button></form></section>`;
  }

  /* ---------- Pengurus soalan ---------- */
  function allPuzzles() { return window.PYQUEST_PUZZLES||[]; }
  function allQuiz() { return window.PYQUEST_QUESTIONS||[]; }
  const admKind=()=>adminTab==='quiz'?'quiz':'puzzle';
  const admList=()=>admKind()==='quiz'?allQuiz():allPuzzles();
  function emptyBlock(kind) { return kind==='quiz'?{d:adminDiff,qen:'',qms:'',code:'',a0:'',a1:'',a2:'',a3:'',m0:'',m1:'',m2:'',m3:'',ans:'0',een:'',ems:''}:{d:adminDiff,code:'',ok:'true',een:'',ems:''}; }
  function blockFromEntry(kind,e) {
    if(kind==='quiz'){const b={d:e.difficulty,qen:e.question.en,qms:e.question.ms===e.question.en?'':e.question.ms,code:e.code||'',ans:String(e.answer),een:e.explanation.en,ems:e.explanation.ms===e.explanation.en?'':e.explanation.ms};
      for(let i=0;i<4;i++){b['a'+i]=e.options.en[i];b['m'+i]=e.options.ms[i]===e.options.en[i]?'':e.options.ms[i];} return b;}
    return {d:e.difficulty,code:e.code,ok:String(e.correct),een:e.explanation.en,ems:e.explanation.ms===e.explanation.en?'':e.explanation.ms};
  }
  const blankBlock=(kind,b)=>kind==='quiz'?!(b.qen||b.code||b.a0||b.a1||b.a2||b.a3||b.een).toString().trim():!(b.code||b.een).toString().trim();
  const newId=i=>'T'+Date.now().toString(36)+i+Math.random().toString(36).slice(2,5);
  function entryFromBlock(kind,b,id) {
    const s=v=>String(v||'').trim();
    if(kind==='quiz'){
      const oe=[0,1,2,3].map(i=>s(b['a'+i])), om=[0,1,2,3].map(i=>s(b['m'+i])||oe[i]);
      if(!s(b.qen)||!s(b.een)||oe.some(o=>!o)||new Set(oe).size<4)return null;
      const e={id,difficulty:DIFFS.includes(b.d)?b.d:'easy',category:'custom',question:{en:s(b.qen),ms:s(b.qms)||s(b.qen)},options:{en:oe,ms:om},answer:Math.max(0,Math.min(3,Number(b.ans)||0)),explanation:{en:s(b.een),ms:s(b.ems)||s(b.een)}};
      e.points=(contentInfo.points||{})[e.difficulty]||10; const code=String(b.code||'').replace(/\s+$/,''); if(code.trim())e.code=code; return e;
    }
    const code=String(b.code||'').replace(/\s+$/,'');
    if(!code.trim()||!s(b.een))return null;
    return {id,difficulty:DIFFS.includes(b.d)?b.d:'easy',code,correct:String(b.ok)==='true',question:{en:'Is this Python code correct?',ms:'Adakah kod Python ini betul?'},explanation:{en:s(b.een),ms:s(b.ems)||s(b.een)}};
  }
  function admSync() {
    document.querySelectorAll('#adm-bulk [data-bi]').forEach(el=>{
      const b=adm.draft[Number(el.dataset.bi)]; if(!b)return;
      if(el.type==='radio'){if(el.checked)b[el.dataset.f]=el.value;} else b[el.dataset.f]=el.value;
    });
    const ta=document.getElementById('adm-import'); if(ta)adm.importText=ta.value;
  }
  function saveQuizList(list) {
    const arr=window.PYQUEST_QUESTIONS; arr.splice(0,arr.length,...list);   // ubah tatasusunan yang sama supaya enjin nampak perubahan
    try{localStorage.setItem('pyquest_questions_v2',JSON.stringify(list));}catch(_){}
    contentInfo=window.PyQuestEngine.handle('content');
  }
  function saveKindList(kind,list) { if(kind==='quiz')saveQuizList(list); else savePuzzles(list); }
  function validQuiz(q) { return Boolean(q&&typeof q.id==='string'&&DIFFS.includes(q.difficulty)&&q.question&&typeof q.question.en==='string'&&q.options&&Array.isArray(q.options.en)&&q.options.en.length===4&&Array.isArray(q.options.ms)&&q.options.ms.length===4&&Number.isInteger(q.answer)&&q.explanation&&typeof q.explanation.en==='string'); }
  function loadStoredQuestions() {
    try { const saved=JSON.parse(localStorage.getItem('pyquest_questions_v2')||'null'); if(Array.isArray(saved)&&saved.length){const ok=saved.filter(validQuiz);if(ok.length){const arr=window.PYQUEST_QUESTIONS;arr.splice(0,arr.length,...ok);}} } catch(_) {}
  }
  /* TSV dari Excel / Google Sheets (sel berbilang baris diapit "…") */
  function parseTSV(text) {
    const rows=[]; let row=[], cell='', q=false;
    for(let i=0;i<text.length;i++){
      const c=text[i];
      if(q){ if(c==='"'){ if(text[i+1]==='"'){cell+='"';i++;} else q=false; } else cell+=c; }
      else if(c==='"'&&cell==='')q=true;
      else if(c==='\t'){row.push(cell);cell='';}
      else if(c==='\n'||c==='\r'){ if(c==='\r'&&text[i+1]==='\n')i++; row.push(cell);cell=''; if(row.some(x=>x.trim()))rows.push(row); row=[]; }
      else cell+=c;
    }
    row.push(cell); if(row.some(x=>x.trim()))rows.push(row);
    return rows;
  }
  const IMPORT_COLS={quiz:['level (easy/normal/medium/hard)','question EN','question BM','code','A','B','C','D','answer (A-D)','explanation EN','explanation BM'],puzzle:['level (easy/normal/medium/hard)','code','correct (TRUE/FALSE)','explanation EN','explanation BM']};
  function importPreview(kind) {
    const rows=parseTSV(adm.importText||''), ok=[], bad=[];
    const lv=v=>{v=String(v||'').trim().toLowerCase();return {mudah:'easy',biasa:'normal',sederhana:'medium',sukar:'hard'}[v]||v;};
    rows.forEach((r,i)=>{
      if(i===0&&/level|tahap/i.test(r[0]||''))return;   // baris tajuk
      let b;
      if(kind==='quiz'){const a=String(r[8]||'').trim().toUpperCase();b={d:lv(r[0]),qen:r[1],qms:r[2],code:r[3],a0:r[4],a1:r[5],a2:r[6],a3:r[7],m0:'',m1:'',m2:'',m3:'',ans:String('ABCD'.indexOf(a)>=0?'ABCD'.indexOf(a):(Number(a)-1)),een:r[9],ems:r[10]};}
      else {const c=String(r[2]||'').trim().toLowerCase();b={d:lv(r[0]),code:r[1],ok:['true','betul','yes','ya','1','correct'].includes(c)?'true':'false',een:r[3],ems:r[4]};}
      const e=DIFFS.includes(b.d)&&(kind!=='quiz'||Number(b.ans)>=0)?entryFromBlock(kind,b,newId(i)):null;
      if(e)ok.push(e); else bad.push(i+1);
    });
    return {ok,bad};
  }
  function downloadData(kind) {
    const list=kind==='quiz'?allQuiz():allPuzzles();
    const name=kind==='quiz'?'questions-update-7.js':'puzzles-update-7.js';
    const head=`/* PyQuest — ${kind==='quiz'?'bank soalan Kuiz':'bank Puzzle'} (dimuat turun dari Admin pada ${new Date().toISOString().slice(0,10)}). ${list.length} soalan. */\n`;
    const body=(kind==='quiz'?'window.PYQUEST_QUESTIONS=':'window.PYQUEST_PUZZLES=')+JSON.stringify(list,null,0)+';\n';
    const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([head+body],{type:'text/javascript'})); a.download=name;
    document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
  }
  function admBlockHtml(kind,b,i,total) {
    const lvl=`<select class="text-input adm-lvl" data-bi="${i}" data-f="d">${DIFFS.map(d=>`<option value="${d}"${b.d===d?' selected':''}>${t('lvl_'+d)}</option>`).join('')}</select>`;
    const field=(f,label,tag='input',extra='')=>`<label class="adm-f"><span>${label}</span>${tag==='input'?`<input class="text-input" data-bi="${i}" data-f="${f}" value="${escapeHtml(b[f])}" ${extra}>`:`<textarea class="text-input${f==='code'?' admin-code-input':''}" rows="${f==='code'?4:2}" data-bi="${i}" data-f="${f}" spellcheck="${f==='code'?'false':'true'}" ${extra}>${escapeHtml(b[f])}</textarea>`}</label>`;
    const head=`<div class="adm-bhead"><span class="adm-bnum">${i+1}</span><b>${t('admBlock',{n:i+1})}</b>${lvl}${total>1&&!adm.editId?`<button type="button" class="adm-x" data-action="adm-remove" data-i="${i}" title="${t('admRemove')}">×</button>`:''}</div>`;
    if(kind==='quiz') return `<fieldset class="adm-block">${head}${field('qen',t('admQEn'),'textarea')}${field('qms',t('admQMs'),'textarea')}${field('code',t('admCode'),'textarea')}
      <div class="adm-f"><span>${t('admOptsEn')}</span><div class="adm-opts">${[0,1,2,3].map(j=>`<label class="adm-opt${String(b.ans)===String(j)?' right':''}"><input type="radio" name="ans-${i}" value="${j}" data-bi="${i}" data-f="ans" ${String(b.ans)===String(j)?'checked':''}><b>${'ABCD'[j]}</b><input class="text-input" data-bi="${i}" data-f="a${j}" value="${escapeHtml(b['a'+j])}"></label>`).join('')}</div></div>
      <details class="adm-more"${b.m0||b.m1||b.m2||b.m3?' open':''}><summary>${t('admOptsMs')}</summary><div class="adm-opts">${[0,1,2,3].map(j=>`<label class="adm-opt"><b>${'ABCD'[j]}</b><input class="text-input" data-bi="${i}" data-f="m${j}" value="${escapeHtml(b['m'+j])}"></label>`).join('')}</div></details>
      ${field('een',t('admExpEn'),'textarea')}${field('ems',t('admExpMs'),'textarea')}</fieldset>`;
    return `<fieldset class="adm-block">${head}${field('code',t('admCodeP'),'textarea')}<div class="adm-f"><span>${t('correctAnswerLabel')}</span><div class="adm-tf"><label class="${b.ok==='true'?'on ok':''}"><input type="radio" name="ok-${i}" value="true" data-bi="${i}" data-f="ok" ${b.ok==='true'?'checked':''}> ✓ ${t('admRuns')}</label><label class="${b.ok==='false'?'on bad':''}"><input type="radio" name="ok-${i}" value="false" data-bi="${i}" data-f="ok" ${b.ok==='false'?'checked':''}> 🐞 ${t('admBug')}</label></div></div>${field('een',t('admExpEn'),'textarea')}${field('ems',t('admExpMs'),'textarea')}</fieldset>`;
  }
  function admRow(kind,item,index) {
    if(kind==='quiz') return `<article class="adm-row"><div class="adm-row-main"><span class="adm-id">#${index+1} · ${escapeHtml(item.id)}</span><h3>${escapeHtml(item.question[language]||item.question.en)}</h3>${item.code?`<pre><code>${highlight(item.code)}</code></pre>`:''}<ol class="adm-row-opts">${item.options.en.map((o,j)=>`<li class="${j===item.answer?'right':''}"><b>${'ABCD'[j]}</b>${escapeHtml((item.options[language]||item.options.en)[j])}</li>`).join('')}</ol><p class="adm-exp">${escapeHtml(item.explanation[language]||item.explanation.en)}</p></div><div class="admin-row-actions"><button class="btn btn-secondary" data-action="adm-edit" data-id="${escapeHtml(item.id)}">${t('edit')}</button><button class="btn btn-wrong" data-action="adm-delete" data-id="${escapeHtml(item.id)}">${t('delete')}</button></div></article>`;
    return `<article class="adm-row"><div class="adm-row-main"><span class="adm-id">#${index+1} · ${escapeHtml(item.id)}</span><pre><code>${highlight(item.code)}</code></pre><span class="adm-verdict ${item.correct?'ok':'bad'}">${item.correct?'✓ '+t('admRuns'):'🐞 '+t('admBug')}</span><p class="adm-exp">${escapeHtml(item.explanation[language]||item.explanation.en)}</p></div><div class="admin-row-actions"><button class="btn btn-secondary" data-action="adm-edit" data-id="${escapeHtml(item.id)}">${t('edit')}</button><button class="btn btn-wrong" data-action="adm-delete" data-id="${escapeHtml(item.id)}">${t('delete')}</button></div></article>`;
  }
  function admListHtml() {
    const kind=admKind(), q=adm.q.trim().toLowerCase();
    const list=admList().filter(x=>x.difficulty===adminDiff).filter(x=>!q||JSON.stringify([x.question,x.code,x.options,x.explanation,x.id]).toLowerCase().includes(q));
    return `<p class="adm-shown">${t('admShown',{n:list.length})}</p>${list.map((x,i)=>admRow(kind,x,i)).join('')||`<p class="empty-state">${t('adminEmpty')}</p>`}`;
  }
  function bankBanner() {
    if(!useShared())return `<p class="adm-note">ⓘ ${t('admLocalNote')}</p>`;
    const st=bankStatus;
    if(!st){setTimeout(refreshBankStatus,0);return `<p class="adm-note">⏳ ${t('bkChecking')}</p>`;}
    if(st.state==='ok')return `<p class="adm-note bk-ok">✅ ${t('bkOk')} <small>${t('bkAs',{name:escapeHtml(st.name||'')})}</small></p>`;
    if(st.state==='login')return `<div class="adm-note bk-warn"><b>🔒 ${t('bkLogin')}</b><button type="button" class="btn btn-secondary" data-action="bk-recheck">${t('bkRecheck')}</button></div>`;
    if(st.state==='not-admin')return `<div class="adm-note bk-warn"><b>🔒 ${t('bkNotAdmin',{name:escapeHtml(st.name||'')})}</b><ol><li>${t('bkStep1')}</li><li>${t('bkStep2')}</li><li>${t('bkStep3')}</li><li>${t('bkStep4')}</li></ol><div class="bk-uid"><code>${escapeHtml(st.uid)}</code><button type="button" class="btn btn-secondary" data-action="bk-copy">${t('bkCopy')}</button><button type="button" class="btn btn-primary" data-action="bk-recheck">${t('bkRecheck')}</button></div></div>`;
    return `<div class="adm-note bk-warn"><b>⚠ ${t('bkRules')}</b>${st.uid?`<div class="bk-uid"><code>${escapeHtml(st.uid)}</code><button type="button" class="btn btn-primary" data-action="bk-recheck">${t('bkRecheck')}</button></div>`:`<button type="button" class="btn btn-primary" data-action="bk-recheck">${t('bkRecheck')}</button>`}</div>`;
  }
  const canWrite=()=>!useShared()||(bankStatus&&bankStatus.state==='ok');
  async function bankWrite(fn,okMsg) {
    if(!canWrite()){notify(t('bkNeedAdmin'));window.scrollTo({top:0,behavior:'smooth'});return false;}
    try { await fn(); notify(okMsg,true); return true; }
    catch(e){ notify(t('bkErr')); if(/permission/i.test(String(e&&(e.code||e.message)))){bankStatus=null;} return false; }
  }
  function renderManager() {
    const kind=admKind(), I=ICON(), list=admList();
    const tabs=`<div class="admin-tabs">${DIFFS.map(d=>`<button type="button" class="admin-tab lvl-${d}${d===adminDiff?' active':''}" data-action="adm-diff" data-diff="${d}">${t('lvl_'+d)} <b>${list.filter(p=>p.difficulty===d).length}</b></button>`).join('')}</div>`;
    const head=`<div class="adm-head"><div class="adm-title"><span class="adm-title-ic ${kind}">${kind==='quiz'?I.quiz:I.puzzle}</span><div><h2>${t(kind==='quiz'?'manageQuiz':'managePuzzles')}</h2><small>${fmtN(list.length)} ${language==='ms'?'soalan':'questions'}</small></div></div><div class="adm-btns"><button class="btn btn-accent" data-action="adm-bulk">${I.plus} ${t('admAddMany')}</button><button class="btn btn-secondary" data-action="adm-importview">${t('admImport')}</button><button class="btn btn-secondary" data-action="adm-download">⬇ ${t('admDownload')}</button><button class="btn btn-ghost" data-action="adm-restore">${t('restoreBtn')}</button></div></div>${bankBanner()}`;
    if(adm.view==='bulk'){
      const n=adm.draft.length;
      return `<article class="card adm-card">${head}<div class="adm-sub"><h3>${adm.editId?t('admEditTitle'):t('admBulkTitle')}</h3>${adm.editId?'':`<div class="adm-count"><span>${t('admHowMany')}</span><div class="mp-seg">${[1,5,10,20].map(c=>`<button type="button" class="speed-btn${n===c?' active':''}" data-action="adm-count" data-n="${c}">${c}</button>`).join('')}</div></div>`}</div>
        <form id="adm-bulk" novalidate>${adm.draft.map((b,i)=>admBlockHtml(kind,b,i,n)).join('')}<div class="adm-foot">${adm.editId?'':`<button type="button" class="btn btn-secondary" data-action="adm-addone">${t('admAddOne')}</button><small>${t('admEmptySkip')}</small>`}<span class="adm-sp"></span><button type="button" class="btn btn-secondary" data-action="adm-cancel">${t('cancel')}</button><button type="submit" class="btn btn-primary">${adm.editId?t('saveChanges'):t('admSaveAll',{n})}</button></div></form></article>`;
    }
    if(adm.view==='import'){
      const p=adm.preview;
      return `<article class="card adm-card">${head}<div class="adm-sub"><h3>${t('admImport')}</h3></div><p>${t('admImportHelp')}</p><div class="adm-cols"><b>${t('admImportCols')}:</b>${IMPORT_COLS[kind].map((c,i)=>`<span><i>${i+1}</i>${escapeHtml(c)}</span>`).join('')}</div>
        <textarea id="adm-import" class="text-input adm-import" rows="10" spellcheck="false" placeholder="${escapeHtml(IMPORT_COLS[kind].join('\t'))}">${escapeHtml(adm.importText)}</textarea>
        ${p?`<div class="adm-preview"><span class="ok">✓ ${t('admImportOk',{n:p.ok.length})}</span>${p.bad.length?`<span class="bad">⚠ ${t('admImportBad',{n:p.bad.length})}: ${p.bad.slice(0,12).map(r=>t('admRow',{n:r})).join(', ')}</span>`:''}</div>`:''}
        <div class="adm-foot"><button type="button" class="btn btn-secondary" data-action="adm-cancel">${t('cancel')}</button><span class="adm-sp"></span><button type="button" class="btn btn-secondary" data-action="adm-check">${t('admCheck')}</button><button type="button" class="btn btn-primary" data-action="adm-doimport" ${p&&p.ok.length?'':'disabled'}>${t('admImportAdd',{n:p?p.ok.length:0})}</button></div></article>`;
    }
    return `<article class="card adm-card">${head}${tabs}<input type="search" id="adm-q" class="text-input adm-search" placeholder="${t('admSearch')}" value="${escapeHtml(adm.q)}"><div class="adm-list" id="adm-list">${admListHtml()}</div></article>`;
  }
  function renderAdmin() {
    if (!teacherName) return renderTeacherLogin();
    const body=adminTab==='live'?liveShell():adminTab==='users'?usersShell():renderManager();
    return `<section class="admin-page"><div class="section-heading"><div><span class="eyebrow">${t('admin')}</span><h1 class="page-title">${t('adminPanel')}</h1><p>Welcome, ${escapeHtml(teacherName)}! <span>/ Selamat datang, ${escapeHtml(teacherName)}!</span></p></div><button class="btn btn-secondary" data-action="teacher-logout">${t('logoutAdmin')}</button></div>${adminTabsBar()}${body}</section>`;
  }
  function renderInfo() {
    if(!window.PyQuestInfo)return `<section class="login-card card"><h1>Info</h1><p>${escapeHtml(t('networkError'))}</p></section>`;
    return window.PyQuestInfo.render(language);
  }
  function adminTabsBar() {
    const I=ICON();
    const tab=(key,label,icon,live)=>`<button type="button" role="tab" aria-selected="${adminTab===key}" class="admin-main-tab${adminTab===key?' active':''}" data-action="admin-tab" data-tab="${key}">${live?'<span class="live-dot mini on"></span>':icon}${label}</button>`;
    return `<div class="admin-main-tabs" role="tablist">${tab('live',t('adminTabLive'),'',true)}${tab('users',t('adminTabUsers'),I.user)}${tab('quiz',t('adminTabQuiz'),I.quiz)}${tab('puzzles',t('adminTabPuzzles'),I.puzzle)}</div>`;
  }
  async function admAction(action,btn) {
    const kind=admKind();
    if(action==='adm-metric'){liveMetric=btn.dataset.k==='unique'?'unique':'views';paintLive();return;}
    if(action==='adm-diff'){adminDiff=DIFFS.includes(btn.dataset.diff)?btn.dataset.diff:'easy';render({keepScroll:true});return;}
    if(action==='adm-bulk'){adm.view='bulk';adm.editId=null;adm.draft=Array.from({length:adm.count},()=>emptyBlock(kind));render({keepScroll:true});return;}
    if(action==='adm-count'){admSync();const n=Number(btn.dataset.n)||1;adm.count=n;while(adm.draft.length<n)adm.draft.push(emptyBlock(kind));while(adm.draft.length>n&&blankBlock(kind,adm.draft[adm.draft.length-1]))adm.draft.pop();render({keepScroll:true});return;}
    if(action==='adm-addone'){admSync();adm.draft.push(emptyBlock(kind));render({keepScroll:true});setTimeout(()=>document.querySelector('#adm-bulk .adm-block:last-of-type')?.scrollIntoView({behavior:'smooth',block:'center'}),50);return;}
    if(action==='adm-remove'){admSync();adm.draft.splice(Number(btn.dataset.i),1);if(!adm.draft.length)adm.draft.push(emptyBlock(kind));render({keepScroll:true});return;}
    if(action==='adm-cancel'){adm.view='list';adm.editId=null;adm.draft=[];adm.preview=null;render({keepScroll:true});return;}
    if(action==='adm-edit'){const e=admList().find(x=>x.id===btn.dataset.id);if(!e)return;adm.view='bulk';adm.editId=e.id;adm.draft=[blockFromEntry(kind,e)];render();window.scrollTo({top:0,behavior:'smooth'});return;}
    if(action==='adm-delete'){
      const ok=await confirmDialog(t('deleteTitle').replace(/puzzle/i,language==='ms'?'soalan':'question'),t('deleteMsg'),t('yesDelete'),t('cancel'),{tone:'danger',sad:true});
      if(ok){
        const id=btn.dataset.id;
        if(useShared()){const isBase=(kind==='quiz'?BASE_QUESTIONS:BASE_PUZZLES).some(x=>x.id===id);await bankWrite(()=>BANK().remove(kind==='quiz'?'quiz':'puzzle',id,isBase),t('bkDeleted'));render({keepScroll:true});}
        else {saveKindList(kind,admList().filter(x=>x.id!==id));notify(t('deleted'),true);render({keepScroll:true});}
      }
      return;
    }
    if(action==='adm-restore'){
      const ok=await confirmDialog(kind==='quiz'?t('admRestoreQuiz'):t('restoreTitle'),kind==='quiz'?t('admRestoreQuizMsg'):t('restoreMsg'),t('restoreBtn'),t('cancel'),{tone:'danger'});
      if(!ok)return;
      if(useShared()){await bankWrite(()=>BANK().reset(kind==='quiz'?'quiz':'puzzle'),t('bkRestored'));render({keepScroll:true});return;}
      if(kind==='quiz'){try{localStorage.removeItem('pyquest_questions_v2');}catch(_){} const arr=window.PYQUEST_QUESTIONS;arr.splice(0,arr.length,...BASE_QUESTIONS.map(q=>JSON.parse(JSON.stringify(q))));contentInfo=window.PyQuestEngine.handle('content');}
      else {try{localStorage.removeItem('pyquest_puzzles_v3');}catch(_){} loadStoredPuzzles();contentInfo=window.PyQuestEngine.handle('content');}
      notify(t('restored'),true);render({keepScroll:true});return;
    }
    if(action==='adm-download'){downloadData(kind);return;}
    if(action==='bk-recheck'){bankStatus=null;render({keepScroll:true});return;}
    if(action==='bk-copy'){try{await navigator.clipboard.writeText(bankStatus.uid);notify(t('bkCopied'),true);}catch(_){notify(bankStatus.uid);}return;}
    if(action==='adm-importview'){adm.view='import';adm.preview=null;render({keepScroll:true});return;}
    if(action==='adm-check'){admSync();adm.preview=importPreview(kind);render({keepScroll:true});return;}
    if(action==='adm-doimport'){
      admSync();const p=importPreview(kind);if(!p.ok.length)return;
      if(useShared()){if(!(await bankWrite(()=>BANK().saveItems(kind==='quiz'?'quiz':'puzzle',p.ok),t('bkPublished',{n:p.ok.length}))))return;}
      else {saveKindList(kind,admList().concat(p.ok));notify(t('admSavedN',{n:p.ok.length}),true);}
      adm.view='list';adm.importText='';adm.preview=null;render({keepScroll:true});return;
    }
  }
  async function admSave() {
    admSync();
    const kind=admKind(), entries=[];
    for(let i=0;i<adm.draft.length;i++){
      const b=adm.draft[i];
      if(!adm.editId&&blankBlock(kind,b))continue;
      const e=entryFromBlock(kind,b,adm.editId||newId(i));
      if(!e){notify(t(kind==='quiz'?'admErrQ':'admErrP',{n:i+1}));document.querySelectorAll('#adm-bulk .adm-block')[i]?.scrollIntoView({behavior:'smooth',block:'center'});return;}
      entries.push(e);
    }
    if(!entries.length){notify(t('admNothing'));return;}
    if(useShared()){
      if(!(await bankWrite(()=>BANK().saveItems(kind==='quiz'?'quiz':'puzzle',entries),t('bkPublished',{n:entries.length}))))return;
    } else {
      let list=admList().slice();
      if(adm.editId)list=list.map(x=>x.id===adm.editId?entries[0]:x); else list=list.concat(entries);
      saveKindList(kind,list);
      notify(t('admSavedN',{n:entries.length}),true);
    }
    adminDiff=entries[0].difficulty;
    adm.view='list';adm.editId=null;adm.draft=[];render();
  }

  /* =====================================================================
     MULTIPLAYER (update 8)
     ===================================================================== */
  Object.assign(translations.en,{multi:'Multiplayer',mpTitle:'Multiplayer',mpLead:'Play with your class or friends. One person creates a room, everyone else joins with the code.',
    mpCreate:'Create a room',mpCreateDesc:'Be the host. Teachers can control every question, or let everyone play at their own pace.',mpJoin:'Join a room',mpJoinDesc:'Got a code from your teacher or friend? Type it here.',
    mpCode:'Room code',mpNick:'Your nickname',mpJoinBtn:'Join room',mpCreateBtn:'Create room',mpSettings:'Room settings',mpPace:'Who controls the questions?',
    mpPaceHost:'Host controls (teacher mode)',mpPaceHostD:'Everyone sees the same question. The host shows the answer and moves to the next question.',
    mpPaceSelf:'Own pace',mpPaceSelfD:'Everyone answers at their own speed. The leaderboard updates live.',
    mpCount:'Number of questions',mpTimer:'Time per question',mpHostPlays:'I want to play too',mpHostPlaysD:'Only for "Own pace" rooms.',
    mpShare:'Tell everyone to open PyQuest → Multiplayer and type this code:',mpPlayers:'Players',mpWaiting:'Waiting for players to join…',mpStart:'Start game',
    mpWaitHost:'You are in! Waiting for the host to start…',mpLeave:'Leave room',mpClose:'Close room',mpLeaveTitle:'Leave this room?',mpLeaveMsg:'Your score in this room will be removed.',
    mpCloseTitle:'Close the room for everyone?',mpCloseMsg:'All players will be sent out of the room.',mpClosed:'The room was closed by the host.',
    mpAnswered:'{n} of {total} answered',mpShowAnswer:'Show answer',mpNextQ:'Next question',mpFinish:'Show final results',mpLocked:'Answer locked in!',mpLockedSub:'Waiting for the others and the host…',
    mpTimeUp:'Time is up!',mpTop:'Leaderboard',mpProgress:'Live progress',mpEnd:'End game',mpEndTitle:'End the game now?',mpEndMsg:'Everyone will see the final results.',
    mpFinished:'You finished! Waiting for the others…',mpFinal:'Final results',mpYourRank:'Your rank: #{n}',mpPlayAgain:'Play again (new questions)',mpPoints:'+{n} points',mpNoPoints:'No points this time',
    mpXp:'+{n} XP added to your profile',mpHostLabel:'Host',mpQuestion:'Question {n} of {total}',mpOnline:'online',mpOffline:'away',mpCopy:'Copy code',mpCopied:'Code copied!',
    mpNoConfig:'Multiplayer needs Firebase. Ask the website owner to follow SETUP-MULTIPLAYER-update-8.md.',mpAnonOff:'Multiplayer is not switched on yet: enable "Anonymous" sign-in in Firebase Authentication (see SETUP-MULTIPLAYER-update-8.md).',
    mpPerm:'Permission denied. Publish the new database.rules.json in Firebase (see SETUP-MULTIPLAYER-update-8.md).',mpErrCode:'Type the 6-character room code.',mpErrNick:'Type a nickname (2–16 letters or numbers).',
    mpNotFound:'No room with that code. Check the code and try again.',mpRoomClosed:'That room has already finished.',mpFull:'That room is full (60 players).',mpNeedPlayers:'Wait for at least one player.',
    mpDashTitle:'Multiplayer',mpDashDesc:'Join your class or friends with a room code, or host your own live quiz!',mpGoSide:'Play with friends',mpSpeedBonus:'Faster right answers earn more points!',mpNone:'Off',mpSec:'{n}s'});
  Object.assign(translations.ms,{multi:'Multiplayer',mpTitle:'Multiplayer',mpLead:'Main bersama kelas atau kawan. Seorang mencipta bilik, yang lain masuk dengan kod.',
    mpCreate:'Cipta bilik',mpCreateDesc:'Jadi hos. Guru boleh mengawal setiap soalan, atau biar semua bermain mengikut kadar sendiri.',mpJoin:'Masuk bilik',mpJoinDesc:'Ada kod daripada guru atau kawan? Taip di sini.',
    mpCode:'Kod bilik',mpNick:'Nama panggilan',mpJoinBtn:'Masuk bilik',mpCreateBtn:'Cipta bilik',mpSettings:'Tetapan bilik',mpPace:'Siapa yang mengawal soalan?',
    mpPaceHost:'Hos mengawal (mod guru)',mpPaceHostD:'Semua nampak soalan yang sama. Hos menunjukkan jawapan dan beralih ke soalan seterusnya.',
    mpPaceSelf:'Ikut kadar sendiri',mpPaceSelfD:'Semua menjawab mengikut kelajuan masing-masing. Papan markah dikemas kini secara langsung.',
    mpCount:'Bilangan soalan',mpTimer:'Masa setiap soalan',mpHostPlays:'Saya pun nak main',mpHostPlaysD:'Hanya untuk bilik "Ikut kadar sendiri".',
    mpShare:'Minta semua buka PyQuest → Multiplayer dan taip kod ini:',mpPlayers:'Pemain',mpWaiting:'Menunggu pemain masuk…',mpStart:'Mula permainan',
    mpWaitHost:'Anda sudah masuk! Menunggu hos memulakan permainan…',mpLeave:'Keluar bilik',mpClose:'Tutup bilik',mpLeaveTitle:'Keluar dari bilik ini?',mpLeaveMsg:'Markah anda dalam bilik ini akan dipadam.',
    mpCloseTitle:'Tutup bilik untuk semua?',mpCloseMsg:'Semua pemain akan dikeluarkan dari bilik.',mpClosed:'Bilik telah ditutup oleh hos.',
    mpAnswered:'{n} daripada {total} sudah menjawab',mpShowAnswer:'Tunjuk jawapan',mpNextQ:'Soalan seterusnya',mpFinish:'Tunjuk keputusan akhir',mpLocked:'Jawapan dikunci!',mpLockedSub:'Menunggu pemain lain dan hos…',
    mpTimeUp:'Masa tamat!',mpTop:'Papan markah',mpProgress:'Kemajuan langsung',mpEnd:'Tamatkan permainan',mpEndTitle:'Tamatkan permainan sekarang?',mpEndMsg:'Semua akan melihat keputusan akhir.',
    mpFinished:'Anda sudah selesai! Menunggu yang lain…',mpFinal:'Keputusan akhir',mpYourRank:'Kedudukan anda: #{n}',mpPlayAgain:'Main lagi (soalan baharu)',mpPoints:'+{n} mata',mpNoPoints:'Tiada mata kali ini',
    mpXp:'+{n} XP ditambah ke profil anda',mpHostLabel:'Hos',mpQuestion:'Soalan {n} daripada {total}',mpOnline:'dalam talian',mpOffline:'tiada',mpCopy:'Salin kod',mpCopied:'Kod disalin!',
    mpNoConfig:'Multiplayer memerlukan Firebase. Minta pemilik laman ikut SETUP-MULTIPLAYER-update-8.md.',mpAnonOff:'Multiplayer belum dihidupkan: aktifkan log masuk "Anonymous" dalam Firebase Authentication (lihat SETUP-MULTIPLAYER-update-8.md).',
    mpPerm:'Kebenaran ditolak. Terbitkan database.rules.json yang baharu di Firebase (lihat SETUP-MULTIPLAYER-update-8.md).',mpErrCode:'Taip kod bilik 6 aksara.',mpErrNick:'Taip nama panggilan (2–16 huruf atau nombor).',
    mpNotFound:'Tiada bilik dengan kod itu. Semak kod dan cuba lagi.',mpRoomClosed:'Bilik itu sudah tamat.',mpFull:'Bilik itu sudah penuh (60 pemain).',mpNeedPlayers:'Tunggu sekurang-kurangnya seorang pemain.',
    mpDashTitle:'Multiplayer',mpDashDesc:'Masuk bilik kelas atau kawan dengan kod, atau jadi hos kuiz langsung anda sendiri!',mpGoSide:'Main bersama kawan',mpSpeedBonus:'Jawapan betul yang lebih pantas dapat lebih banyak mata!',mpNone:'Tutup',mpSec:'{n}s'});

  const mp={view:'home',code:'',room:null,unsub:null,err:'',busy:false,joinCode:'',nick:'',opts:{mode:'quiz',diff:'easy',pace:'host',count:10,seconds:20,hostPlays:false},local:{},timer:null,awarded:false,revealing:false,ending:false};
  const MP=()=>window.PyQuestMP;
  const mpIsHost=()=>Boolean(mp.room&&MP()&&mp.room.h===MP().uid());
  const mpPlays=()=>Boolean(mp.room&&(!mpIsHost()||mp.room.hp));
  const mpMe=()=>(mp.room&&mp.room.players&&MP()?mp.room.players[MP().uid()]:null)||null;
  const mpIds=room=>String(room?.qs||'').split(',').filter(Boolean);
  const mpPlayersList=room=>Object.entries(room?.players||{}).map(([id,p])=>({id,...p})).sort((a,b)=>(b.s||0)-(a.s||0)||(b.k||0)-(a.k||0)||String(a.n).localeCompare(String(b.n)));
  function mpErrText(e) {
    const c=(e&&e.code)||'';
    if(c==='mp/no-config')return t('mpNoConfig');
    if(c==='mp/anon-disabled')return t('mpAnonOff');
    if(c==='mp/not-found'||c==='mp/bad-code')return c==='mp/bad-code'?t('mpErrCode'):t('mpNotFound');
    if(c==='mp/closed')return t('mpRoomClosed');
    if(c==='mp/full')return t('mpFull');
    if(c==='PERMISSION_DENIED'||/permission/i.test(String(e&&e.message)))return t('mpPerm');
    if(c==='sdk'||c==='auth/network-request-failed')return t('errNet');
    return t('networkError');
  }
  function mpPickQs(m,d,count) {
    const pool=m==='quiz'?(window.PYQUEST_QUESTIONS||[]).filter(q=>q.difficulty===d):(window.PYQUEST_PUZZLES||[]).filter(p=>p.difficulty===d);
    const ids=pool.map(x=>x.id);
    for(let i=ids.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]];}
    return ids.slice(0,Math.min(count,ids.length));
  }
  function mpQuestion(room,idx) {
    const id=mpIds(room)[idx]; if(!id)return null;
    const pts=(contentInfo.points||{})[room.d]||10;
    if(room.m==='quiz'){
      const q=(window.PYQUEST_QUESTIONS||[]).find(x=>x.id===id)||BASE_QUESTIONS.find(x=>x.id===id); if(!q)return null;
      return {kind:'quiz',text:q.question[language]||q.question.en,code:q.code||'',choices:q.options[language]||q.options.en,correct:q.answer,expl:q.explanation[language]||q.explanation.en,points:pts};
    }
    const p=(window.PYQUEST_PUZZLES||[]).find(x=>x.id===id)||BASE_PUZZLES.find(x=>x.id===id); if(!p)return null;
    return {kind:'puzzle',text:t('puzzleAsk'),code:p.code,choices:[t('puzzleRuns'),t('puzzleBug')],correct:p.correct?0:1,expl:p.explanation[language]||p.explanation.en,points:pts};
  }
  function mpMine(r,q) {
    if(mp.local['q'+r.qi])return mp.local['q'+r.qi];
    const v=((r.ans||{})[r.qi]||{})[MP().uid()];
    return v===undefined?null:{choice:v,ok:Boolean(q)&&v===q.correct,pts:0};
  }
  function mpStop() { if(mp.unsub){mp.unsub();mp.unsub=null;} if(mp.timer){clearInterval(mp.timer);mp.timer=null;} }
  function mpReset(view='home') { mpStop(); mp.code='';mp.room=null;mp.local={};mp.awarded=false;mp.view=view;mp.revealing=false;mp.ending=false; }
  function mpEnter(code) {
    mpStop(); mp.code=code; mp.view='room'; mp.room=null; mp.local={}; mp.awarded=false;
    mp.unsub=MP().watch(code,room=>{
      if(!room){ if(mp.code===code){notify(t('mpClosed'));mpReset('home');if(page==='multi')render({keepScroll:true});} return; }
      const prev=mp.room; mp.room=room;
      if(prev&&prev.st!=='lobby'&&room.st==='lobby'){mp.local={};mp.awarded=false;}
      if(prev&&(prev.qi!==room.qi||prev.st!==room.st)){mp.revealing=false; if(room.st==='reveal'||room.st==='end')sfx(room.st==='end'?'win':'pop'); }
      if(room.st==='end')mpAward();
      mpHostAuto();
      if(page==='multi')render({keepScroll:true});
    },e=>{notify(mpErrText(e));});
    mp.timer=setInterval(mpTick,250);
  }
  function mpRemaining() {
    const r=mp.room; if(!r||!r.sec||!r.qt)return null;
    return Math.max(0,r.sec-(MP().now()-r.qt)/1000);
  }
  function mpTick() {
    const r=mp.room; if(!r||page!=='multi')return;
    if(r.p==='host'&&r.st==='play'){
      const rem=mpRemaining();
      const el=document.getElementById('mp-timer');
      if(el&&rem!==null){el.textContent=Math.ceil(rem);el.parentElement.style.setProperty('--p',(rem/r.sec).toFixed(3));el.parentElement.classList.toggle('urgent',rem<=5);}
      if(rem!==null&&rem<=0){
        if(mpIsHost())mpHostAuto(true);
        else if(!mp.local['q'+r.qi]&&!mp.local.timeUp){mp.local.timeUp=r.qi;render({keepScroll:true});}
      }
    }
    if(r.p==='self'&&r.st==='play'&&mpPlays()&&r.sec&&mp.local.deadline){
      const left=Math.max(0,(mp.local.deadline-Date.now())/1000), el=document.getElementById('mp-timer');
      if(el){el.textContent=Math.ceil(left);el.parentElement.style.setProperty('--p',(left/r.sec).toFixed(3));el.parentElement.classList.toggle('urgent',left<=5);}
      if(left<=0&&!mp.local.fb){mp.local.deadline=0;mpSelfAnswer(-1);}
    }
  }
  function mpHostAuto(timeUp) {
    const r=mp.room; if(!r||!mpIsHost())return;
    if(r.p==='host'&&r.st==='play'&&!mp.revealing){
      const online=mpPlayersList(r).filter(p=>p.o!==false);
      const answered=Object.keys((r.ans||{})[r.qi]||{}).length;
      if(timeUp||(online.length&&answered>=online.length)){mp.revealing=true;setTimeout(()=>MP().reveal(mp.code).catch(e=>notify(mpErrText(e))),timeUp?0:700);}
    }
    if(r.p==='self'&&r.st==='play'&&!mp.ending){
      const list=mpPlayersList(r);
      if(list.length&&list.every(p=>p.d)){mp.ending=true;setTimeout(()=>MP().endGame(mp.code).catch(()=>{}),1500);}
    }
  }
  async function mpAward() {
    if(mp.awarded||!mpPlays())return;
    const me=mpMe(); if(!me)return;
    mp.awarded=true;
    const base=(contentInfo.points||{})[mp.room.d]||10;
    try { const r=await api('record_mp',{kind:mp.room.m,correct:me.k||0,answered:me.a||0,points:(me.k||0)*base}); updateState(r.state); mp.local.xp=r.awarded; } catch(_) {}
    window.PyQuestFX?.confetti({count:160});
    if(page==='multi')render({keepScroll:true});
  }

  /* ---------- tindakan ---------- */
  async function mpCreate() {
    if(mp.busy)return;
    const o=mp.opts;
    const name=MP().cleanName(document.getElementById('mp-host-nick')?.value||state.name);
    if(name.length<2){mp.err=t('mpErrNick');return render({keepScroll:true});}
    mp.busy=true;mp.err='';render({keepScroll:true});
    try {
      const qs=mpPickQs(o.mode,o.diff,o.count);
      const code=await MP().createRoom({mode:o.mode,diff:o.diff,pace:o.pace,seconds:o.seconds,hostPlays:o.pace==='self'&&o.hostPlays,hostName:name,qs});
      mp.busy=false; sfx('power'); mpEnter(code); render({keepScroll:true});
    } catch(e){mp.busy=false;mp.err=mpErrText(e);render({keepScroll:true});}
  }
  async function mpJoin() {
    if(mp.busy)return;
    const code=MP().normCode(document.getElementById('mp-code')?.value);
    const nick=MP().cleanName(document.getElementById('mp-nick')?.value);
    mp.joinCode=code;mp.nick=nick;
    if(code.length!==6){mp.err=t('mpErrCode');return render({keepScroll:true});}
    if(nick.length<2){mp.err=t('mpErrNick');return render({keepScroll:true});}
    mp.busy=true;mp.err='';render({keepScroll:true});
    try { const r=await MP().joinRoom(code,nick); mp.busy=false; sfx('win'); mpEnter(r.code); render({keepScroll:true}); }
    catch(e){mp.busy=false;mp.err=mpErrText(e);sfx('wrong');render({keepScroll:true});}
  }
  async function mpLeave(confirmFirst=true) {
    if(!mp.code){mpReset('home');return true;}
    const host=mpIsHost();
    if(confirmFirst){
      const ok=host?await confirmDialog(t('mpCloseTitle'),t('mpCloseMsg'),t('mpClose'),t('cancel'),{tone:'danger'}):await confirmDialog(t('mpLeaveTitle'),mp.room?.st==='end'?'':t('mpLeaveMsg'),t('mpLeave'),t('cancel'),{tone:'danger',sad:true});
      if(!ok)return false;
    }
    const code=mp.code; mpReset('home');
    try { if(host)await MP().closeRoom(code); else await MP().leave(code); } catch(_) {}
    return true;
  }
  async function mpHostAnswer(choice) {
    const r=mp.room; if(!r||r.st!=='play'||mpMine(r,null))return;
    const rem=mpRemaining(); if(rem!==null&&rem<=0)return;
    const q=mpQuestion(r,r.qi); if(!q)return;
    const ok=choice===q.correct;
    const pts=ok?q.points+Math.round(q.points*((rem??0)/(r.sec||1))):0;
    const me=mpMe()||{};
    mp.local['q'+r.qi]={choice,ok,pts};
    sfx('click'); render({keepScroll:true});
    try { await MP().answer(mp.code,r.qi,choice,{s:(me.s||0)+pts,k:(me.k||0)+(ok?1:0),a:(me.a||0)+1}); }
    catch(e){notify(mpErrText(e));}
  }
  async function mpSelfAnswer(choice) {
    const r=mp.room, me=mpMe(); if(!r||!me||mp.local.fb)return;
    const idx=me.i||0, q=mpQuestion(r,idx); if(!q)return;
    const ok=choice===q.correct, pts=ok?q.points:0;
    mp.local.fb={idx,choice,ok,pts,q};
    sfx(ok?'correct':'wrong'); render({keepScroll:true});
    try { await MP().updateMe(mp.code,{s:(me.s||0)+pts,k:(me.k||0)+(ok?1:0),a:(me.a||0)+1,i:idx+1,d:idx+1>=mpIds(r).length}); } catch(e){notify(mpErrText(e));}
  }
  function mpSelfNext() { mp.local.fb=null; mp.local.deadline=mp.room?.sec?Date.now()+mp.room.sec*1000:0; sfx('click'); render({keepScroll:true}); }

  /* ---------- paparan ---------- */
  function mpBadge(p,i) { return `<span class="mp-ava" style="--h:${(Array.from(String(p.n||'?')).reduce((a,c)=>a+c.codePointAt(0),0)*47)%360}">${escapeHtml(String(p.n||'?').slice(0,1).toUpperCase())}</span>`; }
  function mpBoard(room,limit,highlightMe) {
    const list=mpPlayersList(room).slice(0,limit||99), meId=MP().uid();
    if(!list.length)return `<p class="empty-state">${t('mpWaiting')}</p>`;
    return `<ol class="mp-board">${list.map((p,i)=>`<li class="${p.id===meId&&highlightMe?'me':''}${p.o===false?' away':''}"><span class="mp-rank r${i+1}">${i+1}</span>${mpBadge(p)}<span class="mp-name">${escapeHtml(p.n)}${p.id===room.h?` <small>(${t('mpHostLabel')})</small>`:''}</span><b class="mp-score">${p.s||0}</b></li>`).join('')}</ol>`;
  }
  function mpHeader(room) {
    const I=ICON();
    return `<div class="mp-bar card"><div class="mp-codebox"><small>${t('mpCode')}</small><b>${escapeHtml(mp.code)}</b><button type="button" class="mp-copy" data-action="mp-copy" title="${t('mpCopy')}">⧉</button></div><div class="mp-chips"><span class="lobby-chip">${escapeHtml(flavor(room.m))}</span><span class="lobby-chip lvl-${room.d}">${t('lvl_'+room.d)}</span><span class="lobby-chip">${room.p==='host'?t('mpPaceHost'):t('mpPaceSelf')}</span><span class="lobby-chip">${I.user} ${Object.keys(room.players||{}).length}</span></div><button type="button" class="btn btn-exit" data-action="mp-leave">${I.door}<span>${mpIsHost()?t('mpClose'):t('mpLeave')}</span></button></div>`;
  }
  function mpQuestionCard(q,opts={}) {
    const shapes=['▲','◆','●','■'];
    const answers=q.choices.map((c,i)=>{
      let cls=`ans a${i}`;
      if(opts.reveal){ if(i===q.correct)cls+=' right'; else if(i===opts.mine)cls+=' wrong'; else cls+=' dim'; }
      else if(opts.mine===i)cls+=' picked';
      const dist=opts.dist?`<span class="mp-dist"><i style="width:${opts.dist.total?Math.round(100*(opts.dist.c[i]||0)/opts.dist.total):0}%"></i><b>${opts.dist.c[i]||0}</b></span>`:'';
      return `<button type="button" class="${cls}" ${opts.clickable?`data-action="mp-ans" data-choice="${i}"`:'disabled'}>${q.kind==='quiz'?`<span class="ans-key">${i+1}</span><span class="ans-shape" aria-hidden="true">${shapes[i]}</span>`:`<span class="ans-shape">${i===0?ICON().check:ICON().bug}</span>`}<span class="ans-txt">${escapeHtml(c)}</span>${dist}</button>`;
    }).join('');
    return `<article class="q-card card mp-q"><div class="q-meta"><span class="lobby-chip">${escapeHtml(opts.label||'')}</span>${opts.timer?`<span class="mp-ring" style="--p:1"><b id="mp-timer">${opts.timer}</b></span>`:''}</div><h2 class="q-text">${escapeHtml(q.text)}</h2>${q.code?`<pre class="q-code"><code>${highlight(q.code)}</code></pre>`:''}<div class="answers${q.kind==='puzzle'?' two':''}">${answers}</div>${opts.after||''}</article>`;
  }
  function renderMultiHome() {
    const I=ICON();
    const err=mp.err?`<p class="form-error mp-err">${escapeHtml(mp.err)}</p>`:'';
    return `<section class="mp-page"><div class="mp-hero"><div class="mp-hero-art">${window.PyQuestArt.hero('no-bg')}${window.PyQuestArt.hero('no-bg mp-friend')}</div><div><h1 class="page-title">${t('mpTitle')}</h1><p class="page-subtitle">${t('mpLead')}</p></div></div>${err}
      <div class="mp-home-grid"><article class="card mp-card mp-join"><span class="mp-card-ic">${I.login}</span><h2>${t('mpJoin')}</h2><p>${t('mpJoinDesc')}</p><form id="mp-join-form" novalidate><label class="field-label" for="mp-code">${t('mpCode')}</label><input id="mp-code" class="text-input mp-code-input" maxlength="6" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="ABC123" value="${escapeHtml(mp.joinCode)}"><label class="field-label" for="mp-nick">${t('mpNick')}</label><input id="mp-nick" class="text-input" maxlength="16" autocomplete="nickname" value="${escapeHtml(mp.nick||(mode==='user'?state.name:''))}"><button class="btn btn-primary btn-big login-submit" type="submit" ${mp.busy?'disabled':''}>${t('mpJoinBtn')} →</button></form></article>
      <article class="card mp-card mp-create"><span class="mp-card-ic">${I.plus}</span><h2>${t('mpCreate')}</h2><p>${t('mpCreateDesc')}</p><ul class="rules"><li><span class="r-ic">${I.user}</span>${t('mpPaceHost')}</li><li><span class="r-ic">${I.bolt}</span>${t('mpPaceSelf')}</li><li><span class="r-ic">${I.trophy}</span>${t('mpTop')}</li></ul><button type="button" class="btn btn-accent btn-big" data-action="mp-view" data-view="create">${t('mpCreate')} →</button></article></div></section>`;
  }
  function renderMultiCreate() {
    const o=mp.opts, I=ICON();
    const seg=(name,vals,cur,label)=>`<div class="mp-seg">${vals.map(([v,l])=>`<button type="button" class="speed-btn${String(cur)===String(v)?' active':''}" data-action="mp-opt" data-k="${name}" data-v="${v}">${escapeHtml(l)}</button>`).join('')}</div>`;
    const timerVals=o.pace==='host'?[[10,'10s'],[20,'20s'],[30,'30s'],[60,'60s']]:[[0,t('mpNone')],[30,'30s'],[20,'20s'],[15,'15s']];
    return `<section class="mp-page"><article class="card mp-create-card"><h1 class="page-title">${t('mpSettings')}</h1>${mp.err?`<p class="form-error">${escapeHtml(mp.err)}</p>`:''}
      <h3>${t('sideMode')}</h3><div class="mode-list two">${['quiz','puzzle'].map(m=>`<button type="button" class="mode-btn mb-${m}${o.mode===m?' active':''}" data-action="mp-opt" data-k="mode" data-v="${m}"><span class="mb-ic">${m==='quiz'?I.quiz:I.puzzle}</span><span><b>${escapeHtml(flavor(m))}</b><small>${m==='quiz'?t('quiz'):t('puzzle')}</small></span></button>`).join('')}</div>
      <h3>${t('sideLevel')}</h3><div class="lvl-list four">${DIFFS.map((d,i)=>`<button type="button" class="lvl-btn lvl-${d}${o.diff===d?' active':''}" data-action="mp-opt" data-k="diff" data-v="${d}"><span class="lvl-stars">${Array.from({length:4},(_,j)=>`<i class="${j<=i?'on':''}"></i>`).join('')}</span><span class="lvl-txt"><b>${t('lvl_'+d)}</b><small>${t('lvlDesc_'+d)}</small></span></button>`).join('')}</div>
      <h3>${t('mpPace')}</h3><div class="mp-pace">${[['host',t('mpPaceHost'),t('mpPaceHostD'),I.user],['self',t('mpPaceSelf'),t('mpPaceSelfD'),I.bolt]].map(([v,a,b,ic])=>`<button type="button" class="mp-pace-btn${o.pace===v?' active':''}" data-action="mp-opt" data-k="pace" data-v="${v}"><span class="mb-ic">${ic}</span><span><b>${a}</b><small>${b}</small></span></button>`).join('')}</div>
      <div class="mp-row"><div><h3>${t('mpCount')}</h3>${seg('count',[[5,'5'],[10,'10'],[15,'15'],[20,'20']],o.count)}</div><div><h3>${t('mpTimer')}</h3>${seg('seconds',timerVals,o.seconds)}</div></div>
      ${o.pace==='host'?`<p class="keys-hint">⚡ ${t('mpSpeedBonus')}</p>`:`<label class="mp-check"><input type="checkbox" id="mp-hostplays" ${o.hostPlays?'checked':''}> <b>${t('mpHostPlays')}</b></label>`}
      <label class="field-label" for="mp-host-nick">${t('mpNick')}</label><input id="mp-host-nick" class="text-input" maxlength="16" value="${escapeHtml(mode==='user'?state.name:(mp.nick||''))}">
      <div class="mp-actions"><button type="button" class="btn btn-secondary" data-action="mp-view" data-view="home">← ${t('back')}</button><button type="button" class="btn btn-accent btn-big" data-action="mp-create" ${mp.busy?'disabled':''}>${I.bolt} ${t('mpCreateBtn')}</button></div></article></section>`;
  }
  function renderMultiRoom() {
    const r=mp.room;
    if(!r)return `<section class="mp-page"><article class="card mp-card"><p class="empty-state">${t('loading')}</p></article></section>`;
    const host=mpIsHost(), plays=mpPlays(), n=mpIds(r).length, list=mpPlayersList(r), I=ICON();
    let body='';
    if(r.st==='lobby'){
      const grid=list.length?`<div class="mp-lobby-grid">${list.map(p=>`<span class="mp-chip${p.o===false?' away':''}">${mpBadge(p)}${escapeHtml(p.n)}</span>`).join('')}</div>`:`<p class="empty-state mp-wait-dots">${t('mpWaiting')}</p>`;
      body=`<article class="card mp-lobby">${host?`<p class="mp-share">${t('mpShare')}</p><div class="mp-bigcode">${escapeHtml(mp.code).split('').map(c=>`<span>${c}</span>`).join('')}</div>`:`<div class="mp-wait-art">${window.PyQuestArt.hero('no-bg')}</div><h2>${t('mpWaitHost')}</h2>`}
        <h3>${t('mpPlayers')} (${list.length})</h3>${grid}${host?`<button type="button" class="btn btn-accent btn-big start-btn" data-action="mp-start" ${list.length?'':'disabled'}>${I.bolt} ${t('mpStart')}</button>${list.length?'':`<p class="keys-hint">${t('mpNeedPlayers')}</p>`}`:''}</article>`;
    } else if(r.st==='end'){
      const me=mpMe(), rank=me?list.findIndex(p=>p.id===MP().uid())+1:0;
      const podium=[1,0,2].map(i=>list[i]?`<div class="pod p${i+1}">${mpBadge(list[i])}<b>${escapeHtml(list[i].n)}</b><span>${list[i].s||0}</span><div class="pod-block">${i+1}</div></div>`:'<div class="pod empty"></div>').join('');
      body=`<article class="card mp-end"><h1 class="page-title">${t('mpFinal')}</h1><div class="podium">${podium}</div>${rank?`<p class="mp-myrank">${t('mpYourRank',{n:rank})}${mp.local.xp?` · ${t('mpXp',{n:mp.local.xp})}`:''}</p>`:''}<h3>${t('mpTop')}</h3>${mpBoard(r,0,true)}<div class="result-actions">${host?`<button type="button" class="btn btn-accent btn-big" data-action="mp-again">${I.bolt} ${t('mpPlayAgain')}</button><button type="button" class="btn btn-secondary" data-action="mp-leave">${t('mpClose')}</button>`:`<button type="button" class="btn btn-secondary" data-action="mp-leave">${t('mpLeave')}</button>`}</div></article>`;
    } else if(r.p==='host'){
      const q=mpQuestion(r,r.qi), label=t('mpQuestion',{n:r.qi+1,total:n});
      const ansMap=(r.ans||{})[r.qi]||{}, answered=Object.keys(ansMap).length, online=list.filter(p=>p.o!==false).length;
      if(r.st==='play'){
        const rem=Math.ceil(mpRemaining()??r.sec);
        if(host&&!plays) body=`${mpQuestionCard(q,{label,timer:rem})}<div class="card mp-host-strip"><b class="mp-count">${t('mpAnswered',{n:answered,total:online})}</b><div class="xp-track"><i style="width:${online?Math.round(100*answered/online):0}%"></i></div><button type="button" class="btn btn-primary" data-action="mp-reveal">${t('mpShowAnswer')}</button></div>`;
        else {
          const mine=mpMine(r,q);
          if(mine) body=`<article class="card mp-locked"><div class="mp-wait-art">${window.PyQuestArt.hero('no-bg')}</div><h2>${t('mpLocked')}</h2><p>${t('mpLockedSub')}</p><span class="mp-ring" style="--p:1"><b id="mp-timer">${rem}</b></span><p class="mp-count">${t('mpAnswered',{n:answered,total:online})}</p></article>`;
          else body=mpQuestionCard(q,{label,timer:rem,clickable:mp.local.timeUp!==r.qi,after:mp.local.timeUp===r.qi?`<p class="mp-timeup">${t('mpTimeUp')}</p>`:''});
        }
      } else {
        const c={}; Object.values(ansMap).forEach(v=>{c[v]=(c[v]||0)+1;});
        const mine=mpMine(r,q);
        const fb=plays&&!host?`<div class="fb-panel ${mine&&mine.ok?'good':'bad'}"><div class="fb-head"><span class="fb-ic">${mine&&mine.ok?I.check:I.cross}</span><strong>${mine?(mine.ok?pick('fbGood'):pick('fbBad')):t('mpTimeUp')}</strong><span class="fb-xp">${mine&&mine.pts?t('mpPoints',{n:mine.pts}):t('mpNoPoints')}</span></div><div class="fb-why"><b>${t('explanationLabel')}</b><p>${escapeHtml(q.expl)}</p></div></div>`
          :`<div class="fb-why mp-expl"><b>${t('explanationLabel')}</b><p>${escapeHtml(q.expl)}</p></div>`;
        body=`${mpQuestionCard(q,{label,reveal:true,mine:mine?mine.choice:-1,dist:host?{c,total:answered}:null,after:fb})}<article class="card mp-side-board"><h3>${t('mpTop')}</h3>${mpBoard(r,5,true)}${host?`<button type="button" class="btn btn-accent btn-big" data-action="mp-next">${r.qi+1>=n?t('mpFinish'):t('mpNextQ')} →</button>`:''}</article>`;
      }
    } else {
      /* ikut kadar sendiri */
      const me=mpMe();
      const progress=`<article class="card mp-side-board"><h3>${t('mpProgress')}</h3><ol class="mp-board">${list.map((p,i)=>`<li class="${p.id===MP().uid()?'me':''}${p.o===false?' away':''}"><span class="mp-rank r${i+1}">${i+1}</span>${mpBadge(p)}<span class="mp-name">${escapeHtml(p.n)}<span class="mp-prog"><i style="width:${Math.round(100*Math.min(p.i||0,n)/n)}%"></i></span></span><b class="mp-score">${p.s||0}</b></li>`).join('')}</ol>${host?`<button type="button" class="btn btn-danger" data-action="mp-end">${t('mpEnd')}</button>`:''}</article>`;
      if(!plays||!me) body=progress;
      else if(mp.local.fb){
        const f=mp.local.fb;
        body=`${mpQuestionCard(f.q,{label:t('mpQuestion',{n:f.idx+1,total:n}),reveal:true,mine:f.choice,after:`<div class="fb-panel ${f.ok?'good':'bad'}"><div class="fb-head"><span class="fb-ic">${f.ok?I.check:I.cross}</span><strong>${f.ok?pick('fbGood'):f.choice===-1?t('timeUp'):pick('fbBad')}</strong><span class="fb-xp">${f.pts?t('mpPoints',{n:f.pts}):t('mpNoPoints')}</span></div><div class="fb-why"><b>${t('explanationLabel')}</b><p>${escapeHtml(f.q.expl)}</p></div><button class="btn btn-primary fb-next" data-action="mp-self-next">${f.idx+1>=n?t('seeResults'):t('next')} →</button></div>`})}${progress}`;
      }
      else if(me.d) body=`<article class="card mp-locked"><div class="mp-wait-art">${window.PyQuestArt.hero('no-bg')}</div><h2>${t('mpFinished')}</h2></article>${progress}`;
      else {
        const idx=me.i||0, q=mpQuestion(r,idx);
        if(r.sec&&!mp.local.deadline)mp.local.deadline=Date.now()+r.sec*1000;
        body=`${mpQuestionCard(q,{label:t('mpQuestion',{n:idx+1,total:n}),clickable:true,timer:r.sec?Math.ceil(Math.max(0,(mp.local.deadline-Date.now())/1000)):0})}${progress}`;
      }
    }
    return `<section class="mp-page mp-room st-${r.st} pace-${r.p}">${mpHeader(r)}<div class="mp-body">${body}</div></section>`;
  }
  function renderMulti() {
    if(!MP()||!MP().configured)return `<section class="mp-page"><article class="card mp-card"><h1 class="page-title">${t('mpTitle')}</h1><p class="form-error">${t('mpNoConfig')}</p></article></section>`;
    if(mp.view==='create')return renderMultiCreate();
    if(mp.view==='room'&&mp.code)return renderMultiRoom();
    return renderMultiHome();
  }
  async function mpAction(action,btn) {
    if(action==='mp-view'){mp.view=btn.dataset.view;mp.err='';sfx('click');render({keepScroll:true});return true;}
    if(action==='mp-opt'){
      const k=btn.dataset.k, v=btn.dataset.v; const hp=document.getElementById('mp-hostplays'); if(hp)mp.opts.hostPlays=hp.checked;
      mp.opts[k]=['count','seconds'].includes(k)?Number(v):v;
      if(k==='pace')mp.opts.seconds=v==='host'?20:0;
      sfx('click');render({keepScroll:true});return true;
    }
    if(action==='mp-create'){const hp=document.getElementById('mp-hostplays');if(hp)mp.opts.hostPlays=hp.checked;mpCreate();return true;}
    if(action==='mp-copy'){try{await navigator.clipboard.writeText(mp.code);notify(t('mpCopied'),true);}catch(_){notify(mp.code);}return true;}
    if(action==='mp-leave'){if(await mpLeave())render({keepScroll:true});return true;}
    if(action==='mp-start'){if(!mpPlayersList(mp.room).length)return true;try{await MP().startQuestion(mp.code,0);}catch(e){notify(mpErrText(e));}return true;}
    if(action==='mp-reveal'){mp.revealing=true;try{await MP().reveal(mp.code);}catch(e){notify(mpErrText(e));}return true;}
    if(action==='mp-next'){const n=mpIds(mp.room).length;try{if(mp.room.qi+1>=n)await MP().endGame(mp.code);else await MP().startQuestion(mp.code,mp.room.qi+1);}catch(e){notify(mpErrText(e));}return true;}
    if(action==='mp-end'){const ok=await confirmDialog(t('mpEndTitle'),t('mpEndMsg'),t('mpEnd'),t('cancel'),{tone:'danger'});if(ok){try{await MP().endGame(mp.code);}catch(e){notify(mpErrText(e));}}return true;}
    if(action==='mp-again'){try{await MP().playAgain(mp.code,mp.room,mpPickQs(mp.room.m,mp.room.d,mpIds(mp.room).length));mp.local={};mp.awarded=false;}catch(e){notify(mpErrText(e));}return true;}
    if(action==='mp-ans'){const c=Number(btn.dataset.choice);if(mp.room?.p==='host')mpHostAnswer(c);else mpSelfAnswer(c);return true;}
    if(action==='mp-self-next'){mpSelfNext();return true;}
    return false;
  }

  /* =====================================================================
     Render utama
     ===================================================================== */
  let lastScreenKey='';
  /* =====================================================================
     Sejarah navigasi (update 12): butang Back / gerak leret iPhone & Android
     ===================================================================== */
  let histKey='', histReady=false, restoring=false, navAsking=false;
  function navState() {
    const logged=Boolean(state&&state.name);
    return {pq:1,p:page,np:logged?false:namePromptOpen,av:logged?'':(namePromptOpen?authView:''),
      info:page==='info'&&window.PyQuestInfo?window.PyQuestInfo.current():'',
      mv:page==='multi'&&logged?(mp.view==='room'&&mp.code?'room':mp.view):'',
      at:page==='admin'?adminTab:'',ad:page==='admin'?adm.view:'',g:page==='game'&&logged&&session?1:0,pv:page==='profile'&&logged?profView:''};
  }
  const navUrl=st=>location.pathname+(st.p&&st.p!=='home'?'#'+st.p:'');
  function syncHistory() {
    if(restoring)return;
    const st=navState(), k=JSON.stringify(st);
    if(k===histKey)return;
    try { if(!histReady){history.replaceState(st,'',navUrl(st));histReady=true;} else history.pushState(st,'',navUrl(st)); } catch(_) {}
    histKey=k;
  }
  function applyNav(s) {
    restoring=true;
    mobileMenuOpen=false;
    if(!(s.p==='game'&&s.g)&&session)session=null;
    if(s.p==='game'&&s.g&&!session){}           // pusingan lama sudah tamat: tunjuk lobi
    page=s.p||'home';
    if(!(state&&state.name)){namePromptOpen=Boolean(s.np);authView=s.av||'choose';if(authView==='forgot')forgotState.sent=null;}
    if(s.info&&window.PyQuestInfo)window.PyQuestInfo.go(s.info);
    if(page==='multi'&&!(mp.code&&s.mv==='room'))mp.view=s.mv&&s.mv!=='room'?s.mv:'home';
    if(page==='admin'){adminTab=s.at||'live';adm.view=s.ad==='import'?'import':'list';adm.editId=null;}
    if(page==='profile')profView=s.pv==='avatar'?'avatar':'profile';
    renderInner({});
    const now=navState(); histKey=JSON.stringify(now);
    try{history.replaceState(now,'',navUrl(now));}catch(_){}
    restoring=false;
    window.scrollTo({top:0});
  }
  window.addEventListener('popstate',async e=>{
    let s=e.state;
    if(!s||!s.pq){   // pautan #halaman ditaip / diklik terus
      const h=(location.hash||'').slice(1), p=h==='quiz'||h==='puzzle'?'game':h;
      if(playing()||mp.code){ const cur=histKey?JSON.parse(histKey):null; if(cur)try{history.replaceState(cur,'',navUrl(cur));}catch(_){} return; }
      if(h==='quiz'||h==='puzzle')prefs.mode=h;
      s={pq:1,p:['game','info','admin','multi','profile'].includes(p)?p:'home'};
      try{history.replaceState(s,'',location.href);}catch(_){}
      applyNav(s); return;
    }
    const cur=histKey?JSON.parse(histKey):null;
    const stay=()=>{ if(cur){try{history.pushState(cur,'',navUrl(cur));}catch(_){} } };
    const modals=document.querySelectorAll('.pq-modal');
    if(modals.length){ const owned=navAsking; modals.forEach(m=>m._close?m._close():m.remove()); if(!owned)stay(); return; }   // Back menutup tetingkap dahulu
    if(playing()&&!(s.p==='game'&&s.g)){
      navAsking=true; let ok=false; try{ ok=await confirmDialog(t('exitTitle'),t('exitConfirm'),t('exitYes'),t('exitNo'),{tone:'danger',sad:true}); }finally{ navAsking=false; }
      if(!ok){stay();return;}
      await cancelSession();
    }
    if(page==='multi'&&mp.code&&mp.view==='room'&&!(s.p==='multi'&&s.mv==='room')){
      navAsking=true; let ok=false; try{ ok=await mpLeave(); }finally{ navAsking=false; }
      if(!ok){stay();return;}
    }
    const before=histKey;
    applyNav(s);
    if(histKey===before&&JSON.stringify(s)!==before){try{history.back();}catch(_){}}   // tiada perubahan yang nampak: undur sekali lagi
  });
  function render(opts={}) { renderInner(opts); syncHistory(); }
  function renderInner(opts={}) {
    if(bankPending&&!playing())applyBank();
    if(window.PyQuestAnalytics)window.PyQuestAnalytics.setPage(page);
    if(!(page==='admin'&&teacherName&&adminTab==='live'&&puzzleEditorId===null))stopLive();
    if(!(page==='admin'&&teacherName&&adminTab==='users'&&puzzleEditorId===null))stopUsers();
    document.documentElement.lang=language==='ms'?'ms':'en';
    document.title=language==='ms'?'PyQuest — Game Python untuk Pelajar':'PyQuest — Python Games for Young Coders';
    document.querySelector('[data-i18n="footer"]').textContent=language==='ms'?'Belajar Python sambil bermain.':'Learn Python by playing.';
    header.innerHTML=topNav();
    decorateBrand();
    document.getElementById('year').textContent=new Date().getFullYear();
    main.dataset.screen=page;
    const screenKey=page+'|'+(state?.name?1:0)+'|'+namePromptOpen+'|'+authView+'|'+(page==='multi'?mp.view+mp.code+(mp.room?mp.room.st+mp.room.qi:''):'')+'|'+(page==='game'?(session?session.kind+(session.result?'r':''):'lobby'):'')+'|'+(page==='info'&&window.PyQuestInfo?window.PyQuestInfo.current():'')+'|'+(page==='profile'?profView:'');
    main.classList.toggle('no-anim',screenKey===lastScreenKey); lastScreenKey=screenKey;
    if(page==='admin') { main.innerHTML=renderAdmin(); if(teacherName&&adminTab==='live'&&puzzleEditorId===null)startLive(); if(teacherName&&adminTab==='users'&&puzzleEditorId===null)startUsers(); return; }
    if(page==='info') { main.innerHTML=renderInfo(); return; }
    if (!state?.name) {
      main.dataset.screen=namePromptOpen?'auth':'landing';
      main.innerHTML=renderNameEntry();
      if(namePromptOpen&&authView!=='choose')setTimeout(()=>document.getElementById(authView==='forgot'?'forgot-id':'auth-user')?.focus({preventScroll:true}),60);
      return;
    }
    if(page==='game') main.innerHTML=renderGame();
    else if(page==='multi') main.innerHTML=renderMulti();
    else if(page==='profile') main.innerHTML=renderProfile();
    else { page='home'; main.dataset.screen='home'; main.innerHTML=renderDashboard(); }
    if(page==='game'&&session&&session.feedback&&!session.result)setTimeout(()=>document.querySelector('.fb-next')?.focus({preventScroll:true}),30);
  }
  async function loadContent() {
    if(useShared()){ if(bankVal)applyBank(); else if(!window.PYQUEST_PUZZLES)window.PYQUEST_PUZZLES=BASE_PUZZLES.slice(); contentInfo=await api('content'); return; }
    loadStoredQuestions();
    contentInfo=await api('content');
    loadStoredPuzzles();
  }
  function validPuzzle(item) {
    return Boolean(item&&typeof item.id==='string'&&DIFFS.includes(item.difficulty)&&item.question&&typeof item.question.en==='string'&&typeof item.question.ms==='string'&&typeof item.code==='string'&&typeof item.correct==='boolean'&&item.explanation&&typeof item.explanation.en==='string'&&typeof item.explanation.ms==='string');
  }
  function loadStoredPuzzles() {
    try {
      const saved=JSON.parse(localStorage.getItem('pyquest_puzzles_v3')||'null');
      if(Array.isArray(saved)&&saved.length){window.PYQUEST_PUZZLES=saved.filter(validPuzzle);contentInfo=window.PyQuestEngine.handle('content');return;}
    } catch(_) {}
    window.PYQUEST_PUZZLES=BASE_PUZZLES.map(p=>({...p,question:{...p.question},explanation:{...p.explanation}}));
  }
  function savePuzzles(list) {
    window.PYQUEST_PUZZLES=list;
    try{localStorage.setItem('pyquest_puzzles_v3',JSON.stringify(list));}catch(_){}
    contentInfo=window.PyQuestEngine.handle('content');
  }
  async function refresh() {
    localStorage.removeItem('pyquest_username');
    const response=await api('state');
    state={...response.state,name:''};
    mode='';namePromptOpen=false;
    await loadContent();
    const hashPage=(location.hash||'').slice(1);
    if(['game','quiz','puzzle','info','admin','multi','profile'].includes(hashPage)){
      if(hashPage==='quiz'||hashPage==='puzzle')prefs.mode=hashPage;
      if(hashPage==='info'||hashPage==='admin')page=hashPage; else pendingPage=hashPage==='multi'?'multi':hashPage==='profile'?'profile':'game';
    }
    const A=window.PyQuestAuth;
    if(A&&A.configured){
      try {
        const user=await Promise.race([A.restore(),new Promise(resolve=>setTimeout(()=>resolve(null),4000))]);
        if(user){await enterAccount(user,false,true);if(pendingPage==='game'||pendingPage==='multi'||pendingPage==='profile')page=pendingPage;}
      } catch(_) {}
    }
    if(!state?.name&&(pendingPage==='game'||pendingPage==='multi'||pendingPage==='profile')){namePromptOpen=true;authView='choose';}
    if(!state?.name&&new URLSearchParams(location.search).has('login')){namePromptOpen=true;authView='login';try{history.replaceState(null,'',location.pathname+location.hash);}catch(_){}}
    render();
    if(window.PyQuestAnalytics)window.PyQuestAnalytics.start({lang:language,page});
    startBank();
  }

  /* =====================================================================
     Peristiwa
     ===================================================================== */
  document.addEventListener('click',async event=>{
    const themePick=event.target.closest('.mini-theme[data-theme-pick]');
    if(themePick){applyTheme(themePick.dataset.themePick);return;}
    const languageButton=event.target.closest('[data-lang]');
    if(languageButton){
      language=languageButton.dataset.lang;localStorage.setItem('pyquest-language',language);window.PyQuestAnalytics?.setLang(language);
      try{
        await loadContent();
        if(session&&session.kind==='quiz'&&!session.feedback&&!session.result){const r=await api('quiz_question');session.question=r.question;}
        render({keepScroll:true});
      }catch(error){notify(error.message);}
      return;
    }
    const infoGo=event.target.closest('[data-info-go]');
    if(infoGo&&window.PyQuestInfo){window.PyQuestInfo.go(infoGo.dataset.infoGo);sfx('click');render({keepScroll:true});const top=document.getElementById('info-top');if(top)window.scrollTo({top:Math.max(0,top.getBoundingClientRect().top+scrollY-80),behavior:'smooth'});return;}
    const infoDone=event.target.closest('[data-info-done]');
    if(infoDone&&window.PyQuestInfo){window.PyQuestInfo.toggleDone(infoDone.dataset.infoDone);sfx('pop');render({keepScroll:true});return;}
    if(event.target.closest('[data-info-toggle]')&&window.PyQuestInfo){window.PyQuestInfo.toggleSide();render({keepScroll:true});return;}
    const jump=event.target.closest('[data-jump]');
    if(jump){event.preventDefault();const id=jump.dataset.jump;if(id==='info-top')window.scrollTo({top:0,behavior:'smooth'});else document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
    const pageButton=event.target.closest('[data-page]');
    if(pageButton){
      event.preventDefault();let destination=pageButton.dataset.page;
      if(destination==='quiz'||destination==='puzzle'){prefs.mode=destination;if(DIFFS.includes(pageButton.dataset.diff))prefs.diff=pageButton.dataset.diff;savePrefs();destination='game';}
      if(destination==='admin'||destination==='info'){setPage(destination);return;}
      if(destination==='profile'){profView=pageButton.dataset.pv==='avatar'?'avatar':(pageButton.dataset.pv==='profile'?'profile':profView);shopPreview='';}
      if(!state?.name){pendingPage=destination;namePromptOpen=true;authView='choose';page='home';mobileMenuOpen=false;render();window.scrollTo({top:0});}
      else if(destination==='profile'&&page==='profile'){render({keepScroll:false});window.scrollTo({top:0,behavior:'smooth'});}
      else setPage(destination);
      return;
    }
    const choice=event.target.closest('[data-quiz-choice]');
    if(choice&&!choice.disabled){answerQuiz(Number(choice.dataset.quizChoice));return;}
    const actionButton=event.target.closest('[data-action]');
    const action=actionButton?.dataset.action;
    if(!action||actionButton.disabled)return;
    if(action==='open-theme'){openThemePicker();return;}
    if(action.startsWith('pf-')||action.startsWith('sk-')){await profAction(action,actionButton);return;}
    if(action.startsWith('mp-')){await mpAction(action,actionButton);return;}
    if(action.startsWith('adm-')||action.startsWith('bk-')){await admAction(action,actionButton);return;}
    if(action==='fs-resend'){if(forgotState.idf)sendForgot(forgotState.idf,true);return;}
    if(action==='fs-other'){forgotState.sent=null;forgotState.idf='';render({keepScroll:true});return;}
    if(action==='get-started'){pendingPage='home';namePromptOpen=true;authView='choose';sfx('click');render();window.scrollTo({top:0,behavior:'smooth'});}
    if(action==='auth-view'){event.preventDefault();authView=actionButton.dataset.view||'choose';if(authView==='forgot')forgotState.sent=null;sfx('click');render();}
    if(action==='guest-start')startGuest();
    if(action==='toggle-pass'){
      const input=document.getElementById(actionButton.dataset.for);if(!input)return;
      const show=input.type==='password';input.type=show?'text':'password';
      actionButton.innerHTML=show?ICON().eyeoff:ICON().eye;actionButton.setAttribute('aria-pressed',String(show));
      mascotState(show?'m-peek':'m-shy',show?'bubPeek':'bubPass');
      input.focus();
    }
    if(action==='logout'){
      if(playing()&&!(await confirmLeaveGame()))return;
      const ok=await confirmDialog(t('logoutTitle'),t('logoutMsg'),t('logOut'),t('cancel'));
      if(!ok)return;
      try{await window.PyQuestAuth.logOut();}catch(_){} leaveToAuth('landing');
    }
    if(action==='change-name'){
      if(mode==='guest'){const ok=await confirmDialog(t('guestLeaveTitle'),t('guestLeave'),t('exitYes'),t('cancel'),{tone:'danger',sad:true});if(!ok)return;}
      leaveToAuth('choose');
    }
    if(action==='toggle-menu'){mobileMenuOpen=!mobileMenuOpen;render({keepScroll:true});}
    if(action==='set-mode'){prefs.mode=actionButton.dataset.mode;savePrefs();session=null;sfx('click');render({keepScroll:true});}
    if(action==='set-diff'){prefs.diff=actionButton.dataset.diff;savePrefs();session=null;sfx('click');render({keepScroll:true});}
    if(action==='set-speed'){prefs.seconds=Number(actionButton.dataset.seconds)||0;savePrefs();sfx('click');render({keepScroll:true});}
    if(action==='toggle-sound'){window.PyQuestFX?.setMuted(!window.PyQuestFX.isMuted());sfx('click');render({keepScroll:true});}
    if(action==='start-game')startGame();
    if(action==='to-lobby'){session=null;render({keepScroll:true});}
    if(action==='game-next')gameNext();
    if(action==='fifty')useFifty();
    if(action==='shield')useShield();
    if(action==='answer-puzzle')answerPuzzle(actionButton.dataset.choice==='true');
    if(action==='exit-session')exitSession();
    if(action==='back-main'){stopTimer();session=null;setPage('home');}
    if(action==='admin-tab'){adminTab=['puzzles','users','quiz'].includes(actionButton.dataset.tab)?actionButton.dataset.tab:'live';puzzleEditorId=null;adm.view='list';adm.q='';bankStatus=null;render();}
    if(action==='admin-diff'){adminDiff=DIFFS.includes(actionButton.dataset.diff)?actionButton.dataset.diff:'easy';render({keepScroll:true});}
    if(action==='add-puzzle'){puzzleEditorId='';render();}
    if(action==='edit-puzzle'){puzzleEditorId=actionButton.dataset.id;render();}
    if(action==='cancel-puzzle-edit'){puzzleEditorId=null;render();}
    if(action==='teacher-logout'){
      const ok=await confirmDialog(t('adminLogoutTitle'),'',t('logOut'),t('cancel'));if(!ok)return;
      teacherName='';sessionStorage.removeItem('pyquest_admin_session');puzzleEditorId=null;page='admin';render();
    }
    if(action==='delete-puzzle'){
      const ok=await confirmDialog(t('deleteTitle'),t('deleteMsg'),t('yesDelete'),t('cancel'),{tone:'danger',sad:true});
      if(ok){savePuzzles(allPuzzles().filter(item=>item.id!==actionButton.dataset.id));notify(t('deleted'),true);render({keepScroll:true});}
    }
    if(action==='restore-puzzles'){
      const ok=await confirmDialog(t('restoreTitle'),t('restoreMsg'),t('restoreBtn'),t('cancel'),{tone:'danger'});
      if(ok){try{localStorage.removeItem('pyquest_puzzles_v3');}catch(_){} loadStoredPuzzles();contentInfo=window.PyQuestEngine.handle('content');notify(t('restored'),true);render({keepScroll:true});}
    }
  });
  document.addEventListener('submit',async event=>{
    const formId=event.target.getAttribute('id')||'';   // jangan guna event.target.id: input bernama "id" boleh menindihnya
    if(formId==='adm-bulk'){event.preventDefault();admSave();return;}
    if(formId==='mp-join-form'){event.preventDefault();mpJoin();return;}
    if(formId==='pf-name-form'){event.preventDefault();changeName();return;}
    if(formId==='teacher-form'){
      event.preventDefault();
      const username=document.getElementById('teacher-name').value.trim();
      const pass=document.getElementById('teacher-pass').value;
      if(!username||!pass||hashCred(`${username.toLowerCase()}:${pass}`)!==ADMIN_HASH){document.getElementById('teacher-error').textContent=t('loginFailed');return;}
      teacherName=username;sessionStorage.setItem('pyquest_admin_session',username);page='admin';render();return;
    }
    if(formId==='puzzle-editor-form'){
      event.preventDefault();
      const form=new FormData(event.target);
      const item={
        id:puzzleEditorId||`C${Date.now()}-${Math.random().toString(36).slice(2,7)}`,
        difficulty:DIFFS.includes(form.get('difficulty'))?form.get('difficulty'):adminDiff,
        question:{en:String(form.get('questionEn')||'').trim(),ms:String(form.get('questionMs')||'').trim()},
        code:String(form.get('code')||'').replace(/\s+$/,''),correct:form.get('correct')==='true',
        explanation:{en:String(form.get('explanationEn')||'').trim(),ms:String(form.get('explanationMs')||'').trim()},
      };
      if(!item.question.en||!item.question.ms||!item.code||!item.explanation.en||!item.explanation.ms){notify(t('questionRequired'));return;}
      let done=false;const list=allPuzzles().map(p=>{if(p.id===puzzleEditorId){done=true;return item;}return p;});
      if(!done)list.push(item);
      savePuzzles(list);adminDiff=item.difficulty;puzzleEditorId=null;notify(t('saved'),true);render();return;
    }
    if(formId==='forgot-form'){
      event.preventDefault();
      const idf=document.getElementById('forgot-id').value.trim();
      if(!idf){document.getElementById('auth-error').textContent=t('errForgotEmpty');mascotState('m-sad');return;}
      sendForgot(idf,false);
      return;
    }
    if(formId==='signup-form'||formId==='login-form'){
      event.preventDefault();
      const signup=formId==='signup-form';
      const err=document.getElementById('auth-error');
      const username=document.getElementById('auth-user').value.trim();
      const pass=document.getElementById('auth-pass').value;
      const A=window.PyQuestAuth;
      const fail=msg=>{err.textContent=msg;mascotState('m-sad',null,msg);sfx('wrong');const card=event.target.closest('.auth-form-card');card?.classList.remove('shake');void card?.offsetWidth;card?.classList.add('shake');};
      if(signup){
        if(!(A?A.NAME_RE:/^[A-Za-z0-9_]{3,20}$/).test(username))return fail(t('errUsername'));
        if([...pass].length<6)return fail(t('errPass12'));
        if(pass!==document.getElementById('auth-pass2').value)return fail(t('errMismatch'));
      } else if(!username||!pass)return fail(t('errBad'));
      const email=signup?document.getElementById('auth-email').value.trim():'';
      if(signup&&email&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return fail(t('errEmail'));
      if(!A||!A.configured)return fail(t('errNoConfig'));
      if(authBusy)return;
      authBusy=true;err.textContent='';
      const btn=event.target.querySelector('button[type="submit"]');if(btn){btn.disabled=true;btn.classList.add('loading');}
      try {
        const user=signup?await A.signUp(username,pass,email):await A.logIn(username,pass);
        await enterAccount(user,signup);
      } catch(e){
        if(document.getElementById('auth-error'))fail(authError(e));
        if(btn){btn.disabled=false;btn.classList.remove('loading');}
      } finally { authBusy=false; }
    }
  });
  /* Interaksi maskot pada halaman log masuk */
  document.addEventListener('focusin',e=>{
    const id=e.target.id;
    if(id==='auth-user'||id==='forgot-id')mascotState('m-typing',id==='forgot-id'?null:'bubUser');
    if(id==='auth-pass'||id==='auth-pass2'){const shown=e.target.type==='text';mascotState(shown?'m-peek':'m-shy',shown?'bubPeek':'bubPass');}
  });
  document.addEventListener('focusout',e=>{
    if(['auth-user','auth-pass','auth-pass2','forgot-id'].includes(e.target.id))setTimeout(()=>{if(!document.activeElement||!['auth-user','auth-pass','auth-pass2','forgot-id'].includes(document.activeElement.id))mascotState('m-idle');},10);
  });
  document.addEventListener('change',e=>{
    if(e.target.id==='pf-file'){const file=e.target.files&&e.target.files[0];e.target.value='';if(file)uploadPic(file);return;}
    if(e.target.id==='users-sort'){usersView.sort=e.target.value;const tb=document.getElementById('users-table');if(tb)tb.innerHTML=usersTable();}
  });
  document.addEventListener('input',e=>{
    if(e.target.id==='users-q'){usersView.q=e.target.value;const tb=document.getElementById('users-table');if(tb)tb.innerHTML=usersTable();return;}
    if(e.target.id==='adm-q'){adm.q=e.target.value;const l=document.getElementById('adm-list');if(l)l.innerHTML=admListHtml();return;}
    if(e.target.closest&&e.target.closest('#adm-bulk')&&e.target.type==='radio'){admSync();e.target.closest('.adm-opts,.adm-tf')?.querySelectorAll('label').forEach(l=>{const r=l.querySelector('input[type=radio]');l.classList.toggle('right',Boolean(r&&r.checked&&l.classList.contains('adm-opt')));if(!l.classList.contains('adm-opt')){l.classList.toggle('on',Boolean(r&&r.checked));l.classList.toggle('ok',Boolean(r&&r.checked&&r.value==='true'));l.classList.toggle('bad',Boolean(r&&r.checked&&r.value==='false'));}});}
    if(e.target.id==='auth-user'){const r=e.target.getBoundingClientRect();lookAt(r.left+Math.min(r.width,20+e.target.value.length*9),r.top+r.height/2);}
    if(document.getElementById('signup-form')&&['auth-user','auth-pass','auth-pass2'].includes(e.target.id)){if(updateSignupChecks())mascotState(document.getElementById('auth-mascot')?.classList.contains('m-shy')?'m-shy':'m-happy','bubReady');}
  });
  let lookRaf=0;
  document.addEventListener('mousemove',e=>{
    if(lookRaf||!document.getElementById('auth-mascot'))return;
    lookRaf=requestAnimationFrame(()=>{lookRaf=0;lookAt(e.clientX,e.clientY);});
  });
  document.addEventListener('mouseover',e=>{
    const card=e.target.closest('.auth-card');
    if(card&&!card.contains(e.relatedTarget)){const key=card.classList.contains('ac-signup')?'signUpDesc':card.classList.contains('ac-login')?'logInDesc':'guestDesc';mascotState('m-typing',key);}
  });
  document.addEventListener('keydown',event=>{
    if(document.querySelector('.pq-modal'))return;
    if(page!=='game'||!session||session.result)return;
    const tag=(event.target.tagName||'').toLowerCase(); if(tag==='input'||tag==='textarea'||tag==='select')return;
    if(session.feedback){ if(event.key==='Enter'&&!event.target.closest('button')){event.preventDefault();gameNext();} return; }
    if(session.kind==='quiz'&&/^[1-4]$/.test(event.key)){const i=Number(event.key)-1;if(!session.hidden.includes(i))answerQuiz(i);}
    if(session.kind==='puzzle'){ if(event.key==='ArrowLeft'||event.key==='1')answerPuzzle(true); if(event.key==='ArrowRight'||event.key==='2')answerPuzzle(false); }
  });
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(decorateBrand);
  let brandTimer=null;window.addEventListener('resize',()=>{clearTimeout(brandTimer);brandTimer=setTimeout(decorateBrand,150);});
  refresh().catch(error=>{main.innerHTML=`<div class="login-card card"><h1>${t('networkError')}</h1><p>${escapeHtml(error.message)}</p></div>`;});
})();
