import './Profile.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfileRequest} from "../../actions/profile";

const Profile = (props) => {

  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);

  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(getProfileRequest(props.match.params.id))
  }, [dispatch]);

  return (
    <div className='profile'>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
    </div>
  )
};

export default Profile;