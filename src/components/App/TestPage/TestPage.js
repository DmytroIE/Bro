import React, { Component, createRef } from 'react';

import TestControls from './TestControls/TestControls';
import TestTimer from './TestTimer/TestTimer';
import QuestionOptionsGrid from './QuestionOptionsGrid/QuestionOptionsGrid';
import TestTitle from '../shared/TestTitle/TestTitle';
import TestProgress from './TestProgress/TestProgress';
import TestQuestion from './TestQuestion/TestQuestion';

import Timer from '../../../utils/Timer';
import prepareForANewTest from '../../../utils/testObjectPrepare';

import styles from './TestPage.module.css';

// Заглушка для отработки механизмов
// Похожий объект должен приходить с бекенда
const tempTestObj = {
  id: '484896',
  title: 'Области видимости в JavaScript',
  questions: [
    {
      id: '1',
      img: 'https://i.stack.imgur.com/vjUD2.png',
      text: 'Является ли следующая разметка валидной?',
      timeToSolve: 20,
      hash: 512951962,
      options: [
        {
          id: '11',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ne.',
        },
        {
          id: '12',
          text:
            'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
        },
        {
          id: '13',
          text:
            'Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. ',
        },
        {
          id: '14',
          text: 'Aenean quam. In scelerisque sem at dolor. Maecenas mattis. ',
        },
      ],
    },
    {
      id: '2',
      img:
        'https://cdn-images-1.medium.com/max/1600/1*JnaEJQFr16g4OhXF_CBIKQ.png',
      text: 'Почем в Одессе рубероид?',
      timeToSolve: 15,
      hash: -438397008,
      options: [
        {
          id: '21',
          text:
            'Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.',
        },
        {
          id: '22',
          text:
            'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
        },
        {
          id: '23',
          text:
            'Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.',
        },
        {
          id: '24',
          text: 'Aenean quam. In scelerisque sem at dolor. Maecenas mattis. ',
        },
      ],
    },
    {
      id: '3',
      img:
        'https://designmodo.com/wp-content/uploads/2016/06/03-qunit-jquery-testing-javascript.jpg',
      text:
        'Сколько лет пьяному верблюду, если от паровоза отвалилось две гайки?',
      timeToSolve: 10,
      hash: -1758678459,
      options: [
        {
          id: '31',
          text:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. ',
        },
        {
          id: '32',
          text:
            'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
        },
        {
          id: '33',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ne.',
        },
      ],
    },
  ],
};

class TestPage extends Component {
  state = prepareForANewTest(tempTestObj);

  timer = new Timer();

  ref = createRef();

  componentDidMount() {
    // Скорее всего, не здесь, а будет появляться модалка с текстом "Начать тест?"
    // this.timer.start(this.onTimerTick);

    const { onResize } = this.props;
    onResize(this.ref.current.offsetHeight);
    console.log('M - TestPage height is :', this.ref.current.offsetHeight);
  }

  componentDidUpdate(prevProps, prevState) {
    const { numberOfCurrentQuestion } = this.state;
    if (numberOfCurrentQuestion !== prevState.numberOfCurrentQuestion) {
      // this.timer.start(this.onTimerTick);
    }

    const { onResize } = this.props;
    onResize(this.ref.current.offsetHeight);
    console.log('U - TestPage height is :', this.ref.current.offsetHeight);
  }

  componentWillUnmount() {
    this.timer.reset();
  }

  handleOptionClick = id => {
    const { questions, numberOfCurrentQuestion } = this.state;
    const renewedOptions = questions[numberOfCurrentQuestion - 1].options.map(
      opt => ({ ...opt, isChosen: opt.id === id }),
    );
    const renewedQuestions = questions.map((question, idx) =>
      idx !== numberOfCurrentQuestion - 1
        ? question
        : { ...question, options: renewedOptions, answer: id },
    );

    this.setState(prevState => ({
      ...prevState,
      questions: renewedQuestions,
    }));
  };

  onTimerTick = () => {
    const { remainingTime } = this.state;
    if (remainingTime > 0) {
      this.setState(prevState => ({
        remainingTime: prevState.remainingTime - 1,
      }));
      return;
    }

    this.jumpToTheNextQuestion();
  };

  jumpToTheNextQuestion = () => {
    const { numberOfCurrentQuestion, numberOfQuestions } = this.state;
    if (numberOfCurrentQuestion !== numberOfQuestions) {
      this.timer.reset();
      this.setState(prevState => ({
        numberOfCurrentQuestion: prevState.numberOfCurrentQuestion + 1,
        remainingTime:
          prevState.questions[prevState.numberOfCurrentQuestion].timeToSolve,
      }));
      return;
    }

    this.timer.reset();
    this.setState(prevState => ({
      isTestFinished: true,

      // Временно!!!!!!!!!!!!!!!!!!!!!!!!
      // В действительности результаты должны быть отправлены на бекенд, в LS
      // или же редирект на страницу с ревизией результатов
      ...prevState,
      ...prepareForANewTest(prevState),
    }));
  };

  render() {
    const {
      title,
      numberOfCurrentQuestion,
      numberOfQuestions,
      questions,
      remainingTime,
    } = this.state;

    const currQuestion = questions[numberOfCurrentQuestion - 1];

    return (
      <div className={styles.container} ref={this.ref}>
        <div className={styles.timer}>
          <TestTimer currentTime={remainingTime} isPaused={false} />
        </div>
        <div className={styles.question}>
          <div className={styles.title}>
            <TestTitle title={title} />
          </div>
          <div className={styles.progress}>
            <TestProgress
              numberOfCurrentQuestion={numberOfCurrentQuestion}
              numberOfQuestions={numberOfQuestions}
            />
          </div>
          <div className={styles.question}>
            <TestQuestion imgURL={currQuestion.img} text={currQuestion.text} />
          </div>

          <div className={styles.options}>
            <QuestionOptionsGrid
              questionOptions={currQuestion.options}
              onOptionClick={this.handleOptionClick}
            />
          </div>
        </div>
        <div className={styles.controls}>
          <TestControls
            title={
              numberOfCurrentQuestion !== numberOfQuestions
                ? 'Следующий'
                : 'Отправить'
            }
            onClick={this.jumpToTheNextQuestion}
          />
        </div>
      </div>
    );
  }
}

export default TestPage;
