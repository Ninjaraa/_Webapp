import React from 'react';

//  External link with icon

interface IExternalLink {
  link: any
  icon: any
}


const ExternalLink: React.FC<IExternalLink> = ({ link, icon }) => {

  return (
    <a href={link}>
      <i className={icon}></i>
    </a>
  )
}

export default ExternalLink