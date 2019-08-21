import React,{Component} from 'react';
import { Player } from 'video-react';
import styled from 'styled-components';
import jdata from '../../src/data.json';
import ReactAwesomePlayer from 'react-awesome-player'
var _ = require('lodash');
class Home extends Component{
    state = {
        options: {
        //   poster: "http://pic2.52pk.com/files/130514/1283314_143556_2145.jpg",
          poster:"https://media-cdn.tripadvisor.com/media/photo-s/09/b6/71/9a/jpeg-image-45819-largejpg.jpg",
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          subtitles: [{
              language: 'en',
              url: "https://peng666.github.io/react-awesome-player/zh.vtt",
              label: "enquero"
            },
            {
              language: 'en',
              url: "https://peng666.github.io/react-awesome-player/en.vtt",
              label: "EN"
          }],
          defaultSubtitle: 'en'
        },
        object2 : {
            "name":"sikandar",
            "surname":"kumar"
        }
    }
    loadeddata() {
        console.log('loadeddata')
      }
      canplay() {
        console.log('canplay')
      }
      canplaythrough() {
        console.log('canplaythrough')
      }
      play() {
        console.log('play')
      }
      pause() {
        //   alert("you paused the video");
        console.log('pause')
      }
      waiting() {
        console.log('waiting')
      }
      playing() {
        console.log('playing')
      }
      ended() {
        console.log('ended')
      }
      error() {
        console.log('error')
      }
    
    // clickhandler = () =>{
    //     console.log("click handler... ");
    // }
    render(){
        const { options } = this.state
        console.log(_.isEqual(this.state.object2, jdata));
        return <ReactAwesomePlayer 
                    options={options}
                    loadeddata={this.loadeddata}
                    canplay={this.canplay}
                    canplaythrough={this.canplaythrough}
                    play={this.play}
                    pause={this.pause}
                    waiting={this.waiting}
                    playing={this.playing}
                    ended={this.ended}
                    error={this.error}
      />
    }
}

export default Home;

// const Button = styled.button`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `;
const data = styled.div`
   color:red;

`; 