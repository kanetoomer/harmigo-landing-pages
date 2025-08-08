import Hero from "../components/Hero";
import Pricing from "../components/Pricing";    
import Header from "../components/Header";
import PrimaryFeatures from "../components/PrimaryFeatures";
import SecondaryFeatures from "../components/SecondaryFeatures";
import CallToAction from "../components/CallToAction";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

export default function Landing() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <PrimaryFeatures />
                <SecondaryFeatures />
                <CallToAction />
                <Pricing />
                <Faqs />
            </main>
            <Footer />
        </div>
    );
}