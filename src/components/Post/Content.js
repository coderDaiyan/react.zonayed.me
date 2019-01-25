import React from 'react';
import { connect } from 'react-redux';

import ActionButton from './ActionButton';

import { createMarkup } from '../../utils/createMarkup';

const Content = ({ post }) => {
  if(!post) {
    return <p>Loading</p>
  }
  return (
    <section className="content-area">
      <div className="title">
        {post.title.rendered}
      </div>
      <div className="content">
        <div dangerouslySetInnerHTML={createMarkup(post.content.rendered)}></div>
        <ActionButton />
      </div>
    </section>
  )
}

export default connect(({ postReducer }) => ({ post: postReducer }))(Content);
