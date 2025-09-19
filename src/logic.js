class Project {
  constructor(name) {
    this.name = name;
    this.uid = crypto.randomUUID()
    this.storage = []
  }
}
export const colorArray = ["#E30808", "#08EA81", "#0887E3", "#6CBC0C", "#400CBC", "#BCA10C", "#F51400", "#054166", "#0CBC26", "#0C95BC", "#900CBC", "#BC0C0C", "#08EA81"]

export const projects = new Project("TodoList")
projects.storage.push(
  {
    title: "Cleaning",
    tasks: [
      { name: "Wash Dirty Clothes", priority: "high", date: "2025-06-10", id: crypto.randomUUID() },
      { name: "Mop the Floor", priority: "medium", date: "2025-08-12", id: crypto.randomUUID() },
      { name: "Remove Spider Webs", priority: "medium", date: "2025-10-10", id: crypto.randomUUID() },
      { name: "Fold Clothes Neatly", priority: "low", date: "2025-09-20", id: crypto.randomUUID() },
    ],
  },
  // {
  //   title: "Decor",
  //   tasks: [
  //     { name: "Herman Miller Chair", priority: "high", date: "2025-08-16" },
  //     { name: "IKEA Bed", priority: "medium", date: "2025-12-12" },
  //     { name: "Reading Lamp", priority: "medium", date: "2025-11-05" },
  //     { name: "SteelCase Series 1 Chair", priority: "low", date: "2025-08-10" },
  //   ],
  // },
)
