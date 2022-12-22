import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import BreadCrumbSection from '../sections/BreadcrumbSection';
import SignInFormSection from '../sections/SignInFormSection'

// View to login with user credentials

const SignIn: React.FC = () => {

  document.title = 'Sign in | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Sign in" />
      <SignInFormSection />
      <FooterSection />
    </>
  )
}

export default SignIn