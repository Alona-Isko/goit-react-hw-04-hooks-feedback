import {useState} from 'react';
import styles from './App.module.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
      <div className={styles.Feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({good, neutral, bad})}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />   
        </Section>
      </div>
    );
}




// import React from 'react';
// import styles from './App.module.css';
// import Section from './components/Section/Section';
// import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
// import Statistics from './components/Statistics/Statistics';

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = option => {
//     this.setState(state => {
//       return {
//         [option]: state[option] + 1,
//       }
//     });
//   };
    
//   countTotalFeedback = option => {
//     return option;
//   };

//   countPositiveFeedbackPercentage = option => {
//     return Math.round((this.state.good * 100) / option);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className={styles.Feedback}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.leaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />   
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
