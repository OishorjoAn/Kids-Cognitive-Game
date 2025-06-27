
// --- TTT Game constants ---
const winningConditions: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// --- TTT Game state variables ---
let boardState: string[] = Array(9).fill('');
let currentPlayer: 'X' | 'O' = 'X';
let gameActive: boolean = true;

// --- Math Challenge Game constants ---
const PROBLEMS_PER_LEVEL = 3;

// --- Math Challenge Game state variables ---
let currentMathLevel: number = 1;
let currentMathScore: number = 0;
let correctAnswersInLevel: number = 0;
let expectedMathAnswer: number | null = null;

// --- Abacus Math Challenge Game constants ---
const ABACUS_PROBLEMS_PER_LEVEL = 3;

// --- Abacus Math Challenge Game state variables ---
let currentAbacusLevel: number = 1;
let currentAbacusScore: number = 0;
let correctAnswersInAbacusLevel: number = 0;
let expectedAbacusAnswer: number | null = null;

// --- Rock Paper Scissors (RPS) Game constants ---
const RPS_CHOICES = ['Rock', 'Paper', 'Scissors'] as const;
type RPSChoice = typeof RPS_CHOICES[number];

// --- RPS Game state variables ---
let playerRPSScore: number = 0;
let computerRPSScore: number = 0;
let playerRPSChoiceVal: RPSChoice | null = null;
let computerRPSChoiceVal: RPSChoice | null = null;
let rpsRoundResultText: string = "Let's Play!";

// --- Tally Mark Challenge Game constants ---
const TALLY_PROBLEMS_PER_LEVEL = 3;

// --- Tally Mark Challenge Game state variables ---
let currentTallyLevel: number = 1;
let currentTallyScore: number = 0;
let correctAnswersInTallyLevel: number = 0;
let expectedTallyAnswer: number | null = null;

// --- Islamic Quiz Challenge Game constants ---
interface IslamicQuizQuestion {
    level: number;
    questionText: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

const ISLAMIC_QUIZ_QUESTIONS_PER_LEVEL = 3; 
const TOTAL_QUESTIONS_PER_QUIZ_LEVEL = 3; 

const ALL_ISLAMIC_QUIZ_QUESTIONS: IslamicQuizQuestion[] = [
    // Level 1
    { 
        level: 1, 
        questionText: "What is the first pillar of Islam, the declaration of faith?", 
        options: ["Salat (Prayer)", "Zakat (Charity)", "Shahada", "Hajj (Pilgrimage)"], 
        correctAnswer: "Shahada",
        explanation: "The Shahada, 'Lā ilāha illallāh, Muhammadur rasūlullāh,' translates to 'There is no god but Allah, Muhammad is the messenger of Allah.' It is the foundational testimony of faith in Islam, affirming monotheism and the prophethood of Muhammad (PBUH). Uttering it with sincere conviction is the first step to becoming a Muslim."
    },
    { 
        level: 1, 
        questionText: "How many times a day are Muslims obligated to perform Salat (prayer)?", 
        options: ["3", "5", "7", "1"], 
        correctAnswer: "5",
        explanation: "Salat is the ritual prayer performed five times daily at prescribed times: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). These prayers involve specific recitations and physical postures, and they are a direct communication with Allah, reinforcing faith and discipline."
    },
    { 
        level: 1, 
        questionText: "In which city was Prophet Muhammad (PBUH) born?", 
        options: ["Madinah", "Jerusalem", "Makkah", "Baghdad"], 
        correctAnswer: "Makkah",
        explanation: "Prophet Muhammad (Peace Be Upon Him) was born in Makkah (Mecca) around 570 CE. Makkah is home to the Kaaba, Islam's most sacred site, which Muslims face during prayer. It remains the spiritual center of Islam and the destination for the Hajj pilgrimage."
    },
    // Level 2
    { 
        level: 2, 
        questionText: "Who was the first Caliph after Prophet Muhammad (PBUH)?", 
        options: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan", "Abu Bakr as-Siddiq"], 
        correctAnswer: "Abu Bakr as-Siddiq",
        explanation: "Abu Bakr as-Siddiq (RA) was a close companion and father-in-law of Prophet Muhammad (PBUH). After the Prophet's passing in 632 CE, he was chosen by the Muslim community as the first Caliph (successor) to lead the nascent Islamic state. His caliphate (632-634 CE) focused on consolidating Arabia and dealing with the Ridda wars."
    },
    { 
        level: 2, 
        questionText: "The historic Battle of Badr, a key victory for early Muslims, took place in which year of the Islamic calendar?", 
        options: ["1 AH", "2 AH", "3 AH", "5 AH"], 
        correctAnswer: "2 AH",
        explanation: "The Battle of Badr occurred in the second year after Hijra (2 AH, or 624 CE). It was a pivotal military engagement between the early Muslims of Madinah, led by Prophet Muhammad (PBUH), and the Quraysh of Makkah. Despite being outnumbered, the Muslims achieved a decisive victory, significantly boosting their morale and position."
    },
    { 
        level: 2, 
        questionText: "During whose Caliphate was the Quran standardized and compiled into the single book form (Mushaf) widely known today?", 
        options: ["Abu Bakr as-Siddiq", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"], 
        correctAnswer: "Uthman ibn Affan",
        explanation: "During the Caliphate of Uthman ibn Affan (RA), the third Caliph (644-656 CE), variations in Quranic recitation began to emerge as Islam spread. To preserve its integrity, Uthman (RA) commissioned a committee led by Zayd ibn Thabit to compile a standard written version (Mushaf) based on the dialect of Quraysh and the original compilation under Abu Bakr. Copies were then distributed, ensuring a unified text."
    },
    // Level 3
    { 
        level: 3, 
        questionText: "Which dynasty established its capital in Damascus and greatly expanded the early Islamic empire?", 
        options: ["Abbasid", "Fatimid", "Ottoman", "Umayyad"], 
        correctAnswer: "Umayyad",
        explanation: "The Umayyad Caliphate (661-750 CE) was the second of the four major Islamic caliphates established after Prophet Muhammad (PBUH). They established their capital in Damascus, Syria. Under their rule, the Islamic empire expanded vastly, reaching from the Iberian Peninsula in the west to the Indus River in the east. They were known for their administrative reforms and significant building projects."
    },
    { 
        level: 3, 
        questionText: "The \"Golden Age of Islam\" with significant advancements in science, mathematics, and philosophy, is most associated with which Caliphate, centered in Baghdad?", 
        options: ["Rashidun", "Umayyad", "Abbasid", "Mughal"], 
        correctAnswer: "Abbasid",
        explanation: "The Abbasid Caliphate (750-1258 CE) overthrew the Umayyads and moved the capital to Baghdad, Iraq. Their era, particularly the early centuries, is often referred to as the Islamic Golden Age. This period saw remarkable advancements in science, mathematics (algebra), medicine, philosophy, astronomy, and literature, with scholars translating and building upon knowledge from various civilizations."
    },
    { 
        level: 3, 
        questionText: "Al-Andalus, a region of Islamic rule and renowned for its cultural and intellectual flourishing for centuries, was located on which European peninsula?", 
        options: ["Arabian", "Balkan", "Iberian", "Anatolian"], 
        correctAnswer: "Iberian",
        explanation: "Al-Andalus was the Arabic name for the parts of the Iberian Peninsula (modern-day Spain and Portugal) governed by Muslims from 711 to 1492. Cities like Cordoba, Seville, and Granada became major centers of learning, culture, and arts, renowned for their libraries, universities, architecture (like the Alhambra), and the coexistence (convivencia) of Muslims, Christians, and Jews for significant periods."
    },
];

// --- Islamic Quiz Challenge Game state variables ---
let currentIslamicQuizLevel: number = 1;
let currentIslamicQuizScore: number = 0;
let correctAnswersInIslamicQuizLevel: number = 0;
let currentIslamicQuizQuestionNumberInLevel: number = 0; 
let activeIslamicQuizQuestions: IslamicQuizQuestion[] = []; 
let currentQuestionExplanation: string | null = null;
let islamicQuizAdvanceTimeoutId: number | null = null;


// --- DOM Elements ---
// Views
let mainMenuView: HTMLElement;
let ticTacToeGameView: HTMLElement;
let mathChallengeGameView: HTMLElement;
let abacusMathGameView: HTMLElement;
let rockPaperScissorsGameView: HTMLElement;
let tallyMarkGameView: HTMLElement;
let islamicQuizGameView: HTMLElement;


// Menu Controls
let playTicTacToeButton: HTMLButtonElement;
let playMathChallengeButton: HTMLButtonElement;
let playAbacusMathButton: HTMLButtonElement;
let playRPSButton: HTMLButtonElement;
let playTallyMarkChallengeButton: HTMLButtonElement;
let playIslamicQuizButton: HTMLButtonElement;


// Tic-Tac-Toe Game Elements
let statusDisplay: HTMLElement;
let cellElements: NodeListOf<HTMLButtonElement>;
let resetButtonElement: HTMLButtonElement;

// Math Challenge Game Elements
let mathLevelDisplay: HTMLElement;
let mathScoreDisplay: HTMLElement;
let mathProblemDisplay: HTMLElement;
let mathAnswerInput: HTMLInputElement;
let mathSubmitButton: HTMLButtonElement;
let mathRestartButton: HTMLButtonElement;
let mathFeedbackArea: HTMLElement;

// Abacus Math Challenge Game Elements
let abacusLevelDisplay: HTMLElement;
let abacusScoreDisplay: HTMLElement;
let abacusProblemDisplay: HTMLElement;
let abacusDisplayArea: HTMLElement;
let abacusAnswerInput: HTMLInputElement;
let abacusSubmitButton: HTMLButtonElement;
let abacusRestartButton: HTMLButtonElement;
let abacusFeedbackArea: HTMLElement;

// Rock Paper Scissors Game Elements
let playerRPSScoreDisplay: HTMLElement;
let computerRPSScoreDisplay: HTMLElement;
let rpsChoiceButtons: NodeListOf<HTMLButtonElement>;
let rpsPlayerChoiceDisplay: HTMLElement;
let rpsComputerChoiceDisplay: HTMLElement;
let rpsRoundResultDisplay: HTMLElement;

// Tally Mark Challenge Game Elements
let tallyLevelDisplay: HTMLElement;
let tallyScoreDisplay: HTMLElement;
let tallyMarkDisplayArea: HTMLElement;
let tallyAnswerInput: HTMLInputElement;
let tallySubmitButton: HTMLButtonElement;
let tallyRestartButton: HTMLButtonElement;
let tallyFeedbackArea: HTMLElement;

// Islamic Quiz Challenge Game Elements
let islamicQuizLevelDisplay: HTMLElement;
let islamicQuizScoreDisplay: HTMLElement;
let islamicQuizQuestionDisplay: HTMLElement;
let islamicQuizOptionsContainer: HTMLElement;
let islamicQuizFeedbackArea: HTMLElement;
let islamicQuizShowExplanationContainer: HTMLElement;
let islamicQuizShowExplanationButton: HTMLButtonElement;
let islamicQuizExplanationPanel: HTMLElement;
let islamicQuizExplanationText: HTMLElement;
let closeIslamicQuizExplanationButton: HTMLButtonElement;
let islamicQuizRestartButton: HTMLButtonElement;


// --- View Management ---
function showView(viewIdToShow: string): void {
    const views = document.querySelectorAll('.view-container') as NodeListOf<HTMLElement>;
    views.forEach(view => {
        view.style.display = view.id === viewIdToShow ? 'flex' : 'none'; 
    });
}

function goBackToMenu(): void {
    if (islamicQuizAdvanceTimeoutId) {
        clearTimeout(islamicQuizAdvanceTimeoutId);
        islamicQuizAdvanceTimeoutId = null;
    }
    // The explanation panel is only part of the quiz view, but hiding it is harmless and good practice
    hideIslamicQuizExplanationPanel();
    showView('mainMenuView');
}

// --- Main Menu Initialization ---
function initializeMainMenu(): void {
    // Get view elements
    mainMenuView = document.getElementById('mainMenuView')!;
    ticTacToeGameView = document.getElementById('ticTacToeGameView')!;
    mathChallengeGameView = document.getElementById('mathChallengeGameView')!;
    abacusMathGameView = document.getElementById('abacusMathGameView')!;
    rockPaperScissorsGameView = document.getElementById('rockPaperScissorsGameView')!;
    tallyMarkGameView = document.getElementById('tallyMarkGameView')!;
    islamicQuizGameView = document.getElementById('islamicQuizGameView')!;

    // Get menu button elements
    playTicTacToeButton = document.getElementById('playTicTacToeButton') as HTMLButtonElement;
    playMathChallengeButton = document.getElementById('playMathChallengeButton') as HTMLButtonElement;
    playAbacusMathButton = document.getElementById('playAbacusMathButton') as HTMLButtonElement;
    playRPSButton = document.getElementById('playRPSButton') as HTMLButtonElement;
    playTallyMarkChallengeButton = document.getElementById('playTallyMarkChallengeButton') as HTMLButtonElement;
    playIslamicQuizButton = document.getElementById('playIslamicQuizButton') as HTMLButtonElement;

    // Add menu button listeners
    playTicTacToeButton.addEventListener('click', showTicTacToeGame);
    playMathChallengeButton.addEventListener('click', showMathChallengeGame);
    playAbacusMathButton.addEventListener('click', showAbacusMathGame);
    playRPSButton.addEventListener('click', showRockPaperScissorsGame);
    playTallyMarkChallengeButton.addEventListener('click', showTallyMarkGame);
    playIslamicQuizButton.addEventListener('click', showIslamicQuizGame);

    // Centralized back to menu logic
    const backButtons = document.querySelectorAll('.back-to-menu-button');
    backButtons.forEach(button => button.addEventListener('click', goBackToMenu));

    // ONE-TIME GAME INITIALIZATION & RESET on page load
    initializeTicTacToeGame(); 
    
    initializeMathChallengeGame();
    resetMathChallengeGame();
    
    initializeAbacusMathGame();
    resetAbacusMathGame();
    
    initializeRockPaperScissorsGame();
    
    initializeTallyMarkGame();
    resetTallyMarkGame();

    initializeIslamicQuizGame();
    resetIslamicQuizGame();

    showView('mainMenuView');
}


// --- Tic-Tac-Toe Game Functions ---
function showTicTacToeGame(): void {
    showView('ticTacToeGameView');
    resetTicTacToeGame();
}

function initializeTicTacToeGame(): void {
    statusDisplay = document.getElementById('statusArea')!;
    resetButtonElement = document.getElementById('resetButton') as HTMLButtonElement;
    resetButtonElement.addEventListener('click', resetTicTacToeGame);
    // Initial assignment
    cellElements = document.querySelectorAll('#ticTacToeGameView .cell') as NodeListOf<HTMLButtonElement>;
}

function resetTicTacToeGame(): void {
    boardState = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    updateStatusDisplay(`Player ${currentPlayer}'s turn`);

    const board = document.getElementById('board')!;
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('button');
        cell.classList.add('cell');
        cell.dataset.cellIndex = i.toString();
        cell.setAttribute('aria-label', `Cell ${i}`);
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
    cellElements = document.querySelectorAll('#ticTacToeGameView .cell') as NodeListOf<HTMLButtonElement>;
}


function handleCellClick(event: MouseEvent): void {
    const clickedCell = event.currentTarget as HTMLButtonElement;
    const clickedCellIndex = parseInt(clickedCell.dataset.cellIndex!);

    if (boardState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    boardState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer);
    clickedCell.disabled = true;

    if (checkGameResult()) {
        return;
    }
    switchPlayer();
}

function checkGameResult(): boolean {
    let roundWon = false;
    let winningLine: number[] | null = null;

    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = boardState[winCondition[0]];
        const b = boardState[winCondition[1]];
        const c = boardState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            winningLine = winCondition;
            break;
        }
    }

    if (roundWon && winningLine) {
        updateStatusDisplay(`Player ${currentPlayer} Wins!`);
        gameActive = false;
        winningLine.forEach(index => cellElements[index].classList.add('winning-cell'));
        disableAllCells();
        return true;
    }

    if (!boardState.includes('')) {
        updateStatusDisplay("It's a Draw!");
        gameActive = false;
        disableAllCells();
        return true;
    }
    return false;
}

function switchPlayer(): void {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatusDisplay(`Player ${currentPlayer}'s turn`);
}

function updateStatusDisplay(message: string): void {
    if (statusDisplay) {
        statusDisplay.textContent = message;
    }
}

function disableAllCells(): void {
    cellElements.forEach(cell => {
        cell.disabled = true;
    });
}

// --- Math Challenge Game Functions ---
function showMathChallengeGame(): void {
    showView('mathChallengeGameView');
    mathAnswerInput.focus();
}

function initializeMathChallengeGame(): void {
    mathLevelDisplay = document.getElementById('mathLevelDisplay')!;
    mathScoreDisplay = document.getElementById('mathScoreDisplay')!;
    mathProblemDisplay = document.getElementById('mathProblemDisplay')!;
    mathAnswerInput = document.getElementById('mathAnswerInput') as HTMLInputElement;
    mathSubmitButton = document.getElementById('mathSubmitButton') as HTMLButtonElement;
    mathRestartButton = document.getElementById('mathRestartButton') as HTMLButtonElement;
    mathFeedbackArea = document.getElementById('mathFeedbackArea')!;

    mathSubmitButton.addEventListener('click', handleMathSubmit);
    mathAnswerInput.addEventListener('keypress', handleMathInputKeyPress);
    mathRestartButton.addEventListener('click', resetMathChallengeGame);
}

function resetMathChallengeGame(): void {
    currentMathLevel = 1;
    currentMathScore = 0;
    correctAnswersInLevel = 0;
    expectedMathAnswer = null;

    mathAnswerInput.value = '';
    mathFeedbackArea.textContent = 'Enter your answer above!';
    mathFeedbackArea.className = 'feedback-area'; 

    updateMathUIDisplay();
    generateNewMathProblem();
}

function handleMathInputKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
        handleMathSubmit();
    }
}

function generateNewMathProblem(): void {
    let num1: number, num2: number;
    let operation: '+' | '-' | '*' | '/' = '+';
    const operations: (('+' | '-' | '*' | '/')[])[] = [['+','-'], ['+','-','*'], ['+','-','*','/']];
    let availableOps = operations[Math.min(currentMathLevel -1, operations.length -1)];
    operation = availableOps[Math.floor(Math.random() * availableOps.length)];

    const baseRange = currentMathLevel * 5;

    switch (operation) {
        case '+':
            num1 = Math.floor(Math.random() * (baseRange + 10)) + 1;
            num2 = Math.floor(Math.random() * (baseRange + 10)) + 1;
            expectedMathAnswer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * (baseRange + 10)) + 1;
            num2 = Math.floor(Math.random() * num1) + 1; 
            expectedMathAnswer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * (currentMathLevel + 4)) + 1; 
            num2 = Math.floor(Math.random() * (currentMathLevel + 4)) + 1;
            expectedMathAnswer = num1 * num2;
            break;
        case '/':
            num2 = Math.floor(Math.random() * (currentMathLevel + 3)) + 1; 
            expectedMathAnswer = Math.floor(Math.random() * (currentMathLevel + 2)) + 1;
            num1 = num2 * expectedMathAnswer;
            break;
    }
    mathProblemDisplay.textContent = `${num1} ${operation} ${num2} = ?`;
    mathAnswerInput.value = '';
    mathAnswerInput.focus();
}

function handleMathSubmit(): void {
    if (!mathAnswerInput) return; 
    const userAnswer = parseInt(mathAnswerInput.value);

    if (isNaN(userAnswer)) {
        mathFeedbackArea.textContent = 'Please enter a valid number.';
        mathFeedbackArea.className = 'feedback-area incorrect';
        return;
    }

    if (userAnswer === expectedMathAnswer) {
        currentMathScore += 10;
        correctAnswersInLevel++;
        mathFeedbackArea.textContent = 'Correct!';
        mathFeedbackArea.className = 'feedback-area correct';

        if (correctAnswersInLevel >= PROBLEMS_PER_LEVEL) {
            currentMathLevel++;
            correctAnswersInLevel = 0;
            mathFeedbackArea.textContent = `Correct! Level up to ${currentMathLevel}!`;
        }
    } else {
        mathFeedbackArea.textContent = `Incorrect. The answer was ${expectedMathAnswer}.`;
        mathFeedbackArea.className = 'feedback-area incorrect';
    }

    updateMathUIDisplay();
    generateNewMathProblem();
}

function updateMathUIDisplay(): void {
    if (mathLevelDisplay) mathLevelDisplay.textContent = currentMathLevel.toString();
    if (mathScoreDisplay) mathScoreDisplay.textContent = currentMathScore.toString();
}

// --- Abacus Math Challenge Game Functions ---
function showAbacusMathGame(): void {
    showView('abacusMathGameView');
    abacusAnswerInput.focus();
}

function initializeAbacusMathGame(): void {
    abacusLevelDisplay = document.getElementById('abacusLevelDisplay')!;
    abacusScoreDisplay = document.getElementById('abacusScoreDisplay')!;
    abacusProblemDisplay = document.getElementById('abacusProblemDisplay')!;
    abacusDisplayArea = document.getElementById('abacusDisplayArea')!;
    abacusAnswerInput = document.getElementById('abacusAnswerInput') as HTMLInputElement;
    abacusSubmitButton = document.getElementById('abacusSubmitButton') as HTMLButtonElement;
    abacusRestartButton = document.getElementById('abacusRestartButton') as HTMLButtonElement;
    abacusFeedbackArea = document.getElementById('abacusFeedbackArea')!;

    abacusSubmitButton.addEventListener('click', handleAbacusMathSubmit);
    abacusAnswerInput.addEventListener('keypress', handleAbacusInputKeyPress);
    abacusRestartButton.addEventListener('click', resetAbacusMathGame);
}

function resetAbacusMathGame(): void {
    currentAbacusLevel = 1;
    currentAbacusScore = 0;
    correctAnswersInAbacusLevel = 0;
    expectedAbacusAnswer = null;

    abacusAnswerInput.value = '';
    abacusFeedbackArea.textContent = 'Enter your answer above!';
    abacusFeedbackArea.className = 'feedback-area';

    updateAbacusUIDisplay();
    generateNewAbacusProblem();
}

function handleAbacusInputKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
        handleAbacusMathSubmit();
    }
}

function getAbacusRodHTML(digit: number): string {
    let upperBeadActive = digit >= 5;
    let lowerBeadsActiveCount = upperBeadActive ? digit - 5 : digit;

    let rodHTML = `<div class="upper-beads"><div class="bead ${upperBeadActive ? 'active' : ''}"></div></div>`;
    rodHTML += '<div class="rod-bar"></div>'; 
    rodHTML += '<div class="lower-beads">';
    for (let i = 0; i < 4; i++) {
        rodHTML += `<div class="bead ${i < lowerBeadsActiveCount ? 'active' : ''}"></div>`;
    }
    rodHTML += '</div>';
    return rodHTML;
}

function renderAbacusDisplay(num1: number, operation: string, num2: number): void {
    const tensDigit = Math.floor(num1 / 10);
    const unitsDigit = num1 % 10;

    let html = `<div class="abacus-hint">Visualize: Start with ${num1}, then ${operation === '+' ? 'add' : 'subtract'} ${num2}.</div>`;
    html += '<div class="abacus-visual-container">';

    if (tensDigit > 0 || num1 >= 10 || (num1 === 0 && tensDigit === 0) ) { 
        if (num1 >=10 || currentAbacusLevel > 2) { 
             html += `<div class="rod-group">
                        <div class="rod-label">Tens</div>
                        <div class="abacus-rod">${getAbacusRodHTML(tensDigit)}</div>
                     </div>`;
        }
    }
    
    html += `<div class="rod-group">
                <div class="rod-label">Units</div>
                <div class="abacus-rod">${getAbacusRodHTML(unitsDigit)}</div>
             </div>`;
    html += '</div>';
    abacusDisplayArea.innerHTML = html;
}

function generateNewAbacusProblem(): void {
    let num1: number, num2: number;
    const operation: '+' | '-' = Math.random() < 0.6 ? '+' : '-'; 

    if (currentAbacusLevel <= 2) { 
        num1 = Math.floor(Math.random() * 9) + 1; 
        if (operation === '+') {
            num2 = Math.floor(Math.random() * (18 - num1)) + 1; 
            num2 = Math.min(num2, 9); 
            expectedAbacusAnswer = num1 + num2;
        } else { 
            num2 = Math.floor(Math.random() * num1) + 1; 
            expectedAbacusAnswer = num1 - num2;
        }
    } else { 
        num1 = Math.floor(Math.random() * 90) + 10; // 10-99
        if (operation === '+') {
            num2 = Math.floor(Math.random() * (99 - num1 -1)) + 1; 
            expectedAbacusAnswer = num1 + num2;
        } else { 
            num2 = Math.floor(Math.random() * (num1 -1)) + 1; 
            expectedAbacusAnswer = num1 - num2;
        }
    }
    
    abacusProblemDisplay.textContent = `${num1} ${operation} ${num2} = ?`;
    renderAbacusDisplay(num1, operation, num2);
    abacusAnswerInput.value = '';
    abacusAnswerInput.focus();
}

function handleAbacusMathSubmit(): void {
    if(!abacusAnswerInput) return;
    const userAnswer = parseInt(abacusAnswerInput.value);

    if (isNaN(userAnswer)) {
        abacusFeedbackArea.textContent = 'Please enter a valid number.';
        abacusFeedbackArea.className = 'feedback-area incorrect';
        return;
    }

    if (userAnswer === expectedAbacusAnswer) {
        currentAbacusScore += 15; 
        correctAnswersInAbacusLevel++;
        abacusFeedbackArea.textContent = 'Correct!';
        abacusFeedbackArea.className = 'feedback-area correct';

        if (correctAnswersInAbacusLevel >= ABACUS_PROBLEMS_PER_LEVEL) {
            currentAbacusLevel++;
            correctAnswersInAbacusLevel = 0;
            abacusFeedbackArea.textContent = `Correct! Level up to ${currentAbacusLevel}!`;
        }
    } else {
        abacusFeedbackArea.textContent = `Incorrect. The answer was ${expectedAbacusAnswer}.`;
        abacusFeedbackArea.className = 'feedback-area incorrect';
    }

    updateAbacusUIDisplay();
    generateNewAbacusProblem();
}

function updateAbacusUIDisplay(): void {
    if(abacusLevelDisplay) abacusLevelDisplay.textContent = currentAbacusLevel.toString();
    if(abacusScoreDisplay) abacusScoreDisplay.textContent = currentAbacusScore.toString();
}

// --- Rock Paper Scissors (RPS) Game Functions ---
function showRockPaperScissorsGame(): void {
    showView('rockPaperScissorsGameView');
    resetRockPaperScissorsGame();
}

function initializeRockPaperScissorsGame(): void {
    playerRPSScoreDisplay = document.getElementById('playerRPSScoreDisplay')!;
    computerRPSScoreDisplay = document.getElementById('computerRPSScoreDisplay')!;
    rpsPlayerChoiceDisplay = document.getElementById('rpsPlayerChoiceDisplay')!;
    rpsComputerChoiceDisplay = document.getElementById('rpsComputerChoiceDisplay')!;
    rpsRoundResultDisplay = document.getElementById('rpsRoundResultDisplay')!;
    rpsChoiceButtons = document.querySelectorAll('#rockPaperScissorsGameView .rps-choice-button') as NodeListOf<HTMLButtonElement>;

    rpsChoiceButtons.forEach(button => {
        button.addEventListener('click', handlePlayerRPSChoiceClick);
    });
}

function resetRockPaperScissorsGame(): void {
    playerRPSScore = 0;
    computerRPSScore = 0;
    playerRPSChoiceVal = null;
    computerRPSChoiceVal = null;
    rpsRoundResultText = "Choose your weapon!";
    updateRPS_UI();
}


function handlePlayerRPSChoiceClick(event: MouseEvent): void {
    const choice = (event.currentTarget as HTMLButtonElement).dataset.choice as RPSChoice;
    if (choice) {
        handlePlayerRPSChoice(choice);
    }
}

function generateComputerRPSChoice(): RPSChoice {
    return RPS_CHOICES[Math.floor(Math.random() * RPS_CHOICES.length)];
}

function determineRPSWinner(player: RPSChoice, computer: RPSChoice): 'Player' | 'Computer' | 'Draw' {
    if (player === computer) {
        return 'Draw';
    }
    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Scissors' && computer === 'Paper') ||
        (player === 'Paper' && computer === 'Rock')
    ) {
        return 'Player';
    }
    return 'Computer';
}

function handlePlayerRPSChoice(choice: RPSChoice): void {
    playerRPSChoiceVal = choice;
    computerRPSChoiceVal = generateComputerRPSChoice();
    const winner = determineRPSWinner(playerRPSChoiceVal, computerRPSChoiceVal);

    if (winner === 'Player') {
        playerRPSScore++;
        rpsRoundResultText = "You Win!";
        if(rpsRoundResultDisplay) rpsRoundResultDisplay.className = 'feedback-area correct';
    } else if (winner === 'Computer') {
        computerRPSScore++;
        rpsRoundResultText = "Computer Wins!";
        if(rpsRoundResultDisplay) rpsRoundResultDisplay.className = 'feedback-area incorrect';
    } else {
        rpsRoundResultText = "It's a Draw!";
        if(rpsRoundResultDisplay) rpsRoundResultDisplay.className = 'feedback-area draw';
    }
    updateRPS_UI();
}

function updateRPS_UI(): void {
    if (playerRPSScoreDisplay) playerRPSScoreDisplay.textContent = playerRPSScore.toString();
    if (computerRPSScoreDisplay) computerRPSScoreDisplay.textContent = computerRPSScore.toString();
    if (rpsPlayerChoiceDisplay) rpsPlayerChoiceDisplay.textContent = playerRPSChoiceVal ? `Your choice: ${playerRPSChoiceVal}` : 'Your choice: -';
    if (rpsComputerChoiceDisplay) rpsComputerChoiceDisplay.textContent = computerRPSChoiceVal ? `Computer's choice: ${computerRPSChoiceVal}` : "Computer's choice: -";
    if (rpsRoundResultDisplay) rpsRoundResultDisplay.textContent = rpsRoundResultText;
}

// --- Tally Mark Challenge Game Functions ---
function showTallyMarkGame(): void {
    showView('tallyMarkGameView');
    tallyAnswerInput.focus();
}

function initializeTallyMarkGame(): void {
    tallyLevelDisplay = document.getElementById('tallyLevelDisplay')!;
    tallyScoreDisplay = document.getElementById('tallyScoreDisplay')!;
    tallyMarkDisplayArea = document.getElementById('tallyMarkDisplayArea')!;
    tallyAnswerInput = document.getElementById('tallyAnswerInput') as HTMLInputElement;
    tallySubmitButton = document.getElementById('tallySubmitButton') as HTMLButtonElement;
    tallyRestartButton = document.getElementById('tallyRestartButton') as HTMLButtonElement;
    tallyFeedbackArea = document.getElementById('tallyFeedbackArea')!;

    tallySubmitButton.addEventListener('click', handleTallyMarkSubmit);
    tallyAnswerInput.addEventListener('keypress', handleTallyInputKeyPress);
    tallyRestartButton.addEventListener('click', resetTallyMarkGame);
}

function resetTallyMarkGame(): void {
    currentTallyLevel = 1;
    currentTallyScore = 0;
    correctAnswersInTallyLevel = 0;
    expectedTallyAnswer = null;

    tallyAnswerInput.value = '';
    tallyFeedbackArea.textContent = 'Enter your answer above!';
    tallyFeedbackArea.className = 'feedback-area';

    updateTallyUIDisplay();
    generateNewTallyProblem();
}


function handleTallyInputKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
        handleTallyMarkSubmit();
    }
}

function renderTallyMarks(numberToRender: number): void {
    let tallyHTML = '';
    let num = numberToRender;

    const groupOfFiveHTML = 
        '<span class="tally-segment">' +
            '<span class="tally-stick">|</span>'.repeat(4) + 
            '<span class="tally-slash">/</span>' +
        '</span>';
    const singleStickHTML = '<span class="tally-stick">|</span>';

    if (num === 0) {
        tallyMarkDisplayArea.innerHTML = '<span class="tally-zero">0</span>';
        return;
    }

    while (num >= 5) {
        tallyHTML += groupOfFiveHTML;
        num -= 5;
    }
    
    if (num > 0) {
        tallyHTML += '<span class="tally-segment">';
        for (let i = 0; i < num; i++) {
            tallyHTML += singleStickHTML;
        }
        tallyHTML += '</span>';
    }
    tallyMarkDisplayArea.innerHTML = tallyHTML;
}

function generateNewTallyProblem(): void {
    const minRangeBase = (currentTallyLevel - 1) * 3;
    const minNumber = Math.max(1, minRangeBase + 1);
    const maxNumber = currentTallyLevel * 4 + currentTallyLevel; 


    expectedTallyAnswer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    if (expectedTallyAnswer === 0 && minNumber > 0) expectedTallyAnswer = minNumber; 

    renderTallyMarks(expectedTallyAnswer);
    tallyAnswerInput.value = '';
    tallyAnswerInput.focus();
    if(tallyFeedbackArea) tallyFeedbackArea.textContent = "What number do these tallies represent?";
    if(tallyFeedbackArea) tallyFeedbackArea.className = 'feedback-area';
}

function handleTallyMarkSubmit(): void {
    if (!tallyAnswerInput) return;
    const userAnswer = parseInt(tallyAnswerInput.value);

    if (isNaN(userAnswer)) {
        tallyFeedbackArea.textContent = 'Please enter a valid number.';
        tallyFeedbackArea.className = 'feedback-area incorrect';
        return;
    }

    if (userAnswer === expectedTallyAnswer) {
        currentTallyScore += 12; 
        correctAnswersInTallyLevel++;
        tallyFeedbackArea.textContent = 'Correct!';
        tallyFeedbackArea.className = 'feedback-area correct';

        if (correctAnswersInTallyLevel >= TALLY_PROBLEMS_PER_LEVEL) {
            currentTallyLevel++;
            correctAnswersInTallyLevel = 0;
            tallyFeedbackArea.textContent = `Correct! Level up to ${currentTallyLevel}!`;
        }
    } else {
        tallyFeedbackArea.textContent = `Incorrect. The answer was ${expectedTallyAnswer}.`;
        tallyFeedbackArea.className = 'feedback-area incorrect';
    }

    updateTallyUIDisplay();
    generateNewTallyProblem();
}

function updateTallyUIDisplay(): void {
    if (tallyLevelDisplay) tallyLevelDisplay.textContent = currentTallyLevel.toString();
    if (tallyScoreDisplay) tallyScoreDisplay.textContent = currentTallyScore.toString();
}

// --- Islamic Quiz Challenge Game Functions ---
function showIslamicQuizGame(): void {
    showView('islamicQuizGameView');
}

function initializeIslamicQuizGame(): void {
    islamicQuizLevelDisplay = document.getElementById('islamicQuizLevelDisplay')!;
    islamicQuizScoreDisplay = document.getElementById('islamicQuizScoreDisplay')!;
    islamicQuizQuestionDisplay = document.getElementById('islamicQuizQuestionDisplay')!;
    islamicQuizOptionsContainer = document.getElementById('islamicQuizOptionsContainer')!;
    islamicQuizFeedbackArea = document.getElementById('islamicQuizFeedbackArea')!;
    islamicQuizRestartButton = document.getElementById('islamicQuizRestartButton') as HTMLButtonElement;
    
    islamicQuizShowExplanationContainer = document.getElementById('islamicQuizShowExplanationContainer')!;
    islamicQuizShowExplanationButton = document.getElementById('islamicQuizShowExplanationButton') as HTMLButtonElement;
    islamicQuizExplanationPanel = document.getElementById('islamicQuizExplanationPanel')!;
    islamicQuizExplanationText = document.getElementById('islamicQuizExplanationText')!;
    closeIslamicQuizExplanationButton = document.getElementById('closeIslamicQuizExplanationButton') as HTMLButtonElement;

    islamicQuizShowExplanationButton.addEventListener('click', handleShowExplanationClick);
    closeIslamicQuizExplanationButton.addEventListener('click', handleCloseExplanationClick);
    islamicQuizRestartButton.addEventListener('click', resetIslamicQuizGame);
}

function resetIslamicQuizGame(): void {
    currentIslamicQuizLevel = 1;
    currentIslamicQuizScore = 0;
    correctAnswersInIslamicQuizLevel = 0;
    currentIslamicQuizQuestionNumberInLevel = 0;
    currentQuestionExplanation = null;

    if (islamicQuizAdvanceTimeoutId) {
        clearTimeout(islamicQuizAdvanceTimeoutId);
        islamicQuizAdvanceTimeoutId = null;
    }
    
    islamicQuizFeedbackArea.textContent = 'Select an answer.';
    islamicQuizFeedbackArea.className = 'feedback-area';
    islamicQuizShowExplanationContainer.style.display = 'none';
    hideIslamicQuizExplanationPanel();
    
    loadQuestionsForCurrentIslamicQuizLevel();
    displayCurrentIslamicQuizQuestion();
    updateIslamicQuizUIDisplay();
}


function handleShowExplanationClick(): void {
    if (currentQuestionExplanation) {
        // Clear the auto-advance timeout because the user is viewing the explanation
        if (islamicQuizAdvanceTimeoutId) {
            clearTimeout(islamicQuizAdvanceTimeoutId);
            islamicQuizAdvanceTimeoutId = null;
        }
        islamicQuizExplanationText.textContent = currentQuestionExplanation;
        islamicQuizExplanationPanel.classList.add('visible');
        closeIslamicQuizExplanationButton.focus();
    }
}

function handleCloseExplanationClick(): void {
    hideIslamicQuizExplanationPanel();
    // Manually advance to the next question after closing the explanation
    displayCurrentIslamicQuizQuestion();
}

function hideIslamicQuizExplanationPanel(): void {
    if (islamicQuizExplanationPanel) {
        islamicQuizExplanationPanel.classList.remove('visible');
    }
}

function loadQuestionsForCurrentIslamicQuizLevel(): void {
    const questionsForLevel = ALL_ISLAMIC_QUIZ_QUESTIONS.filter(q => q.level === currentIslamicQuizLevel);
    activeIslamicQuizQuestions = questionsForLevel.sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS_PER_QUIZ_LEVEL);
    currentIslamicQuizQuestionNumberInLevel = 0; 
}

function displayCurrentIslamicQuizQuestion(): void {
    if (!islamicQuizQuestionDisplay || !islamicQuizOptionsContainer || !islamicQuizFeedbackArea) return;

    // Clear any pending advancement timeout from a previous question/state
    if (islamicQuizAdvanceTimeoutId) {
        clearTimeout(islamicQuizAdvanceTimeoutId);
        islamicQuizAdvanceTimeoutId = null;
    }

    hideIslamicQuizExplanationPanel();
    if(islamicQuizShowExplanationContainer) {
        islamicQuizShowExplanationContainer.style.display = 'none';
    }
    currentQuestionExplanation = null;

    if (currentIslamicQuizQuestionNumberInLevel >= activeIslamicQuizQuestions.length) {
        // All questions for this level attempt have been shown
        if (correctAnswersInIslamicQuizLevel >= ISLAMIC_QUIZ_QUESTIONS_PER_LEVEL) {
            currentIslamicQuizLevel++;
            const maxLevel = Math.max(...ALL_ISLAMIC_QUIZ_QUESTIONS.map(q => q.level));
            if (currentIslamicQuizLevel > maxLevel) {
                islamicQuizFeedbackArea.textContent = `Congratulations! You've completed all levels! Final Score: ${currentIslamicQuizScore}`;
                islamicQuizFeedbackArea.className = 'feedback-area correct';
                islamicQuizQuestionDisplay.textContent = "Quiz Complete!";
                islamicQuizOptionsContainer.innerHTML = '';
                return;
            } else {
                islamicQuizFeedbackArea.textContent = `Level ${currentIslamicQuizLevel -1} complete! Moving to Level ${currentIslamicQuizLevel}.`;
                islamicQuizFeedbackArea.className = 'feedback-area correct';
                correctAnswersInIslamicQuizLevel = 0;
                loadQuestionsForCurrentIslamicQuizLevel(); 
            }
        } else {
            islamicQuizFeedbackArea.textContent = `Not enough correct answers for Level ${currentIslamicQuizLevel}. Try again!`;
            islamicQuizFeedbackArea.className = 'feedback-area incorrect';
            correctAnswersInIslamicQuizLevel = 0; 
            loadQuestionsForCurrentIslamicQuizLevel(); 
        }
        updateIslamicQuizUIDisplay();
        
        // Set a new timeout to display the next question (or start of reset level)
        islamicQuizAdvanceTimeoutId = setTimeout(() => {
            if (islamicQuizQuestionDisplay.textContent !== "Quiz Complete!") { 
                 displayCurrentIslamicQuizQuestion(); 
            }
        }, 2000); 
        return;
    }

    const question = activeIslamicQuizQuestions[currentIslamicQuizQuestionNumberInLevel];
    islamicQuizQuestionDisplay.textContent = question.questionText;
    islamicQuizOptionsContainer.innerHTML = ''; 

    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('islamic-quiz-option-button');
        button.setAttribute('aria-label', `Answer: ${option}`);
        button.addEventListener('click', () => handleIslamicQuizAnswer(option, question.correctAnswer, question.explanation));
        islamicQuizOptionsContainer.appendChild(button);
    });
    
    if(islamicQuizFeedbackArea.textContent?.startsWith("Level") || islamicQuizFeedbackArea.textContent?.startsWith("Not enough correct")) {
        // Don't overwrite level transition feedback immediately
    } else {
        islamicQuizFeedbackArea.textContent = 'Select an answer.';
        islamicQuizFeedbackArea.className = 'feedback-area';
    }
}

function handleIslamicQuizAnswer(selectedOption: string, correctAnswer: string, explanation: string): void {
    const optionButtons = islamicQuizOptionsContainer.querySelectorAll('button');
    optionButtons.forEach(btn => btn.disabled = true);
    
    // Clear any existing timeout before setting a new one or deciding not to.
    if (islamicQuizAdvanceTimeoutId) {
        clearTimeout(islamicQuizAdvanceTimeoutId);
        islamicQuizAdvanceTimeoutId = null;
    }
    
    hideIslamicQuizExplanationPanel(); // Hide any previously open panel
    islamicQuizShowExplanationContainer.style.display = 'none'; // Hide "Learn More" initially

    if (selectedOption === correctAnswer) {
        currentIslamicQuizScore += 10;
        correctAnswersInIslamicQuizLevel++;
        islamicQuizFeedbackArea.textContent = 'Correct!';
        islamicQuizFeedbackArea.className = 'feedback-area correct';
        currentQuestionExplanation = explanation;
        islamicQuizShowExplanationContainer.style.display = 'block'; // Show "Learn More"
        // Game will wait for user to click "Learn More" or for timeout to advance if they don't

    } else {
        islamicQuizFeedbackArea.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
        islamicQuizFeedbackArea.className = 'feedback-area incorrect';
        currentQuestionExplanation = null;
    }

    currentIslamicQuizQuestionNumberInLevel++;
    updateIslamicQuizUIDisplay();

    // Set a timeout to advance to the next question.
    // This timeout will be cleared if the user opens the explanation panel.
    islamicQuizAdvanceTimeoutId = setTimeout(() => {
        // Only proceed if the explanation panel is NOT currently visible.
        // If it is visible, it means the user opened it, and it should stay
        // until they explicitly close it (handled by handleCloseExplanationClick).
        if (!islamicQuizExplanationPanel || !islamicQuizExplanationPanel.classList.contains('visible')) {
            displayCurrentIslamicQuizQuestion();
        }
    }, 2500);
}

function updateIslamicQuizUIDisplay(): void {
    if (islamicQuizLevelDisplay) islamicQuizLevelDisplay.textContent = currentIslamicQuizLevel.toString();
    if (islamicQuizScoreDisplay) islamicQuizScoreDisplay.textContent = currentIslamicQuizScore.toString();
}

// --- App Entry Point ---
document.addEventListener('DOMContentLoaded', initializeMainMenu);