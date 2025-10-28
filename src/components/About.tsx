import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about-me" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Hi, I'm <span className="text-primary">Shema!</span>
        </h2>
        <Card className="p-8 bg-card border-border">
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I read data the way some people read stories searching for the plot twists hidden in 
              spreadsheets and dashboards. For me, analytics isn't just about numbers; it's about 
              connecting dots and finding meaning that can guide smarter decisions.
            </p>
            <p>
              I started my career in operations, where balancing machines, orders, and deadlines 
              taught me the value of structure and problem solving. That curiosity eventually pulled 
              me into the world of data SQL became my puzzle board, Power BI my sketchpad, and AI 
              tools my new favorite experiments.
            </p>
            <p>
              Currently building projects that mix analytics with storytelling, and always on the 
              lookout for the next challenge that makes me say: "Oh, this is interesting."
            </p>
          </div>
        </Card>

        <div className="mt-16 space-y-8">
          <h3 className="text-3xl font-bold text-primary">Work Experience</h3>
          
          <Card className="p-6 bg-card border-border">
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground">Operations Manager</h4>
              <p className="text-primary font-medium">Trident Group • Apr 2023 - Feb 2025</p>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Coordinated multiple production orders via ERP systems, ensuring on-time delivery for 95%+ orders</li>
                <li>Streamlined workflows using ERP data insights, contributing to cost savings and optimized resource utilization</li>
                <li>Created ERP-integrated dashboards and weekly performance reports, improving plant productivity by 10%</li>
                <li>Coordinated cross-functional projects to optimize workflows and drive measurable improvements</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground">Management Trainee</h4>
              <p className="text-primary font-medium">Vardhman • Aug 2022 - Mar 2023</p>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Collected and analyzed production data to identify trends and inefficiencies</li>
                <li>Collaborated with teams to implement data-driven changes, reducing process variability</li>
                <li>Assisted in reporting and documentation to support operational decision-making</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-primary mb-6">Education</h3>
          <Card className="p-6 bg-card border-border">
            <h4 className="text-xl font-bold text-foreground">
              DR BR AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY (NIT), JALANDHAR
            </h4>
            <p className="text-primary font-medium mt-2">2018 - 2022</p>
            <p className="text-muted-foreground mt-2">Bachelor of Technology</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
