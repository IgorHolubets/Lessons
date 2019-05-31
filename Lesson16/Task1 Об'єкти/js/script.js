var skill = {
  name: "html",
  level: 5,
  fullName: function() {
      return this.name + " - " + this.level;
  }
};
console.log(skill.fullName());