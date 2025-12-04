import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter-1-introduction-to-physical-ai">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="Learn to build intelligent physical systems with ROS 2, simulation, and AI models">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Table of Contents</h2>
              </div>
            </div>
            <div className="row">
              <div className="col col--4">
                <div className="card margin-bottom--lg">
                  <div className="card__header">
                    <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>🧠</div>
                    <h3>Chapter 1</h3>
                  </div>
                  <div className="card__body">
                    <p><strong>Introduction to Physical AI</strong></p>
                    <p>Learn the fundamentals of AI systems that interact with the physical world.</p>
                  </div>
                  <div className="card__footer">
                    <Link to="/docs/chapter-1-introduction-to-physical-ai">Read Chapter →</Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card margin-bottom--lg">
                  <div className="card__header">
                    <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>🤖</div>
                    <h3>Chapter 2</h3>
                  </div>
                  <div className="card__body">
                    <p><strong>Basics of Humanoid Robotics</strong></p>
                    <p>Explore mechanical design, actuators, sensors, and control systems.</p>
                  </div>
                  <div className="card__footer">
                    <Link to="/docs/chapter-2-basics-of-humanoid-robotics">Read Chapter →</Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card margin-bottom--lg">
                  <div className="card__header">
                    <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>⚙️</div>
                    <h3>Chapter 3</h3>
                  </div>
                  <div className="card__body">
                    <p><strong>ROS 2 Fundamentals</strong></p>
                    <p>Master the industry-standard framework for robot software development.</p>
                  </div>
                  <div className="card__footer">
                    <Link to="/docs/chapter-3-ros-2-fundamentals">Read Chapter →</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col--4">
                <div className="card margin-bottom--lg">
                  <div className="card__header">
                    <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>🌐</div>
                    <h3>Chapter 4</h3>
                  </div>
                  <div className="card__body">
                    <p><strong>Digital Twin Simulation</strong></p>
                    <p>Use Gazebo and Isaac Sim to test robots in virtual environments.</p>
                  </div>
                  <div className="card__footer">
                    <Link to="/docs/chapter-4-digital-twin-simulation">Read Chapter →</Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card margin-bottom--lg">
                  <div className="card__header">
                    <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>👁️</div>
                    <h3>Chapter 5</h3>
                  </div>
                  <div className="card__body">
                    <p><strong>Vision-Language-Action Systems</strong></p>
                    <p>Build AI models that understand vision, language, and generate actions.</p>
                  </div>
                  <div className="card__footer">
                    <Link to="/docs/chapter-5-vision-language-action-systems">Read Chapter →</Link>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card margin-bottom--lg">
                  <div className="card__header">
                    <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>🎓</div>
                    <h3>Chapter 6</h3>
                  </div>
                  <div className="card__body">
                    <p><strong>Capstone Project</strong></p>
                    <p>Integrate all concepts to build a complete AI-robot pipeline.</p>
                  </div>
                  <div className="card__footer">
                    <Link to="/docs/chapter-6-capstone-ai-robot-pipeline">Read Chapter →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
