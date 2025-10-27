import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sales Analysis Dashboard",
      description: "Conducted end-to-end sales data analysis to identify performance trends, top-selling products, and regional patterns. Created interactive Power BI dashboards to visualize KPIs like revenue growth, profit margins, and product-wise sales.",
      process: [
        "Data Cleaning & Preparation using Python (Pandas)",
        "Exploratory Analysis to identify patterns",
        "Built interactive Power BI dashboard with bar charts, line charts, KPI cards, and pie charts",
      ],
      outcome: "Enabled quick identification of top-selling categories, revenue-generating regions, and trends over time, supporting data-driven business decisions.",
      tools: ["Python", "Pandas", "Power BI"],
    },
    {
      id: 2,
      title: "Social Network Ads Dashboard",
      description: "Analyzed user behavior and purchase patterns in response to social network advertisements, capturing age, estimated salary, gender, and purchase decisions.",
      process: [
        "Data cleaning to ensure consistency in age, salary, and purchase records",
        "Exploratory data analysis to identify trends based on age, salary, and gender",
        "Created interactive dashboard with KPIs, pie charts, bar charts, and scatter plots",
      ],
      outcome: "Users who purchased tend to have slightly higher estimated salaries. Purchase behavior is fairly balanced across genders. Middle-aged users (30-40 years) show higher purchase concentration.",
      tools: ["Power BI", "Python", "Data Analysis"],
    },
    {
      id: 3,
      title: "E-commerce Sales Pipeline",
      description: "Building an automated pipeline using n8n to collect and organize sales data from e-commerce platforms (Shopify, WooCommerce, Stripe) for revenue tracking and product performance monitoring.",
      process: [
        "Automating daily collection of sales metrics",
        "Data transformation, cleaning, and standardization",
        "Storing data in Google Sheets/Airtable and PostgreSQL",
        "Setting up dashboards in Power BI for revenue trends and product analysis",
      ],
      outcome: "Work in progress - creating a fully automated data pipeline for real-time e-commerce analytics.",
      tools: ["n8n", "PostgreSQL", "Power BI", "APIs"],
      status: "In Progress",
    },
    {
      id: 4,
      title: "Telecom Customer Churn Analysis",
      description: "End-to-end analysis of over 7,000 telecom customers to understand churn patterns and identify key factors influencing customer attrition.",
      process: [
        "Used SQL (SQLite) to query and analyze customer dataset",
        "Analyzed churn rates, service preferences, and pricing factors",
        "Identified high-risk customer profiles based on contract types and services",
      ],
      outcome: "Found 26.5% churn rate with month-to-month contracts and fiber optic users showing highest churn. Recommended targeted retention campaigns and pricing strategy improvements.",
      tools: ["SQL", "SQLite", "Data Analysis"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Notable <span className="text-primary">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {String(project.id).padStart(2, "0")} {project.title}
                    </h3>
                    {project.status && (
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="border-primary text-primary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Process & Approach:</h4>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                    {project.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-lg font-semibold text-primary mb-2">Outcome:</h4>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
