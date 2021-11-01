import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';

function Statistics ({ good, neutral, bad, total, positivePercentage }) {
    const amount = good + neutral + bad;
    return (
        <div>
            {amount !== 0 ? (
                <ul className={styles.Stat__cont}>
                    <li className={styles.Stat__value}>Good: {good}</li>
                    <li className={styles.Stat__value}>Neutral: {neutral}</li>
                    <li className={styles.Stat__value}>Bad: {bad}</li>
                    <li className={styles.Stat__value}>Total: {total(amount)}</li>
                    <li className={styles.Stat__value}>Positive feedback: {positivePercentage(amount)}%</li>
                </ul>
            ) : (
                <Notification
                    message="No feedback given"
                />
            )}
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;

