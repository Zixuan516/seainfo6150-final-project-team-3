import React from "react";
import styles from "./NewsDetails.module.css";
import Data from "../../data/NewsData.json";

const News6 = () => {
  return (
      <div className={styles.container}>
      <header>{Data.NewsItemData.f.head}</header>
          <ul className={styles.newsDetailsul}>
             <li>
                <img className={styles.newsImage} src= {Data.NewsItemData.f.url} alt={"dogf"} />
                </li>
                   <li>
                <p>{Data.NewsItemData.f.para}</p>
             </li>
          </ul>
      </div>


  );
};

export default News6;