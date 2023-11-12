import React from 'react'

const ProjectDetails = (props) => {
    const id= props.match.params.id;
  return (
    <div className='container section project-details'>
        <div className='card z-depth-0'>
         <div className='card-content'>
          <span className='card-title'>Project Title - {id} </span>
          <p>n fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum.  </p>

         </div>
         <div className='card-action grey lighten-4 grey-text'>
            <div>Posted by the Paul Chege</div>
            <div>9th November , 9am </div>
         </div>

        </div>
    </div>
  )
}

export default ProjectDetails