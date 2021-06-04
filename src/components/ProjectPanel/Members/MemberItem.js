import classes from "../../../styles/ProjectPanel/Member/MemberItem.module.css";

const MemberItem = (props) => {
  const { name } = props;
  return (
    <div className={classes.items}>
      {name}
    </div>
  )
};

export default MemberItem;