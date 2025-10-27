import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/shema-profile.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about-me");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 border border-primary rounded-full text-sm text-primary font-medium">
            DATA ANALYST PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold">
            SHEMA <span className="text-primary">FOWAD</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Finding meaning in data, one insight at a time.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-30"></div>
            <img
              src={profileImage}
              alt="Shema Fowad"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20"
            />
          </div>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:scale-110 transition-transform animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
