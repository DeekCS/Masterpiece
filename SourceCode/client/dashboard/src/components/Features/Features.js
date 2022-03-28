import React from 'react';

const Features = () => {
  return (
    <section className="features-one">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="features-one__single">
              <div className="features-one__single-icon">
                <span className="icon-empowerment" />
              </div>
              <div className="features-one__single-text">
                <h4>
                  <a href="/">Learn Skills</a>
                </h4>
                <p>with unlimited courses</p>
              </div>
            </div>
          </div>
          {
            //    get all users courses query sqll
          }
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="features-one__single">
              <div className="features-one__single-icon">
                <span className="icon-human-resources-1" />
              </div>
              <div className="features-one__single-text">
                <h4>
                  <a href="/">Expert Teachers</a>
                </h4>
                <p>best & highly qualified</p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="features-one__single">
              <div className="features-one__single-icon">
                <span className="icon-recruitment" />
              </div>
              <div className="features-one__single-text">
                <h4>
                  <a href="/">Certificates</a>
                </h4>
                <p>value all over the world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
