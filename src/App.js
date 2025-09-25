import "./App.css";
import About from "./components/About";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Membership from "./components/Membership";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import TestimonialSlider from "./components/TestimonialSlider";

function App() {
  return (
    <div className="App">
      <Navbar />

    
      <section className="hero">
        <div className="hero-text">
          <h1>BE’NTE SEB ASSOCIATION</h1>
          <p>
            Student-led healthcare support organization dedicated to improving
            patient care and community wellness at Black Lion Specialized
            Hospital, Ethiopia
          </p>
        </div>
        <div className="hero-img">
          <img src="/images/image1.png" alt="Hero" />
        </div>
      </section>

     <section className="numbers">
  <Counter />
</section>


      <About />
      <Programs />
      <Membership />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}

export default App;
