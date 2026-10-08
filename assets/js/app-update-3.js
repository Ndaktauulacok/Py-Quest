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
  let language = localStorage.getItem('pyquest-language') === 'ms' ? 'ms' : 'en';
  let state = null;
  let page = 'home';
  let namePromptOpen = false;
  let pendingPage = 'home';
  let mobileMenuOpen = false;
  let quizCategories = [];
  let quizDifficulties = [];
  let quizCounts = {};
  let quizSettings = {category:'all',difficulty:'all'};
  let selectedQuizChoice = null;
  let quizSession = null;
  let puzzleSession = null;
  const ADMIN_HASH='1e1nb6rbuvq';
  const hashCred=s=>{let a=0xdeadbeef,b=0x41c6ce57;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677);}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return (4294967296*(2097151&b)+(a>>>0)).toString(36);};
  localStorage.removeItem('pyquest_teacher_username');
  let teacherName = (sessionStorage.getItem('pyquest_admin_session') || '').trim();
  let puzzleSetIndex = 0;
  let adminSet = 0;
  let puzzles = [];
  let puzzleEditorId = null;
  let timerHandle = null;
  let adminTab = 'live';
  let liveUnsub = null, liveData = null, liveToken = 0, lastQuizResult = null;

  const t = (key, values={}) => {
    const text = (translations[language] && translations[language][key]) || translations.en[key] || key;
    return text.replace(/\{(\w+)\}/g,(_,name)=>values[name] ?? '');
  };
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const percent = (a,b) => b ? Math.round(a/b*100) : 0;
  const matchingQuestionCount = () => Number(quizCounts?.[quizSettings.category]?.[quizSettings.difficulty] || 0);
  const categoryTitle = id => quizCategories.find(item=>item.id===id)?.label || id;
  const performanceTitle = accuracy => t(accuracy>=90?'levelMaster':accuracy>=75?'levelCoder':accuracy>=50?'levelExplorer':'levelRookie');
  const levelTitle = () => t(['levelRookie','levelExplorer','levelCoder','levelMaster'][Math.max(0,Math.min(3,(state?.level?.number||1)-1))]);

  async function api(action,payload={}) {
    const out=window.PyQuestEngine.handle(action,{...payload,lang:language});
    try {
      const A=window.PyQuestAnalytics;
      if(A){
        if(action==='record_puzzle_result')A.event('puzzle');
        else if(out&&out.result&&(action==='answer_quiz'||action==='finish_quiz')&&out.result!==lastQuizResult){lastQuizResult=out.result;A.event('quiz');}
      }
    } catch(_) {}
    return out;
  }
  function saveProfile(profile=state) {
    if (!profile?.name) return;
    const snapshot = {};
    for (const key of ['quiz_xp','puzzle_xp','quizzes_completed','quiz_correct','quiz_answered','perfect_quiz','recent_quiz','puzzles_completed','puzzle_correct','puzzle_answered','perfect_puzzle','recent_puzzle','streak','last_activity_date']) snapshot[key] = profile[key];
    localStorage.setItem('pyquest-profile-v2',JSON.stringify(snapshot));
  }
  function updateState(next) {
    if (!next) return;
    state = next;
    saveProfile(next);
  }
  function notify(message,success=false) {
    const node=document.createElement('div'); node.className=`toast${success?' success':''}`; node.textContent=message;
    toastRegion.appendChild(node); window.setTimeout(()=>node.remove(),3200);
  }
  function leaveSessionUnused() { stopTimer(); if(quizSession&&!quizSession.result)api('cancel_quiz').then(r=>updateState(r.state)).catch(()=>{}); quizSession=null; puzzleSession=null; selectedQuizChoice=null; }
  /* Ular yang membelit tulisan PyQuest: bahagian belakang di bawah huruf, bahagian depan di atas huruf. */
  function decorateBrand() {
    const host=document.querySelector('.brand-text');
    const word=host&&host.querySelector('.brand-word');
    if(!host||!word||!word.offsetWidth)return;
    host.querySelectorAll('.snake-layer').forEach(n=>n.remove());
    const PADL=10,PADR=16,W=word.offsetWidth,SH=52,cy=SH/2+1,A=12.5;
    const x1=PADL+W+3,x0=PADL-8,P=(x1-x0)/2.5,hostW=PADL+W+PADR;
    const theta=x=>Math.PI+2*Math.PI*(x-x1)/P;
    const yAt=x=>cy+A*Math.sin(theta(x));
    const back=[],front=[];let cur=null,curFront=null;
    for(let x=x0;x<=x1+0.01;x+=0.75){
      const isFront=Math.cos(theta(x))>0;
      if(curFront!==isFront){
        const prev=cur&&cur.length?cur[cur.length-1]:null;
        cur=prev?[prev]:[];curFront=isFront;(isFront?front:back).push(cur);
      }
      cur.push([x,yAt(x)]);
    }
    const toPath=segs=>segs.map(seg=>'M'+seg.map(p=>p[0].toFixed(2)+' '+p[1].toFixed(2)).join('L')).join(' ');
    const ns='http://www.w3.org/2000/svg';
    const layer=(cls,paths,head)=>{
      const svg=document.createElementNS(ns,'svg');
      svg.setAttribute('class','snake-layer '+cls);svg.setAttribute('width',hostW);svg.setAttribute('height',SH);
      svg.setAttribute('viewBox','0 0 '+hostW+' '+SH);svg.setAttribute('aria-hidden','true');
      svg.style.marginTop=(-SH/2)+'px';
      svg.innerHTML=
        '<path d="'+paths+'" fill="none" stroke="#0b2e22" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>'+
        '<path d="'+paths+'" fill="none" stroke="#4fd48c" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>'+
        '<path d="'+paths+'" fill="none" stroke="#d3fbe3" stroke-opacity=".8" stroke-width="1" stroke-linecap="round" stroke-dasharray="0.1 4.5"/>'+
        (head||'');
      host.appendChild(svg);
    };
    const dx=0.5,ang=Math.atan2(yAt(x1)-yAt(x1-dx),dx)*180/Math.PI;
    const headSvg='<g transform="translate('+x1.toFixed(2)+' '+yAt(x1).toFixed(2)+') rotate('+ang.toFixed(1)+')">'+
      '<path class="snake-tongue" d="M12.5 0 L17.5 0 M17.5 0 L20.5 -2.2 M17.5 0 L20.5 2.2" fill="none" stroke="#ff5a4a" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<ellipse cx="6" cy="0" rx="8.2" ry="5.8" fill="#0b2e22"/><ellipse cx="6" cy="0" rx="7.1" ry="4.8" fill="#4fd48c"/>'+
      '<circle cx="7.6" cy="-2.1" r="1.9" fill="#fff"/><circle cx="8.2" cy="-2.1" r="1" fill="#12202f"/>'+
      '<circle cx="7.6" cy="2.1" r="1.9" fill="#fff"/><circle cx="8.2" cy="2.1" r="1" fill="#12202f"/></g>';
    layer('snake-back',toPath(back),'');
    layer('snake-front',toPath(front),headSvg);
  }
  async function exitSession(confirmFirst=true,silent=false) {
    if(confirmFirst&&!window.confirm(t('exitConfirm')))return;
    stopTimer();
    const q=quizSession,pz=puzzleSession;
    quizSession=null;puzzleSession=null;selectedQuizChoice=null;
    try {
      if(q&&!q.result){const r=await api('cancel_quiz');updateState(r.state);}
      if(pz&&!pz.result){const r=await api('cancel_puzzle',{answered:pz.answered||0,correct:pz.score||0});updateState(r.state);}
    } catch(e){}
    if(!silent){render();}
  }
  function setPage(next) {
    if(quizSession||puzzleSession)exitSession(false,true);
    page=next; mobileMenuOpen=false; render(); window.scrollTo({top:0,behavior:'smooth'});
  }
  function topNav() {
    const links=[['home','home'],['puzzle','puzzle'],['quiz','quiz'],['info','info'],['admin','admin']];
    return `<div class="nav-wrap"><a class="brand" href="#home" data-page="home"><img class="brand-mark" src="assets/img/favicon-update.svg?v=2" alt="" width="30" height="30"><span class="brand-text"><span class="brand-word">Py<em>Quest</em></span></span></a><nav class="nav-links${mobileMenuOpen?' open':''}" aria-label="Main navigation">${links.map(([key,label])=>`<a href="#${key}" class="nav-link${page===key||(key==='home'&&page==='home')?' active':''}" data-page="${key}">${t(label)}</a>`).join('')}</nav><div class="nav-right"><div class="language-switch" aria-label="${t('language')}"><button type="button" data-lang="en" class="${language==='en'?'selected':''}" aria-pressed="${language==='en'}">EN</button><button type="button" data-lang="ms" class="${language==='ms'?'selected':''}" aria-pressed="${language==='ms'}">BM</button></div>${state?.name?`<span class="profile-pill"><span class="avatar">${escapeHtml(state.name.slice(0,1).toUpperCase())}</span><span class="profile-name">${escapeHtml(state.name)}</span></span><button type="button" class="name-change" data-action="change-name">${t('changeName')}</button><span class="xp-pill">${state.xp} XP</span>`:''}<button type="button" class="menu-toggle" data-action="toggle-menu" aria-label="Toggle menu">${mobileMenuOpen?'×':'☰'}</button></div></div>`;
  }
  function renderNameEntry() {
    if (namePromptOpen) return `<section class="login-card card glass"><span class="eyebrow">${t('tag')}</span><h1>${t('namePrompt')}</h1><p>${t('nameHelp')}</p><form id="name-form"><label class="field-label" for="name-input">${t('nameLabel')}</label><input id="name-input" class="text-input" name="name" maxlength="40" autocomplete="given-name" placeholder="${t('namePlaceholder')}" required autofocus><div class="form-error" id="name-error"></div><button class="btn btn-primary login-submit" type="submit">${t('continue')}</button></form></section>`;
    return `<section class="landing"><div class="landing-copy"><span class="eyebrow">${t('tag')}</span><h1 class="landing-title">${t('headline')}</h1><p>${t('subheadline')}</p><div class="landing-actions"><button class="btn btn-primary" data-action="get-started">${t('getStarted')}</button></div></div><figure class="spot-card" aria-hidden="true"><figcaption>soalan_3.py</figcaption><pre><code>age = 20
if age &gt;= 18<span class="gap"></span>
    print("Adult")</code></pre><div class="spot-verdict"><span class="v-ok">Betul</span><span class="v-bad">Salah</span></div></figure></section>`;
  }
  function renderDashboard() {
    const cards=[['puzzle','&lt;/&gt;','menuPuzzle','menuPuzzleDesc'],['quiz','?','menuQuiz','menuQuizDesc'],['info','i','menuInfo','menuInfoDesc']];
    const questionTotal=(puzzles[0]||[]).length||20;
    const setProgress=questionTotal?state.puzzle_answered%questionTotal:0;
    return `<section><div class="welcome-row"><div><span class="eyebrow">${t('tag')}</span><h1 class="page-title">${t('welcome',{name:escapeHtml(state.name)})}</h1><p class="page-subtitle">${t('overviewHint')}</p></div><div class="level-chip">${t('level',{number:state.level.number,name:levelTitle()})}</div></div><div class="overview"><article class="card journey-card"><div class="card-topline"><h2>${t('overview')}</h2><span class="progress-percent">${setProgress}/${questionTotal}</span></div><div class="progress-track"><div class="progress-fill" style="width:${percent(setProgress,questionTotal)}%"></div></div></article><article class="card xp-card"><div><small>${t('totalXp')}</small><strong>${state.xp} XP</strong><span class="level-small">${t('level',{number:state.level.number,name:levelTitle()})}</span></div></article></div><div class="section-heading"><div><h2>${language==='ms'?'Pilih aktiviti':'Choose an activity'}</h2><p>${language==='ms'?'Aktiviti ringkas, skor yang boleh dijejak.':'Quick activities with scores you can track.'}</p></div></div><div class="menu-grid">${cards.map(([target,icon,title,desc])=>`<a href="#${target}" data-page="${target}" class="card menu-card"><span class="menu-arrow" aria-hidden="true">→</span><span class="menu-icon">${icon}</span><h3>${t(title)}</h3><p>${t(desc)}</p></a>`).join('')}</div></section>`;
  }
  function renderPuzzle() {
    if (!puzzleSession) return renderPuzzleSets();
    return renderPuzzleRun();
  }
  function renderPuzzleSets() {
    const cards=puzzles.map((set,i)=>`<button type="button" class="card set-card" data-action="begin-puzzle" data-set="${i}" ${set.length?'':'disabled'}><span class="set-number">${i+1}</span><h3>${t('setLabel')} ${i+1}</h3><p>${set.length} ${language==='ms'?'teka-teki':'puzzles'}</p><span class="set-go">${t('startPuzzle')} →</span></button>`).join('');
    return `<section><div class="section-heading"><div><span class="eyebrow">${t('puzzleTitle')}</span><h1 class="page-title">${t('chooseSet')}</h1><p>${t('puzzleDescription')}</p></div><button class="btn btn-secondary" data-page="home">${t('home')}</button></div><div class="set-grid">${cards}</div></section>`;
  }
  function renderPuzzleRun() {
    if (!puzzleSession) return `<section><div class="section-heading"><div><span class="eyebrow">${t('puzzleTitle')}</span><h1 class="page-title">${t('puzzleTitle')}</h1><p>${t('puzzleDescription')}</p></div><button class="btn btn-secondary" data-page="home">${t('home')}</button></div><article class="card puzzle-start-card"><div class="puzzle-start-icon">&lt;/&gt;</div><h2>${puzzles.length} ${language==='ms'?'teka-teki setiap set':'puzzles per set'}</h2><p>${t('puzzleDescription')}</p><div class="puzzle-start-rules"><span>${t('correctButton')}</span><span>${t('wrongButton')}</span><span>${language==='ms'?'+10 XP setiap jawapan betul':'+10 XP per right answer'}</span></div><button class="btn btn-primary" data-action="begin-puzzle" ${puzzles.length?'':'disabled'}>${t('startPuzzle')}</button></article></section>`;
    if (puzzleSession.result) return renderPuzzleResult();
    const puzzle=puzzleSession.puzzle;
    const feedback=puzzleSession.feedback;
    const pct=percent(puzzle.number-1,puzzle.total);
    return `<section class="puzzle-page"><div class="section-heading"><div><span class="eyebrow">${t('puzzleTitle')}</span><h1 class="page-title">${t('puzzleTitle')}</h1><p>${t('setLabel')} ${puzzleSetIndex+1}</p></div><button class="btn btn-exit" data-action="exit-session">${t('exit')}</button></div><article class="card puzzle-card"><div class="quiz-top"><span class="quiz-progress-copy">${t('question')} ${puzzle.number} ${t('of')} ${puzzle.total}</span><span class="puzzle-xp">${state.xp} XP</span></div><div class="quiz-track"><span style="width:${pct}%"></span></div><div class="bilingual-question"><p><b>EN:</b> ${escapeHtml(puzzle.question.en)}</p><p><b>BM:</b> ${escapeHtml(puzzle.question.ms)}</p></div><pre class="puzzle-code"><code>${escapeHtml(puzzle.code)}</code></pre>${feedback?`<div class="puzzle-feedback ${feedback.selected_correctly?'good':'bad'}" role="status"><strong>${feedback.selected_correctly?t('puzzleCorrectChoice'):t('puzzleWrongChoice')}</strong><p>${feedback.selected_correctly?t('puzzleCorrectMessage'):t('puzzleWrongMessage')}</p><div class="puzzle-reason"><b>${language==='ms'?'Sebab / Reason':'Reason / Sebab'}</b><p><span>EN:</span> ${escapeHtml(feedback.explanation.en)}</p><p><span>BM:</span> ${escapeHtml(feedback.explanation.ms)}</p></div>${feedback.xp?`<span class="puzzle-earned">+${feedback.xp} XP</span>`:''}</div><div class="puzzle-actions"><button class="btn btn-primary" data-action="puzzle-next">${puzzleSession.pendingResult?t('seeResults'):t('nextPuzzle')}</button></div>`:`<div class="puzzle-choice-actions"><button class="btn btn-correct" data-action="answer-puzzle" data-choice="true">Correct / Betul</button><button class="btn btn-wrong" data-action="answer-puzzle" data-choice="false">Wrong / Salah</button></div>`}</article></section>`;
  }
  function renderTeacherLogin() {
    return `<section class="login-card card glass admin-login"><span class="eyebrow">${t('teacherAdmin')}</span><h1>${t('teacherAdmin')}</h1><p>${t('teacherLoginHint')}</p><form id="teacher-form"><label class="field-label" for="teacher-name">${t('teacherUsernameLabel')}</label><input id="teacher-name" class="text-input" name="teacher" autocomplete="username" required autofocus><label class="field-label" for="teacher-pass">${t('passwordLabel')}</label><input id="teacher-pass" class="text-input" type="password" name="password" autocomplete="current-password" required><div class="form-error" id="teacher-error"></div><button class="btn btn-primary login-submit" type="submit">${t('continueAdmin')}</button></form></section>`;
  }
  function renderAdmin() {
    if (!teacherName) return renderTeacherLogin();
    if (puzzleEditorId !== null) {
      const existing=puzzles.flat().find(item=>item.id===puzzleEditorId);
      const item=existing||{id:'',question:{en:'',ms:''},code:'',correct:true,explanation:{en:'',ms:''}};
      return `<section class="admin-page"><div class="section-heading"><div><span class="eyebrow">${t('admin')}</span><h1 class="page-title">${t('adminPanel')}</h1></div><button class="btn btn-secondary" data-action="cancel-puzzle-edit">${t('cancel')}</button></div><article class="card admin-card"><h2>${puzzleEditorId?''+t('edit'):''+t('addQuestion')}</h2><form id="puzzle-editor-form"><label class="field-label" for="puzzle-question-en">${t('questionEnglish')}</label><input id="puzzle-question-en" class="text-input" name="questionEn" maxlength="240" required value="${escapeHtml(item.question.en)}"><label class="field-label" for="puzzle-question-ms">${t('questionMalay')}</label><input id="puzzle-question-ms" class="text-input" name="questionMs" maxlength="240" required value="${escapeHtml(item.question.ms)}"><label class="field-label" for="puzzle-code">${t('pythonCode')}</label><textarea id="puzzle-code" class="text-input admin-code-input" name="code" rows="7" spellcheck="false" required>${escapeHtml(item.code)}</textarea><fieldset class="answer-fieldset"><legend>${t('correctAnswerLabel')}</legend><label><input type="radio" name="correct" value="true" ${item.correct?'checked':''}> ${t('correctOption')}</label><label><input type="radio" name="correct" value="false" ${!item.correct?'checked':''}> ${t('wrongOption')}</label></fieldset><label class="field-label" for="puzzle-explanation-en">${t('explanationEnglish')}</label><textarea id="puzzle-explanation-en" class="text-input admin-explanation-input" name="explanationEn" rows="3" maxlength="500" required>${escapeHtml(item.explanation.en)}</textarea><label class="field-label" for="puzzle-explanation-ms">${t('explanationMalay')}</label><textarea id="puzzle-explanation-ms" class="text-input admin-explanation-input" name="explanationMs" rows="3" maxlength="500" required>${escapeHtml(item.explanation.ms)}</textarea><div class="admin-form-actions"><button class="btn btn-primary" type="submit">${puzzleEditorId?t('saveChanges'):t('save')}</button><button class="btn btn-secondary" type="button" data-action="cancel-puzzle-edit">${t('cancel')}</button></div></form></article></section>`;
    }
    const rows=(puzzles[adminSet]||[]).map((item,index)=>`<article class="card admin-puzzle-row"><div class="admin-question-copy"><span class="eyebrow">${t('question')} ${index+1}</span><h3>${escapeHtml(item.question.en)}</h3><p>${escapeHtml(item.question.ms)}</p><pre><code>${escapeHtml(item.code)}</code></pre><small>${item.correct?t('correctOption'):t('wrongOption')}</small><p class="admin-explanation-preview"><b>EN:</b> ${escapeHtml(item.explanation.en)}</p><p class="admin-explanation-preview"><b>BM:</b> ${escapeHtml(item.explanation.ms)}</p></div><div class="admin-row-actions"><button class="btn btn-secondary" data-action="edit-puzzle" data-id="${escapeHtml(item.id)}">${t('edit')}</button><button class="btn btn-wrong" data-action="delete-puzzle" data-id="${escapeHtml(item.id)}">${t('delete')}</button></div></article>`).join('');
    const manager=`<article class="card admin-manager"><div class="admin-manager-heading"><div><span class="menu-icon">&lt;/&gt;</span><h2>${t('managePuzzles')}</h2></div><button class="btn btn-primary" data-action="add-puzzle">${t('addQuestion')}</button></div><div class="admin-tabs">${puzzles.map((_,i)=>`<button type="button" class="admin-tab${i===adminSet?' active':''}" data-action="admin-set" data-set="${i}">${t('setLabel')} ${i+1} (${puzzles[i].length})</button>`).join('')}</div><div class="admin-puzzle-list">${rows||`<p class="empty-state">${t('adminEmpty')}</p>`}</div></article>`;
    return `<section class="admin-page"><div class="section-heading"><div><span class="eyebrow">${t('admin')}</span><h1 class="page-title">${t('adminPanel')}</h1><p>Welcome, ${escapeHtml(teacherName)}! <span>/ Selamat datang, ${escapeHtml(teacherName)}!</span></p></div><button class="btn btn-secondary" data-action="teacher-logout">${t('logoutAdmin')}</button></div>${adminTabsBar()}${adminTab==='live'?liveShell():manager}</section>`;
  }

  function renderInfo() {
    if(!window.PyQuestInfo)return `<section class="login-card card"><h1>Info</h1><p>${escapeHtml(t('networkError'))}</p></section>`;
    return window.PyQuestInfo.render(language);
  }
  function adminTabsBar() {
    const tab=(key,label,live)=>`<button type="button" role="tab" aria-selected="${adminTab===key}" class="admin-main-tab${adminTab===key?' active':''}" data-action="admin-tab" data-tab="${key}">${live?'<span class="live-dot mini on"></span>':''}${label}</button>`;
    return `<div class="admin-main-tabs" role="tablist">${tab('live',t('adminTabLive'),true)}${tab('puzzles',t('adminTabPuzzles'),false)}</div>`;
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
    const names={home:t('home'),puzzle:t('puzzle'),quiz:t('quiz'),info:t('info'),admin:t('admin')};
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
  function renderPuzzleResult() {
    const result=puzzleSession.result;
    const high=result.accuracy>=80;
    return `<section><article class="card result-card"><span class="eyebrow">${t('puzzleTitle')}</span><h2>${t('puzzleComplete')}</h2><p>${result.perfect?(language==='ms'?'Sempurna! Semua jawapan betul.':'Perfect! Every answer was correct.'):(language==='ms'?'Syabas, teruskan mencuba!':'Nice work—keep trying!')}</p><div class="result-stats"><div class="result-stat"><strong>${result.score} / ${result.total}</strong><span>${t('score')}</span></div><div class="result-stat"><strong>${result.accuracy}%</strong><span>${t('accuracy')}</span></div><div class="result-stat"><strong>+${result.xp}</strong><span>${t('xpEarned')}</span></div></div><div class="result-actions"><button class="btn btn-primary" data-action="begin-puzzle" data-set="${puzzleSetIndex}">${t('tryAgain')}</button><button class="btn btn-ghost" data-action="back-main">${t('backDashboard')}</button></div></article></section>`;
  }
  function renderQuizStart() {
    const count=matchingQuestionCount();
    const categoryOptions=quizCategories.map(item=>`<option value="${item.id}" ${quizSettings.category===item.id?'selected':''}>${escapeHtml(item.label)} (${item.count})</option>`).join('');
    const difficultyOptions=quizDifficulties.map(item=>`<option value="${item.id}" ${quizSettings.difficulty===item.id?'selected':''} ${item.id!=='all'&&item.count===0?'disabled':''}>${escapeHtml(item.label)}${item.id==='all'?'':` (${item.count})`}</option>`).join('');
    return `<section><div class="section-heading"><div><span class="eyebrow">${t('quizTitle')}</span><h1 class="page-title">${t('quizTitle')}</h1><p>${t('quizDescription')}</p></div><button class="btn btn-secondary" data-page="home">${t('home')}</button></div><div class="quiz-setup-card card"><div class="menu-icon">?</div><h2>${t('quizSetup')}</h2><p class="page-subtitle">${t('quizSetupHint')}</p><div class="quiz-filter-fields"><div class="quiz-filter-field"><label class="field-label" for="quiz-category">${t('category')}</label><select class="text-input" id="quiz-category">${categoryOptions}</select></div><div class="quiz-filter-field"><label class="field-label" for="quiz-difficulty">${t('difficulty')}</label><select class="text-input" id="quiz-difficulty">${difficultyOptions}</select></div></div><p class="quiz-availability${count?'':' bad'}">${count?t('questionCount',{count:Math.min(30,count)}):t('noMatchingQuestions')}</p><p class="page-subtitle">${language==='ms'?'XP bagi jawapan betul: mudah 10, sederhana 15, sukar 20. Bonus sempurna +50 XP.':'Correct-answer XP: Easy 10, Medium 15, Hard 20. Perfect quiz bonus +50 XP.'}</p><div class="landing-actions quiz-start-actions"><button class="btn btn-primary" data-action="begin-quiz" ${count?'':'disabled'}>${t('startQuiz')}</button></div><div class="timed-options"><span class="field-label">${t('timedLabel')}</span><div class="timed-buttons">${[30,15,10].map(n=>`<button class="btn btn-timed" data-action="begin-timed-quiz" data-seconds="${n}" ${count?'':'disabled'}><strong>${n}s</strong><small>${t('secondsBtn',{n})}</small></button>`).join('')}</div></div></div></section>`;
  }
  function renderQuiz() {
    if (!quizSession || !quizSession.question) return renderQuizStart();
    if (quizSession.result) return renderQuizResult();
    const q=quizSession.question, feedback=quizSession.feedback, total=quizSession.total;
    const choices=q.choices.map((choice,index)=>{
      let cls='quiz-choice';
      if (feedback&&index===feedback.correctIndex) cls+=' correct';
      else if (feedback&&index===feedback.selectedIndex&&!feedback.correct) cls+=' wrong';
      else if (!feedback&&selectedQuizChoice===index) cls+=' selected';
      return `<button class="${cls}" data-quiz-choice="${index}" ${feedback?'disabled':''}><span class="choice-key">${String.fromCharCode(65+index)}</span>${escapeHtml(choice)}</button>`;
    }).join('');
    return `<section><div class="section-heading"><div><span class="eyebrow">${t('quizTitle')}</span><h1 class="page-title">${t('quizTitle')}</h1></div><button class="btn btn-exit" data-action="exit-session">${t('exit')}</button></div><article class="card quiz-card"><div class="quiz-top"><span class="quiz-progress-copy">${t('question')} ${quizSession.number} ${t('of')} ${total}</span>${quizSession.timed?`<span class="timer${quizSession.remaining<=5?' urgent':''}" id="timer">${quizSession.remaining}s</span>`:`<span class="quiz-progress-copy">${state.xp} XP</span>`}</div><div class="quiz-track"><span style="width:${(quizSession.number-1)/total*100}%"></span></div><div class="quiz-tags"><span>${escapeHtml(categoryTitle(q.category))}</span><span class="difficulty-${escapeHtml(q.difficulty)}">${t(q.difficulty)} · ${q.points} XP</span></div><span class="quiz-number">${t('question')} ${quizSession.number}</span><h2 class="quiz-question">${escapeHtml(q.question)}</h2><div class="quiz-choices">${choices}</div><div class="quiz-feedback ${feedback?(feedback.correct?'good':'bad'):''}">${feedback?`${feedback.correct?`${t('correct')} +${feedback.points} XP`:`${feedback.timeout?t('timeUp'):t('wrong')} ${t('correctAnswer')}: ${escapeHtml(feedback.answer)}`}`:''}</div>${feedback?`<div class="answer-explanation"><strong>${t('explanationLabel')}</strong><p>${escapeHtml(feedback.explanation)}</p></div>`:''}<div class="quiz-actions">${feedback?`<span class="quiz-progress-mini">${feedback.correct?`+${feedback.points} XP`:''}</span><button class="btn btn-primary" data-action="quiz-next">${t('nextQuestion')}</button>`:`<span class="quiz-progress-mini">${t('chooseAnswer')}</span><button class="btn btn-primary" data-action="quiz-submit" ${selectedQuizChoice===null?'disabled':''}>${t('submitAnswer')}</button>`}</div></article></section>`;
  }
  function renderQuizResult() {
    const result=quizSession.result;
    return `<section><article class="card result-card"><span class="eyebrow">${t('quizTitle')}</span><h2>${t('quizComplete')}</h2><p>${result.perfect?t('perfect'):(language==='ms'?'Bagus! Teruskan mencuba.':'Nice work! Keep going.')}</p><div class="performance-banner">${t('performance')}: <strong>${performanceTitle(result.accuracy)}</strong></div><div class="result-stats"><div class="result-stat"><strong>${result.correct} / ${result.total}</strong><span>${t('score')}</span></div><div class="result-stat"><strong>${result.correct}</strong><span>${t('correctCount')}</span></div><div class="result-stat"><strong>${result.wrong}</strong><span>${t('wrongCount')}</span></div><div class="result-stat"><strong>+${result.xp}</strong><span>${t('xpEarned')}</span></div><div class="result-stat"><strong>${result.accuracy}%</strong><span>${t('accuracy')}</span></div></div><div class="result-actions"><button class="btn btn-primary" data-action="try-again">${t('tryAgain')}</button><button class="btn btn-ghost" data-action="back-main">${t('backDashboard')}</button></div></article></section>`;
  }
  function render() {
    if(window.PyQuestAnalytics)window.PyQuestAnalytics.setPage(page);
    if(!(page==='admin'&&teacherName&&adminTab==='live'&&puzzleEditorId===null))stopLive();
    document.documentElement.lang=language==='ms'?'ms':'en';
    document.title=language==='ms'?'PyQuest — Teka-teki Python & Kuiz':'PyQuest — Python Puzzles & Quiz';
    document.querySelector('[data-i18n="footer"]').textContent=t('footer');
    header.innerHTML=topNav();
    decorateBrand();
    document.getElementById('year').textContent=new Date().getFullYear();
    if(page==='admin') { main.innerHTML=renderAdmin(); if(teacherName&&adminTab==='live'&&puzzleEditorId===null)startLive(); return; }
    if(page==='info') { main.innerHTML=renderInfo(); return; }
    if (!state?.name) {
      main.innerHTML=renderNameEntry();
      if (namePromptOpen) window.setTimeout(()=>document.getElementById('name-input')?.focus(),0);
      return;
    }
    switch(page) {
      case 'home': main.innerHTML=renderDashboard(); break;
      case 'puzzle': main.innerHTML=renderPuzzle(); break;
      case 'quiz': main.innerHTML=renderQuiz(); break;
      case 'admin': main.innerHTML=renderAdmin(); break;
      default: page='home'; main.innerHTML=renderDashboard();
    }
    main.querySelectorAll('button[data-action="answer-puzzle"]').forEach(button=>{
      button.textContent=button.dataset.choice==='true'?'Correct / Betul':'Wrong / Salah';
    });
  }
  async function loadContent() {
    const result=await api('content',{lang:language},true);
    quizCategories=result.quiz_categories||[];
    quizDifficulties=result.quiz_difficulties||[];
    quizCounts=result.quiz_counts||{};
    puzzles=loadStoredPuzzles();
  }
  function loadStoredPuzzles() {
    const base=Array.isArray(window.PYQUEST_PUZZLE_SETS)&&window.PYQUEST_PUZZLE_SETS.length?window.PYQUEST_PUZZLE_SETS:[window.PYQUEST_DEFAULT_PUZZLES||[]];
    try {
      const saved=JSON.parse(localStorage.getItem('pyquest_puzzle_sets_v2')||'null');
      if (Array.isArray(saved)&&saved.length&&saved.every(Array.isArray)) return saved.map(set=>set.filter(validPuzzle));
    } catch (_) {}
    return base.map(set=>set.map(item=>({...item,question:{...item.question},explanation:{...item.explanation}})));
  }
  function validPuzzle(item) {
    return Boolean(item&&typeof item.id==='string'&&item.question&&typeof item.question.en==='string'&&typeof item.question.ms==='string'&&typeof item.code==='string'&&typeof item.correct==='boolean'&&item.explanation&&typeof item.explanation.en==='string'&&typeof item.explanation.ms==='string');
  }
  function savePuzzles() {
    localStorage.setItem('pyquest_puzzle_sets_v2',JSON.stringify(puzzles));
    puzzleSession=null;
  }
  async function refresh() {
    const username=(localStorage.getItem('pyquest_username')||'').trim();
    if (!username) localStorage.removeItem('pyquest_username');
    const response=await api('state',{},true);
    state=username?response.state:{...response.state,name:''};
    if (username&&state.name!==username) state=(await api('start',{name:username})).state;
    namePromptOpen=false;
    await loadContent();
    let snapshot=null;
    try { snapshot=JSON.parse(localStorage.getItem('pyquest-profile-v2')||'null'); } catch (_) {}
    if (!snapshot) {
      try {
        const previous=JSON.parse(localStorage.getItem('pyquest-profile-v1')||'null');
        if (previous) snapshot={...previous,puzzle_xp:0,puzzles_completed:0,puzzle_correct:0,puzzle_answered:0,perfect_puzzle:false,recent_puzzle:null};
      } catch (_) {}
    }
    if (username&&snapshot) updateState((await api('restore_profile',{profile:snapshot})).state);
    render();
    if(window.PyQuestAnalytics)window.PyQuestAnalytics.start({lang:language,page});
  }
  function stopTimer() { if(timerHandle){clearInterval(timerHandle);timerHandle=null;} }
  function startTimer() {
    stopTimer();
    if(!quizSession?.timed||quizSession.result||quizSession.feedback)return;
    quizSession.deadline=Date.now()+quizSession.remaining*1000;
    timerHandle=setInterval(()=>{
      if(!quizSession||quizSession.result||quizSession.feedback)return stopTimer();
      quizSession.remaining=Math.max(0,Math.ceil((quizSession.deadline-Date.now())/1000));
      const timer=document.getElementById('timer');
      if(timer){timer.textContent=`${quizSession.remaining}s`;timer.classList.toggle('urgent',quizSession.remaining<=5);}
      if(quizSession.remaining<=0){stopTimer();submitQuizAnswer(true);}
    },200);
  }
  async function beginQuiz(seconds=0) {
    try {
      const result=await api('start_quiz',{seconds,category:quizSettings.category,difficulty:quizSettings.difficulty});
      quizSession={question:result.question,number:result.number,total:result.total,timed:result.timed,seconds:result.seconds,remaining:result.remaining,feedback:null,result:null,category:quizSettings.category,difficulty:quizSettings.difficulty};
      selectedQuizChoice=null;page='quiz';render();startTimer();
    } catch(error){notify(error.message);}
  }
  async function submitQuizAnswer(timedOut=false) {
    if(!quizSession)return;
    if(selectedQuizChoice===null&&!timedOut)return notify(t('chooseAnswer'));
    try {
      if(quizSession.submitting)return;
      quizSession.submitting=true;
      stopTimer();
      const selected=selectedQuizChoice===null?-1:selectedQuizChoice;
      const result=await api('answer_quiz',{choice:selected});
      updateState(result.state);
      if(result.finished){
        const correctIndex=result.feedback.correct?selected:quizSession.question.choices.findIndex(value=>value===result.feedback.answer);
        quizSession.feedback=result.feedback?{...result.feedback,selectedIndex:selected,correctIndex}:null;
        await new Promise(resolve=>setTimeout(resolve,400));quizSession.result=result.result;stopTimer();render();
      } else {
        const correctIndex=result.feedback.correct?selected:quizSession.question.choices.findIndex(value=>value===result.feedback.answer);
        quizSession.feedback={...result.feedback,selectedIndex:selected,correctIndex};quizSession.nextQuestion=result.question;quizSession.nextNumber=result.number;render();
      }
    } catch(error){if(quizSession)quizSession.submitting=false;notify(error.message);}
  }
  function nextQuizQuestion() {
    if(!quizSession?.nextQuestion)return;
    quizSession.question=quizSession.nextQuestion;quizSession.number=quizSession.nextNumber;quizSession.remaining=quizSession.seconds||quizSession.remaining;quizSession.nextQuestion=null;quizSession.submitting=false;quizSession.feedback=null;selectedQuizChoice=null;render();startTimer();
  }
  async function beginPuzzle(index=puzzleSetIndex) {
    puzzles=loadStoredPuzzles();
    puzzleSetIndex=Number.isInteger(index)&&puzzles[index]?index:0;
    const set=puzzles[puzzleSetIndex]||[];
    if(!set.length)return notify(t('questionRequired'));
    const order=set.map((_,k)=>k);
    for(let k=order.length-1;k>0;k--){const w=Math.floor(Math.random()*(k+1));[order[k],order[w]]=[order[w],order[k]];}
    puzzleSession={order,set,index:0,score:0,answered:0,feedback:null,result:null,nextPuzzle:null};
    puzzleSession.puzzle={...set[order[0]],number:1,total:order.length};
    page='puzzle';render();window.scrollTo({top:0,behavior:'smooth'});
  }
  async function answerPuzzle(choice) {
    if(!puzzleSession||puzzleSession.feedback||puzzleSession.busy)return;
    puzzleSession.busy=true;
    const puzzle=puzzleSession.puzzle;
    const correct=(String(choice)==='true')===Boolean(puzzle.correct);
    try {
      const answerResult=await api('record_puzzle_answer',{correct});
      updateState(answerResult.state);
      puzzleSession.answered++;if(correct)puzzleSession.score++;
      puzzleSession.feedback={
        selected_correctly:correct,
        explanation:puzzle.explanation,
        headline:correct?t('puzzleCorrectChoice'):t('puzzleWrongChoice'),
        message:correct?t('puzzleCorrectMessage'):t('puzzleWrongMessage'),
        xp:answerResult.awarded,
      };
    } catch(error){puzzleSession.busy=false;notify(error.message);return;}
    if(puzzleSession.index+1>=puzzleSession.order.length){
      try {
        const result=await api('record_puzzle_result',{score:puzzleSession.score,total:puzzleSession.order.length});
        updateState(result.state);
        puzzleSession.pendingResult=result.result;
      } catch(error){puzzleSession.busy=false;notify(error.message);return;}
    } else {
      const nextIndex=puzzleSession.index+1;
      puzzleSession.nextPuzzle={...puzzleSession.set[puzzleSession.order[nextIndex]],number:nextIndex+1,total:puzzleSession.order.length};
    }
    render();
  }
  function nextPuzzle() {
    if(puzzleSession?.pendingResult){puzzleSession.result=puzzleSession.pendingResult;puzzleSession.pendingResult=null;render();return;}
    if(puzzleSession?.result)return;
    if(!puzzleSession?.nextPuzzle)return;
    puzzleSession.index++;
    puzzleSession.puzzle=puzzleSession.nextPuzzle;puzzleSession.busy=false;puzzleSession.feedback=null;puzzleSession.nextPuzzle=null;render();
  }
  document.addEventListener('click',async event=>{
    const languageButton=event.target.closest('[data-lang]');
    if(languageButton){language=languageButton.dataset.lang;localStorage.setItem('pyquest-language',language);window.PyQuestAnalytics?.setLang(language);try{await loadContent();render();}catch(error){notify(error.message);}return;}
    const jump=event.target.closest('[data-jump]');
    if(jump){event.preventDefault();const id=jump.dataset.jump;if(id==='info-top')window.scrollTo({top:0,behavior:'smooth'});else document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
    const pageButton=event.target.closest('[data-page]');
    if(pageButton){event.preventDefault();const destination=pageButton.dataset.page;if(destination==='admin'||destination==='info'){setPage(destination);return;}if(!state?.name){pendingPage=destination;namePromptOpen=true;page='home';mobileMenuOpen=false;render();}else setPage(destination);return;}
    const actionButton=event.target.closest('[data-action]');
    const action=actionButton?.dataset.action;
    if(!action)return;
    if(action==='get-started'){pendingPage='home';namePromptOpen=true;render();}
    if(action==='change-name'){localStorage.removeItem('pyquest_username');state={...state,name:''};namePromptOpen=true;pendingPage='home';page='home';stopTimer();quizSession=null;render();}
    if(action==='toggle-menu'){mobileMenuOpen=!mobileMenuOpen;render();}
    if(action==='begin-puzzle')beginPuzzle(actionButton.dataset.set!==undefined?Number(actionButton.dataset.set):puzzleSetIndex);
    if(action==='exit-session')exitSession(true);
    if(action==='back-main'){stopTimer();quizSession=null;puzzleSession=null;selectedQuizChoice=null;setPage('home');}
    if(action==='admin-tab'){adminTab=actionButton.dataset.tab==='puzzles'?'puzzles':'live';puzzleEditorId=null;render();}
    if(action==='admin-set'){adminSet=Number(actionButton.dataset.set)||0;render();}
    if(action==='answer-puzzle')answerPuzzle(actionButton.dataset.choice);
    if(action==='puzzle-next')nextPuzzle();
    if(action==='add-puzzle'){puzzleEditorId='';render();}
    if(action==='edit-puzzle'){puzzleEditorId=actionButton.dataset.id;render();}
    if(action==='cancel-puzzle-edit'){puzzleEditorId=null;render();}
    if(action==='teacher-logout'){
      teacherName='';sessionStorage.removeItem('pyquest_admin_session');puzzleEditorId=null;page='admin';render();
    }
    if(action==='delete-puzzle'){
      const message=language==='ms'?t('deletePuzzleConfirmMs'):t('deletePuzzleConfirm');
      if(window.confirm(message)){puzzles=puzzles.map(set=>set.filter(item=>item.id!==actionButton.dataset.id));savePuzzles();notify(t('deleted'),true);render();}
    }
    if(action==='begin-quiz')beginQuiz(0);
    if(action==='begin-timed-quiz')beginQuiz(Number(actionButton.dataset.seconds)||0);
    if(action==='try-again')beginQuiz(quizSession?.seconds||0);
    if(action==='quiz-submit')submitQuizAnswer();
    if(action==='quiz-next')nextQuizQuestion();
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
        id:puzzleEditorId||`P${Date.now()}-${Math.random().toString(36).slice(2,7)}`,
        question:{en:String(form.get('questionEn')||'').trim(),ms:String(form.get('questionMs')||'').trim()},
        code:String(form.get('code')||'').trim(),correct:form.get('correct')==='true',
        explanation:{en:String(form.get('explanationEn')||'').trim(),ms:String(form.get('explanationMs')||'').trim()},
      };
      if(!item.question.en||!item.question.ms||!item.code||!item.explanation.en||!item.explanation.ms){notify(t('questionRequired'));return;}
      let done=false;puzzles=puzzles.map(set=>set.map(p=>{if(p.id===puzzleEditorId){done=true;return item;}return p;}));
      if(!done)(puzzles[adminSet]=puzzles[adminSet]||[]).push(item);
      savePuzzles();puzzleEditorId=null;notify(t('saved'),true);render();return;
    }
    if(event.target.id!=='name-form')return;
    event.preventDefault();
    const input=document.getElementById('name-input');
    const username=input.value.trim();
    if(!username){document.getElementById('name-error').textContent=t('emptyName');return;}
    input.value=username;
    try {
      const result=await api('start',{name:username});
      updateState(result.state);localStorage.setItem('pyquest_username',result.state.name);
      namePromptOpen=false;page=pendingPage;render();
    } catch(error){const node=document.getElementById('name-error');if(node)node.textContent=error.message;}
  });
  document.addEventListener('change',event=>{
    if(event.target.id==='quiz-category'){quizSettings.category=event.target.value;render();}
    if(event.target.id==='quiz-difficulty'){quizSettings.difficulty=event.target.value;render();}
  });
  document.addEventListener('click',event=>{
    const choice=event.target.closest('[data-quiz-choice]');
    if(choice&&!quizSession?.feedback){selectedQuizChoice=Number(choice.dataset.quizChoice);render();}
  });
  document.addEventListener('keydown',event=>{
    if(page==='quiz'&&quizSession&&!quizSession.feedback&&/^[1-4]$/.test(event.key)){selectedQuizChoice=Number(event.key)-1;render();}
  });
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(decorateBrand);
  let brandTimer=null;window.addEventListener('resize',()=>{clearTimeout(brandTimer);brandTimer=setTimeout(decorateBrand,150);});
  refresh().catch(error=>{main.innerHTML=`<div class="login-card card"><h1>${t('networkError')}</h1><p>${escapeHtml(error.message)}</p></div>`;});
})();
