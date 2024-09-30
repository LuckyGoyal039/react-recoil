import './App.css'
import CountComponent from './components/countComponent'
import { RecoilRoot } from 'recoil'
function App() {

  return (
    <RecoilRoot>
      <h1>Hello world </h1>
      <CountComponent />
    </RecoilRoot>
  )
}

export default App
