import React, { Component } from 'react'
import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null,
      loading: true
    }
  }

  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      this.setState({questions}, () => {
        this.changeQuestion();
      })
    } catch (e) {
      console.error(e)
    }
  }

  changeQuestion = () => {
    const randomQuestionIndex = Math.floor(Math.random() * this.state.questions.length);
    const currentQuestion = this.state.questions[randomQuestionIndex];
    const remainingQuestions = [...this.state.questions];
    remainingQuestions.splice(randomQuestionIndex, 1);

    this.setState({questions: remainingQuestions, currentQuestion, loading: false});
  }

  render() {
    return (
      <>
        {this.state.loading && <div id="loader"></div>}
        {!this.state.loading && this.state.currentQuestion && (
          <Question question={this.state.currentQuestion} />
        )}
      </>
    )
  }
}
