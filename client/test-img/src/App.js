import { useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {

  const [img, setImg] = useState([])
  const handleChange = (event) => {
    setImg(event.target.files[0]);
    console.log(img)
    // console.log(URL.createObjectURL(event.target.files[0]));
  }

  const submit = () => {
    const formdata = new FormData();
    formdata.append('file', img);
    formdata.append('data', { name: 'bala' });
    // console.log(img)

    console.log("formData", formdata)
    axios.post('http://localhost:2000/imageupload', formdata,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }).then((res) => {
        console.log("res", res)
      }).catch((err) => {
        console.log(err)

      })
  }
  return (
    <div>
       <div className="container my-4">




         
<div className="row text-center">

  <div className="col-md-6 mb-4">

    <form className="md-form">
      <div className="file-field">
        <div className="z-depth-1-half mb-4">
          <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className="img-fluid"
            alt="example placeholder"/>
        </div>
        <div className="d-flex justify-content-center">
          <div className="btn btn-mdb-color btn-rounded float-left">
            <span>Choose file</span>
            <input type="file"  onChange={handleChange}/>
            <button type='submit' onClick={submit}>submit</button>
          </div>
        </div>
      </div>
    </form>

  </div>


</div>


</div>
    </div>
  );
}

export default App;
