import React, { PropTypes } from 'react';
import Input from '../../components/Input.jsx';
import emailRegex from '../../utils/email_regex.js';

const validateEmail = (email) => {
  return emailRegex.test(email);
};

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: props.error };
    this.validate = this.validate.bind(this);
  }
  validate(value) {
    const valid = validateEmail(value);
    if (valid) {
      return;
    }
    this.setState({ error: { message: 'Please enter a valid Email Address' } });
  }
  render() {
    return (<Input type='email' label='Email Address' placeholder='someone@someone.com' error={ this.state.error } validate={this.validate} />);
  }
}

EmailInput.propTypes = {
  error: PropTypes.object,
};

EmailInput.defaultProps = {
  error: {},
};
export default EmailInput;
