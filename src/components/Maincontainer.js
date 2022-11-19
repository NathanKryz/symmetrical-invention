// Check for the page and render appropriately
// Render the header, which renders the navigation, the page, then render the footer

import Header from './Header';
import Footer from './Footer';


export default function MainContainer() {
  
  return (
    <div className="pageRender">
        <div id="main">
      <Header />
      </div>
      <nav className="navbar navbar-expand-lg d-flex flex-wrap justify-content-between position-relative linkNav">
        <h2 className="navbar-brand">Additional Links</h2>
      <Footer />
      </nav>
      <div className="backColour"></div>
    </div>
  );
}
