import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Preloader from '../../components/Preloader/Preloader';
import MainHeader from '../../components/MainHeader/MainHeader';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import SimpleAccordion from '../../components/Accordion';

const CategoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [resources, setResources] = useState([]);
  const [videoId, setVideoId] = useState('');
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios(`http://127.0.0.1:8000/api/course/${id}`);
        setCourses(result.data);

        setLoading(false);
        // console.log(result.data + 'result courses');
        console.log(courses + 'courses');
      } catch (er) {
        setError(true);
      }
    };
    fetchData();
  }, [id]);

  //api youtube key AIzaSyDIIxAoo1kzmw0N4kXr8srjX6S6ElNW9bY

  useEffect(async () => {
    try {
      setLoading(true);
      const result = await axios(`http://127.0.0.1:8000/api/course/5/resources`);
      setResources(result.data);
      result.data.map(resource => {
        resources.push(resource);
      });

      setLoading(false);
      setError(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }, [id]);

  // const videoId =(id){
  //       console.log(resources.videos + 'resource type');
  //   }

  const getVideoId = id => {
    //filter resources by id and get the clicked video id
    setOpen(true);
    const video = resources.filter(resource => resource.id === id);
    console.log(video[0].videos + 'video id');
    //set the video id which is clicked
    setVideoId(video[0].videos);

    console.log(id + 'idsssssssssssssssssssss');
  };

  let playlist = 'N4mPR7I_wac';
  const API = 'AIzaSyDIIxAoo1kzmw0N4kXr8srjX6S6ElNW9bY';

  const closeModal = () => {
    setOpen(false);
  };

  const getFiles = id => {
    //filter resources by id and get the clicked video id
    setOpen(true);
    const file = resources.filter(resource => resource.id === id);
    console.log(file[0].files + 'file id');
    //set the video id which is clicked
    setFiles(file[0].files);

    console.log(id + 'Filessss');
  };
  // const url = `http://localhost:8000/files/' + ${file}`;

  const handleDownload = async file => {
    try {
      setLoading(true);
      const url = await axios.get(`http://localhost:8000/resource/download/${file}`);
      console.log(url.data.url);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <MainHeader />
      <section className="course-details">
        <div className="container">
          <div className="row">
            {loading ? (
              <Preloader />
            ) : (
              <>
                {courses.map((item, i) => {
                  return (
                    <>
                      <div className="col-xl-8 col-lg-8" key={i}>
                        <div className="course-details__content">
                          <div
                            className="courses-one__single style2 wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms"
                          >
                            <div className="courses-one__single-img">
                              <img
                                src={'http://localhost:8000/uploads/' + item.image}
                                alt={item.name}
                                className="w-50"
                              />
                              <div className="overlay-text">
                                <p>Featured</p>
                              </div>
                            </div>
                            <div className="courses-one__single-content">
                              <div className="courses-one__single-content-overlay-img ">
                                <img
                                  src={'http://localhost:8000/uploads/' + item.image}
                                  alt={item.name}
                                  className="w-25"
                                />
                              </div>
                              <h6 className="courses-one__single-content-name">
                                {item.name}
                                <span>Recently Updated {item.updated_at}</span>
                              </h6>
                              <h4 className="courses-one__single-content-title ">{item.name}</h4>
                              <div className="courses-one__single-content-review-box">
                                <div className="rateing-box"></div>
                              </div>
                              <div className="course-details__content-text1">
                                <p>{item.description}</p>
                              </div>

                              <div className="course-details__content-text2">
                                <p> {item.description}</p>
                              </div>

                              <div className="course-details__content-list">
                                <ul className="list-unstyled">
                                  <li>
                                    <div className="icon">
                                      <span className="icon-confirmation"></span>
                                    </div>
                                    <div className="text">
                                      <p>{item.requirements}</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="course-details__curriculum">
                            <h2 className="course-details__curriculum-title">Curriculum</h2>

                            <div className="course-details__curriculum-single">
                              <h3 className="course-details__curriculum-single-title">
                                Starting Beginners Level Course
                              </h3>
                              <p className="course-details__curriculum-single-text">
                                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard dummy text
                                ever since.
                              </p>
                              <ul className="course-details__curriculum-list list-unstyled">
                                {loading ? (
                                  <Preloader />
                                ) : error ? (
                                  <div className="alert alert-danger">
                                    <p>{error}</p>
                                  </div>
                                ) : (
                                  <>
                                    {resources.map(resource => (
                                      <li>
                                        <div className="course-details__curriculum-list-left">
                                          <div className="course-details__curriculum-list-left-icon">
                                            <i className="fa fa-play" aria-hidden="true" />
                                          </div>

                                          <ModalVideo
                                            channel="youtube"
                                            autoplay
                                            isOpen={isOpen}
                                            videoId={videoId}
                                            onClose={closeModal}
                                          />
                                          <p
                                            onClick={() => getVideoId(resource.id)}
                                            className="course-details__curriculum-list-left-title"
                                          >
                                            Overview of Editing {resource.id}
                                            <span onClick={() => getVideoId(resource.id)}>
                                              Preview
                                            </span>
                                          </p>
                                        </div>
                                        <div className="course-details__curriculum-list-right">
                                          <p>{resource.videos}</p>
                                        </div>
                                      </li>
                                    ))}
                                  </>
                                )}

                                <li>
                                  <div className="course-details__curriculum-list-left">
                                    <div className="course-details__curriculum-list-left-icon">
                                      <i className="fa fa-folder" aria-hidden="true"></i>
                                    </div>
                                    <a
                                      href="#"
                                      className="course-details__curriculum-list-left-title"
                                    >
                                      Basic Editing Technology
                                    </a>
                                  </div>
                                </li>

                                <li>
                                  <div className="course-details__curriculum-list-left">
                                    <div className="course-details__curriculum-list-left-icon style2">
                                      <i className="fa fa-comment" aria-hidden="true"></i>
                                    </div>
                                    <a
                                      href="#"
                                      className="course-details__curriculum-list-left-title"
                                    >
                                      Quiz
                                    </a>
                                  </div>
                                  <div className="course-details__curriculum-list-right">
                                    <p>6 questions</p>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            {/*<div className="course-details__curriculum-single mar-buttom0">*/}
                            {/*  <h3 className="course-details__curriculum-single-title">*/}
                            {/*    Course Materials*/}
                            {/*  </h3>*/}
                            {/*  <p className="course-details__curriculum-single-text">*/}
                            {/*    Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit*/}
                            {/*    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                            {/*    industry. Lorem Ipsum has been the industry’s standard dummy text*/}
                            {/*    ever since.*/}
                            {/*  </p>*/}
                            {/*  <ul className="course-details__curriculum-list style2 list-unstyled">*/}
                            {/*    {loading ? (*/}
                            {/*      <Preloader />*/}
                            {/*    ) : error ? (*/}
                            {/*      <div className="alert alert-danger">*/}
                            {/*        <p>{error}</p>*/}
                            {/*      </div>*/}
                            {/*    ) : (*/}
                            {/*      <>*/}
                            {/*        {resources.map(resource => (*/}
                            {/*          <>*/}
                            {/*            <li>*/}
                            {/*              <div className="course-details__curriculum-list-left">*/}
                            {/*                <div className="course-details__curriculum-list-left-icon">*/}
                            {/*                  <i className="fa fa-folder" aria-hidden="true"></i>*/}
                            {/*                </div>*/}
                            {/*                <a*/}
                            {/*                  download={resource.files}*/}
                            {/*                  href={'http://localhost:8000/files/' + resource.files}*/}
                            {/*                  className="course-details__curriculum-list-left-title"*/}
                            {/*                >*/}
                            {/*                  {resource.files.split('.')[0]}*/}
                            {/*                </a>*/}
                            {/*              </div>*/}
                            {/*            </li>*/}
                            {/*          </>*/}
                            {/*        ))}*/}
                            {/*      </>*/}
                            {/*    )}*/}
                            {/*  </ul>*/}
                            {/*</div>*/}
                          </div>
                        </div>
                      </div>

                      {/*{loading ? (*/}
                      {/*    <Preloader />*/}
                      {/*) : error ? (*/}
                      {/*    <div className="alert alert-danger">*/}
                      {/*        <p>{error}</p>*/}
                      {/*    </div>*/}
                      {/*) : (*/}
                      {/*    <>*/}
                      {/*        {resources.map(resource => (*/}
                      {/*            <>*/}
                      {/*                <li>*/}
                      {/*                    <div className="course-details__curriculum-list-left">*/}
                      {/*                        <div className="course-details__curriculum-list-left-icon">*/}
                      {/*                            <i className="fa fa-folder" aria-hidden="true"></i>*/}
                      {/*                        </div>*/}
                      {/*                        <a*/}
                      {/*                            download={resource.files}*/}
                      {/*                            href={'http://localhost:8000/files/' + resource.files}*/}
                      {/*                            className="course-details__curriculum-list-left-title"*/}
                      {/*                        >*/}
                      {/*                            {resource.files.split('.')[0]}*/}
                      {/*                        </a>*/}
                      {/*                    </div>*/}
                      {/*                </li>*/}
                      {/*            </>*/}
                      {/*        ))}*/}
                      {/*    </>*/}
                      {/*)}*/}

                      <div className="col-xl-4 col-lg-4">
                        <div className="course-details__sidebar">
                          <div
                            className="course-details__price wow fadeInUp animated"
                            data-wow-delay="0.1s"
                          >
                            <h2 className="course-details__price-amount">
                              $30.00
                              <span>
                                <del>$60.00</del>
                              </span>
                            </h2>
                            <div className="course-details__price-btn">
                              <a href="about.html" className="thm-btn">
                                Buy this course
                              </a>
                            </div>
                          </div>

                          <div
                            className="course-details__sidebar-meta wow fadeInUp animated"
                            data-wow-delay="0.3s"
                          >
                            <ul className="course-details__sidebar-meta-list list-unstyled">
                              {/*<li className="course-details__sidebar-meta-list-item">*/}
                              {/*  <div className="icon">*/}
                              {/*    <a href="">*/}
                              {/*      <i className="far fa-folder-open"></i>*/}
                              {/*    </a>*/}
                              {/*  </div>*/}
                              {/*  <div className="text">*/}
                              {/*    <p>*/}
                              {/*      <a href="#">*/}
                              {/*        Lectures:<span> {resources.length}</span>*/}
                              {/*      </a>*/}
                              {/*    </p>*/}
                              {/*  </div>*/}
                              {/*</li>*/}

                              {/*<li className="course-details__sidebar-meta-list-item">*/}
                              {/*  <div className="icon">*/}
                              {/*    <a href="">*/}
                              {/*      <i className="far fa-user-circle"></i>*/}
                              {/*    </a>*/}
                              {/*  </div>*/}
                              {/*  <div className="text">*/}
                              {/*    <p>*/}
                              {/*      <a href="#">*/}
                              {/*        Students:*/}
                              {/*        <span> Max 6</span>*/}
                              {/*      </a>*/}
                              {/*    </p>*/}
                              {/*  </div>*/}
                              {/*</li>*/}

                              {/*<li className="course-details__sidebar-meta-list-item">*/}
                              {/*  <div className="icon">*/}
                              {/*    <a href="">*/}
                              {/*      <i className="fas fa-play"></i>*/}
                              {/*    </a>*/}
                              {/*  </div>*/}
                              {/*  <div className="text">*/}
                              {/*    <p>*/}
                              {/*      <a href="#">*/}
                              {/*        Video:*/}
                              {/*        <span> {resources.length} hours</span>*/}
                              {/*      </a>*/}
                              {/*    </p>*/}
                              {/*  </div>*/}
                              {/*</li>*/}

                              {/*<li className="course-details__sidebar-meta-list-item">*/}
                              {/*  <div className="icon">*/}
                              {/*    <a href="">*/}
                              {/*      <i className="far fa-flag"></i>*/}
                              {/*    </a>*/}
                              {/*  </div>*/}
                              {/*  <div className="text">*/}
                              {/*    <p>*/}
                              {/*      <a href="#">*/}
                              {/*        Skill Level:*/}
                              {/*        <span>Advanced</span>*/}
                              {/*      </a>*/}
                              {/*    </p>*/}
                              {/*  </div>*/}
                              {/*</li>*/}

                              <SimpleAccordion />
                              <li className="course-details__sidebar-meta-list-item">
                                {/*<div className="icon">*/}
                                {/*  <a href="">*/}
                                {/*    <i className="far fa-bell"></i>*/}
                                {/*  </a>*/}
                                {/*</div>*/}
                                <div className="text">
                                  <p>{/*<a href="#">Language:</a>*/}</p>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div
                            className="course-details__new-courses wow fadeInUp animated"
                            data-wow-delay="0.5s"
                          >
                            <h3 className="course-details__new-courses-title">
                              New Courses Materials
                            </h3>
                            <ul className="course-details__new-courses-list list-unstyled">
                              {loading ? (
                                <Preloader />
                              ) : error ? (
                                <div className="alert alert-danger">
                                  <p>{error}</p>
                                </div>
                              ) : (
                                <>
                                  <>
                                    {resources.map(resource => (
                                      <li className="course-details__new-courses-list-item">
                                        <div className="course-details__new-courses-list-item-img">
                                          <img
                                            className={'w-25'}
                                            src={
                                              'http://localhost:8000/uploads/resources/' +
                                              resource.images
                                            }
                                            alt={resource.files.split('.')[0]}
                                          />
                                        </div>
                                        <div className="course-details__new-courses-list-item-content">
                                          <h4 className="course-details__new-courses-list-item-content-title">
                                            <a
                                              download
                                              target="_blank"
                                              href={'http://localhost:8000/files/' + resource.files}
                                              className="course-details__curriculum-list-left-title"
                                            >
                                              {resource.files.split('.')[0]}
                                            </a>
                                          </h4>
                                          {/*<p className="course-details__new-courses-price">*/}
                                          {/*  {resource.files.split('.')[0]}*/}
                                          {/*</p>*/}
                                        </div>
                                      </li>
                                    ))}
                                  </>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;
