import logo from './logo.svg';
import image from "./images/middleLogo.png";
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { FcFullTrash } from 'react-icons/bs';

  

function App() {

  return (

    
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span></span>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <link rel="stylesheet" href="./App.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
      <div className="Frame">
      {/* <img src={image} alt="idk"/> */}
      <div className="Runningframe" >
          
        
        </div>
        <div className="Frame-left">
          <br /><br /><br /><br /><br />
          <h5>Audio slicer</h5>
          <h5>Anagh Soman</h5>
          <h5>ME16B133</h5>
          <img className="imagecontrol" src={image}/>
        </div>
        <div className="Frame-right">
            <div className="Upload">
              <Form Id ="tagg">
               <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Select audio file</Form.Label>
                  <Form.Control id="tag" controlId ="tag" type="file"/>
                  <br/>
                  <Button variant="outline-warning" onClick={uploaded}>Upload</Button>{' '}
                  <Button variant="danger" onClick={opac}>Remove</Button>
                  
                  <br/>
                  <br/>
                  <ProgressBar animated variant="warning" now={45} />
                </Form.Group>
              </Form>
            </div>
          </div>
      </div>
      {/* <header className="App-header" hidden="True">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <footer>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

      </footer>
      
    </div>
  );

  function uploaded(){
    alert("i have been clicked");
    const formData=new FormData();
    // formData.append(,Form.name);
    console.log(formData);
  }

  function opac(){
    const a=document.getElementById("tag");
    console.log(a);
  }
}

export default App;
