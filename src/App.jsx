import './App.css'
import './styles.css'
import './fonts/GalanoGrotesqueRegular.otf'
import './fonts/GalanoGrotesqueMedium.otf'
import './fonts/GalanoGrotesqueBold.otf'
import './fonts/GalanoGrotesqueExtraBold.otf'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import FilterBar from './components/filterBar/FilterBar'
import Content from './components/content/Content'
function App() {
  return (
    <>
      <div className='container'>
        <header>
          <Header />
          <Navbar />
          <FilterBar />
        </header>
        <main>
          <Content />
        </main>
      </div>
    </>
  )
}

export default App
