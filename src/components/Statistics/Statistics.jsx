import { Styledp} from './Statistics.styled'
import {Flex} from '../../StyledComponents'
export const Statistics = ({good, neutral, bad, totalFeedbacks, positivePercentage}) => {
 return(
    <Flex justify="center" direction="column">
    <Styledp>Good: {good}</Styledp>
    <Styledp>Neutral: {neutral}</Styledp>
    <Styledp>Bad: {bad}</Styledp>
    <Styledp>Total: {totalFeedbacks}</Styledp>
    <Styledp>Positive feedbacks: {positivePercentage}%</Styledp>
    </Flex>
 )

};

