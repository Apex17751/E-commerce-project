
import Header  from './Component/Header';
import Nav  from './Component/Navigation';
import Navigation from './Component/Navigation';
import Text from './Component/TextField';
import Cars from './Component/Carousel';
import Carousel from './Component/Carousel';
import About from './Component/About';
import Counters from './Component/CounterText'
import Blogs from './Component/Blog'
import Products from './Component/Products'
import Gettouch from './Component/Get'
import Affiliations from './Component/Affiliate'
import Newsletter from './Component/Newsletter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
  



<Text />
  <Carousel />
  <About />
  <Counters />
  <Blogs />
  <Products />
  <Gettouch />
  
  <Affiliations />
  <Newsletter />
      </header>
    </div>
  );
}

export default App;
