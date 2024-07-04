import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import { register } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        profession: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            setSuccess('Registration successful!');
            localStorage.setItem('token', response.data.token);
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            setError(err.response?.data?.msg || 'An error occurred');
        }
    };

    return (
        <Container className="mt-5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="p-4">
                    <h2 className="text-center mb-4">Create an Account</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faUser} className="me-2" />Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faEnvelope} className="me-2" />Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faLock} className="me-2" />Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Create a strong password"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faPhone} className="me-2" />Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faBriefcase} className="me-2" />Profession</Form.Label>
                            <Form.Control
                                type="text"
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                required
                                placeholder="Enter your profession"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Register
                        </Button>
                    </Form>
                </Card>
            </motion.div>
        </Container>
    );
};

export default Register;