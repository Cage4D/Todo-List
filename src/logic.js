class Project {
  constructor(name) {
    this.name = name;
    this.uid = crypto.randomUUID()
    this.storage = []
  }
}
