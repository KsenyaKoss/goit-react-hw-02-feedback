import { Styledp } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Styledp>{message}</Styledp>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
