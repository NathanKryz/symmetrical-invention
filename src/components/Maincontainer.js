// Check for the page and render appropriately
// Render the header, which renders the navigation, the page, then render the footer

import Header from './Header';
import Footer from './Footer';


export default function MainContainer() {
  
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
