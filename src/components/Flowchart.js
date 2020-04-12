import React, { useState } from "react";
import "../css/Flowchart.css";

const ATTRIBUTE = {
  DOCUMENTATION: {
    name: "documentation",
    weight: 0.45
  },
  LEARNING_CURVE: {
    name: "learning_curve",
    weight: 0.5
  },
  RESTRICTIONS: {
    name: "restrictions",
    weight: 0.35
  },
  GITHUB: {
    name: "github",
    weight: 0.7
  },
  STACKOVERFLOW: {
    name: "stackoverflow",
    weight: 0.85
  },
  TUTORIALS: {
    name: "tutorials",
    weight: 0.95
  },
  PERFORMANCE_TTI: {
    name: "performance_tti",
    weight: 0.2
  }
};

const FRAMEWORK = {
  REACT: "react",
  VUE: "vue",
  EMBER: "ember",
  ANGULAR: "angular"
};

const frameworks = [
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

const questions = [
  {
    questionText:
      "Does your project require a lot of in-depth looks into documentation of a framework?",
    answers: [
      {
        text: "No, not at all. I will never check the documentation.",
        value: 0
      },
      { text: "I'm not sure, maybe.", value: 33 },
      { text: "Yes, I need so check the documentation sometimes.", value: 66 },
      {
        text: "Yes, I will need to see the documentation thoroughly.",
        value: 99
      }
    ],
    attribute: ATTRIBUTE.DOCUMENTATION
  },
  {
    questionText: "learning curve?",
    answers: [
      { text: "first quartile", value: 25 },
      { text: "second quartile", value: 50 },
      { text: "third quartile", value: 75 },
      { text: "fourth quartile", value: 100 }
    ],
    attribute: ATTRIBUTE.LEARNING_CURVE
  },
  {
    questionText: "restrictions?",
    answers: [
      { text: "first quartile", value: 25 },
      { text: "second quartile", value: 50 },
      { text: "third quartile", value: 75 }
    ],
    attribute: ATTRIBUTE.RESTRICTIONS
  },
  {
    questionText: "github stars?",
    answers: [
      { text: "first quartile", value: 25 },
      { text: "second quartile", value: 50 },
      { text: "third quartile", value: 75 },
      { text: "fourth quartile", value: 100 }
    ],
    attribute: ATTRIBUTE.GITHUB
  },
  {
    questionText: "stackoverflow stars?",
    answers: [
      { text: "first quartile", value: 25 },
      { text: "second quartile", value: 50 },
      { text: "third quartile", value: 75 },
      { text: "fourth quartile", value: 100 }
    ],
    attribute: ATTRIBUTE.STACKOVERFLOW
  },
  {
    questionText: "tutorials?",
    answers: [
      { text: "first quartile", value: 25 },
      { text: "second quartile", value: 50 },
      { text: "third quartile", value: 75 },
      { text: "fourth quartile", value: 100 }
    ],
    attribute: ATTRIBUTE.TUTORIALS
  },
  {
    questionText: "performance tti?",
    answers: [
      { text: "first quartile", value: 25 },
      { text: "second quartile", value: 50 },
      { text: "third quartile", value: 75 },
      { text: "fourth quartile", value: 100 }
    ],
    attribute: ATTRIBUTE.PERFORMANCE_TTI
  }
];

export default function Flowchart() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFlowComplete, setIsFlowComplete] = useState(false);
  const [frameworkScores, setFrameworkScores] = useState([]);
  const currentQuestionData = questions[questionIndex];
  const selectAnswer = value => {
    setAnswers([
      ...answers,
      { attribute: currentQuestionData.attribute, value }
    ]);
    const isLastQuestion = questionIndex === questions.length - 1;
    if (isLastQuestion) {
      setIsFlowComplete(true);
      const scoreArray = [];
      for (const framework of frameworks) {
        let score = 0;
        for (const answer of answers) {
          let answerScore = 0;
          const answerValue = answer.value;
          const frameworkValue = framework.attributeValues.find(
            attributeValue =>
              attributeValue.attribute.name === answer.attribute.name
          ).value;
          const deviation = frameworkValue - answerValue;
          const absoluteDeviation = Math.abs(deviation);
          if (deviation < 0) {
            for (let i = 0; i < absoluteDeviation; i++) {
              answerScore -= 1 / (absoluteDeviation - i + 5);
            }
          } else {
            for (let i = 0; i < absoluteDeviation; i++) {
              answerScore += 1 / (i + 5);
            }
          }
          answerScore *= answer.attribute.weight;
          score += answerScore;
        }
        scoreArray.push({ framework, score });
      }
      scoreArray.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });
      setFrameworkScores(scoreArray);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };
  console.log(frameworkScores);
  if (isFlowComplete) {
    return (
      <div className="page-container">
        <div className="page-results">
          <h2>
            These are the top 2 front-end frameworks that are recommended based
            on your answers.
          </h2>
          <div className="page-rec1">
            <a href={"/frameworks/" + frameworkScores[0].framework.link}>
              {frameworkScores[0].framework.name}
            </a>
          </div>
          <div className="page-rec2">
            <a href={"/frameworks/" + frameworkScores[1].framework.link}>
              {frameworkScores[1].framework.name}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-flow">
        <h1>Attribute based recommendation</h1>
        <hr />
        <div className="page-recommendation">
          <div className="page-question">
            <h3>{currentQuestionData.questionText}</h3>
          </div>
          <div className="page-answers">
            {currentQuestionData.answers.map((answer, i) => (
              <div key={i} className="page-answer">
                <a
                  onClick={() => {
                    selectAnswer(answer.value);
                  }}
                >
                  {answer.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
