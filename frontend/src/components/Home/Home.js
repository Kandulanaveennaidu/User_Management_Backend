import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UserList from '../User/UserList';
import { getAllUsers } from '../../services/auth';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <Container className="mt-5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center mb-4">Welcome to the User Management System</h2>
                <Row className="mb-4">
                    <Col md={4}>
                        <Card className="text-center p-3">
                            <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3" />
                            <h3>Total Users</h3>
                            <p className="display-4">{users.length}</p>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-3">
                            <FontAwesomeIcon icon={faUserPlus} size="3x" className="mb-3" />
                            <h3>New Users</h3>
                            <p className="display-4">5</p>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-3">
                            <FontAwesomeIcon icon={faUserMinus} size="3x" className="mb-3" />
                            <h3>Deleted Users</h3>
                            <p className="display-4">2</p>
                        </Card>
                    </Col>
                </Row>
                <UserList users={users} onUserDeleted={fetchUsers} />
            </motion.div>
        </Container>
    );
};

export default Home;