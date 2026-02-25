import logoSystem from '../assets/logo.jpg';

function FirstPage() {
  return (
    <div className="container-fluid">
        <div className='row'>
          <div className='col text-center innerTag'>
            <img src={logoSystem} alt="Logo" width="100" height="100" />
            <br></br>
            <h1 className="text-primary-text">Zanzibar Education Sector Planning, <br></br> Monitoring and Evaluation System (PM&E)</h1>
            <br></br>
            <button className=" btn-primary btn-system">User Guide</button> <br></br> 
           
            <button className=" btn-primary btn-system">Password</button>
          </div>
        </div>
        
      </div>
  );
}

export default FirstPage;