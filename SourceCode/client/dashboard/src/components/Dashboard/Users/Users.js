import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';
import HeaderMob from '../HeaderMob/HeaderMob';
import Header from '../Header/Header';

const Users = () => {
const navigate = useNavigate();
const [users, setUsers] = useState([{
id: 1, name: '', email: '', password: '', role: '',
}]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
useEffect(() => {
const fetchData = async () => {
try {
const result = await axios.get('http://127.0.0.1:8000/api/users');
console.log(result.data.users);
setUsers(result.data.users);
setLoading(false);
} catch (er) {
setError(true);
setLoading(false);
}
};
fetchData();
}, [users.id]);

const deleteUser = async (id) => {
console.log(id);
//    handle the delete request to with method not allowed error
//    axios.delete(`http://
try {
Swal.fire({
title: 'Are you sure?',
text: 'You won\'t be able to revert this!',
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Yes, delete it!',
}).then((result) => {
if (result.value) {
Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
setUsers(users.filter((user) => user.id !== id));
}
navigate('/users');
});
} catch (error) {
console.log(error);
}
};

return (
<>
<div className=''>
<div className='page-wrapper'>
<HeaderMob />
<div className='page-container'>
<Header />
<div className='main-content'>
    <div className='section__content section__content--p30'>
        <div className='container-fluid'>
            <AddItem
                title={'Users'}
                name={'Add New User'}
                path={'/add'}
            />
            <div className='row mt-3'>
                <div className='col-lg-12'>
                    <div className='table-responsive table--no-card m-b-40'>
                        <table className='table table-borderless table-striped table-earning'>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th className='text-right'>
                                    Email
                                </th>
                                <th className='text-right'>
                                    Last Login
                                </th>
                                <th className='text-right'>
                                    Role
                                </th>
                                <th className='text-right'>
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {loading ? (<tr>
                                <td colSpan='7'>
                                    Loading...
                                </td>
                            </tr>) : error ? (<tr>
                                <td colSpan='7'>
                                    Something
                                    went wrong.
                                    Please try
                                    again.
                                </td>
                            </tr>) : (users.map((user, index) => (<tr
                                key={index}
                            >
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.first_name}
                                </td>
                                <td>
                                    {user.last_name}
                                </td>
                                <td className='text-right'>
                                    {user.email}
                                </td>
                                <td className='text-right'>
                                    {user.last_login}
                                </td>
                                <td className='text-right'>
                                    {user.is_admin ? 'Admin' : 'User'}
                                </td>
                                <td className='text-right'>
                                    <i
                                        className='fas fa-trash text-danger'
                                        onClick={() => deleteUser(user.id)}
                                    />
                                    <i
                                        className='m-2 fas fa-edit text-primary'
                                        onClick={() => navigate()}
                                    />
                                </td>
                            </tr>)))}
                            {users.length === 0 && !loading && !error && (<tr>
                                <td
                                    colSpan='7'
                                    className={'text-center'}
                                >
                                    <h1>
                                        {' '}
                                        No
                                        users
                                        found.{' '}
                                    </h1>
                                </td>
                            </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*<CreateUser />*/}
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</>);
};

export default Users;
