import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.item}>
      <img src='https://cdn3.vectorstock.com/i/1000x1000/17/27/sport-club-logo-design-heraldic-shield-vector-21501727.jpg'></img>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post; 