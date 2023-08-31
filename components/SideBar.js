import React from "react";
import styled from "styled-components";
import {MdRestaurantMenu, MdMail} from 'react-icons/md';
import {FaDice} from 'react-icons/fa';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #2A4F6E;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FFFCD1;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #FF5B00;
    }
  }
`;

const SideBar = ({ open }) => {

  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="home">
        <MdRestaurantMenu/>
        </span>
        Accueil
      </a>
      <a href="/library">
        <span role="img" aria-label="library">
            <FaDice/>
        </span>
        Ludothèque
      </a>
      <a href="/contact">
        <span role="img" aria-label="contact">
          <MdMail/>
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

export default SideBar;