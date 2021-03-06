import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class MainHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

<section class="counts section-bg mt-5">
        <div className=" container-fluid mt-5" id="product">
          <h2> List Of Scholerships</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://pbs.twimg.com/profile_images/753528916799782912/VRULsWoi_400x400.jpg"
                  className="img1"
                  alt=""
                />
        <div className="product-bottom text-center">
               
               <h3 className="text-dark">Minority</h3>
               <h3 className="text-dark">Manority Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                    data-toggle=""
                    data-target=""
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                  
                </div>
              </div>
      
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://3k7by215ywuf340yi3alsfso-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/2014/10/hr-mba-scholarships.jpg"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">Mean scholership</h3>
               <h3 className="text-dark">Mean based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
            
            </div>
            {/*  */}

            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">Merit Scholership</h3>
               <h3 className="text-dark">Merit Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
             
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://www.factstoday.in/wp-content/uploads/2018/01/sc.png"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">SCST Scholership</h3>
               <h3 className="text-dark">SCST Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
     
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://img-d02.moneycontrol.co.in/news_image_files/2014/356x200/s/student_356x200_5732_356.jpg"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">College Scholership</h3>
               <h3 className="text-dark">College Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
     
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://i.guim.co.uk/img/media/d84ebbc1767b5aca154a53bf02ad7538f6750597/0_187_5472_3283/master/5472.jpg?width=300&quality=85&auto=format&fit=max&s=d3b49380e268b8bc3b3a23bd9406ae6c"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">Handicap Scholership</h3>
               <h3 className="text-dark">Handicap Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
     
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://5.imimg.com/data5/AA/HC/GLADMIN-52621354/10th-class-education-service-250x250.png"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">Girls Scholership</h3>
               <h3 className="text-dark">Girls Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
     
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://4.bp.blogspot.com/-92WIekGZNCE/WKfR9ewCUgI/AAAAAAAA8S4/K3LVK8SJb6MVouLjS3bfV-fi-U8zjSupACLcB/s1600/OBC%2BScholarship.png"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">OBC Scholership</h3>
               <h3 className="text-dark">OBC Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
     
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVX32bwJXpXVaRHt_RyrDiqWGRtPjSmYlngKam0M2SaW3PpqM6&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
               <h3 className="text-dark">Cultural Scholership</h3>
               <h3 className="text-dark">Talent Based</h3>
               <h4 className="text-dark">Benefits</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="View"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button> */}
                </div>
              </div>
     
            </div>
          </div>
          <div
            className="modal show product-view"
            id="quickModel"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-header">
              <h3 className="text-dark1">Project Title :</h3>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-dialog product-big-img">
                <img
                  src="data:image/jpeg;base64,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"
                  className=" mt-2"
                  alt=""
                />
              </div>
              <div className="product-bottom text-center">
               
               
               <h3 className="text-dark1">Project Description :</h3>
               <p className="text-dark1">Flood Prevention for County Courthouse

The county courthouse is a historic building that is located in the oldest town in the state. Over the past few years several "localized" floods have occurred in the two-block region surrounding the courthouse. These floods develop as a result of rainfall events that are at or near the yearly maximum. The floodwaters have flowed both into the historic courthouse (photos were provided) and the adjoining annex, bordering the parking lot to the east of the courthouse. The floods originate in the vicinity of the parking lot and flow south and west into the courthouse complex, exiting onto the downhill streets adjacent to the courthouse (photos were provided).</p>
               <h3 className="text-dark1">Institition</h3>
               <h4 className="text-dark1">Price:$1000</h4>
               <button type="submit" className="btn input-btn ">
                     Buy Now
                    </button>
             </div>
             <div className="modal-header">
              
               
              </div>
            </div>
          
          </div>
        </div>
        </section>
      </Fragment>
    );
  }
}

export default MainHome;
