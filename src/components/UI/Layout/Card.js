import classes from '../../../styles/UI/Layout/Card.module.css';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>
}

export default Card;