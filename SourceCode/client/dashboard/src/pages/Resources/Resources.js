import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import HeaderMob from '../../components/Dashboard/HeaderMob/HeaderMob';
import Header from '../../components/Dashboard/Header/Header';
import AddItem from '../../components/Dashboard/AddItem/AddItem';

function Resources() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resources, setResources] = useState({
    id: 1,
    name: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('http://127.0.0.1:8000/api/resources');
        setResources(data);
        setLoading(false);
        setError(false);
      } catch (er) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData().then(r => setLoading(false));
  }, [resources.id]);

  const deleteResource = async id => {
    console.log(id);
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.value) {
          Swal.fire('Deleted!', 'Your resource has been deleted.', 'success');
          axios.delete(`http://127.0.0.1:8000/api/course/resource/${id}`);
          setResources(resources.filter(resource => resource.id !== id));
        }
        navigate('/resources');
      });
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <HeaderMob />
        <div className="page-container">
          <Header />
          <div className="main-content">
            <div className="section__content section__content--p30">
              <div className="container-fluid">
                <AddItem title={'Resources'} name={'Add New Resource'} path={'create-resource'} />
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="table-responsive table--no-card m-b-40">
                      <table className="table table-borderless table-striped table-earning">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>files</th>
                            <th>videos</th>
                            <th className="text-right">images</th>
                            <th className="text-right">courses_id</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <tr>
                              <td colSpan="7">Loading...</td>
                            </tr>
                          ) : error ? (
                            <tr>
                              <td colSpan="7">Something went wrong. Please try again.</td>
                            </tr>
                          ) : (
                            resources.map((resource, index) => (
                              <tr key={index}>
                                <td>{resource.id}</td>
                                <td>
                                  {/*  split the extinction from the name*/}

                                  {resource.files}
                                </td>
                                <td>{resource.videos}</td>
                                <td>
                                  <img
                                    src={
                                      'http://localhost:8000/uploads/resources/' + resource.images
                                    }
                                    alt="category"
                                    className={'w-25'}
                                  />
                                </td>
                                <td className="text-right">{resource.courses_id}</td>

                                <td className="text-right">
                                  <i
                                    className="fas fa-trash text-danger"
                                    onClick={() => deleteResource(resource.id)}
                                  ></i>
                                  <i
                                    className="m-2 fas fa-edit text-primary"
                                    onClick={() => navigate()}
                                  ></i>
                                </td>
                              </tr>
                            ))
                          )}
                          {resources.length === 0 && !loading && !error && (
                            <tr>
                              <td colSpan="7" className={'text-center'}>
                                <h1> No Resource found. </h1>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
