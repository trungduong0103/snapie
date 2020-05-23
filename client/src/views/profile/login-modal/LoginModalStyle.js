import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
//    top: windowHeight / 3,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContainer: {
    justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: windowHeight / 3 - 30,
      width: windowWidth,

  },
  modalView: {
    borderRadius: 16,
    width: '85%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff',
      borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 4,
        borderColor: '#dddddd',
//    shadowOffset: {
//      width: 0,
//      height: 2,
//    },
//    shadowOpacity: 0.25,
//    shadowRadius: 3.84,
//    elevation: 5,
  },
  loginMessage: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    marginBottom: 20,
    color: '#4c4c4c'
  },
  textInput: {
    height: 40,
    borderColor: '#777777',
    borderWidth: 1,
    width: '80%',
    height: '30%',
    marginBottom: 15,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
  },
  actionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  submit: {
    backgroundColor: '#f7ab5f',
    borderTopWidth: 1,
    borderColor: '#f7ab5f',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2.5,
    width: 100,
    height: 40,
    borderRadius: 15,
    borderBottomColor: '#c4804e',
    marginLeft: 15,
    marginTop: 10

  },
  cancel: {
    backgroundColor: '#ffffff',
    marginRight: 15,
    marginTop: 8

  },
  submitText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: '#ffffff',
    marginBottom: 4
  },
  cancelText: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 12,
      color: '#efc458',
    },
  errorText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 10,
    color: '#f47171',
    marginBottom: 15,
  },
  successWrapper: {
    width: 200,
    height: 100,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  success: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
