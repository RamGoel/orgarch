import React from 'react'
import '../../App.css'
import conf from '../../assets/person.png'


export default function ResearchPaperPage() {
  return (
    <>
    <div className="pageBox">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id veniam nesciunt delectus accusantium maxime porro cumque quod ipsum laboriosam, nihil vero soluta? Aliquam similique laudantium modi quam culpa. Explicabo aliquid expedita rem eum hic vel fuga sequi consectetur molestias commodi repellendus eveniet cum nobis doloribus laboriosam asperiores omnis ratione illum sapiente placeat, beatae corrupti eos dignissimos! Aliquam sint eaque quod adipisci mollitia voluptatibus libero similique quae, harum ipsum dolore sit velit nostrum sapiente odit veniam officiis magni. Ex, error ipsum odit est veniam tempore quam pariatur modi quibusdam quae illum maxime quas aspernatur culpa voluptas non minus! Iusto voluptate itaque, facere assumenda at consequuntur ipsum nostrum commodi provident, reiciendis quidem earum est aperiam pariatur incidunt eaque hic omnis similique expedita sapiente quam ea soluta dicta. Incidunt possimus assumenda neque fugit? Quaerat doloribus quisquam, aliquid omnis temporibus id ipsa vel commodi repellat iste sed libero mollitia incidunt dolorum? Quas saepe totam dolorem error libero quia temporibus doloremque velit, magni nemo minus modi delectus magnam earum vitae perspiciatis molestias, culpa dolor laboriosam pariatur nulla laudantium cum obcaecati? Nesciunt cum quidem vel distinctio, repudiandae tempore! Velit, tenetur temporibus. Accusantium optio velit cumque consequatur totam, error quos id facilis voluptatibus libero, alias odit, culpa magnam eaque veritatis impedit quaerat quisquam. Dolorem nulla, omnis odit odio facere harum? Corporis nesciunt quos suscipit eaque amet totam ipsa architecto, laudantium dicta possimus sint praesentium omnis molestias dolor voluptatibus pariatur libero enim illum facilis doloribus placeat impedit! Repellendus recusandae quibusdam aspernatur id? Nemo magni facilis quis beatae corrupti illum error, nam nihil fuga quod maxime impedit perspiciatis, culpa deserunt necessitatibus soluta porro omnis inventore laudantium deleniti doloribus neque sit dolore. Dolore reprehenderit, hic consequuntur voluptatum veritatis explicabo inventore illo voluptatem accusamus fuga ea ut autem quisquam vero repellendus ipsa architecto itaque, quo sequi, consectetur eos? Tenetur, culpa ex?</p>
    </div>
    <section class="testimonials">
      <h1>REVIEWS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis quidem voluptate officiis modi? Nulla rerum deleniti quos distinctio perspiciatis facere accusamus molestias.</p>

      <div class="row">
        <div class="testimonial-col">
          <img src={conf}/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui rem ratione corrupti delectus quia commodi consequatur repudiandae, impedit et natus repellat itaque sequi. Similique sapiente dolore adipisci consequuntur, quis error?</p>
            <h3>Gaurav Malik</h3>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-o"></i>
          </div>
        </div>
        <div class="testimonial-col">
          <img src={conf}/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui rem ratione corrupti delectus quia commodi consequatur repudiandae, impedit et natus repellat itaque sequi. Similique sapiente dolore adipisci consequuntur, quis error?</p>
            <h3>Amar J</h3>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-o"></i>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}
