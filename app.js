/**
 * SmartQuiz - UTS Sistem Cerdas Logic Engine
 * Handles State Management, Quiz Workflow, Timers, Scoring, and Review.
 */

// =============================================================================
// APP STATE
// =============================================================================
const state = {
  currentView: 'home', // 'home', 'select', 'quiz', 'result', 'review'
  selectedCourse: 'sistem_cerdas', // 'sistem_cerdas' or 'kriptografi'
  selectedMode: 'practice', // 'practice' or 'uts'
  selectedChapterId: null, // null for all, number for specific
  
  quizQuestions: [], // Active questions for current session
  currentIndex: 0,
  userAnswers: {}, // map of question index -> selectedOptionIndex (or null)
  isAnswered: {}, // map of question index -> boolean (for Latihan mode)
  
  // Timer state for UTS Mode
  timerDuration: 30 * 60, // 30 minutes in seconds
  timerRemaining: 30 * 60,
  timerInterval: null,
  
  // Review filter
  reviewFilter: 'all', // 'all', 'correct', 'wrong'
  activeReviewIndex: 0,
  
  // Last session results
  lastResults: {
    total: 0,
    correct: 0,
    wrong: 0,
    score: 0,
    wrongQuestionObjects: []
  }
};

// =============================================================================
// DOM ELEMENTS
// =============================================================================
const views = {
  home: document.getElementById('view-home'),
  select: document.getElementById('view-select'),
  quiz: document.getElementById('view-quiz'),
  result: document.getElementById('view-result'),
  review: document.getElementById('view-review')
};

// =============================================================================
// VIEW NAVIGATION
// =============================================================================
function showView(viewName) {
  state.currentView = viewName;
  Object.keys(views).forEach(key => {
    if (views[key]) {
      if (key === viewName) {
        views[key].classList.add('active');
      } else {
        views[key].classList.remove('active');
      }
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================================================
// UTILITY HELPERS
// =============================================================================
// Fisher-Yates array shuffle with deep clone
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Prepare question with optionally shuffled options while tracking true answer
function prepareQuestion(q, shuffleOptions = true) {
  const originalOptions = [...q.options];
  const originalCorrectAnswerIndex = q.answer;
  const originalCorrectText = originalOptions[originalCorrectAnswerIndex];

  if (!shuffleOptions) {
    return {
      ...q,
      displayOptions: originalOptions,
      correctIndex: originalCorrectAnswerIndex
    };
  }

  // Shuffle option items
  const indexedOptions = originalOptions.map((text, idx) => ({ text, isOriginalCorrect: idx === originalCorrectAnswerIndex }));
  const shuffledIndexed = shuffleArray(indexedOptions);

  const displayOptions = shuffledIndexed.map(item => item.text);
  const newCorrectIndex = shuffledIndexed.findIndex(item => item.isOriginalCorrect);

  return {
    ...q,
    displayOptions: displayOptions,
    correctIndex: newCorrectIndex,
    originalCorrectText: originalCorrectText
  };
}

// Format seconds to MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

// =============================================================================
// COURSE MANAGEMENT HELPERS
// =============================================================================
function getActiveCourse() {
  if (typeof COURSES_DATA !== 'undefined' && COURSES_DATA[state.selectedCourse]) {
    return COURSES_DATA[state.selectedCourse];
  }
  return {
    id: 'sistem_cerdas',
    name: 'Sistem Cerdas',
    shortName: 'Sistem Cerdas',
    questionCount: 80,
    chapterCount: 8,
    timerDuration: 30 * 60,
    chapters: typeof rawChapters !== 'undefined' ? rawChapters : [],
    questions: typeof rawQuestions !== 'undefined' ? rawQuestions : []
  };
}

function selectCourse(courseId, autoNavigateToSelect = false) {
  if (typeof COURSES_DATA === 'undefined' || !COURSES_DATA[courseId]) return;
  state.selectedCourse = courseId;
  state.selectedChapterId = null;

  const course = COURSES_DATA[courseId];

  // Update compatibility variables
  rawChapters = course.chapters;
  rawQuestions = course.questions;

  // 1. Update Home View Course Cards
  const cardSC = document.getElementById('card-course-sistem_cerdas');
  const cardKripto = document.getElementById('card-course-kriptografi');
  if (cardSC && cardKripto) {
    if (courseId === 'sistem_cerdas') {
      cardSC.classList.add('active');
      cardKripto.classList.remove('active');
      const lblSC = cardSC.querySelector('.course-status-label');
      const lblKr = cardKripto.querySelector('.course-status-label');
      if (lblSC) lblSC.textContent = 'Terpilih';
      if (lblKr) lblKr.textContent = 'Pilih Kursus';
    } else {
      cardKripto.classList.add('active');
      cardSC.classList.remove('active');
      const lblSC = cardSC.querySelector('.course-status-label');
      const lblKr = cardKripto.querySelector('.course-status-label');
      if (lblKr) lblKr.textContent = 'Terpilih';
      if (lblSC) lblSC.textContent = 'Pilih Kursus';
    }
  }

  // 2. Update Header Active Course Tag
  const headerCourseName = document.getElementById('header-course-name');
  if (headerCourseName) {
    headerCourseName.textContent = course.name;
  }
  const headerCourseImg = document.getElementById('header-course-img');
  if (headerCourseImg) {
    headerCourseImg.src = courseId === 'kriptografi' ? 'images/iconKriptografi.jpg' : 'images/iconSistemCerdas.jpg';
    headerCourseImg.alt = course.name;
  }

  // 3. Update Home View Stats
  const statSoal = document.getElementById('home-stat-soal');
  const statSoalLabel = document.getElementById('home-stat-soal-label');
  const statBab = document.getElementById('home-stat-bab');
  const statBabLabel = document.getElementById('home-stat-bab-label');

  if (statSoal) statSoal.textContent = `${course.questionCount} Soal`;
  if (statSoalLabel) statSoalLabel.textContent = `Soal ${course.name}`;
  if (statBab) statBab.textContent = `${course.chapterCount} Bab`;
  if (statBabLabel) statBabLabel.textContent = `Materi Lengkap`;

  // 4. Update Select View Switcher Tabs
  const tabSC = document.getElementById('tab-course-sistem_cerdas');
  const tabKripto = document.getElementById('tab-course-kriptografi');
  if (tabSC && tabKripto) {
    tabSC.classList.toggle('active', courseId === 'sistem_cerdas');
    tabKripto.classList.toggle('active', courseId === 'kriptografi');
  }

  // 5. Update Select View Dynamic Labels
  const selectCourseTitle = document.getElementById('select-active-course-name');
  if (selectCourseTitle) selectCourseTitle.textContent = course.name;

  const selectCourseChap = document.getElementById('select-course-chap-label');
  if (selectCourseChap) selectCourseChap.textContent = course.name;

  const utsSoalCount = document.getElementById('uts-mode-soal-count');
  if (utsSoalCount) utsSoalCount.textContent = `${course.questionCount} soal (semua bab)`;

  const allChaptersDesc = document.getElementById('all-chapters-desc');
  if (allChaptersDesc) {
    allChaptersDesc.textContent = `Kerjakan seluruh ${course.questionCount} soal ${course.name} dalam mode Latihan santai dengan pembahasan langsung.`;
  }

  // 6. Refresh Chapter List Grid
  initChaptersGrid();

  if (autoNavigateToSelect) {
    showView('select');
  }
}

// =============================================================================
// INITIALIZATION & EVENT LISTENERS
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  selectCourse('sistem_cerdas', false);
});

function initUI() {
  // Brand / Home button
  document.getElementById('btn-brand-home').addEventListener('click', () => {
    if (state.currentView === 'quiz') {
      showConfirmModal('Kembali ke Beranda?', 'Progress kuis yang sedang berjalan akan dihentikan.', () => {
        stopTimer();
        showView('home');
      });
    } else {
      showView('home');
    }
  });

  document.getElementById('btn-header-home').addEventListener('click', () => {
    if (state.currentView === 'quiz') {
      showConfirmModal('Kembali ke Beranda?', 'Progress kuis yang sedang berjalan akan dihentikan.', () => {
        stopTimer();
        showView('home');
      });
    } else {
      showView('home');
    }
  });

  // Home Start Button
  document.getElementById('btn-start-home').addEventListener('click', () => {
    selectCourse(state.selectedCourse || 'sistem_cerdas', true);
  });

  // Course Cards on Home View
  const cardSC = document.getElementById('card-course-sistem_cerdas');
  if (cardSC) {
    cardSC.addEventListener('click', () => {
      selectCourse('sistem_cerdas', true);
    });
  }

  const cardKripto = document.getElementById('card-course-kriptografi');
  if (cardKripto) {
    cardKripto.addEventListener('click', () => {
      selectCourse('kriptografi', true);
    });
  }

  // Course Switcher Tabs on Selection View
  const tabSC = document.getElementById('tab-course-sistem_cerdas');
  if (tabSC) {
    tabSC.addEventListener('click', () => {
      selectCourse('sistem_cerdas', false);
    });
  }

  const tabKripto = document.getElementById('tab-course-kriptografi');
  if (tabKripto) {
    tabKripto.addEventListener('click', () => {
      selectCourse('kriptografi', false);
    });
  }

  // Back from select to home
  document.getElementById('btn-back-to-home').addEventListener('click', () => {
    showView('home');
  });

  // Mode Cards selection
  const cardPractice = document.getElementById('card-mode-practice');
  const cardUts = document.getElementById('card-mode-uts');
  const practiceChaptersContainer = document.getElementById('practice-chapters-container');

  cardPractice.addEventListener('click', () => {
    state.selectedMode = 'practice';
    cardPractice.classList.add('selected');
    cardUts.classList.remove('selected');
    practiceChaptersContainer.style.display = 'block';
  });

  cardUts.addEventListener('click', () => {
    state.selectedMode = 'uts';
    cardUts.classList.add('selected');
    cardPractice.classList.remove('selected');
    // Start UTS Simulation directly
    startQuizSession('uts', null);
  });

  // Practice All Chapters
  document.getElementById('btn-practice-all').addEventListener('click', () => {
    startQuizSession('practice', null);
  });

  // Quit quiz button
  document.getElementById('btn-quit-quiz').addEventListener('click', () => {
    showConfirmModal('Keluar dari Kuis?', 'Progres pengerjaan sesi ini tidak akan disimpan.', () => {
      stopTimer();
      showView('select');
    });
  });

  // Quiz Navigation & Action Buttons
  document.getElementById('btn-prev-question').addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
    }
  });

  document.getElementById('btn-submit-action').addEventListener('click', handleQuizActionClick);

  // Result Actions
  document.getElementById('btn-result-review').addEventListener('click', () => {
    openReviewView();
  });

  document.getElementById('btn-result-retry-wrong').addEventListener('click', () => {
    retryWrongQuestions();
  });

  document.getElementById('btn-result-restart').addEventListener('click', () => {
    startQuizSession(state.selectedMode, state.selectedChapterId);
  });

  document.getElementById('btn-result-home').addEventListener('click', () => {
    showView('home');
  });

  // Review screen navigation
  document.getElementById('btn-back-from-review').addEventListener('click', () => {
    showView('result');
  });

  // Review Filter Tabs
  document.getElementById('tab-filter-all').addEventListener('click', () => switchReviewFilter('all'));
  document.getElementById('tab-filter-correct').addEventListener('click', () => switchReviewFilter('correct'));
  document.getElementById('tab-filter-wrong').addEventListener('click', () => switchReviewFilter('wrong'));
}

// Render Chapter Selection Cards
function initChaptersGrid() {
  const container = document.getElementById('chapters-list-grid');
  if (!container) return;
  container.innerHTML = '';

  const course = getActiveCourse();
  course.chapters.forEach(chap => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `
      <div class="chapter-badge">${chap.number}</div>
      <div class="chapter-details">
        <div class="chapter-num">Bab ${chap.id}</div>
        <div class="chapter-name">${chap.title}</div>
        <div class="chapter-count">${chap.questionCount} soal</div>
      </div>
    `;

    card.addEventListener('click', () => {
      startQuizSession('practice', chap.id);
    });

    container.appendChild(card);
  });
}

// =============================================================================
// QUIZ WORKFLOW ENGINE
// =============================================================================
function startQuizSession(mode, chapterId = null, customQuestions = null) {
  const course = getActiveCourse();
  state.selectedMode = mode;
  state.selectedChapterId = chapterId;
  state.currentIndex = 0;
  state.userAnswers = {};
  state.isAnswered = {};

  let sourceQuestions = [];

  if (customQuestions && customQuestions.length > 0) {
    // Retry mode
    sourceQuestions = customQuestions;
  } else if (chapterId !== null) {
    // Single chapter practice
    sourceQuestions = course.questions.filter(q => q.chapterId === chapterId);
  } else {
    // All questions of active course
    sourceQuestions = [...course.questions];
  }

  if (mode === 'uts') {
    // In UTS mode: shuffle question order and randomize option positions
    const shuffledList = shuffleArray(sourceQuestions);
    state.quizQuestions = shuffledList.map(q => prepareQuestion(q, true));
    startTimer();
    document.getElementById('quiz-timer-badge').style.display = 'flex';
    document.getElementById('uts-navigator-palette').style.display = 'block';
    document.getElementById('quiz-header-title').textContent = `Simulasi UTS ${course.name} (${sourceQuestions.length} Soal)`;
  } else {
    // Practice Mode
    stopTimer();
    document.getElementById('quiz-timer-badge').style.display = 'none';
    document.getElementById('uts-navigator-palette').style.display = 'none';

    // In Practice mode: randomize option order for variety while preserving correct answer
    state.quizQuestions = sourceQuestions.map(q => prepareQuestion(q, true));

    if (chapterId) {
      const chap = course.chapters.find(c => c.id === chapterId);
      document.getElementById('quiz-header-title').textContent = `Latihan ${course.name} - Bab ${chap.id} (${chap.title})`;
    } else if (customQuestions) {
      document.getElementById('quiz-header-title').textContent = `Latihan Soal Salah - ${course.name} (${sourceQuestions.length} Soal)`;
    } else {
      document.getElementById('quiz-header-title').textContent = `Latihan ${course.name} - Semua Bab (${sourceQuestions.length} Soal)`;
    }
  }

  showView('quiz');
  renderCurrentQuestion();
  renderUTSNavigator();
}

// Render the active question
function renderCurrentQuestion() {
  const total = state.quizQuestions.length;
  const current = state.currentIndex;
  const q = state.quizQuestions[current];

  // Update progress
  const progressPercent = Math.round(((current + 1) / total) * 100);
  document.getElementById('progress-question-count').textContent = `Soal ${current + 1} dari ${total}`;
  document.getElementById('progress-percent').textContent = `${progressPercent}%`;
  document.getElementById('progress-bar-fill').style.width = `${progressPercent}%`;

  // Question header badge
  const numStr = (current + 1).toString().padStart(2, '0');
  document.getElementById('question-badge-pill').textContent = `SOAL ${numStr}`;
  document.getElementById('question-text-content').textContent = q.question;

  // Options rendering
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  const selectedAnswer = state.userAnswers[current];
  const hasAnswered = state.isAnswered[current] || false;

  q.displayOptions.forEach((optText, optIdx) => {
    const optLetter = OPTION_LETTERS[optIdx];
    const optItem = document.createElement('div');
    optItem.className = 'option-item';

    if (selectedAnswer === optIdx) {
      optItem.classList.add('selected');
    }

    if (state.selectedMode === 'practice' && hasAnswered) {
      optItem.classList.add('locked');
      if (optIdx === q.correctIndex) {
        optItem.classList.add('correct');
      } else if (optIdx === selectedAnswer && selectedAnswer !== q.correctIndex) {
        optItem.classList.add('wrong');
      } else {
        optItem.classList.add('dimmed');
      }
    }

    optItem.innerHTML = `
      <div class="option-radio">${optLetter}</div>
      <div class="option-text">${optText}</div>
    `;

    optItem.addEventListener('click', () => {
      if (state.selectedMode === 'practice' && hasAnswered) return;
      selectOption(optIdx);
    });

    optionsContainer.appendChild(optItem);
  });

  // Mode Specific Controls & Feedback
  const feedbackContainer = document.getElementById('feedback-result-container');
  const explanationContainer = document.getElementById('explanation-container');
  const prevBtn = document.getElementById('btn-prev-question');
  const submitBtn = document.getElementById('btn-submit-action');
  const submitText = submitBtn.querySelector('span');

  if (state.selectedMode === 'practice') {
    // Prev button hidden in single step practice or enabled if desired
    prevBtn.style.display = 'none';

    if (hasAnswered) {
      // Show feedback & explanation
      const isCorrect = selectedAnswer === q.correctIndex;
      const userLetter = OPTION_LETTERS[selectedAnswer];
      const correctLetter = OPTION_LETTERS[q.correctIndex];

      feedbackContainer.style.display = 'block';
      if (isCorrect) {
        feedbackContainer.innerHTML = `
          <div class="feedback-box correct">
            <div class="feedback-left">
              <div class="feedback-icon-circle">✓</div>
              <div class="feedback-text">
                <h4>Benar!</h4>
                <p>Jawaban kamu: ${userLetter}</p>
              </div>
            </div>
            <div class="feedback-trophy">🏆</div>
          </div>
        `;
      } else {
        feedbackContainer.innerHTML = `
          <div class="feedback-box wrong">
            <div class="feedback-left">
              <div class="feedback-icon-circle">✕</div>
              <div class="feedback-text">
                <h4>Kurang tepat</h4>
                <p>Jawaban kamu: ${userLetter}</p>
              </div>
            </div>
          </div>
          <div class="correct-answer-reveal">
            <span>✅</span>
            <span>Jawaban yang benar: <strong>${correctLetter}. ${q.displayOptions[q.correctIndex]}</strong></span>
          </div>
        `;
      }

      // Show 💡 Pembahasan
      explanationContainer.style.display = 'block';
      document.getElementById('explanation-text-content').textContent = q.explanation;

      // Update button text
      if (current === total - 1) {
        submitText.textContent = 'Lihat Hasil Akhir';
      } else {
        submitText.textContent = 'Soal Berikutnya';
      }
    } else {
      // Not yet answered
      feedbackContainer.style.display = 'none';
      explanationContainer.style.display = 'none';
      submitText.textContent = 'Jawab';
    }
  } else {
    // Simulasi UTS Mode
    feedbackContainer.style.display = 'none';
    explanationContainer.style.display = 'none';

    prevBtn.style.display = current > 0 ? 'inline-flex' : 'none';

    if (current === total - 1) {
      submitText.textContent = 'Selesai Ujian';
    } else {
      submitText.textContent = 'Selanjutnya';
    }
  }

  renderUTSNavigator();
}

// User selects an option
function selectOption(optIndex) {
  state.userAnswers[state.currentIndex] = optIndex;

  // Re-render options quickly
  const optionItems = document.querySelectorAll('.option-item');
  optionItems.forEach((item, idx) => {
    if (idx === optIndex) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });

  renderUTSNavigator();
}

// Handle action button click (Jawab / Next / Finish)
function handleQuizActionClick() {
  const current = state.currentIndex;
  const total = state.quizQuestions.length;
  const selectedAnswer = state.userAnswers[current];
  const hasAnswered = state.isAnswered[current];

  if (state.selectedMode === 'practice') {
    if (!hasAnswered) {
      // User is submitting answer
      if (selectedAnswer === undefined || selectedAnswer === null) {
        showToast('Pilih salah satu jawaban terlebih dahulu!');
        return;
      }

      state.isAnswered[current] = true;
      renderCurrentQuestion();
    } else {
      // User is going to next question or viewing result
      if (current < total - 1) {
        state.currentIndex++;
        renderCurrentQuestion();
      } else {
        finishQuizSession();
      }
    }
  } else {
    // Simulasi UTS Mode
    if (current < total - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    } else {
      // Finish UTS test
      const unansweredCount = state.quizQuestions.filter((_, idx) => state.userAnswers[idx] === undefined).length;
      if (unansweredCount > 0) {
        showConfirmModal(
          'Selesaikan Ujian Sekarang?',
          `Masih ada ${unansweredCount} soal yang belum kamu jawab. Tetap ingin mengakhiri?`,
          () => finishQuizSession()
        );
      } else {
        showConfirmModal(
          'Kumpulkan Jawaban UTS?',
          `Semua ${total} soal telah terjawab. Apakah kamu yakin ingin menyelesaikan ujian?`,
          () => finishQuizSession()
        );
      }
    }
  }
}

// UTS Navigator Grid Palette
function renderUTSNavigator() {
  if (state.selectedMode !== 'uts') return;

  const grid = document.getElementById('uts-nav-grid');
  grid.innerHTML = '';

  const total = state.quizQuestions.length;
  let answeredCount = 0;

  for (let i = 0; i < total; i++) {
    const isAnswered = state.userAnswers[i] !== undefined && state.userAnswers[i] !== null;
    if (isAnswered) answeredCount++;

    const btn = document.createElement('button');
    btn.className = 'uts-nav-num';
    btn.textContent = (i + 1).toString();

    if (isAnswered) btn.classList.add('answered');
    if (i === state.currentIndex) btn.classList.add('current');

    btn.addEventListener('click', () => {
      state.currentIndex = i;
      renderCurrentQuestion();
    });

    grid.appendChild(btn);
  }

  document.getElementById('uts-nav-answered-stat').textContent = `Terjawab: ${answeredCount} / ${total}`;
}

// =============================================================================
// TIMER FOR UTS SIMULATION
// =============================================================================
function startTimer() {
  stopTimer();
  state.timerRemaining = state.timerDuration;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timerRemaining--;
    updateTimerDisplay();

    if (state.timerRemaining <= 0) {
      stopTimer();
      showToast('Waktu Ujian Habis! Mengumpulkan otomatis...');
      finishQuizSession();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const display = document.getElementById('timer-display');
  const badge = document.getElementById('quiz-timer-badge');
  display.textContent = formatTime(state.timerRemaining);

  // Warning state if less than 5 minutes (300 seconds)
  if (state.timerRemaining <= 300) {
    badge.classList.add('warning');
  } else {
    badge.classList.remove('warning');
  }
}

// =============================================================================
// FINISH QUIZ & SCORING
// =============================================================================
function finishQuizSession() {
  stopTimer();

  let correctCount = 0;
  const wrongQuestions = [];

  state.quizQuestions.forEach((q, idx) => {
    const userChoice = state.userAnswers[idx];
    const isCorrect = userChoice === q.correctIndex;
    if (isCorrect) {
      correctCount++;
    } else {
      wrongQuestions.push(q);
    }
  });

  const total = state.quizQuestions.length;
  const wrongCount = total - correctCount;
  const score = Math.round((correctCount / total) * 100);

  state.lastResults = {
    total,
    correct: correctCount,
    wrong: wrongCount,
    score: score,
    wrongQuestionObjects: wrongQuestions
  };

  const course = getActiveCourse();

  // Populate Result Screen
  document.getElementById('res-total-questions').textContent = total;
  document.getElementById('res-correct-count').textContent = correctCount;
  document.getElementById('res-wrong-count').textContent = wrongCount;
  document.getElementById('res-final-score').textContent = score;

  if (state.selectedMode === 'uts') {
    document.getElementById('result-main-title').textContent = `UTS ${course.name} Selesai!`;
  } else {
    document.getElementById('result-main-title').textContent = `Latihan ${course.name} Selesai!`;
  }

  // Motivational message & icon
  const emojiElem = document.getElementById('res-feedback-emoji');
  const msgElem = document.getElementById('res-feedback-message');
  const trophyElem = document.getElementById('result-trophy-icon');

  if (score >= 90) {
    trophyElem.textContent = '🏆';
    emojiElem.textContent = '🌟';
    msgElem.textContent = `Sangat bagus! Kamu sudah sangat siap menghadapi UTS ${course.name}.`;
  } else if (score >= 80) {
    trophyElem.textContent = '🎉';
    emojiElem.textContent = '😃';
    msgElem.textContent = `Bagus! Tinggal sedikit lagi untuk lebih mantap menguasai ${course.name}.`;
  } else if (score >= 70) {
    trophyElem.textContent = '👍';
    emojiElem.textContent = '📚';
    msgElem.textContent = `Lumayan, tetapi masih ada beberapa konsep materi ${course.name} yang perlu dipelajari lagi.`;
  } else {
    trophyElem.textContent = '💡';
    emojiElem.textContent = '💪';
    msgElem.textContent = `Jangan menyerah! Coba ulangi materi dan latihan kembali soal-soal ${course.name} yang salah.`;
  }

  // Retry Wrong Button visibility
  const retryWrongBtn = document.getElementById('btn-result-retry-wrong');
  if (wrongCount > 0) {
    retryWrongBtn.style.display = 'inline-flex';
    retryWrongBtn.querySelector('span').textContent = `🔄 Latihan ${wrongCount} Soal Salah`;
  } else {
    retryWrongBtn.style.display = 'none';
  }

  showView('result');
}

// Retry only wrong questions
function retryWrongQuestions() {
  if (state.lastResults.wrongQuestionObjects.length === 0) return;
  startQuizSession('practice', null, state.lastResults.wrongQuestionObjects);
}

// =============================================================================
// REVIEW / PEMBAHASAN VIEW
// =============================================================================
function openReviewView() {
  state.reviewFilter = 'all';
  state.activeReviewIndex = 0;
  
  updateReviewFilterTabs();
  renderReviewList();
  renderReviewDetail(0);
  showView('review');
}

function switchReviewFilter(filter) {
  state.reviewFilter = filter;
  updateReviewFilterTabs();
  renderReviewList();

  // Find first matching index to display
  const items = getFilteredReviewItems();
  if (items.length > 0) {
    renderReviewDetail(items[0].originalIndex);
  }
}

function getFilteredReviewItems() {
  return state.quizQuestions.map((q, idx) => {
    const userChoice = state.userAnswers[idx];
    const isCorrect = userChoice === q.correctIndex;
    return {
      q,
      originalIndex: idx,
      userChoice,
      isCorrect
    };
  }).filter(item => {
    if (state.reviewFilter === 'correct') return item.isCorrect;
    if (state.reviewFilter === 'wrong') return !item.isCorrect;
    return true;
  });
}

function updateReviewFilterTabs() {
  const total = state.quizQuestions.length;
  const correct = state.lastResults.correct;
  const wrong = state.lastResults.wrong;

  const tabAll = document.getElementById('tab-filter-all');
  const tabCorrect = document.getElementById('tab-filter-correct');
  const tabWrong = document.getElementById('tab-filter-wrong');

  tabAll.textContent = `Semua (${total})`;
  tabCorrect.textContent = `Benar (${correct})`;
  tabWrong.textContent = `Salah (${wrong})`;

  [tabAll, tabCorrect, tabWrong].forEach(t => t.classList.remove('active'));
  if (state.reviewFilter === 'all') tabAll.classList.add('active');
  if (state.reviewFilter === 'correct') tabCorrect.classList.add('active');
  if (state.reviewFilter === 'wrong') tabWrong.classList.add('active');
}

function renderReviewList() {
  const container = document.getElementById('review-questions-list');
  container.innerHTML = '';

  const items = getFilteredReviewItems();

  if (items.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
        Tidak ada soal pada kategori ini.
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'review-list-item';
    if (item.originalIndex === state.activeReviewIndex) {
      row.classList.add('active');
    }

    const userLetter = item.userChoice !== undefined && item.userChoice !== null ? OPTION_LETTERS[item.userChoice] : '-';
    const correctLetter = OPTION_LETTERS[item.q.correctIndex];

    let ansBadgeText = '';
    if (item.isCorrect) {
      ansBadgeText = `<span class="ans-info is-correct">Jawaban: ${correctLetter}</span>`;
    } else {
      ansBadgeText = `<span class="ans-info is-wrong">Jawaban kamu: ${userLetter} • Benar: ${correctLetter}</span>`;
    }

    row.innerHTML = `
      <div class="review-item-main">
        <div class="review-status-icon ${item.isCorrect ? 'correct' : 'wrong'}">
          ${item.isCorrect ? '✓' : '✕'}
        </div>
        <div class="review-item-text">
          <div class="q-num">${item.originalIndex + 1}. ${item.q.chapterName}</div>
          <div class="q-preview">${item.q.question}</div>
          ${ansBadgeText}
        </div>
      </div>
      <div class="review-arrow">➔</div>
    `;

    row.addEventListener('click', () => {
      state.activeReviewIndex = item.originalIndex;
      renderReviewList();
      renderReviewDetail(item.originalIndex);
    });

    container.appendChild(row);
  });
}

function renderReviewDetail(questionIndex) {
  state.activeReviewIndex = questionIndex;
  const q = state.quizQuestions[questionIndex];
  if (!q) return;

  const userChoice = state.userAnswers[questionIndex];
  const isCorrect = userChoice === q.correctIndex;

  document.getElementById('rev-detail-badge').textContent = `SOAL ${(questionIndex + 1).toString().padStart(2, '0')} • ${q.chapterName}`;
  
  const statusPill = document.getElementById('rev-detail-status');
  statusPill.className = `detail-status-pill ${isCorrect ? 'correct' : 'wrong'}`;
  statusPill.textContent = isCorrect ? 'Benar (+1)' : 'Kurang Tepat';

  document.getElementById('rev-detail-question').textContent = q.question;

  // Options
  const optContainer = document.getElementById('rev-detail-options');
  optContainer.innerHTML = '';

  q.displayOptions.forEach((optText, idx) => {
    const letter = OPTION_LETTERS[idx];
    const isThisCorrect = idx === q.correctIndex;
    const isThisUser = idx === userChoice;

    const div = document.createElement('div');
    div.className = 'detail-opt-item';

    let extraBadge = '';
    if (isThisCorrect && isThisUser) {
      div.classList.add('is-user-correct');
      extraBadge = '<strong style="margin-left: auto; color: var(--success-dark);">✓ Jawaban Kamu (Benar)</strong>';
    } else if (isThisCorrect && !isThisUser) {
      div.classList.add('is-target-correct');
      extraBadge = '<strong style="margin-left: auto; color: var(--success-dark);">✓ Kunci Jawaban</strong>';
    } else if (isThisUser && !isThisCorrect) {
      div.classList.add('is-user-wrong');
      extraBadge = '<strong style="margin-left: auto; color: var(--error-dark);">✕ Pilihan Kamu</strong>';
    }

    div.innerHTML = `
      <span style="font-weight: 700; width: 22px;">${letter}.</span>
      <span>${optText}</span>
      ${extraBadge}
    `;

    optContainer.appendChild(div);
  });

  // Explanation
  document.getElementById('rev-detail-explanation').textContent = q.explanation;
}

// =============================================================================
// MODAL & TOAST HELPERS
// =============================================================================
function showConfirmModal(title, message, onConfirm) {
  const modal = document.getElementById('modal-confirm');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;

  const btnConfirm = document.getElementById('btn-modal-confirm');
  const btnCancel = document.getElementById('btn-modal-cancel');

  modal.classList.add('active');

  const handleConfirm = () => {
    modal.classList.remove('active');
    btnConfirm.removeEventListener('click', handleConfirm);
    btnCancel.removeEventListener('click', handleCancel);
    if (onConfirm) onConfirm();
  };

  const handleCancel = () => {
    modal.classList.remove('active');
    btnConfirm.removeEventListener('click', handleConfirm);
    btnCancel.removeEventListener('click', handleCancel);
  };

  btnConfirm.addEventListener('click', handleConfirm);
  btnCancel.addEventListener('click', handleCancel);
}

function showToast(message) {
  const existing = document.getElementById('smartquiz-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'smartquiz-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: #102A56;
    color: #FFFFFF;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-size: 0.92rem;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    z-index: 2000;
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}
