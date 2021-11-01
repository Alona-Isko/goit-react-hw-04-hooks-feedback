import PropTypes from 'prop-types';
import styles from './Notification.module.css';

function Notification({ message }) {
    return <p className={styles.Stat__message}>
        {message}
    </p>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;