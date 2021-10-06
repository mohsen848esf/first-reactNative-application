import { Platform } from 'react-native'

import colors from './colors'

export default {
  text: {
    // backgroundColor: 'red',
    width: '100%',
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    textAlign: 'right',
  },
}
