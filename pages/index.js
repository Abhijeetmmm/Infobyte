import Image from "next/image";
import NavSection from "../components/Navbar/NavSection";
import Hero from "../components/Hero/Hero";
import Product from "../components/Product/Product";
import Collabration from "../components/Collabration/Collabration";
import Security from "../components/Security/Security";
import CardView from "../components/CardView/CardView";
import Counter from "../components/Counter/Counter";
import Footer from "../components/Security/Footer";


export default function Home() {
  return (
    <div className=" ">
      <div className="relative z-50">
        <div className="absolute">
          <NavSection />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          
          <div className="hero-section px-3 bg-gray-100">
            <Hero />
          </div>
          
          <div
            id="productivity"
            className="home-campaign-productivity px-4 pt-8 bg-gray-50 overflow-hidden"
          >
            <Product />
          </div>
          <div
            id="collaboration"
            className="home-campaign-productivity px-4 pt-8 bg-gray-100  overflow-hidden"
          >
            <Collabration/>
          </div>
          <div
            id="security"
            className="home-campaign-productivity px-4 pt-0 pb-16 bg-gray-50 overflow-hidden"
          >
            <Security/>
          </div>
          <div
           id="collaboration"
            className="home-campaign-productivity px-4 pt-0 pb-16 bg-gray-50 overflow-hidden"
          >
            <CardView/>
          </div>
          <div
           id="productivity"
            className="home-campaign-productivity px-4 pt-0 pb-16 bg-gray-50 overflow-hidden"
          >
            <Counter/>
          </div>
        
        </div>
      </div>
      <div className="bg-gray-100 ">
      <Footer/>
      </div>
    </div>
  );
}
