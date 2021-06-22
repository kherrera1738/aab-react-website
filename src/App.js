import './App.css';
import './aab.css';

import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import CardSection from './Components/CardSection';
import ServicesReviews from './Components/ServicesReviews';

function App() {

  return (
    <div>

      <Navbar />
      <Carousel />
      <CardSection />
      <ServicesReviews />
    </div>
  );
}

export default App;
