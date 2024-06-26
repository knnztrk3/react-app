import React from 'react';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

function Blog() {
  return (
    <div className="keo__blog section_padding" id='blog'>
      <div className="keo__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="keo__blog-container">
        <div className="keo__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="KEO and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="keo__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" text="KEO and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog03} date="Sep 26, 2021" text="KEO and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" text="KEO and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" text="KEO and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog