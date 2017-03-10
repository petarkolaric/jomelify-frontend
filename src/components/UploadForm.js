import React from 'react'
import FileInput from 'react-file-input'

const UploadForm = (props) => {
  return (
    <div className="Uploadform">
      <form action="http://localhost:4000/jomelify" method="post" encType="multipart/form-data">
        <FileInput
          accept=".png,.gif,.jpeg,.jpg"
          className="form-item"
          type="file"
          name="displayImage"
          placeholder="Click to Add Image"
        />
        <button className="submit-button" type="submit">Jomelify!</button>
      </form>
    </div>
  )
}

export default UploadForm
