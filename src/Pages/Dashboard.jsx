import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const [items, setItems] = useState();
  const [activeTab, setActiveTab] = useState("about"); // State to manage active tab
  console.log(items, "items");
  useEffect(() => {
    axios
      .get(
        "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
      )
      .then((response) => {
        if (response?.status === 200) {
          console.log(response.data, "response");
          setItems(response?.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching products: ", err);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set active tab based on user click
  };
  
  // Function to sanitize HTML content
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  
  return (
        <>
          <div>
            <div className="container-fluid px-3 px-md-2 px-sm-3 px-lg-3 app-header navbar pb-3 pt-4 ">
              <div className="px-1 px-md-1 px-lg-3 px-md-0 px-lg-0">
                <div className="row app-header-2 height d-flex flex-row justify-content-end">
                  <img
                    loading="lazy"
                    src="https://media.konfhub.com/konfhub-logo-purple.svg"
                    alt="Custom Icon"
                    width="auto"
                    height="50"
                    className="jsx-1343939360 d-inline-block link-text"
                  />
                  <div className="jsx-1343939360 pro-nav-container d-flex align-items-center justify-content-end">
                    <div className="jsx-1343939360 app-menu d-flex dropdown-user ms-3">
                      <div className="jsx-1343939360 d-flex justify-content-center align-items-center ms-3">
                        <div className="profile-container position-relative ml-3 mb-2 ">
                          <div className="profile-img-container d-inline-block">
                            <div className="d-flex align-items-center h-100 w-100 position-relative">
                              <img
                                className="col-12"
                                src="https://lh3.googleusercontent.com/a/ACg8ocLXngg7i2FFAbNUYiTu4Dues4N9T8LLsOjRVgZ9Nhkbz9SiMw=s500-c"
                                alt=""
                              />
                              <button className="profile-overlay h-100 w-100 position-absolute"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-9 pr-5">
                <div className="image-container mb-5">
                <img src={items?.event_poster_url} alt="Event Poster" />
              </div>
              <div className="tabs">
                {/* <ul>
                  <li>
                    <a href="#about1">about</a>
                  </li>
                </ul> */}
              <button onClick={() => handleTabClick("about")}>About</button>
              <button onClick={() => handleTabClick("tickets")}>Tickets</button>
              <button onClick={() => handleTabClick("speakers")}>
                This is speakers section
              </button>
              <button onClick={() => handleTabClick("workshop")}>
                This is workshop section
              </button>
              <button onClick={() => handleTabClick("sponsors")}>
                This is event sponsors
              </button>
            </div>
            </div>
                <div className="col-lg-3">
                <div className='image-container1'>
                
                <div className='image-container2'>
                   <h4>{items?.name}</h4>
                   <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <p>
                      Online</p>
                    <p>Paid</p>
                   </div>
                 </div>
                 <button className="event-button w-100 mb-2" style={{color:'white', backgroundColor:'black'}}>Buy Now</button>
                 <button className="event-button w-100" style={{backgroundColor:'grey'}}>Official Website</button>
                </div>
                </div>
              </div>
            </div>
             <hr/>
            <div className="jsx-4d6d4e9e188d1eff container-color pt-0 p-4">
              <div className="row">
                <div className="jsx-4d6d4e9e188d1eff col-12 col-lg-9 col-xxl-9">
                  <div className="jsx-4d6d4e9e188d1eff event-details-bg-container pt-0 p-4">
                    <div className="jsx-4d6d4e9e188d1eff position-relative w-100 event-page-poster-container p-2 mb-3">
                      {activeTab === "about" && (
                        <div className="tab-content">
                          <h2 className="text-left">About Event</h2>
                          <div className="text-left"
                            dangerouslySetInnerHTML={createMarkup(
                              items?.description
                            )}
                          />
                        </div>
                      )}
                      {activeTab === "tickets" && (
                        <div className="tab-content">
                          <h2 className="text-left">Tickets</h2>
                          <div className="text-left"
                            dangerouslySetInnerHTML={createMarkup(
                              items?.description
                            )}
                          />
                        </div>
                      )}
                      {activeTab === "speakers" && (
                        <div className="tab-content">
                          <h2 className="text-left">{items?.speaker_section_title}</h2>
                          <div className="text-left"
                            dangerouslySetInnerHTML={createMarkup(
                              items?.speaker_section_description
                            )}
                          />
                          {/* <p>{items?.speaker_section_description}</p> */}
                          <div className="d-flex gap-2">
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img
                                    src={items?.organiser_image_url}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">Bruce Wayne</h5>
                                    <p className="card-text">
                                    Chairman
                                    </p>
                                    <p className="card-text">
                                    Wayne Enterprises
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img
                                    src={items?.organiser_image_url}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">Dark Knight</h5>
                                    <p className="card-text">
                                    Batman
                                    </p>
                                    <p className="card-text">
                                    Gotham
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "workshop" && (
                        <div className="tab-content">
                          <h2 className="text-left">{items?.workshop_section_title}</h2>
                          <div className="text-left"
                            dangerouslySetInnerHTML={createMarkup(
                              items?.workshop_section_description
                            )}
                          />
                           <div className="d-flex gap-2">
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img
                                    src={items?.organiser_image_url}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">Bruce Wayne</h5>
                                    <p className="card-text">
                                    Chairman
                                    </p>
                                    <p className="card-text">
                                    Wayne Enterprises
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img
                                    src={items?.organiser_image_url}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">Dark Knight</h5>
                                    <p className="card-text">
                                    Batman
                                    </p>
                                    <p className="card-text">
                                    Gotham
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img
                                    src={items?.organiser_image_url}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">Dark Knight</h5>
                                    <p className="card-text">
                                    Batman
                                    </p>
                                    <p className="card-text">
                                    Gotham
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "sponsors" && (
                        <div className="tab-content">
                          <h2 className="text-left">{items?.sponsor_section_title}</h2>
                          <div className="text-left"
                            dangerouslySetInnerHTML={createMarkup(
                              items?.sponsor_section_description
                            )}
                          />
                          {/* <p>{items?.sponsor_section_description}</p> */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </>
  );
};

export default Dashboard;