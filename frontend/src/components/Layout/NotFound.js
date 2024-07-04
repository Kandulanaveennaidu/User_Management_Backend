import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <Container className="text-center mt-5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="display-1">404</h1>
                <h2 className="mb-4">Page Not Found</h2>
                <p className="lead mb-4">The page you are looking for doesn't exist or has been moved.</p>
                <Button as={Link} to="/" variant="primary">
                    Go to Home
                </Button>
            </motion.div>
        </Container>
    );
};

export default NotFound;