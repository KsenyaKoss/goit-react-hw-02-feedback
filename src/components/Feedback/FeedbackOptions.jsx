import {Styledbutton} from './FeedbackOptions.styled'
import {Flex} from '../../StyledComponents'

export const FeedbackOptions = ({handleGood, handleNeutral, handleBad}) => {
    return (
        <Flex justify="center">
        <Styledbutton type="button" onClick={handleGood}>Good</Styledbutton>
        <Styledbutton type="button" onClick={handleNeutral}>Neutral</Styledbutton>
        <Styledbutton type="button" onClick={handleBad}>Bad</Styledbutton>
        </Flex>
      )
}