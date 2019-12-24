import React from 'react';
import TextDiv from './text-div.js';

//Media icons
import pinterest from '../../../imgs/pinterest.svg';
import youtube from '../../../imgs/youtube.svg';
import facebook from '../../../imgs/facebook.svg';
import twitter from '../../../imgs/twitter.svg';

//Photos
import restaurantPic1 from '../../../imgs/restaurant1.jpg';
import restaurantPic2 from '../../../imgs/restaurant1.jpg';
import restaurantPic3 from '../../../imgs/restaurant1.jpg';
const photos = [restaurantPic1, restaurantPic2, restaurantPic3];

function ImgTag(props) {
  return <img className={props.classValue} src={props.imgSrc} alt={props.imgSrc} />
}

class MainPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: photos[0]
    };
  }

  render() {
    return (
        <ImgTag classValue='photos-main-img' imgSrc={this.state.imgSrc} />
    )
  }
}

class PhotosContainer extends React.Component {

  render() {
    const smallPhotos = this.props.photos;
    return (
      <div className='photos-container'>
        <div className='photos-main-photo-container'>
          <MainPicture />
        </div>
        <div className='photos-small-photos-container'>
          {smallPhotos.map((photo,index) => <ImgTag classValue="mini-photo" imgSrc={photo} key={index} />)}
        </div>
      </div>
    )
  }
}

class AboutContainer extends React.Component {

  render() {
    const mediaIcons = [pinterest,youtube,facebook,twitter];
    return (
      <div className="about-container">
        <TextDiv classValue='about-about'>
        <h3>About us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          justo odio, bibendum vel varius sed, vulputate nec orci. Integer
          a velit iaculis, suscipit neque tempor, porta odio. Suspendisse
          condimentum volutpat facilisis. Suspendisse potenti. Quisque et mattis
          lorem. Duis tristique sit amet turpis et placerat. Aenean erat lacus,
          facilisis ac faucibus non, sodales at arcu. In eu varius ex. Proin
          cursus metus ac egestas commodo. Quisque rutrum ligula a ultricies suscipit.</p>
        </TextDiv>
        <TextDiv classValue='about-contact'>
          <div className='contact-div'>
            <h3>Contact Us</h3>
            <p>Phone number: +123456789</p>
            <p>Email: restaurantEmail@gmail.com</p>
          </div>
          <div className='media-div'>
            <h3>Other pages</h3>
            <div className='media-icons'>
              {mediaIcons.map(icon => <ImgTag classValue='media-svg' imgSrc={icon} key={icon} />)}
            </div>
          </div>
        </TextDiv>
        <PhotosContainer photos={photos} />

      </div>
    )
  }
}

export default AboutContainer;
