import React from 'react';
import { Container, Nav, Navbar, Image, Button } from 'react-bootstrap';
import { IoIosAdd } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      bg="light"
      className="ui fixed menu justify-content-between"
      variant="light"
      style={{
        height: 80,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="d-flex align-items-center">
        <Link to="/" className="d-flex align-items-center">
          <Image
            src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
            alt="Logo"
            width="100"
            height="50"
            className="mr-2"
          />
          <h2 className="mb-0">Apple Store</h2>
        </Link>
      </div>

      <Button
        variant="white"
        as={Link}
        to="/create"
        className="d-flex align-items-center"
        style={{ fontSize: '1.5rem' }}
      >
       <IoIosAdd />
      </Button>
    </Navbar>
  );
};

export default Header;
