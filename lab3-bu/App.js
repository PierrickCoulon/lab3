import { SwitchNavigator } from 'react-navigation'
import SignUp from './src/SignUp'
import Login from './src/Login'
import Chat from './src/Chat'
const App = SwitchNavigator(
  {
    SignUp,
    Login,
    Chat,
  },
  {
    initialRouteName: 'SignUp'
  }
)
export default App