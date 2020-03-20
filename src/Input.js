import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessWordText: '',
    };
  }
  handleClick = () => {
    const { guessWord } = this.props;
    const { guessWordText } = this.state;
    guessWord(guessWordText);
  }
  handleChange = (event) => {
    this.setState({ guessWordText: event.target.value });
  }
  render() {
    const { success } = this.props;
    return <div data-test='component-input'>
      {
        success ? null : (
          <form className='form-inline'>
            <input
              className="mb-2 mx-sm-3"
              data-test='input-box'
              placeholder="Enter guess"
              onChange={this.handleChange}
              type="text"
            />
            <button
              className='btn btn-primary mb-2'
              data-test='submit-button'
              type='submit'
              onClick={this.handleClick}
            >
              Submit
            </button>
          </form>
        )
      }
    </div>
  }
};

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);