import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsRequest} from "../../actions/posts";

const Discover = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(getPostsRequest())
  }, [dispatch]);


  return (
    <div className="discover">
      <div className='discover__items'>
        {posts && posts.map(item =>
          <div key={item._id} className='discover__item'>
            <h4>{item.title}</h4>
            <div dangerouslySetInnerHTML={{__html: item.text}}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
