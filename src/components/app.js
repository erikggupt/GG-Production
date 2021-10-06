import { Router } from 'preact-router'

import Cinema from '../routes/cinema/index'
import Home from '../routes/home/index'
import Prices from '../routes/prices/index'
import Wedding from '../routes/wedding/index'
import ReserveNow from '../routes/reserve-now/index'
import '../routes/style.css'

const App = () => {
  return (
    <Router>
      <Cinema path="/cinema" />
      <Home path="/" />
      <Prices path="/prices" />
      <Wedding path="/wedding" />
      <ReserveNow path="/reserve-now" />
    </Router>
  )
}

export default App
