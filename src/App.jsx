import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const App = () => {
  return (
    <ErrorBoundary fallback={<div className="text-white text-center mt-20">Something went wrong. Please refresh.</div>}>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  );
};

export default App;
