import React from 'react';
import { Redirect, Route } from 'react-router';

export default class StrictAcess extends React.Component {
  render() {
    const { user } = this.props;
    
    return (
      if (user.username === 'joao' && user.password === '1234') {
        <p>Welcome Joao!</p>
      } else {
        alert('Acess denied')
        <Redirect to="/" />
      }

    )
  }
}