import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'blue',
    },
    img: {
        marginHorizontal: 10,
        marginVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: '#6902FC',
        // backgroundColor: 'f4f4f4',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',

      },

      header: {
        color: '#6902FC',
        // backgroundColor: 'f4f4f4',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        textShadowColor: 'rgba(105, 2, 252, .5)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10

      },

      new_acc:
      {
          
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:15,
          
      },
})


export default styles;