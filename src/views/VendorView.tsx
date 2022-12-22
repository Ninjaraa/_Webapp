import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import VendorForm from '../components/vendor/VendorForm';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import VendorList from '../components/vendor/VendorList'

// View to create and see all vendors

const VendorView: React.FC = () => {
  return (

    <>
    <MainMenuSection />
    <BreadCrumbSection currentPage="Vendor View" />
    <VendorForm />
    <VendorList />
    <FooterSection />
  </>
  )
}

export default VendorView