import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { storeActions } from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();


  const incrementHandler = () => {
    dispatch(storeActions.increment());
  };

  function increaseHandler () {
    dispatch(storeActions.increase(5));
    }

  const decrementHandler = () => {
    dispatch(storeActions.decrement());
  };


  const toggleCounterHandler = () => {
    dispatch(storeActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
