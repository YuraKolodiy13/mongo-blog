import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllUsersRequest} from "../../actions/auth";
import UserCard from "../../components/UserCard/UserCard";
import './People.scss'

const People = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.users);

  useEffect(() => {
    dispatch(getAllUsersRequest())
  }, [dispatch]);

  return (
    <div className='people'>
      <div className="people__items">
        {users.map(item =>
          <UserCard item={item} className='people__item'/>
        )}
      </div>
    </div>
  )
};

export default People;