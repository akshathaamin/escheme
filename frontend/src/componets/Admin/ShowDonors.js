import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class ShowDonors extends Component {
  state = {
    schemes: [],
  };
  componentDidMount = () => {
    this.getschemes();
    console.log(this.props.location.state);
  };
  getschemes = async () => {
    const token = sessionStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/gemploye/scheme/${this.props.location.state}`,
        config
      );
      this.setState({
        schemes: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  onDeleteUser = async (user, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(
        `http://localhost:5000/api/v1/gemploye/scheme/${user}`,
        config
      );

      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the schemes");
    }
  };
  render() {
    return (
      <div>
      <section>
        <div id="portfolio">
          <div class="container showtop  login-second ">
            <div class="page-title text-center">
              <h1 class="text-dark">Scholerships</h1>

              <hr class="pg-titl-bdr-btm" />
            </div>
            <div class="row">
              <div class="col-lg-12 ">{/* categotize */}</div>
            </div>

            <div class="row" id="" style={{ opacity: 1 }}>
              {/*  */}
              <div class="container pt-4">
                <div class=" tabletrans ">
                  <div class="well">
                    <div class="row mb-5">
                      <div class="col-md-6">
                        <div class="pull-right">
                          <a
                            href="/vendor/addItems"
                            class="btn btn-info btn-sm p-2"
                          >
                            Add Scholerships
                          </a>
                        </div>
                      </div>

                      <div class="pull-left">
                        <a href="/vendor/home" class="btn btn-info btn-sm p-2">
                          Back to Home
                        </a>
                      </div>
                    </div>
                    <table class="table table-hover">
                      <tr>
                        <th>
                          <label class="text-dark">Img</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Scholership Title</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Department</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Description</label>
                        </th>

                        <th>
                          {" "}
                          <label class="text-dark">Type</label>
                        </th>
                        
                        <th>
                          {" "}
                          <label class="text-dark">Benefit/reward</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Website</label>
                        </th>

                        <th>
                          {" "}
                          <label className="d-flex justify-content-center text-dark">
                            Actions
                          </label>
                        </th>
                      </tr>
                      <tbody>
                          {this.state.schemes.map((scheme) => (
                            <tr key={scheme._id}>
                              <td className="tbld">
                                <img
                                  src={`${scheme.photo}`}
                                  alt=""
                                  width="150px"
                                  height="100px"
                                ></img>
                              </td>
                              <td className="tbld">{scheme.title}</td>
                              <td className="tbld">{scheme.description}</td>
                              <td className="tbld">{scheme.department}</td>

                              <td className="d-flex justify-content-center tbld">
                                <div className="btn-group ">
                                  <a
                                    href=""
                                    className="btn btn-danger btn-md mr-5"
                                    value={scheme._id}
                                    onClick={(e) =>
                                      this.onDeleteUser(scheme._id, e)
                                    }
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </a>

                                  {/* <a href="" className="btn btn-info btn-md">
                                    <i className="fa fa-edit"></i>
                                  </a> */}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                      {/* <tr>
                        <td className="tbld">
                          <img
                            src="https://pbs.twimg.com/profile_images/753528916799782912/VRULsWoi_400x400.jpg"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">Minority</td>
                        <td className="tbld text-dark">Minority</td>
                        <td className="tbld text-dark">10000</td>

                        <td className="d-flex justify-content-center tbld">
                          <div className="btn-group ">
                            <a href="" class="btn btn-danger btn-md mr-5">
                              <i class="fa fa-trash-o"></i>
                            </a>

                            <a href="" class="btn btn-info btn-md">
                              <i class="fa fa-edit"></i>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="tbld">
                          <img
                            src="https://www.factstoday.in/wp-content/uploads/2018/01/sc.png"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">SCST</td>
                        <td className="tbld text-dark">SCST</td>
                        <td className="tbld text-dark">50000</td>

                        <td className="d-flex justify-content-center tbld">
                          <div className="btn-group ">
                            <a href="" class="btn btn-danger btn-md mr-5">
                              <i class="fa fa-trash-o"></i>
                            </a>

                            <a href="" class="btn btn-info btn-md">
                              <i class="fa fa-edit"></i>
                            </a>
                          </div>
                        </td>
                      </tr>


                      <tr>
                        <td className="tbld">
                          <img
                            src="https://4.bp.blogspot.com/-92WIekGZNCE/WKfR9ewCUgI/AAAAAAAA8S4/K3LVK8SJb6MVouLjS3bfV-fi-U8zjSupACLcB/s1600/OBC%2BScholarship.png"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">OBC</td>
                        <td className="tbld text-dark">OBC</td>
                        <td className="tbld text-dark">26000</td>

                        <td className="d-flex justify-content-center tbld">
                          <div className="btn-group ">
                            <a href="" class="btn btn-danger btn-md mr-5">
                              <i class="fa fa-trash-o"></i>
                            </a>

                            <a href="" class="btn btn-info btn-md">
                              <i class="fa fa-edit"></i>
                            </a>
                          </div>
                        </td>
                      </tr>


                      <tr>
                        <td className="tbld">
                          <img
                            src="https://3k7by215ywuf340yi3alsfso-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/2014/10/hr-mba-scholarships.jpg"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">Mean Base</td>
                        <td className="tbld text-dark">Mean</td>
                        <td className="tbld text-dark">5000</td> */}
                       {/* </tr> */}
                        <td className="d-flex justify-content-center tbld">
                          <div className="btn-group ">
                            <a href="" class="btn btn-danger btn-md mr-5">
                              <i class="fa fa-trash-o"></i>
                            </a>

                           <a href="" class="btn btn-info btn-md">
                             <i class="fa fa-edit"></i>
                            </a>
                          </div>
                        </td>
                    </table> 
                   </div>
                 </div>
              </div> 
             </div> 
          </div> 
         </div> 
       </section>
     </div> 
    );
  }
}
