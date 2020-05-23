import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff'
  },
  exitWrapper: {
        position: 'absolute',
        top: 40,
        left: 20,
      },
      exit: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
      },
  mediaWrapper: {
    flex: 4,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#dddddd',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  questionWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  questionContent: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    color: '#4c4c4c',
    marginBottom: 20,
    textAlign: 'center',

  },
  answersWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  answer: {
    marginTop: 20,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: "#dddddd",
    backgroundColor: '#fff',
    padding: 6,
    marginBottom: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    marginRight: 12,
  },
  notChosenAnswer: {
     borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#dddddd',
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
  },
  chosenAnswer: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#efc458',
  },
  answerTitle: {
    fontSize: 18,
       fontWeight: '600',
       fontFamily: 'Quicksand-Medium',
       color: '#4c4c4c',
    marginBottom: 5,
  },
   chosenAnswerTitle: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: 'Quicksand-Medium',
      marginBottom: 7,
      color: '#efc458'
    },
  confirmButtonWrapper: {
    position: 'absolute',
    bottom: 45,
  },
    confirmButton: {
  //    borderBottomWidth: 4,
  //    shadowOffset: {
  //      width: 0,
  //      height: 2,
  //    },
  //    shadowOpacity: 0.23,
  //    shadowRadius: 2.62,
  //    elevation: 4,
  //    paddingTop: 13,
  //    paddingBottom: 13,
  //    paddingRight: 16,
  //    paddingLeft: 16,

      width: windowWidth - 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 16,
    },
    confirmAnswer: {
    height: 52,
  //    borderBottomColor: 'rgba(120,114,120,0.64)',
      borderTopWidth: 1,
      borderColor: '#f7ab5f',
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderBottomWidth: 5,
          borderBottomColor: '#c4804e',
      backgroundColor: '#f7ab5f',

    },
    disabledConfirm: {

  //    borderBottomColor: 'rgba(120,114,120,0.64)',
      backgroundColor: '#cfcfcf',

    },
    confirmTitle: {
      fontSize: 18,
      color: '#ffffff',
      letterSpacing: 0.8,
      fontFamily: 'Quicksand-Bold',
      marginBottom: 3

    },
    disabledConfirmTitle: {
      fontSize: 18,
      color: '#777777',
      letterSpacing: 0.8,
      fontFamily: 'Quicksand-Bold',
      marginBottom: 5
    }
});
