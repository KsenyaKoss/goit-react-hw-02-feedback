import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  
  };

  handleGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return   this.state.good + this.state.neutral + this.state.bad
  }
   


  render() {

    const totalFeedbacks = this.countTotalFeedback()
    const positivePercentage  = Math.round(Number(this.state.good) / Number(totalFeedbacks) * 100)

    return (
    
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleGood={this.handleGood}
            handleNeutral={this.handleNeutral}
            handleBad={this.handleBad}
            countTotal={this.countTotalFeedback}
          />
        </Section>
        <Section title="Statistics">
          {(this.state.good === 0 &&
          this.state.neutral ===0 &&
          this.state.bad === 0) ? 
          <Notification message="There is no feedback"/> :
         
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positivePercentage}
          /> }
         
        </Section>
      </>
    );
  }
}
