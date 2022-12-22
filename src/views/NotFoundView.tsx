import { NavLink } from 'react-router-dom';
import NotFoundImg from '../assets/images/site-general/404.jpg'

const NotFoundView: React.FC = () => {
  document.title = '404 - Not found | Fixxo.'

  // 404-page when page is not found or doesn't exists. Also: Rick and Morty <3

  return (
    <section className='not-found'>
      <div className='container'>
        <h1>404 - This is wrong</h1>
        <img src={NotFoundImg} />
        <p className='notfound'>Really, you're gonna pull that move? I guided your entire civilisation. Your people have a holiday named ricksgiving.
          They teach kids about me in school. I mean, why would a poptart want to live inside a toaster, Rick?
          I mean, that would be like the scariest place for them to live.
        </p>
        <NavLink to="/" className='not-found-link'>Go home</NavLink>
      </div>
    </section>
  )
}

export default NotFoundView