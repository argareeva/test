import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://i.ytimg.com/vi/bNYbNFDx-vo/maxresdefault.jpg'></img>
      </div>
      <div>
        <MyPosts />
      </div>
      <div>
        <img src='https://mir-s3-cdn-cf.behance.net/projects/404/a12fc2100513681.Y3JvcCwxODgwLDE0NzAsMCwyMDQ.jpg'></img>
      </div>
    </div>
  )
}

export default Profile; 