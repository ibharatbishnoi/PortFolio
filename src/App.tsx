import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          {/* <Feature />                 This is the services bar and I can add this section later when I provide service to the customers. */}
          <Projects />
          <Resume />
          {/* <Testimonial />                 This is the Testimonial bar and I can add this section later when I get reviews from the customers. */}
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
