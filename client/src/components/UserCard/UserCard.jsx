import {Card} from "antd";
import './UserCard.scss'

const UserCard = ({item}) => {
  const {Meta} = Card;
  return(
    <div className="card">
      <Card
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title={item.name} description="www.instagram.com" />
      </Card>
    </div>
  )
};

export default UserCard;