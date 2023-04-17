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

  handleClick = ev => {
    const { name } = ev.target;
    console.log(name);
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = Math.round(
      (Number(this.state.good) / Number(totalFeedbacks)) * 100
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClick={this.handleClick}
            countTotal={this.countTotalFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedbacks={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
