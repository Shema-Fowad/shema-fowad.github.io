import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let's <span className="text-primary">Connect!</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you'd like to connect or collaborate, feel free to reach out. Always open to 
          interesting projects and opportunities!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all"
            asChild
          >
            <a href="mailto:shemafowad.sf@gmail.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/shemafowad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Shema Fowad. Built with passion for data and insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
