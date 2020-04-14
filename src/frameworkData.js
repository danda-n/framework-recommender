export const ATTRIBUTE = {
  DOCUMENTATION: {
    name: "documentation",
    weight: 0.45,
    humanReadableName: "I find high level of documentation important."
  },
  LEARNING_CURVE: {
    name: "learning_curve",
    weight: 0.6,
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
    weight: 0.5,
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
    weight: 1.0,
    humanReadableName:
      "The 'Time to Interactive' merit in performance is essential for me."
  }
};

export const FRAMEWORK = {
  REACT: "react",
  VUE: "vue",
  EMBER: "ember",
  ANGULAR: "angular",
  SVELTE: "svelte",
  KNOCKOUT: "knockout"
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
  },
  {
    name: FRAMEWORK.SVELTE,
    link: "Svelte",
    attributeValues: [
      {
        attribute: ATTRIBUTE.DOCUMENTATION,
        value: 90
      },
      {
        attribute: ATTRIBUTE.LEARNING_CURVE,
        value: 70
      },
      {
        attribute: ATTRIBUTE.RESTRICTIONS,
        value: 65
      },
      {
        attribute: ATTRIBUTE.GITHUB,
        value: 20
      },
      {
        attribute: ATTRIBUTE.STACKOVERFLOW,
        value: 0.34
      },
      {
        attribute: ATTRIBUTE.TUTORIALS,
        value: 95
      },
      {
        attribute: ATTRIBUTE.PERFORMANCE_TTI,
        value: 200
      }
    ]
  },
  {
    name: FRAMEWORK.KNOCKOUT,
    link: "Knockout",
    attributeValues: [
      {
        attribute: ATTRIBUTE.DOCUMENTATION,
        value: 95
      },
      {
        attribute: ATTRIBUTE.LEARNING_CURVE,
        value: 85
      },
      {
        attribute: ATTRIBUTE.RESTRICTIONS,
        value: 50
      },
      {
        attribute: ATTRIBUTE.GITHUB,
        value: 6
      },
      {
        attribute: ATTRIBUTE.STACKOVERFLOW,
        value: 10
      },
      {
        attribute: ATTRIBUTE.TUTORIALS,
        value: 90
      },
      {
        attribute: ATTRIBUTE.PERFORMANCE_TTI,
        value: 100
      }
    ]
  }
];
