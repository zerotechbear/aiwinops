import classes from '../../../styles/UI/Modal/Message.module.css';

const Message = (props) => {
  return (
    <div className={classes.message}>
      <h3>Message</h3>
      <p>{props.children}</p>
    </div>
  );
};

export default Message;