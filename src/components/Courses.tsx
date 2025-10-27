import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "SQL for Data Engineering",
      takeaways: [
        "The importance of SQL in data cleaning and analytics for data engineers",
        "Writing SQL queries to retrieve and manipulate data from databases",
        "Implementing JOIN operations to combine data from multiple tables",
        "Understanding the ETL (Extract, Transform, Load) process and its significance",
        "Securing databases by managing users, roles, and permissions",
      ],
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      takeaways: [
        "Gained experience in analyzing client datasets to identify trends, risks, and business opportunities",
        "Applied Excel/SQL techniques to clean, validate, and prepare raw data",
        "Conducted statistical and visual analysis to uncover insights, patterns, and anomalies",
        "Developed client recommendations based on data-driven insights",
      ],
    },
    {
      title: "AI Agents and n8n",
      takeaways: [
        "Understanding automation workflows with n8n",
        "Building AI-powered agents for data processing",
        "Integrating multiple APIs and services",
        "Creating automated data pipelines",
      ],
    },
    {
      title: "SQL from HackerRank",
      takeaways: [
        "Ability to write optimized SQL queries for large datasets",
        "Multi-table joins, subqueries, and nested queries",
        "Proficiency in using window functions (RANK, ROW_NUMBER, LEAD/LAG, etc.)",
        "Advanced analytics directly in SQL",
      ],
    },
    {
      title: "Artificial Intelligence from Accenture",
      takeaways: [
        "Describe the origins and advent of AI",
        "Explain the relationship between AI and Automation",
        "Identify key shifts in the workplace influenced by AI",
        "Assess the impact of AI on roles and responsibilities",
        "Identify future skills required to work and interact with AI",
      ],
    },
  ];

  return (
    <section id="courses" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Courses & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary mb-2">Key Takeaways:</p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  {course.takeaways.map((takeaway, takeawayIndex) => (
                    <li key={takeawayIndex}>{takeaway}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
