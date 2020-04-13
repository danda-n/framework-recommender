import React, { useState, useRef } from "react";
import { ATTRIBUTE, frameworks } from "../frameworkData";

const generateQuestions = () => {
  let bestQuestionSet = [];
  for (let j = 0; j < 100; j++) {
    const questions = [];
    const attributePool = Object.keys(ATTRIBUTE).map(key => ({
      name: ATTRIBUTE[key].name,
      remaining: 7
    }));
    let isDone = false;
    while (!isDone) {
      const includedAttrributeNames = [];
      for (let i = 0; i < 3; i++) {
        const remainingAttributes = attributePool.filter(
          attributeData =>
            attributeData.remaining > 0 &&
            !includedAttrributeNames.includes(attributeData.name)
        );
        if (!remainingAttributes.length) {
          isDone = true;
          break;
        }
        const index = Math.floor(Math.random() * remainingAttributes.length);
        const attribute = remainingAttributes[index];
        attribute.remaining--;
        includedAttrributeNames.push(attribute.name);
      }
      if (includedAttrributeNames.length !== 3) break;
      if (
        questions.some(question =>
          question.every(name => includedAttrributeNames.includes(name))
        )
      )
        continue;
      questions.push(includedAttrributeNames);
    }
    if (questions.length > bestQuestionSet.length) {
      bestQuestionSet = questions;
    }
  }
  return bestQuestionSet;
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
      score: 7
    }))
  );

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
            ? "The Final Solution"
            : "Attribute based recommendation"}
        </h1>
        <hr />
        <div className="page-recommendation">
          <div className="page-question">
            <h3>What u want most or least</h3>
          </div>
          <div className="page-answers">
            {currentQuestionData.map((attributeName, i) => (
              <div key={i} className="page-answer">
                <div onClick={() => {}}>{attributeName}</div>
                <button
                  className={leastWantedIndex === i ? "active" : ""}
                  onClick={() => {
                    if (mostWantedIndex === i) {
                      setMostWantedIndex(leastWantedIndex);
                    }
                    setLeastWantedIndex(i);
                  }}
                >
                  least
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
                  most
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
              const scoreArray = [];
              for (const framework of frameworks) {
                let score = 0;
                for (const attributeData of result.current) {
                  let answerScore = 0;
                  const answerValue = attributeData.score * 10;
                  const frameworkValue = framework.attributeValues.find(
                    attributeValue =>
                      attributeValue.attribute.name === attributeData.name
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
                  if (shouldApplyWeight) {
                    answerScore *= Object.keys(ATTRIBUTE)
                      .map(key => ATTRIBUTE[key])
                      .find(d => d.name === attributeData.name).weight;
                  }
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
              console.log(scoreArray);
              setFrameworkScores(scoreArray);
            } else {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setLeastWantedIndex(null);
              setMostWantedIndex(null);
            }
          }}
        >
          proceed
        </button>
      </div>
    </div>
  );
}
