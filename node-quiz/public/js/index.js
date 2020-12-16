{
  // APIの呼び出し
  const callApi = async () => {
    const res = await fetch('http://localhost:4000/api/v1/list');
    const users = await res.json();

    // それぞれのIDの取得
    const questionnumber = document.getElementById('questionnumber');
    const question = document.getElementById('question');
    const genre = document.getElementById('genre');
    const difficulty = document.getElementById('difficulty');
    const answers = document.getElementById('answers');
    const scoreLabel = document.querySelector('#result > p ');

    let currentNum = 0;
    let score = 0;

    // クイズ表示の処理
    const setQuiz = () => {
      questionnumber.textContent = `${[currentNum + 1]}問題`;
      question.textContent = users[currentNum].question;
      genre.textContent = `[ジャンル]:${users[currentNum].category}`;
      difficulty.textContent = `[難易度]:${users[currentNum].difficulty}`;

      while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
      }

      users[currentNum].shuffleAnswers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.textContent = answer;
        answers.appendChild(li);
        li.addEventListener('click', () => {
          // 正解数の処理
          if (li.textContent === users[currentNum].correct_answer) {
            score++;
          }

          // 結果と次の問題への処理
          if (currentNum === users.length - 1) {
            scoreLabel.textContent = `あなたの正解数は${score}/ ${users.length}です`;
            result.classList.remove('hidden');
          } else {
            currentNum++;
            setQuiz();
          }
        });
      });
    };
    setQuiz();
  };

  const getQuiz = async () => {
   await callApi();
     home.classList.add('hidden');
     container.classList.remove('hidden');
   };

  // 非同期処理の機能
  document.getElementById('start').addEventListener('click', () => {
   getQuiz()
    const container = document.getElementById('container');
    const home = document.getElementById('home');
    while (home.firstChild) {
      home.removeChild(home.firstChild);
    }

    const text1 = document.createElement('p');
    const text2 = document.createElement('p');

    text1.textContent = '取得中';
    text2.textContent = '少々お待ちください';
    home.appendChild(text1);
    home.appendChild(text2);
  });
}
