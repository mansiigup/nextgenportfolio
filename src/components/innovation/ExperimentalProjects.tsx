import { FlaskConical } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Curator',
    description: 'A prototype tool that uses LLMs to curate and summarize educational content based on learning objectives and student reading levels.',
    status: 'Concept',
    tech: ['Concept'],
    learnings: 'Prompt engineering is crucial—small changes in prompts dramatically affect output quality for educational content.',
  },
  {
    title: 'Product Metrics Dashboard Template',
    description: 'An open-source Looker Studio template for product teams to quickly set up North Star metrics, cohort analysis, and funnel visualization.',
    status: 'Concept',
    tech: ['Concept'],
    learnings: 'Most teams struggle not with building dashboards but knowing which metrics matter—documentation is as important as the template.',
  },
  {
    title: 'Parent Engagement Tracker',
    description: 'A lightweight tool to help EdTech products measure and improve parent engagement in student learning journeys.',
    status: 'Concept',
    tech: ['Concept'],
    learnings: 'Parent engagement is the missing link in EdTech retention—but the solution needs to respect their time constraints.',
  },
];

const ExperimentalProjects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Experimental Projects
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building & Learning
          </h2>
          <p className="text-muted-foreground text-lg">
            Side projects where I explore new technologies, test product hypotheses, and learn by doing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : project.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              <div className="flex items-center gap-2">
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs bg-background border border-border rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="p-3 bg-background rounded-lg border border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Key Learning:</span> {project.learnings}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperimentalProjects;
