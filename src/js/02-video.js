import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const videoTime = 'videoplayer-current-time';
if (localStorage.getItem(videoTime) != 0) {
  player.setVideoTime(localStorage.getItem(videoTime));
}
player.on('timeupdate', throttle(handlerUpdate, 1000));
function handlerUpdate(event) {
  localStorage.setItem(videoTime, JSON.stringify(event.seconds));
}
