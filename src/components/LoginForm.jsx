import React from 'react'
import PropTypes from 'prop-types'
import './LoginForm.css'

const LoginForm = props => {
  const handleChange = () => {}
  return (
    <div className="right-card">
        <div className="head-form-head">
            <div className="text-head"> 
                <span>About</span>&nbsp;&nbsp;|&nbsp;&nbsp; <span>How to use
                </span> 
            </div>
            <div className="div-head-right">
                <img src="USA-flag.jpg" alt="us-flag"className="img" /> &nbsp; 
                <span>Eng</span>
                <select className="select"></select>
            </div>
        </div>
   
        <div className="div-login">
            <h2 className='loginForm-h2'>Login</h2>
            <p>Enter your email and password to sign in!
            </p>
        </div>
        <div className="wrapper">
        
            <label className="formlabel" htmlFor="email">
                login<span>*</span>
            </label>
            <input
                type="email"
                id="email"
                className="forminput"
                placeholder="login"
            />
            <label className="formlabel password" htmlFor="password">
                Password<span>*</span>
            </label>
                
                <input
                    className="forminput password"
                    type="password"
                    id="password"
                    placeholder="password"
                />
                {/* <i className="fa fa-eye"></i> */}
            <div className="div-checked-passw">
                <div className="div-checked-keep-me">
                    <input
                        className="checkbox"
                        type="checkbox"
                        
                        onChange={handleChange}
                    /> 
                    <span>Keep me logged in</span>
                </div>
        
                <span>Forgot password ?</span>
            </div>
        
            <button
                className="submit"
                type="submit"
            >sign In</button>
            <button
                className="submit-plus"
                type="submit"
            >login</button>
            </div>
        
            <div className="div-hr">
                <span className='span-line1'></span>
                <span className='span-login'>&nbsp;Or login with&nbsp;</span>
                <span className='span-line1'></span>
            </div>

            <div className="div-hr-replace">
                &nbsp;Or login with&nbsp;<select name="select" id="" className='select-hr'></select>
            </div>
            <div className="div-btn-plus">
                <span>Terms</span>
                <span>Privacy</span>
                <span>status</span>
                <span>Data</span>
            </div>
            <div className="div-btn">
                <button className="buton">
                    <i className="fa fa-linkedin"></i>
                </button>
                <button className="buton">
                    <i className="fa fa-facebook"></i>
                </button>
                <button className="buton">
                    <i className="fa fa-google"></i>
                </button>
            </div>

    <div  className="div-end-head">
            <div className="div-end">
                <span>Terms</span>|
                <span>Privacy</span>|
                <span>status</span>|
                <span>Data</span>
            </div>
            <div className="div-end-end">
                <span className='last-line'>2024 LIMS All right reserved</span>
            
            </div>
            <div className="div-end-end-plus">
            <span className='last-line-replae'>&copy;2024 LIMS.</span>
            <span>All right reserved</span>

            </div>
    </div>
</div>
  )
}

LoginForm.propTypes = {

}

export default LoginForm
