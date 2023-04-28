import createPost from './create'
import deletePost from './delete'
import getPostDetails from './details'
import getPostList from './list'
import updatePost from './update'

const PostApi = {
  create: createPost,
  delete: deletePost,
  details: getPostDetails,
  list: getPostList,
  update: updatePost,
}

export default PostApi