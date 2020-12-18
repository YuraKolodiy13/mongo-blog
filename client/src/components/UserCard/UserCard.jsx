import {Card} from "antd";
import './UserCard.scss'
import noAvatar from '../../assets/images/no-avatar.jpg'
import {Link} from "react-router-dom";
import {followUserRequest, unfollowUserRequest} from "../../actions/auth";
import {useDispatch, useSelector} from "react-redux";
import Btn from "../buttons/MataButton/Btn";

const UserCard = ({item}) => {
  const {Meta} = Card;
  const dispatch = useDispatch();
  const me = useSelector(state => state.auth.me);

  const follow = (e, id) => {
    e.preventDefault();
    dispatch(followUserRequest(id))
  };

  const unFollow = (e, id) => {
    e.preventDefault();
    dispatch(unfollowUserRequest(id))
  };

  return(
    <div className="card">
      <Link to={`/profile/${item._id}`}>
        <Card
          hoverable
          cover={<img alt="example" src={item.avatar ? item.avatar : noAvatar} />}
        >
          <Meta title={item.name} description="description" />
          {item.followers.includes(me._id)
            ?<Btn
              title={'Unfollow'}
              color='secondary'
              doAction={(e) => unFollow(e, item._id,)}
            />
            :<Btn
              title={'Follow'}
              color='primary'
              doAction={(e) => follow(e, item._id,)}
            />
          }
        </Card>
      </Link>
    </div>
  )
};

export default UserCard;