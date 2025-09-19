class Project {
  constructor(name) {
    this.name = name;
    this.uid = crypto.randomUUID()
    this.storage = []
  }
}
export const colorArray = ["#E30808", "#08EA81", "#0887E3", "#6CBC0C", "#400CBC", "#BCA10C", "#F51400", "#054166", "#0CBC26", "#0C95BC", "#900CBC", "#BC0C0C", "#08EA81"]

