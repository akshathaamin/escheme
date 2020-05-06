import React, { Component } from "react";
import "../CSS/donor.css";

export default class ShowCompany extends Component {
  render() {
    return (
      <div>
      <section>
        <div id="portfolio">
          <div class="container showtop  login-second ">
            <div class="page-title text-center">
              <h1 class="text-dark">List Of Companies</h1>

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
                            href="/farmer/addItems"
                            class="btn btn-info btn-sm p-2"
                          >
                            Add Company
                          </a>
                        </div>
                      </div>

                      <div class="pull-left">
                        <a href="/FHome" class="btn btn-info btn-sm p-2">
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
                          <label class="text-dark">Company Name</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Company Location</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Email</label>
                        </th>

                        <th>
                          {" "}
                          <label className="d-flex justify-content-center text-dark">
                            Actions
                          </label>
                        </th>
                      </tr>

                      <tr>
                        <td className="tbld">
                          <img
                            src="http://starkovtattoo.spb.ru/images/200/DSC100224440.png"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">2</td>
                        <td className="tbld text-dark">3</td>
                        <td className="tbld text-dark">g</td>

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
                            src="http://starkovtattoo.spb.ru/images/200/DSC100224440.png"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">2</td>
                        <td className="tbld text-dark">3</td>
                        <td className="tbld text-dark">g</td>

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
                            src="http://starkovtattoo.spb.ru/images/200/DSC100224440.png"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">2</td>
                        <td className="tbld text-dark">3</td>
                        <td className="tbld text-dark">g</td>

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
                            src="http://starkovtattoo.spb.ru/images/200/DSC100224440.png"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">2</td>
                        <td className="tbld text-dark">3</td>
                        <td className="tbld text-dark">g</td>

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
