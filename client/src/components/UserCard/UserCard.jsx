import {Card} from "antd";
import './UserCard.scss'
import noAvatar from '../../assets/images/no-avatar.jpg'
import {Link} from "react-router-dom";

const UserCard = ({item}) => {
  const {Meta} = Card;
  return(
    <div className="card">
      <Link to={`/profile/${item._id}`}>
        <Card
          hoverable
          cover={<img alt="example" src={item.avatar ? item.avatar : noAvatar} />}
        >
          <Meta title={item.name} description="description" />
        </Card>
      </Link>
    </div>
  )
};

export default UserCard;