import SeamlessNavigation from './components/navigation/SeamlessNavigation'
import DashboardNavigation from './components/navigation/DashboardNavigation'
import Footer from './components/navigation/Footer'

function App() {
  return (
    <>          
          <div className="body clientHq" id="redesign">
              <main>
                  <header className="global-header">
                      <SeamlessNavigation></SeamlessNavigation>
                      <DashboardNavigation></DashboardNavigation>
                  </header>
                  <div className="clientHq-content">
                      <div className="clientHq-content__main-wrapper">
                          <div className="clientHq-content__main">
                          </div>
                          <div className="clientHq-content__bottom">
                          </div>
                      </div>
                      <div className="clientHq-content__sidebar">
                      </div>
                  </div>
              </main>
              <footer className="footer">
                  <Footer></Footer>
              </footer>
          </div> 
    </>
  )
}

export default App
