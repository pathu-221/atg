import React from 'react';

import './FeedOverview.styles.scss';

import { feedData } from './feeddata';

import FeedContainer from '../feedContainer/FeedContainer';

function FeedOverview({ type }) {
  console.log(feedData);
  return (
    <div className='feed-overview'>
      {
        !type ? (

            feedData.map(feed => (
              <FeedContainer { ...feed } />
            ))
        ) : null
      }
    </div>
  )
}

export default FeedOverview;