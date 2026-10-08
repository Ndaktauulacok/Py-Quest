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
     Tema
     ===================================================================== */
  const THEMES=['default','pirate','cyber','boys','girls'];
  const THEME_SW={default:['#6c4cf5','#ff5d73','#ffc93c','#2ec27e'],pirate:['#13304a','#0f6e7f','#f4b41a','#8e1b1b'],cyber:['#00e5ff','#ff2a6d','#f9f002','#b967ff'],boys:['#2563eb','#f97316','#22c55e','#0ea5e9'],girls:['#d63aa8','#a78bfa','#fbbf24','#34d399']};
  const RANKS={
    classic:{en:['Python Rookie','Python Explorer','Python Coder','Python Hero','Python Master','Python Legend'],ms:['Python Baharu','Peneroka Python','Pengekod Python','Wira Python','Pakar Python','Legenda Python']},
    pirate:{en:['Python Crew','Python Navigator','Python First Mate','Python Captain','Python Commodore','Python Pirate King']},
    cyber:{en:['Python Byte','Python Glitch','Python Hacker','Python Cyborg','Python Mainframe','Python Singularity']},
  };
  const FLAVOR={
    default:{en:{quiz:'Quiz Battle',puzzle:'Bug Hunt',boss:'Bug Monster',file:'mission'},ms:{quiz:'Pertempuran Kuiz',puzzle:'Buru Bug',boss:'Raksasa Bug',file:'misi'}},
    pirate:{en:{quiz:'Sea Battle',puzzle:'Treasure Hunt',boss:'Kraken Bug',file:'map'},ms:{quiz:'Pertempuran Laut',puzzle:'Cari Harta Karun',boss:'Kraken Bug',file:'peta'}},
    cyber:{en:{quiz:'Cyber Duel',puzzle:'Data Run',boss:'VIRUS.EXE',file:'node'},ms:{quiz:'Duel Siber',puzzle:'Larian Data',boss:'VIRUS.EXE',file:'nod'}},
    boys:{en:{quiz:'Hero Battle',puzzle:'Bug Hunt',boss:'Space Bug',file:'mission'},ms:{quiz:'Pertempuran Wira',puzzle:'Buru Bug',boss:'Bug Angkasa',file:'misi'}},
    girls:{en:{quiz:'Sparkle Battle',puzzle:'Bug Hunt',boss:'Glitch Gremlin',file:'mission'},ms:{quiz:'Pertempuran Kilauan',puzzle:'Buru Bug',boss:'Gremlin Glitch',file:'misi'}},
  };
  let theme='default';
  try { const saved=localStorage.getItem('pyquest-theme'); if(THEMES.includes(saved))theme=saved; } catch(_) {}
  document.documentElement.dataset.theme=theme;
  const flavor=key=>(FLAVOR[theme][language]||FLAVOR[theme].en)[key];
  function rankName(number) {
    const set=theme==='pirate'?RANKS.pirate:theme==='cyber'?RANKS.cyber:RANKS.classic;
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
    const meta=document.querySelector('meta[name="theme-color"]'); if(meta)meta.content={default:'#5132d6',pirate:'#13304a',cyber:'#07040f',boys:'#1d4ed8',girls:'#d63aa8'}[theme];
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
  const BASE_PUZZLES=(window.PYQUEST_PUZZLES||[]).map(p=>({...p,question:{...p.question},explanation:{...p.explanation}}));
  const prefs={mode:'quiz',diff:'easy',seconds:0};
  try { const p=JSON.parse(localStorage.getItem('pyquest-game-prefs')||'{}'); if(['quiz','puzzle'].includes(p.mode))prefs.mode=p.mode; if(DIFFS.includes(p.diff))prefs.diff=p.diff; if([0,30,20,15,10].includes(p.seconds))prefs.seconds=p.seconds; } catch(_) {}
  const savePrefs=()=>{try{localStorage.setItem('pyquest-game-prefs',JSON.stringify(prefs));}catch(_){}};
  let session=null;   // pusingan permainan aktif
  const MAX_HEARTS=5;
  const playing=()=>Boolean(session&&!session.result);

  const t = (key, values={}) => {
    const text = (translations[language] && translations[language][key]) || translations.en[key] || key;
    return text.replace(/\{(\w+)\}/g,(_,name)=>values[name] ?? '');
  };
  const pick = key => { const list=t(key).split('|'); return list[Math.floor(Math.random()*list.length)]; };
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const percent = (a,b) => b ? Math.round(a/b*100) : 0;
  const ICON = () => window.PyQuestArt.ICON;
  const sfx = name => window.PyQuestFX?.play(name);

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
    for (const key of ['quiz_xp','puzzle_xp','quizzes_completed','quiz_correct','quiz_answered','perfect_quiz','recent_quiz','puzzles_completed','puzzle_correct','puzzle_answered','perfect_puzzle','recent_puzzle','streak','last_activity_date']) snapshot[key] = profile[key];
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
    if(next!=='game'&&session&&session.result)session=null;
    page=next; mobileMenuOpen=false; render(); if(!opts.keepScroll)window.scrollTo({top:0,behavior:'smooth'});
  }
  function topNav() {
    const links=[['home','home'],['game','game'],['info','info'],['admin','admin']];
    const I=ICON();
    const userBits=state?.name?`<span class="profile-pill"><span class="avatar">${window.PyQuestArt.miniHead(theme)}</span><span class="profile-name">${escapeHtml(state.name)}</span></span>${mode==='user'?`<button type="button" class="name-change" data-action="logout">${t('logOut')}</button>`:`<button type="button" class="name-change" data-action="change-name">${t('changeName')}</button>`}<span class="xp-pill">${state.xp} XP</span>`:'';
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
    return `<section class="auth-split is-forgot"><div class="auth-side"><div class="auth-mascot m-idle" id="auth-mascot">${window.PyQuestArt.hero('no-bg')}<div class="auth-bubble" id="auth-bubble">${t('bubForgot')}</div></div></div><div class="auth-form-card card"><h1>${t('forgotTitle')}</h1><p class="auth-lead">${t('forgotHint')}</p><form id="forgot-form" novalidate><label class="field-label" for="forgot-id">${t('usernameOrEmail')}</label><div class="input-icon">${ICON().user}<input id="forgot-id" class="text-input" name="id" maxlength="100" autocomplete="username" autocapitalize="none" spellcheck="false" required></div><div class="form-error" id="auth-error" role="alert"></div><div class="form-ok" id="auth-ok" role="status"></div><button class="btn btn-primary btn-big login-submit" type="submit">${t('forgotSend')}</button><div class="auth-switch"><button type="button" class="btn btn-ghost" data-action="auth-view" data-view="login">← ${t('backToLogin')}</button></div></form></div></section>`;
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
    mode='user';
    if(fresh)saveProfile();
    namePromptOpen=false;
    if(!keepPage){page=pendingPage;mascotState('m-happy');window.PyQuestFX?.confetti({count:140});sfx('win');notify(t('welcome',{name:user.username}),true);}
    render();
  }
  async function leaveToAuth(view) {
    stopTimer();session=null;
    const r=await api('reset');
    state={...r.state,name:''};mode='';
    namePromptOpen=view!=='landing';authView=view==='landing'?'choose':view;pendingPage='home';page='home';mobileMenuOpen=false;
    render();window.scrollTo({top:0});
  }
  async function startGuest() {
    const ok=await showDialog({title:t('guestConfirmTitle'),message:t('guestConfirmMsg'),ok:t('guestGo'),cancel:t('back')});
    if(!ok)return;
    await api('reset');
    const r=await api('start',{name:t('guest')});
    mode='guest';updateState(r.state);namePromptOpen=false;page=pendingPage;sfx('win');render();
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
    const tiles=[[state.xp,t('totalXp'),'c4'],[state.quizzes_completed,t('statQuizRounds'),'c1'],[state.puzzles_completed,t('statPuzzleRounds'),'c3'],[state.streak+' '+t('days'),t('streak'),'c2']];
    const badges=achievements().map(([title,desc,on,icon])=>`<div class="badge${on?' on':''}" title="${escapeHtml(t(desc))}"><span class="badge-ic">${icon}</span><b>${t(title)}</b><small>${on?t('unlocked'):t(desc)}</small></div>`).join('');
    return `<section class="dash">
      <div class="dash-hero card"><div class="dash-mascot">${window.PyQuestArt.hero('no-bg')}</div><div class="dash-hello"><h1 class="page-title">${t('welcome',{name:escapeHtml(state.name)})}</h1><p class="page-subtitle">${t('overviewHint')}</p>${mode==='guest'?`<p class="guest-note">${t('guestNote')}</p>`:''}</div>${rankBlock()}</div>
      <div class="play-grid">
        <a href="#game" class="play-card pc-quiz" data-page="quiz"><span class="pc-ic">${I.quiz}</span><span class="pc-body"><b>${escapeHtml(flavor('quiz'))}</b><small>${t('dashQuizDesc',{boss:escapeHtml(flavor('boss'))})}</small></span><span class="pc-cta">${t('playNow')} →</span><span class="pc-boss">${window.PyQuestArt.boss()}</span></a>
        <a href="#game" class="play-card pc-puzzle" data-page="puzzle"><span class="pc-ic">${I.puzzle}</span><span class="pc-body"><b>${escapeHtml(flavor('puzzle'))}</b><small>${t('dashPuzzleDesc')}</small></span><span class="pc-cta">${t('playNow')} →</span><span class="pc-chest">${I.chest}</span></a>
      </div>
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
    const lvl=DIFFS.map((d,i)=>`<button type="button" class="lvl-btn lvl-${d}${prefs.diff===d?' active':''}" data-action="set-diff" data-diff="${d}" ${lock?'disabled':''} aria-pressed="${prefs.diff===d}"><span class="lvl-stars">${stars(i+1)}</span><span class="lvl-txt"><b>${t('lvl_'+d)}</b><small>${t('perAnswer',{n:P[d]||10})} · ${counts?.[d]||0}</small></span></button>`).join('');
    const speeds=[0,30,20,15,10].map(s=>`<button type="button" class="speed-btn${prefs.seconds===s?' active':''}" data-action="set-speed" data-seconds="${s}" ${lock?'disabled':''} aria-pressed="${prefs.seconds===s}">${s?s+'s':t('off')}</button>`).join('');
    const muted=window.PyQuestFX?.isMuted();
    return `<aside class="game-side card" aria-label="${t('sideMode')}"><div class="side-block"><h3>${t('sideMode')}</h3><div class="mode-list">${modeBtn('quiz',I.quiz)}${modeBtn('puzzle',I.puzzle)}</div></div><div class="side-block"><h3>${t('sideLevel')}</h3><div class="lvl-list">${lvl}</div></div><div class="side-block"><h3>${I.clock} ${t('sideSpeed')}</h3><div class="speed-row">${speeds}</div></div><div class="side-block side-foot"><button type="button" class="sound-btn" data-action="toggle-sound" aria-pressed="${!muted}">${muted?I.mute:I.sound}<span>${t('sound')}: ${muted?t('off'):t('on')}</span></button>${lock?`<p class="side-lock">${t('lockedWhilePlaying')}</p>`:''}</div></aside>`;
  }
  function renderLobby() {
    const quiz=prefs.mode==='quiz', I=ICON();
    const rules=t(quiz?'rulesQuiz':'rulesPuzzle').split('|');
    const stage=quiz?`<div class="lobby-stage ls-quiz"><div class="ls-hero">${window.PyQuestArt.hero('no-bg')}</div><span class="ls-vs">VS</span><div class="ls-boss">${window.PyQuestArt.boss()}</div></div>`
      :`<div class="lobby-stage ls-puzzle"><div class="ls-hero small">${window.PyQuestArt.hero('no-bg')}</div><div class="ls-trail">${Array.from({length:6},()=>'<i></i>').join('')}</div><div class="ls-chest">${I.chest}</div></div>`;
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
    return `<div class="arena quiz-arena ev-${s.ev||'none'}">${hud()}<div class="battle"><div class="fighter f-hero"><div class="f-art">${window.PyQuestArt.hero('no-bg')}</div><span class="f-name">${escapeHtml(state.name)}</span></div><div class="beam" aria-hidden="true"></div><div class="fighter f-boss${hp===0?' ko':''}"><div class="f-art">${window.PyQuestArt.boss()}</div><div class="boss-hp"><i style="width:${hp}%"></i></div><span class="f-name">${escapeHtml(flavor('boss'))}</span></div></div>
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
    return `<div class="arena puzzle-arena ev-${s.ev||'none'}">${hud()}<div class="trail-wrap"><div class="trail"><div class="trail-line"><i style="width:${percent(pos,s.total)}%"></i></div>${nodes}<span class="node chest-node${s.result?' open':''}">${I.chest}</span><span class="trail-hero" style="left:calc(${percent(pos,s.total)}% * .92)">${window.PyQuestArt.miniHead(theme)}</span></div></div>
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
    const art=dead||!won?`<div class="rs-art lose">${quiz?window.PyQuestArt.boss():window.PyQuestArt.hero('no-bg')}</div>`:`<div class="rs-art win">${quiz?window.PyQuestArt.hero('no-bg'):`<span class="big-chest">${I.chest}</span>`}</div>`;
    return `<div class="result card ${won?'is-win':'is-lose'}">${art}<h1 class="page-title">${title}</h1><div class="rs-stars">${stars}</div><p class="rs-sub">${escapeHtml(sub)}</p>${s.levelUp?`<div class="level-up">${I.bolt} ${escapeHtml(t('levelUp',{rank:rankName(state.level.number)}))}</div>`:''}${r.perfect&&quiz?`<div class="perfect-banner">${t('perfect')}</div>`:''}
      <div class="rs-stats"><div><b>${score}/${total}</b><span>${t('score')}</span></div><div><b>${r.accuracy}%</b><span>${t('accuracy')}</span></div><div><b>+${r.xp}</b><span>${t('xpEarned')}</span></div><div><b>x${s.bestCombo}</b><span>${t('bestCombo')}</span></div></div>
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
  function renderUsers() {
    const A=window.PyQuestAuth;
    if(!A||!A.configured)return `<article class="card live-card"><p class="form-error">${t('errNoConfig')}</p></article>`;
    if(!usersData)return `<article class="card live-card"><p class="empty-state">${t('liveLoading')}</p></article>`;
    if(usersData.error)return `<article class="card live-card"><p class="form-error">${t(usersData.error==='sdk'?'liveErrSdk':'usersErr')}</p></article>`;
    const list=usersData.list.slice().sort((a,b)=>(b.t||0)-(a.t||0));
    const loc=language==='ms'?'ms-MY':'en-GB';
    const fmt=v=>v?new Date(v).toLocaleString(loc,{dateStyle:'medium',timeStyle:'short'}):'–';
    const rows=list.map((u,i)=>`<tr><td>${list.length-i}</td><td><b>${escapeHtml(u.u)}</b></td><td>${fmt(u.t)}</td><td>${Number(u.x)||0}</td><td>${fmt(u.a)}</td></tr>`).join('');
    return `<article class="card live-card"><h3>${t('usersTotal')}: ${list.length}</h3>${list.length?`<div class="users-wrap"><table class="users-table"><thead><tr><th>#</th><th>${t('usersName')}</th><th>${t('usersJoined')}</th><th>${t('usersXp')}</th><th>${t('usersActive')}</th></tr></thead><tbody>${rows}</tbody></table></div>`:`<p class="empty-state">${t('usersEmpty')}</p>`}<p class="live-note">${t('usersNote')}</p></article>`;
  }
  function usersShell() { return `<div id="users-panel" class="live-panel" aria-live="polite">${renderUsers()}</div>`; }
  function paintUsers() { const el=document.getElementById('users-panel'); if(el)el.innerHTML=renderUsers(); }
  function startUsers() {
    const A=window.PyQuestAuth;
    if(!A||!A.configured||usersUnsub)return;
    const token=++usersToken;
    usersUnsub=()=>{};
    A.subscribeSignups(d=>{if(token===usersToken){usersData=d;paintUsers();}}).then(unsub=>{if(token!==usersToken)unsub();else usersUnsub=unsub;});
  }
  function stopUsers() { usersToken++; if(usersUnsub){usersUnsub();usersUnsub=null;} usersData=null; }
  function renderTeacherLogin() {
    return `<section class="login-card card glass admin-login"><span class="eyebrow">${t('teacherAdmin')}</span><h1>${t('teacherAdmin')}</h1><p>${t('teacherLoginHint')}</p><form id="teacher-form"><label class="field-label" for="teacher-name">${t('teacherUsernameLabel')}</label><input id="teacher-name" class="text-input" name="teacher" autocomplete="username" required autofocus><label class="field-label" for="teacher-pass">${t('passwordLabel')}</label><input id="teacher-pass" class="text-input" type="password" name="password" autocomplete="current-password" required><div class="form-error" id="teacher-error"></div><button class="btn btn-primary login-submit" type="submit">${t('continueAdmin')}</button></form></section>`;
  }
  function allPuzzles() { return window.PYQUEST_PUZZLES||[]; }
  function renderAdmin() {
    if (!teacherName) return renderTeacherLogin();
    if (puzzleEditorId !== null) {
      const existing=allPuzzles().find(item=>item.id===puzzleEditorId);
      const item=existing||{id:'',difficulty:adminDiff,question:{en:'Is this Python code correct?',ms:'Adakah kod Python ini betul?'},code:'',correct:true,explanation:{en:'',ms:''}};
      return `<section class="admin-page"><div class="section-heading"><div><span class="eyebrow">${t('admin')}</span><h1 class="page-title">${t('adminPanel')}</h1></div><button class="btn btn-secondary" data-action="cancel-puzzle-edit">${t('cancel')}</button></div><article class="card admin-card"><h2>${puzzleEditorId?t('edit'):t('addQuestion')}</h2><form id="puzzle-editor-form"><fieldset class="answer-fieldset"><legend>${t('difficultyTab')}</legend>${DIFFS.map(d=>`<label><input type="radio" name="difficulty" value="${d}" ${item.difficulty===d?'checked':''}> ${t('lvl_'+d)}</label>`).join('')}</fieldset><label class="field-label" for="puzzle-question-en">${t('questionEnglish')}</label><input id="puzzle-question-en" class="text-input" name="questionEn" maxlength="240" required value="${escapeHtml(item.question.en)}"><label class="field-label" for="puzzle-question-ms">${t('questionMalay')}</label><input id="puzzle-question-ms" class="text-input" name="questionMs" maxlength="240" required value="${escapeHtml(item.question.ms)}"><label class="field-label" for="puzzle-code">${t('pythonCode')}</label><textarea id="puzzle-code" class="text-input admin-code-input" name="code" rows="7" spellcheck="false" required>${escapeHtml(item.code)}</textarea><fieldset class="answer-fieldset"><legend>${t('correctAnswerLabel')}</legend><label><input type="radio" name="correct" value="true" ${item.correct?'checked':''}> ${t('correctOption')}</label><label><input type="radio" name="correct" value="false" ${!item.correct?'checked':''}> ${t('wrongOption')}</label></fieldset><label class="field-label" for="puzzle-explanation-en">${t('explanationEnglish')}</label><textarea id="puzzle-explanation-en" class="text-input admin-explanation-input" name="explanationEn" rows="3" maxlength="500" required>${escapeHtml(item.explanation.en)}</textarea><label class="field-label" for="puzzle-explanation-ms">${t('explanationMalay')}</label><textarea id="puzzle-explanation-ms" class="text-input admin-explanation-input" name="explanationMs" rows="3" maxlength="500" required>${escapeHtml(item.explanation.ms)}</textarea><div class="admin-form-actions"><button class="btn btn-primary" type="submit">${puzzleEditorId?t('saveChanges'):t('save')}</button><button class="btn btn-secondary" type="button" data-action="cancel-puzzle-edit">${t('cancel')}</button></div></form></article></section>`;
    }
    const list=allPuzzles().filter(p=>p.difficulty===adminDiff);
    const rows=list.map((item,index)=>`<article class="card admin-puzzle-row"><div class="admin-question-copy"><span class="eyebrow">${t('question')} ${index+1} · ${escapeHtml(item.id)}</span><h3>${escapeHtml(item.question.en)}</h3><p>${escapeHtml(item.question.ms)}</p><pre><code>${escapeHtml(item.code)}</code></pre><small>${item.correct?t('correctOption'):t('wrongOption')}</small><p class="admin-explanation-preview"><b>EN:</b> ${escapeHtml(item.explanation.en)}</p><p class="admin-explanation-preview"><b>BM:</b> ${escapeHtml(item.explanation.ms)}</p></div><div class="admin-row-actions"><button class="btn btn-secondary" data-action="edit-puzzle" data-id="${escapeHtml(item.id)}">${t('edit')}</button><button class="btn btn-wrong" data-action="delete-puzzle" data-id="${escapeHtml(item.id)}">${t('delete')}</button></div></article>`).join('');
    const manager=`<article class="card admin-manager"><div class="admin-manager-heading"><div><span class="menu-icon">&lt;/&gt;</span><h2>${t('managePuzzles')}</h2></div><div class="admin-manager-btns"><button class="btn btn-secondary" data-action="restore-puzzles">${t('restoreBtn')}</button><button class="btn btn-primary" data-action="add-puzzle">${t('addQuestion')}</button></div></div><div class="admin-tabs">${DIFFS.map(d=>`<button type="button" class="admin-tab${d===adminDiff?' active':''}" data-action="admin-diff" data-diff="${d}">${t('lvl_'+d)} (${allPuzzles().filter(p=>p.difficulty===d).length})</button>`).join('')}</div><div class="admin-puzzle-list">${rows||`<p class="empty-state">${t('adminEmpty')}</p>`}</div></article>`;
    return `<section class="admin-page"><div class="section-heading"><div><span class="eyebrow">${t('admin')}</span><h1 class="page-title">${t('adminPanel')}</h1><p>Welcome, ${escapeHtml(teacherName)}! <span>/ Selamat datang, ${escapeHtml(teacherName)}!</span></p></div><button class="btn btn-secondary" data-action="teacher-logout">${t('logoutAdmin')}</button></div>${adminTabsBar()}${adminTab==='live'?liveShell():adminTab==='users'?usersShell():manager}</section>`;
  }
  function renderInfo() {
    if(!window.PyQuestInfo)return `<section class="login-card card"><h1>Info</h1><p>${escapeHtml(t('networkError'))}</p></section>`;
    return window.PyQuestInfo.render(language);
  }
  function adminTabsBar() {
    const tab=(key,label,live)=>`<button type="button" role="tab" aria-selected="${adminTab===key}" class="admin-main-tab${adminTab===key?' active':''}" data-action="admin-tab" data-tab="${key}">${live?'<span class="live-dot mini on"></span>':''}${label}</button>`;
    return `<div class="admin-main-tabs" role="tablist">${tab('live',t('adminTabLive'),true)}${tab('users',t('adminTabUsers'),false)}${tab('puzzles',t('adminTabPuzzles'),false)}</div>`;
  }
  function liveShell() { return `<div id="live-panel" class="live-panel" aria-live="polite">${renderLive()}</div>`; }
  function paintLive() { const el=document.getElementById('live-panel'); if(el)el.innerHTML=renderLive(); }
  function startLive() {
    const A=window.PyQuestAnalytics;
    if(!A||!A.configured||liveUnsub)return;
    const token=++liveToken;
    liveUnsub=()=>{};
    A.subscribe(data=>{if(token===liveToken){liveData=data;paintLive();}}).then(unsub=>{if(token!==liveToken)unsub();else liveUnsub=unsub;});
  }
  function stopLive() { liveToken++; if(liveUnsub){liveUnsub();liveUnsub=null;} liveData=null; }
  function renderLive() {
    const A=window.PyQuestAnalytics;
    if(!A||!A.configured) {
      return `<article class="card live-card live-setup"><h2>${t('liveSetupTitle')}</h2><p>${t('liveSetupIntro')}</p><ol class="live-steps"><li>${t('liveStep1')}</li><li>${t('liveStep2')}</li><li>${t('liveStep3')}</li><li>${t('liveStep4')}</li></ol><p class="live-note">${t('liveSetupFoot')}</p></article>`;
    }
    if(!liveData)return `<article class="card live-card"><p class="empty-state">${t('liveLoading')}</p></article>`;
    if(liveData.error)return `<article class="card live-card"><p class="form-error">${t(liveData.error==='sdk'?'liveErrSdk':'liveErrPerm')}</p></article>`;
    const {presence,stats,offset,connected}=liveData;
    const fmt=n=>new Intl.NumberFormat(language==='ms'?'ms-MY':'en-US').format(Number(n)||0);
    const now=Date.now()+(offset||0);
    const active=Object.values(presence||{}).filter(e=>e&&typeof e.t==='number'&&now-e.t<A.ONLINE_MS);
    const admins=active.filter(e=>e.p==='admin').length;
    const visitors=active.filter(e=>e.p!=='admin');
    const names={home:t('home'),game:t('game'),puzzle:t('puzzle'),quiz:t('quiz'),info:t('info'),admin:t('admin')};
    const byPage={};visitors.forEach(e=>{byPage[e.p]=(byPage[e.p]||0)+1;});
    const chips=Object.keys(byPage).sort((a,b)=>byPage[b]-byPage[a]).map(k=>`<span class="live-chip"><b>${byPage[k]}</b> ${escapeHtml(names[k]||k)}</span>`).join('')||`<span class="live-chip muted">${t('liveNobody')}</span>`;
    const s=stats||{};
    const today=A.dayKey();
    const td=(s.daily&&s.daily[today])||{};
    const kpi=(n,label)=>`<div class="card live-kpi"><strong>${fmt(n)}</strong><span>${label}</span></div>`;
    const days=[];
    for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const k=A.dayKey(d);const v=(s.daily&&s.daily[k])||{};days.push({label:d.toLocaleDateString(language==='ms'?'ms-MY':'en-GB',{weekday:'short'}),views:v.views||0,unique:v.unique||0,today:i===0});}
    const max=Math.max(1,...days.map(d=>d.views));
    const bars=days.map(d=>`<div class="live-bar${d.today?' today':''}" title="${d.views} ${t('liveVisits')} · ${d.unique} ${t('liveVisitors')}"><span class="live-bar-val">${fmt(d.views)}</span><span class="live-bar-fill" style="height:${Math.max(4,Math.round(100*d.views/max))}%"></span><span class="live-bar-label">${escapeHtml(d.label)}</span></div>`).join('');
    const pages=Object.entries(s.pages||{}).sort((a,b)=>b[1]-a[1]);
    const pmax=Math.max(1,...pages.map(p=>p[1]));
    const pageRows=pages.map(([k,v])=>`<div class="live-row"><span>${escapeHtml(names[k]||k)}</span><span class="live-meter"><i style="width:${Math.round(100*v/pmax)}%"></i></span><b>${fmt(v)}</b></div>`).join('')||`<p class="empty-state">–</p>`;
    const en=(s.lang&&s.lang.en)||0, ms=(s.lang&&s.lang.ms)||0, ltot=Math.max(1,en+ms);
    const act=s.activity||{};
    return `<div class="live-top"><article class="card live-now"><span class="live-dot${connected?' on':''}" aria-hidden="true"></span><div class="live-now-main"><small>${t('liveOnline')}</small><strong>${visitors.length}</strong><span class="live-sub">${connected?t('liveConnected'):t('liveOffline')}${admins?` · ${admins} ${t('liveAdminHere')}`:''}</span></div><div class="live-chips">${chips}</div></article><div class="live-kpis">${kpi(td.views,t('liveToday'))}${kpi(td.unique,t('liveUniqueToday'))}${kpi(s.views,t('liveTotalViews'))}${kpi(s.visitors,t('liveTotalVisitors'))}</div></div>
    <div class="live-grid"><article class="card live-card"><h3>${t('liveWeek')}</h3><div class="live-bars">${bars}</div></article><article class="card live-card"><h3>${t('livePages')}</h3>${pageRows}</article><article class="card live-card"><h3>${t('liveActivity')}</h3><div class="live-row"><span>${t('liveQuizRounds')}</span><b>${fmt(act.quiz_rounds)}</b></div><div class="live-row"><span>${t('livePuzzleRounds')}</span><b>${fmt(act.puzzle_rounds)}</b></div><h3 class="live-sep">${t('liveLang')}</h3><div class="live-split"><i style="width:${Math.round(100*en/ltot)}%"></i></div><div class="live-row"><span>English</span><b>${fmt(en)}</b></div><div class="live-row"><span>Bahasa Melayu</span><b>${fmt(ms)}</b></div></article></div>
    <p class="live-note">${t('livePrivacy')}</p>`;
  }

  /* =====================================================================
     Render utama
     ===================================================================== */
  function render(opts={}) {
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
    if(page==='admin') { main.innerHTML=renderAdmin(); if(teacherName&&adminTab==='live'&&puzzleEditorId===null)startLive(); if(teacherName&&adminTab==='users'&&puzzleEditorId===null)startUsers(); return; }
    if(page==='info') { main.innerHTML=renderInfo(); return; }
    if (!state?.name) {
      main.dataset.screen=namePromptOpen?'auth':'landing';
      main.innerHTML=renderNameEntry();
      if(namePromptOpen&&authView!=='choose')setTimeout(()=>document.getElementById(authView==='forgot'?'forgot-id':'auth-user')?.focus({preventScroll:true}),60);
      return;
    }
    if(page==='game') main.innerHTML=renderGame();
    else { page='home'; main.dataset.screen='home'; main.innerHTML=renderDashboard(); }
    if(page==='game'&&session&&session.feedback&&!session.result)setTimeout(()=>document.querySelector('.fb-next')?.focus({preventScroll:true}),30);
  }
  async function loadContent() {
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
    if(['game','quiz','puzzle','info','admin'].includes(hashPage)){
      if(hashPage==='quiz'||hashPage==='puzzle')prefs.mode=hashPage;
      if(hashPage==='info'||hashPage==='admin')page=hashPage; else pendingPage='game';
    }
    const A=window.PyQuestAuth;
    if(A&&A.configured){
      try {
        const user=await Promise.race([A.restore(),new Promise(resolve=>setTimeout(()=>resolve(null),4000))]);
        if(user){await enterAccount(user,false,true);if(pendingPage==='game')page='game';}
      } catch(_) {}
    }
    render();
    if(window.PyQuestAnalytics)window.PyQuestAnalytics.start({lang:language,page});
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
    const jump=event.target.closest('[data-jump]');
    if(jump){event.preventDefault();const id=jump.dataset.jump;if(id==='info-top')window.scrollTo({top:0,behavior:'smooth'});else document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
    const pageButton=event.target.closest('[data-page]');
    if(pageButton){
      event.preventDefault();let destination=pageButton.dataset.page;
      if(destination==='quiz'||destination==='puzzle'){prefs.mode=destination;savePrefs();destination='game';}
      if(destination==='admin'||destination==='info'){setPage(destination);return;}
      if(!state?.name){pendingPage=destination;namePromptOpen=true;authView='choose';page='home';mobileMenuOpen=false;render();window.scrollTo({top:0});}
      else setPage(destination);
      return;
    }
    const choice=event.target.closest('[data-quiz-choice]');
    if(choice&&!choice.disabled){answerQuiz(Number(choice.dataset.quizChoice));return;}
    const actionButton=event.target.closest('[data-action]');
    const action=actionButton?.dataset.action;
    if(!action||actionButton.disabled)return;
    if(action==='open-theme'){openThemePicker();return;}
    if(action==='get-started'){pendingPage='home';namePromptOpen=true;authView='choose';sfx('click');render();window.scrollTo({top:0,behavior:'smooth'});}
    if(action==='auth-view'){event.preventDefault();authView=actionButton.dataset.view||'choose';sfx('click');render();}
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
    if(action==='admin-tab'){adminTab=['puzzles','users'].includes(actionButton.dataset.tab)?actionButton.dataset.tab:'live';puzzleEditorId=null;render();}
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
    if(event.target.id==='teacher-form'){
      event.preventDefault();
      const username=document.getElementById('teacher-name').value.trim();
      const pass=document.getElementById('teacher-pass').value;
      if(!username||!pass||hashCred(`${username.toLowerCase()}:${pass}`)!==ADMIN_HASH){document.getElementById('teacher-error').textContent=t('loginFailed');return;}
      teacherName=username;sessionStorage.setItem('pyquest_admin_session',username);page='admin';render();return;
    }
    if(event.target.id==='puzzle-editor-form'){
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
    if(event.target.id==='forgot-form'){
      event.preventDefault();
      const err=document.getElementById('auth-error'),ok=document.getElementById('auth-ok');
      const A=window.PyQuestAuth;err.textContent='';ok.textContent='';
      if(!A||!A.configured){err.textContent=t('errNoConfig');mascotState('m-sad');return;}
      if(authBusy)return;
      authBusy=true;const btn=event.target.querySelector('button[type="submit"]');if(btn)btn.disabled=true;
      try { await A.forgot(document.getElementById('forgot-id').value,language); ok.textContent=t('forgotSent'); mascotState('m-happy'); }
      catch(e){ err.textContent=authError(e); mascotState('m-sad',null,authError(e)); }
      finally { authBusy=false;if(btn)btn.disabled=false; }
      return;
    }
    if(event.target.id==='signup-form'||event.target.id==='login-form'){
      event.preventDefault();
      const signup=event.target.id==='signup-form';
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
  document.addEventListener('input',e=>{
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
