
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";

export default function Landing() {
    return (
        <div className="App">   
            <Header />
            <main>
                <Hero />
                <WhyUs />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}