import React, { useState } from "react";

import styles from "./askedQuestions.module.scss";

const AskedQuestions = () => {
  const [openAnswer, setOpenAnswer] = useState("");
  return (
    <div className={styles.questionPage}>
      <div className="container">
        <h3>Tez-tez verilən suallar</h3>
        <div
          className={`${styles.question} ${
            openAnswer == "question1" && styles.active
          }`}
          onClick={(e) => {
            setOpenAnswer(openAnswer == "question1" ? "" : "question1");
          }}
        >
          <div className={styles.questionHeader}>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices
              phasellus massa lectus tellus sem?{" "}
            </h5>
            <svg
              className={openAnswer == "question1" && styles.active}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed
            at nunc viverra fermentum diam aliquam. Placerat urna, varius
            vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum
            amet, amet. Nisi, id magnis tellus ut.
            ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans
          </p>
        </div>
        <div
          className={`${styles.question} ${
            openAnswer == "question2" && styles.active
          }`}
          onClick={(e) => {
            setOpenAnswer(openAnswer == "question2" ? "" : "question2");
          }}
        >
          <div className={styles.questionHeader}>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices
              phasellus massa lectus tellus sem?{" "}
            </h5>
            <svg
              className={openAnswer == "question2" && styles.active}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed
            at nunc viverra fermentum diam aliquam. Placerat urna, varius
            vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum
            amet, amet. Nisi, id magnis tellus ut.
            ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans
          </p>
        </div>
        <div
          className={`${styles.question} ${
            openAnswer == "question3" && styles.active
          }`}
          onClick={(e) => {
            setOpenAnswer(openAnswer == "question3" ? "" : "question3");
          }}
        >
          <div className={styles.questionHeader}>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices
              phasellus massa lectus tellus sem?{" "}
            </h5>
            <svg
              className={openAnswer == "question3" && styles.active}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed
            at nunc viverra fermentum diam aliquam. Placerat urna, varius
            vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum
            amet, amet. Nisi, id magnis tellus ut.
            ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans
          </p>
        </div>
        <div
          className={`${styles.question} ${
            openAnswer == "question4" && styles.active
          }`}
          onClick={(e) => {
            setOpenAnswer(openAnswer == "question4" ? "" : "question4");
          }}
        >
          <div className={styles.questionHeader}>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices
              phasellus massa lectus tellus sem?{" "}
            </h5>
            <svg
              className={openAnswer == "question4" && styles.active}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed
            at nunc viverra fermentum diam aliquam. Placerat urna, varius
            vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum
            amet, amet. Nisi, id magnis tellus ut.
            ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans
          </p>
        </div>
        <div
          className={`${styles.question} ${
            openAnswer == "question5" && styles.active
          }`}
          onClick={(e) => {
            setOpenAnswer(openAnswer == "question5" ? "" : "question5");
          }}
        >
          <div className={styles.questionHeader}>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices
              phasellus massa lectus tellus sem?{" "}
            </h5>
            <svg
              className={openAnswer == "question5" && styles.active}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed
            at nunc viverra fermentum diam aliquam. Placerat urna, varius
            vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum
            amet, amet. Nisi, id magnis tellus ut.
            ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans
          </p>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;
