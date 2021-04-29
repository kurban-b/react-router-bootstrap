import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <div className="wrap container w-50">
          <div className="row h-100">
              <div className="col-12">
                  <Header />
              </div>
              <div className="col-12">
                  <Main />
              </div>
              <div className="col-12">
                  <Footer />
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
