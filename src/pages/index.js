import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';



function HomepageHeader() {
  const siteConfig = {
    title: "Insights n' Notes",
    tagline: 'A collection of notes & insights'
  };
  //const {siteConfig} = useDocusaurusContext();
  return (
    
    <header className={clsx('hero', styles.heroBanner)} style={{backgroundImage: `url('/img/night_city.jpg')`, height: '375px'}}>
      <div className="container" style = {{color:'white'}}>
      {/* {{backgroundColor: '#7F7F7F'}} */}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro" style = {{margin:'10px'}}>
            Insights n' Notes 📔
          </Link>
          {/* {"\n"} Will add later when I include resume
          <Link
              className="button button--secondary button--lg"
              to="/docs/intro" style = {{margin:'10px'}}>
              My Resume ⏱️
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

