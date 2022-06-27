import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Design",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        sequi ipsam eius cumque non provident doloremque quia, eaque consectetur
        ut autem nihil quis sit cum quo, quaerat officia temporibus rem!
      </>
    ),
  },
  {
    title: "Develop",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos accusamus
        perspiciatis at rerum dolores, numquam qui natus odio ratione modi
        voluptatum minima tempora dignissimos, vel aut iusto nobis delectus
        soluta!
      </>
    ),
  },
  {
    title: "Code",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi
        mollitia, fugit aliquam quam tenetur incidunt iure itaque perferendis
        ullam, doloribus et commodi inventore obcaecati porro deserunt
        repudiandae nobis suscipit.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
