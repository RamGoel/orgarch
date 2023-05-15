import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

function ReviewerHome() {
  return (
    <>
    <section class="course">
    <div style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold'}}>ReviewerHome</div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo consequuntur esse, illo aspernatur deserunt tempore, provident quos accusamus, sit nulla nam quisquam vitae.</p>

      <div class="row">
          <Link to='/reviewer/page' className='course-col'>
        <div class="course-col">
          <h3>Research Paper 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit veniam nihil aliquam, ducimus quo mollitia consequatur animi fuga totam eveniet alias similique voluptatem eos. Aliquam facilis id culpa rem architecto nemo maiores illum natus debitis? Voluptatem, commodi! Quos neque quas cumque dolorem dolore libero dignissimos sunt voluptatum quidem laboriosam!</p>
        </div>
          </Link>
          <Link to='/reviewer/page' className='course-col'>
        <div class="course-col">
          <h3>Research Paper 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit veniam nihil aliquam, ducimus quo mollitia consequatur animi fuga totam eveniet alias similique voluptatem eos. Aliquam facilis id culpa rem architecto nemo maiores illum natus debitis? Voluptatem, commodi! Quos neque quas cumque dolorem dolore libero dignissimos sunt voluptatum quidem laboriosam!</p>
        </div>
          </Link>
          <Link to='/reviewer/page' className='course-col'>
        <div class="course-col">
          <h3>Research Paper 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit veniam nihil aliquam, ducimus quo mollitia consequatur animi fuga totam eveniet alias similique voluptatem eos. Aliquam facilis id culpa rem architecto nemo maiores illum natus debitis? Voluptatem, commodi! Quos neque quas cumque dolorem dolore libero dignissimos sunt voluptatum quidem laboriosam!</p>
        </div>
          </Link>
       </div>
      
    </section>
    
    </>
  )
}

export default ReviewerHome