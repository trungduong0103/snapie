const ColorRed = require('./assets/red.png');
const ColorYellow = require('./assets/yellow.png');
const ColorGreen = require('./assets/green.png');
const ColorBlue = require('./assets/blue.png');
const ColorOrange = require('./assets/orange.png');

import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  PAIR_SELECTION,
  SPELLING_ORDER,
} from '../../../environments/Routes';

export const STAGE_ONE = [
  //first level
  [
    [
      {
        id: 'q1',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-1',
        createdAt: '03-04-2020',
        updatedAt: '03-04-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'black', 'white'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-1',
        createdAt: '08-04-2020',
        updatedAt: '08-04-2020',
        type: FILL_THE_BLANK,
        questionContent: 'This color is',
        possibleAnswersCount: 4,
        answers: ['yellow', 'blue', 'black', 'white'],
        correctAnswer: 'yellow',
        imageAsset: ColorYellow,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell this color',
        possibleAnswersCount: 4,
        answers: ['r', 'o', 'a', 'e', 'n', 'g'],
        correctAnswer: 'orange',
        imageAsset: ColorOrange,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['yellow', 'red', 'green', 'blue'],
        imagesAsset: [
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'red',
            asset: ColorRed,
          },
          {
            name: 'green',
            asset: ColorGreen,
          },
          {
            name: 'blue',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-2',
        createdAt: '03-04-2020',
        updatedAt: '03-04-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'black', 'white'],
        correctAnswer: 'yellow',
        imageAsset: ColorYellow,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-2',
        createdAt: '08-04-2020',
        updatedAt: '08-04-2020',
        type: FILL_THE_BLANK,
        questionContent: 'This color is ',
        possibleAnswersCount: 4,
        answers: ['blue', 'yellow', 'black', 'white'],
        correctAnswer: 'blue',
        imageAsset: ColorBlue,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-2',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell this color',
        possibleAnswersCount: 4,
        answers: ['g', 'e', 'r', 'e', 'n'],
        correctAnswer: 'green',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        level: 'level-1',
        stage: 'stage-1',
        test: 'test-2',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['red', 'green', 'blue', 'yellow'],
        imagesAsset: [
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'red',
            asset: ColorRed,
          },
          {
            name: 'green',
            asset: ColorGreen,
          },
          {
            name: 'blue',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],

  //second level
];
