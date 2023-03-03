import React from 'react'
import useNotify from "~/hooks/useNotify";
import usePostDetails from '../../hooks/useGetDetails'
import { GET_DETAILS_NOTIFY } from "../../text/notify"
import { IPost } from '../../types'
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
// import Details from './Details'

const PostDetailsContainer:React.FC<{ postId: IPost["id"] }> = ({ postId }) => {
  const { showErrorNotify } = useNotify();
  const { data, isLoading } = usePostDetails(postId, {
    enabled: Boolean(postId),
    onError: (error: any) => {
      showErrorNotify({
         message: getNotifyErrorMessage(error, GET_DETAILS_NOTIFY.error),
      });
    },
  })
 return null // <Details post={data} isLoading={isLoading} />
}

export default PostDetailsContainer
