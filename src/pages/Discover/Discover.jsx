import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getPostsRequest} from "../../actions/posts";

const Discover = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsRequest())
  }, [dispatch]);


  return (
    <div className="discover">
      posts here
    </div>
  );
};

export default Discover;
