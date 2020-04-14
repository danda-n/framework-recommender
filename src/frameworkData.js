export const ATTRIBUTE = {
  DOCUMENTATION: {
    name: "documentation",
    weight: 0.45,
    humanReadableName: "I find high level of documentation important."
  },
  LEARNING_CURVE: {
    name: "learning_curve",
    weight: 0.5,
    humanReadableName: "I like to try a challenge in terms of learning."
  },
  RESTRICTIONS: {
    name: "restrictions",
    weight: 0.35,
    humanReadableName:
      "I prefer to do things my way and not be restricted by constraints."
  },
  GITHUB: {
    name: "github",
    weight: 0.7,
    humanReadableName: "I am passionate about GitHub standing of framework."
  },
  STACKOVERFLOW: {
    name: "stackoverflow",
    weight: 0.85,
    humanReadableName:
      "It is important to me that the framework has large StackOverflow backing."
  },
  TUTORIALS: {
    name: "tutorials",
    weight: 0.95,
    humanReadableName:
      "I want to have a substantial amount of tutorials and alternatives."
  },
  PERFORMANCE_TTI: {
    name: "performance_tti",
    weight: 0.2,
    humanReadableName:
      "The 'Time to Interactive' merit in performance is essential for me."
  }
};

export const FRAMEWORK = {
  REACT: "react",
  VUE: "vue",
  EMBER: "ember",
  ANGULAR: "angular"
};

export const frameworks = [
  {
    name: FRAMEWORK.REACT,
    link: "React",
    attributeValues: [
      {
        attribute: ATTRIBUTE.DOCUMENTATION,
        value: 90
      },
      {
        attribute: ATTRIBUTE.LEARNING_CURVE,
        value: 60
      },
      {
        attribute: ATTRIBUTE.RESTRICTIONS,
        value: 60
      },
      {
        attribute: ATTRIBUTE.GITHUB,
        value: 91
      },
      {
        attribute: ATTRIBUTE.STACKOVERFLOW,
        value: 95
      },
      {
        attribute: ATTRIBUTE.TUTORIALS,
        value: 100
      },
      {
        attribute: ATTRIBUTE.PERFORMANCE_TTI,
        value: 91
      }
    ]
  },
  {
    name: FRAMEWORK.VUE,
    link: "VueJS",
    attributeValues: [
      {
        attribute: ATTRIBUTE.DOCUMENTATION,
        value: 100
      },
      {
        attribute: ATTRIBUTE.LEARNING_CURVE,
        value: 75
      },
      {
        attribute: ATTRIBUTE.RESTRICTIONS,
        value: 70
      },
      {
        attribute: ATTRIBUTE.GITHUB,
        value: 100
      },
      {
        attribute: ATTRIBUTE.STACKOVERFLOW,
        value: 37
      },
      {
        attribute: ATTRIBUTE.TUTORIALS,
        value: 100
      },
      {
        attribute: ATTRIBUTE.PERFORMANCE_TTI,
        value: 100
      }
    ]
  },
  {
    name: FRAMEWORK.EMBER,
    link: "Ember",
    attributeValues: [
      {
        attribute: ATTRIBUTE.DOCUMENTATION,
        value: 85
      },
      {
        attribute: ATTRIBUTE.LEARNING_CURVE,
        value: 65
      },
      {
        attribute: ATTRIBUTE.RESTRICTIONS,
        value: 90
      },
      {
        attribute: ATTRIBUTE.GITHUB,
        value: 13
      },
      {
        attribute: ATTRIBUTE.STACKOVERFLOW,
        value: 11
      },
      {
        attribute: ATTRIBUTE.TUTORIALS,
        value: 65
      },
      {
        attribute: ATTRIBUTE.PERFORMANCE_TTI,
        value: 44
      }
    ]
  },
  {
    name: FRAMEWORK.ANGULAR,
    link: "Angular",
    attributeValues: [
      {
        attribute: ATTRIBUTE.DOCUMENTATION,
        value: 100
      },
      {
        attribute: ATTRIBUTE.LEARNING_CURVE,
        value: 10
      },
      {
        attribute: ATTRIBUTE.RESTRICTIONS,
        value: 80
      },
      {
        attribute: ATTRIBUTE.GITHUB,
        value: 37
      },
      {
        attribute: ATTRIBUTE.STACKOVERFLOW,
        value: 100
      },
      {
        attribute: ATTRIBUTE.TUTORIALS,
        value: 100
      },
      {
        attribute: ATTRIBUTE.PERFORMANCE_TTI,
        value: 69
      }
    ]
  }
];
