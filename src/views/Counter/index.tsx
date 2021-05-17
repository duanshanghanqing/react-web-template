import React from 'react';
import { connect } from 'react-redux';
import { actions } from './store';

class Counter extends React.Component<{
  counter: number,
  increment: any,
  incrementIfOdd: any,
  incrementAsync: any,
  decrement: any,
}, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, } = this.props;
    return (
      <p>
        Clicked:{' '}{counter}{' '}times
        {' '}
        <button type="button" onClick={increment}>+</button>
        {' '}
        <button type="button" onClick={decrement}>-</button>
        {' '}
        <button type="button" onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button type="button" onClick={incrementAsync}>Increment async</button>
      </p>
    );
  }
}

export default connect(state => state, actions)(Counter);
