import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Compontents/Sidebar'
import Tab from './Compontents/Tab'
import Search from './Compontents/Search'
import Salesinfo from './Compontents/Salesinfo'
import Notify from './Compontents/Notify'
function App() {

  return (
    <>
      <Search/>
      <Salesinfo/>
      <Sidebar/>
      <Tab/>
      <Notify/>
    </>
  )
}

export default App
