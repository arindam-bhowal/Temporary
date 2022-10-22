import React, { useState } from "react";
import './login.scss'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate()
    //   const auth= useSelector((state) => state.auth);
    //   const dispatch = useDispatch();
    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await axios.post(`${process.env.REACT_APP_HOST}/student/login`, {
            email: creds.email,
            password: creds.password,
        })
            .catch((err) => {
                alert('Login Failed');
                navigate('/login');
            });
        localStorage.setItem('Student', JSON.stringify(user.data))
        navigate('/')
    };


    return (
        <div className="login">
            {/* <div className="left"></div> */}
            <div className="bdy">
                <form
                    noValidate
                    autoComplete="off"
                    className="formStyle"
                    onSubmit={handleSubmit}
                >
                    <Typography className="Heading-Form" variant="h3">Sign In</Typography>
                    <TextField
                        className="spacing"
                        id="enter-email"
                        label="Enter Email ID"
                        variant="outlined"
                        fullWidth
                        value={creds.email}
                        onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                    />
                    <TextField
                        className="spacing"
                        id="enter-password"
                        type="password"
                        label="Enter Password"
                        variant="outlined"
                        fullWidth
                        value={creds.password}
                        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                    />
                    <p>New Here ?

                        <Link to='/register' > Register Now </Link>
                    </p>
                    <Button
                        variant="contained"
                        color="primary"
                        className="spacing"
                        type="submit"
                    >
                        SignIn
                    </Button>
                </form>
            </div>
            {/* <div className="right"></div> */}
        </div>
    );
};

export default Login;
