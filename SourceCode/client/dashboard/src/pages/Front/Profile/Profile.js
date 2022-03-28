import react, { useEffect, useState } from 'react';
import './Profile.css';
import MainHeader from '../../../components/MainHeader/MainHeader';
import Footer from '../../../components/Footer/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';
const Profile = () => {
  const [user, setUser] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { id, first_name, last_name, email, password, password2 } = user;

  //get current user info from local storage

  let currentUser = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    setUser({
      id: currentUser.id,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      email: currentUser.email,
      password: currentUser.password,
      password2: currentUser.password2,
    });
  }, [
    currentUser.id,
    currentUser.first_name,
    currentUser.last_name,
    currentUser.email,
    currentUser.password,
    currentUser.password2,
  ]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    currentUser.first_name = e.target.value;
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
    } else if (
      password === '' ||
      email === '' ||
      password2 === '' ||
      first_name === '' ||
      last_name === ''
    ) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all fields!',
      });
      // return;
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
      });
      try {
        const res = await axios.put(`http://127.0.0.1:8000/api/users/${user.id}`, body, config);
        if (res.status === 200) {
          await Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Profile updated successfully!',
          });
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      } catch (err) {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.error,
        });
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div>
      <MainHeader />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt={'profile-img'}
              />
              <span className="font-weight-bold">{user ? first_name + last_name : ''}</span>
              <span className="text-black-50">{user ? email : ''}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-6 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    className="au-input au-input--full"
                    type="text"
                    name="first_name"
                    value={user.first_name}
                    onChange={e => onChange(e)}
                    placeholder="Your First Name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    className="au-input au-input--full"
                    type="text"
                    name="last_name"
                    value={user.last_name}
                    onChange={e => onChange(e)}
                    placeholder="Your Last Name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    className="au-input au-input--full"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={e => onChange(e)}
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Password</label>
                  <input
                    className="au-input au-input--full"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={e => onChange(e)}
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Confirm Your Password</label>
                  <input
                    className="au-input au-input--full"
                    type="password"
                    name="password2"
                    value={user.password2}
                    onChange={e => onChange(e)}
                    placeholder="Confirm Your Password"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button onClick={onSubmit} className="btn btn-primary " type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
