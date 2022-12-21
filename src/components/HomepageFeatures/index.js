import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


//here i would like to create a different 3 box container --> to search later...
const FeatureList = [
  {
    title: 'Why create this page?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I wanted to have a more streamlined location to save my notes that will also be more readable and deployed online!
      </>
    ),
  },
  {
    title: 'What this site holds',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Notes/Insights/Writeups about many interests I have, primarily focused on Cybersecurity.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Docusaurus is powered by React and offers great flexibility and versatility!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
