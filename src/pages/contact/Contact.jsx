import './Contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Obcaecati, non? Nam ducimus consequuntur accusantium cumque
    facilis iusto, ratione cum in!
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:jon.pease@yahoo.com" target="__blank" rel=" noreferrer noopener"><MdEmail/></a>
          <a href="https://m.me/ernest_achiever" target="__blank" rel=" noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+8888675309" target="__blank" rel=" noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
  
    </>
  )
}

export default Contact