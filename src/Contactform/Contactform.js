import React, { useState } from 'react';
import "./Contactform.css";

function Contactform() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
    
        // Regex patterns for validation
        const namePattern = /^[a-zA-Z\s]*$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        console.log("formData:", formData);
    
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        } else if (!namePattern.test(formData.firstName)) {
            errors.firstName = 'Invalid first name';
        }
    
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        } else if (!namePattern.test(formData.lastName)) {
            errors.lastName = 'Invalid last name';
        }
    
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            errors.email = 'Email is not correct';
        }
    
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
    
        console.log("errors:", errors);
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            // Form submission logic
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className='contact-form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={errors.firstName ? 'error' : ''} />
                {errors.firstName && <p className="error">{errors.firstName}</p>}

                <label htmlFor="lastName">Last name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={errors.lastName ? 'error' : ''} />
                {errors.lastName && <p className="error">{errors.lastName}</p>}

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                {errors.email && <p className="error">{errors.email}</p>}

                <label htmlFor="message">Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={errors.message ? 'error' : ''} />
                {errors.message && <p className="error">{errors.message}</p>}

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contactform;
