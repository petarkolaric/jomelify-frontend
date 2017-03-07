import React from 'react'

const UploadForm = (props) => {
  return (
    <div className="Uploadform">
      <form action="http://localhost:4000/jomelify" method="post" encType="multipart/form-data">
        <input type="file" name="displayImage"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UploadForm
