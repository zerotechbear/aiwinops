import classes from '../../../styles/UI/Modal/Backdrop.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}/>
};

export default Backdrop;