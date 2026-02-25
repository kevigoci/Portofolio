import { Card } from "@/components/ui/card"
import { Code2, Wrench, Globe, Terminal } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    icon: Globe,
    title: "Web & Frameworks",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Node.js"],
  },
  {
    icon: Terminal,
    title: "Python Ecosystem",
    skills: ["Django", "Flask", "FastAPI", "Pandas", "NumPy", "Selenium", "BeautifulSoup"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Jenkins", "n8n", "PostgreSQL", "REST APIs", "Linux"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
            A comprehensive skillset built through hands-on experience and continuous learning in software development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
