// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{

    constructor(){
      super()

      this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            }
          }
        }
    }

    clickBR = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }

    clickRes = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })
    }
    render(){
      return(
      <div>
        <button className='bitrate' onClick={this.clickBR}></button>
        <button className='resolution' onClick={this.clickRes}></button>

      </div>
    );
  }
}


// Create a button with the class `'bitrate'`. Clicking this button changes the `settings.bitrate` state property to `12`.
// 4. Create a button with the class `'resolution'`. Clicking this button changes the `settings.video.resolution` state property to `'720p'`.
