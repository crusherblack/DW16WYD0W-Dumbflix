import React, { useState } from 'react';
import './Register.css';

const Register = ({ showModalRegister }) => {
	return (
		<div>
			<div className="modal">
				<div className="modal-content">
					<span className="close" onClick={() => showModalRegister()}>
						X
					</span>
					<h1 style={{ marginBottom: '40px' }}>REGISTER</h1>
					<div className="form-group">
						<input type="text" className="custom-input" placeholder="Email" />
					</div>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Fullname"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Gender"
						/>
					</div>
					<div className="form-group">
						<input type="text" className="custom-input" placeholder="Phone" />
					</div>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Address"
						/>
					</div>
					<div className="form-group" style={{ marginTop: '50px' }}>
						<button className="button-register">Register</button>
					</div>
					<p style={{ color: '#B1B1B1', fontSize: '18px' }}>
						Already have an account ? Klik{' '}
						<span style={{ fontWeight: '900', cursor: 'pointer' }}>Here</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
