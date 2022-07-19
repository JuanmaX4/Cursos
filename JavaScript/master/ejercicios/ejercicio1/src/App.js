import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="App">
      <div class="App-navBar">
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src={ require('./logo.png')}
              height='90'
              alt='logoNavBar'
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      </div>
      <div class="persona" align="center">
          <img  id="ima" src={ require('./logoBarra.jpg')} height='90' alt='logoPerfil'/>
        <h1>Aitana Landáburu García</h1>
        <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>Valencia, Spain</h3>
      </div>
    </div>
  );
}