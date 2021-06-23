import classes from '../../../styles/UI/Layout/Card.module.scss';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>
}

export default Card;