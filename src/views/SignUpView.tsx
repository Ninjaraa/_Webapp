import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import SignUpFormSection from '../sections/SignUpFormSection'

// View to create a new user

const SignUp: React.FC = () => {

  document.title = 'Sign up | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Sign up" />
      <SignUpFormSection />
      <FooterSection />
    </>
  )
}

export default SignUp