import React, {Component} from 'react';
import {View} from 'react-native';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import DragObject from './DragObject';

const object1 = {
  name: 'object 1',
  origin: {x: 150, y: 500},
  target: {x: 150, y: 150},
  height: 100,
  width: 100,
};
const object2 = {
  name: 'object 2',
  origin: {x: 10, y: 500},
  target: {x: 10, y: 150},
  height: 100,
  width: 100,
};
class DragAndDropQuiz extends Component {
  render() {
    const {quizData} = this.props;
    console.log('render drag&dropQuiz: props data:', quizData);
    return (
      <View>
        <DragObject object={object1} />
        <DragObject object={object2} />
      </View>
    );
  }
}
export default DragAndDropQuiz;
