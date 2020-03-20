import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

class Input extends Component {
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
              type="text"
            />
            <button
              className='btn btn-primary mb-2'
              data-test='submit-button'
              type='submit'
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

export default connect(mapStateToProps, { guessWord })(Input);