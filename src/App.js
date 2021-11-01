import React from 'react';
import styles from './App.module.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(state => {
      return {
        [option]: state[option] + 1,
      }
    });
  };
    
  countTotalFeedback = option => {
    return option;
  };

  countPositiveFeedbackPercentage = option => {
    return Math.round((this.state.good * 100) / option);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.Feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />   
        </Section>
      </div>
    );
  }
}

export default App;
