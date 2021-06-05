import classes from '../../../styles/UI/Modal/LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes.ring}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
};

export default LoadingSpinner;