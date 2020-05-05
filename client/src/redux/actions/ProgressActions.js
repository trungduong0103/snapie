import {
  COMPLETED_A_LEVEL,
  COMPLETED_A_QUESTION,
  COMPLETED_A_REPLAY_QUESTION,
  COMPLETED_A_STAGE,
  COMPLETED_A_TEST,
  PLAY,
  REPLAY,
  STOP,
} from '../types';
import {getTestsQuestionsLength} from '../../helpers/QuestionHelper';
import {setLocalQuestions} from './QuestionsContentActions';

export function play(stage, level, test) {
  return function(dispatch) {
    dispatch(
      setLocalQuestions({
        stage: stage,
        level: level,
        test: test,
      }),
    );
    dispatch({type: PLAY});
  };
}

export function replay(stage, level, test) {
  return function(dispatch) {
    dispatch(
      setLocalQuestions({
        stage: stage,
        level: level,
        test: test,
      }),
    );
    dispatch({type: REPLAY, payload: {stage: stage, level: level, test: test}});
  };
}

export function stop() {
  return function(dispatch) {
    dispatch({type: STOP});
  };
}

export function questionCompleted(stage, level, test, question, doneReplay) {
  return function(dispatch) {
    if (doneReplay) {
      if (question === getTestsQuestionsLength(stage, level, test) - 1) {
        dispatch(stop());
      } else {
        dispatch({type: COMPLETED_A_REPLAY_QUESTION});
      }
    } else {
      if (question === getTestsQuestionsLength(stage, level, test) - 1) {
        if (test < 2) {
          dispatch(testCompleted());
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: level,
              test: test + 1,
            }),
          );
        } else if (test === 2) {
          dispatch(levelCompleted());
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: level + 1,
              test: 0,
            }),
          );
        } else if (level === 3) {
          dispatch(stageCompleted());
          dispatch(
            setLocalQuestions({
              stage: stage,
              level: 0,
              test: 0,
            }),
          );
        }
      } else {
        console.log('this got invoked');
        dispatch({type: COMPLETED_A_QUESTION});
      }
    }
  };
}

export function testCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_TEST});
  };
}

export function levelCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_LEVEL});
  };
}

export function stageCompleted() {
  return function(dispatch) {
    dispatch({type: COMPLETED_A_STAGE});
  };
}
