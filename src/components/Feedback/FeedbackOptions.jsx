import { Styledbutton } from './FeedbackOptions.styled';
import { Flex } from '../../StyledComponents';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <Flex justify="center">
      {options.map(option => (
        <li key={option}>
          <Styledbutton type="button" name={option} onClick={ev => onClick(ev)}>
            {option}
          </Styledbutton>
        </li>
      ))}
    </Flex>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
