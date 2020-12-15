import React, { useState } from 'react';
import ProgressBarPB from './ProgressBarPB';
// import { Badge } from 'react-bootstrap';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label>
      <span className="m-2" title="Upload File">+</span>
        <input type="file" onChange={handleChange} />
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file?.name }</div> }
        { file &&   <ProgressBarPB file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;