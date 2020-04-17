import React, { useState, useRef } from "react";
import { ATTRIBUTE, frameworks } from "../frameworkData";
import shuffle from "lodash.shuffle";

const xD = [
  [1, 2, 3],
  [1, 2, 4],
  [1, 2, 5],
  [1, 2, 6],
  [1, 2, 7],
  [1, 3, 4],
  [1, 3, 5],
  [1, 3, 6],
  [1, 3, 7],
  [1, 4, 5],
  [1, 4, 6],
  [1, 4, 7],
  [1, 5, 6],
  [1, 5, 7],
  [1, 6, 7],
  [2, 3, 4],
  [2, 3, 5],
  [2, 3, 6],
  [2, 3, 7],
  [2, 4, 5],
  [2, 4, 6],
  [2, 4, 7],
  [2, 5, 6],
  [2, 5, 7],
  [2, 6, 7],
  [3, 4, 5],
  [3, 4, 6],
  [3, 4, 7],
  [3, 5, 6],
  [3, 5, 7],
  [3, 6, 7],
  [4, 5, 6],
  [4, 5, 7],
  [4, 6, 7],
  [5, 6, 7]
];

const generateQuestions = () => {
  const attributeNames = Object.keys(ATTRIBUTE).map(key => ATTRIBUTE[key].name);
  const combinations = xD.map(combination =>
    shuffle(combination.map(index => attributeNames[index - 1]))
  );
  return shuffle(combinations);
};

const questions = generateQuestions();

export default function Papi({ shouldApplyWeight }) {
  const [leastWantedIndex, setLeastWantedIndex] = useState(null);
  const [mostWantedIndex, setMostWantedIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [frameworkScores, setFrameworkScores] = useState([]);
  const [isFlowComplete, setIsFlowComplete] = useState(false);
  const currentQuestionData = questions[currentQuestionIndex];
  const result = useRef(
    Object.keys(ATTRIBUTE).map(key => ({
      name: ATTRIBUTE[key].name,
      score: 15
    }))
  );

  const calculateResults = () => {
    const scoreArray = [];
    for (const framework of frameworks) {
      let score = 0;
      for (const attributeData of result.current) {
        let attributeScore = 0;
        const answerValue = attributeData.score * 3.33;
        const frameworkValue = framework.attributeValues.find(
          attributeValue => attributeValue.attribute.name === attributeData.name
        ).value;
        const deviation = frameworkValue - answerValue;
        const absoluteDeviation = Math.abs(deviation);
        if (deviation < 0) {
          for (let i = 0; i < absoluteDeviation; i++) {
            attributeScore -= 1 / (absoluteDeviation - i + 5);
          }
        } else {
          for (let i = 0; i < absoluteDeviation; i++) {
            attributeScore += 1 / (i + 5);
          }
        }
        if (shouldApplyWeight) {
          attributeScore *= Object.keys(ATTRIBUTE)
            .map(key => ATTRIBUTE[key])
            .find(d => d.name === attributeData.name).weight;
        }
        score += attributeScore;
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
  };

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
        <h1>
          {shouldApplyWeight
            ? "Variation of PAPI based and attribute-weight based recommendation"
            : "PAPI testing based recommendation"}
        </h1>
        <hr />
        <div className="page-recommendation">
          <div className="page-question">
            <h3>
              Please choose which statement you value the most and the least. (
              {currentQuestionIndex + 1}/{questions.length})
            </h3>
          </div>
          <div className="page-answers">
            {currentQuestionData.map((attributeName, i) => (
              <div key={i} className="page-answer">
                <div onClick={() => {}}>
                  {
                    Object.keys(ATTRIBUTE)
                      .map(key => ATTRIBUTE[key])
                      .find(d => d.name === attributeName).humanReadableName
                  }
                </div>
                <button
                  className={leastWantedIndex === i ? "active" : ""}
                  onClick={() => {
                    if (mostWantedIndex === i) {
                      setMostWantedIndex(leastWantedIndex);
                    }
                    setLeastWantedIndex(i);
                  }}
                >
                  Least
                </button>
                <button
                  className={mostWantedIndex === i ? "active" : ""}
                  onClick={() => {
                    if (leastWantedIndex === i) {
                      setLeastWantedIndex(mostWantedIndex);
                    }
                    setMostWantedIndex(i);
                  }}
                >
                  Most
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          disabled={leastWantedIndex === null || mostWantedIndex === null}
          onClick={() => {
            result.current.find(
              attributeData =>
                attributeData.name === currentQuestionData[leastWantedIndex]
            ).score--;
            result.current.find(
              attributeData =>
                attributeData.name === currentQuestionData[mostWantedIndex]
            ).score++;
            if (currentQuestionIndex === questions.length - 1) {
              setIsFlowComplete(true);
              calculateResults();
            } else {
              calculateResults();
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setLeastWantedIndex(null);
              setMostWantedIndex(null);
            }
          }}
        >
          Proceed
        </button>
        {frameworkScores.map(frameworkScore => (
          <div>
            {`${frameworkScore.framework.name}: ${frameworkScore.score}`}
          </div>
        ))}
      </div>
    </div>
  );
}
