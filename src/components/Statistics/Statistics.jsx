import { Styledp } from './Statistics.styled';
import { Flex } from '../../StyledComponents';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positivePercentage,
}) => {
  return (
    <Flex justify="center" direction="column">
      <Styledp>Good: {good}</Styledp>
      <Styledp>Neutral: {neutral}</Styledp>
      <Styledp>Bad: {bad}</Styledp>
      <Styledp>Total: {totalFeedbacks}</Styledp>
      <Styledp>Positive feedbacks: {positivePercentage}%</Styledp>
    </Flex>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedbacks: PropTypes.number,
};
