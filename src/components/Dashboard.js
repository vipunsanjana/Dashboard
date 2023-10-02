
import {useEffect,useState} from 'react';
import PieChart from './PieChart';
import Sidebar from './Sidebar';

 
 
 
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (



        <div class="container-fluid" id="main" style={{marginTop:"0px"}}>
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar/>
         
       
    
        
    <div class="col main pt-5 mt-3">


         
        <nav aria-label="breadcrumb" >
        <ol class="breadcrumb"  style={{backgroundColor:"gray"}}>
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Add Employee Details and Records</p>
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Tweets</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Shares</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
        <div class="row placeholders mb-3">
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/dddddd/fff?text=1" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Responsive</h4>
                <span class="text-muted">Device agnostic</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e4e4e4/fff?text=2" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Frontend</h4>
                <span class="text-muted">UI / UX oriented</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/d6d6d6/fff?text=3" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>HTML5</h4>
                <span class="text-muted">Standards-based</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e0e0e0/fff?text=4" class="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Framework</h4>
                <span class="text-muted">CSS and JavaScript</span>
            </div>
        </div>
       
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of Employees
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                 <div className="mb-5" style={{height:"300px",width:"400px"}}><PieChart/> </div></div>
        </div>
       
        <a id="more"></a>
        <hr/>
        <h2 class="sub-header mt-5">Use card decks for equal height rows of cards</h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                            <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                            <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>There are also some interesting new text classes for uppercase and capitalize.</p>
                            <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>
                            <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        

      
 
 
    </div>
    </div>
    </div>  
    )
}
 
export default Dashboard;