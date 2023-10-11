import classes from "./notification.module.css";

const Notification = (props) => {
  const { title, message, status } = props;

  const statusClasses = status === "success" ? classes.success : status === "error" ? classes.error : "";
  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
