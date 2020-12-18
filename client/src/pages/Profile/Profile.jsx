import './Profile.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfileRequest} from "../../actions/profile";

const Profile = (props) => {

  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  const posts = useSelector(state => state.profile.posts);

  useEffect(() => {
    dispatch(getProfileRequest(props.match.params.id))
  }, [dispatch]);

  return (
    <div className='profile'>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>

      <div className="profile__posts">
        <h2>posts</h2>
        {posts && posts.map(item =>
          <div key={item._id} className='profile__post'>
            <h4>{item.title}</h4>
            <div dangerouslySetInnerHTML={{__html: item.text}}/>
          </div>
        )}
      </div>

    </div>
  )
};

export default Profile;