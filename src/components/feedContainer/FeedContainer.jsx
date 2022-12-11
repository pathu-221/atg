import React from 'react';

import './feedContainer.styles.scss';
import eyeicon from '../../assets/icons/eyeicon.png';
import shareicon from '../../assets/icons/shareicon.png';

function FeedContainer(props) {
  const { views, type, image, head, content, profilePic, profilename, company, location, date } = props;

  const selectType = (type) => {
    switch (type) {
      case 'article':
        return (
          <>
            <img src={image} />
            <div className='feed-text-content'>
              <h5>✍️ Article</h5>
              <span className='heading-section'><h3>{head}</h3><svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
              </svg>
              </span>
              <p>{content}</p>
              <span className='profile-share-section'>
                <span className='profile-picture-section'>
                  <img src={profilePic} />
                  <p className='profile-name'>{profilename}</p>
                </span>
                <span className='views-share'>
                  <img src={eyeicon} />
                  <p>{views}</p>
                  <img src={shareicon} />
                </span>
              </span>
            </div>
          </>

        )
      case 'education':
        return (
          <>
            <img src={image} />
            <div className='feed-text-content'>
              <h5>🔬️ Education</h5>
              <span className='heading-section'><h3>{head}</h3><svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
              </svg>
              </span>
              <p>{content}</p>
              <span className='profile-share-section'>
                <span className='profile-picture-section'>
                  <img src={profilePic} />
                  <p className='profile-name'>{profilename}</p>
                </span>
                <span className='views-share'>
                  <img src={eyeicon} />
                  <p>{views}</p>
                  <img src={shareicon} />
                </span>
              </span>
            </div>
          </>
        )
      case 'job':
        return (
          <>
            <div className='feed-text-content'>
              <h5>💼️ Job</h5>
              <span className='heading-section'><h3>{head}</h3><svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
              </svg>
              </span>
              <span className='content'>
                <span className='company'>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 4.00008V2.33341H7.33342V4.00008H10.6667ZM2.33341 5.66675V14.8334H15.6667V5.66675H2.33341ZM15.6667 4.00008C16.5917 4.00008 17.3334 4.74175 17.3334 5.66675V14.8334C17.3334 15.7584 16.5917 16.5001 15.6667 16.5001H2.33341C1.40841 16.5001 0.666748 15.7584 0.666748 14.8334L0.675081 5.66675C0.675081 4.74175 1.40841 4.00008 2.33341 4.00008H5.66675V2.33341C5.66675 1.40841 6.40841 0.666748 7.33342 0.666748H10.6667C11.5917 0.666748 12.3334 1.40841 12.3334 2.33341V4.00008H15.6667Z" fill="black" />
                  </svg>
                  <p>{company}</p>
                </span>
                <span className="location"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z" fill="black" />
                  <path d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z" fill="black" />
                </svg>
                  <p>{location}</p>
                </span>
              </span>
              <button className='meet-up-button green-text' >Apply on Timesjobs</button>

              <span className='profile-share-section'>
                <span className='profile-picture-section'>
                  <img src={profilePic} />
                  <p className='profile-name'>{profilename}</p>
                </span>
                <span className='views-share'>
                  <img src={eyeicon} />
                  <p>{views}</p>
                  <img src={shareicon} />
                </span>
              </span>
            </div>
          </>
        )
      case 'meetup':
        return (
          <>
            <img src={image} />
            <div className='feed-text-content'>
              <h5>🗓️ Meetup</h5>
              <span className='heading-section'><h3>{head}</h3><svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
              </svg>
              </span>
              <span className='content'>
                <span className='company'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_895)">
                      <path d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_895">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>{date}</p>
                </span>
                <span className="location"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z" fill="black" />
                  <path d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z" fill="black" />
                </svg>
                  <p>{location}</p>
                </span>
              </span>
              <button className='meet-up-button'>Visit Website</button>
              <span className='profile-share-section'>
                <span className='profile-picture-section'>
                  <img src={profilePic} />
                  <p className='profile-name'>{profilename}</p>
                </span>
                <span className='views-share'>
                  <img src={eyeicon} />
                  <p>{views}</p>
                  <img src={shareicon} />
                </span>
              </span>
            </div>
          </>
        )
      default:
        return;
    }
  }

  return (
    <div className='feed-content'>
      {
        selectType(type)
      }

    </div>
  )
}

export default FeedContainer