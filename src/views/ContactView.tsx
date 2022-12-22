import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import MapSection from '../sections/MapSection';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import ContactUsSection from '../sections/ContactUsSection'

// View for contact form

const ContactView: React.FC = () => {

  document.title = 'Contact us | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Contact us" />
      <MapSection />
      <ContactUsSection />
      <FooterSection />
    </>
  )
}

export default ContactView