import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const videoTime = 'videoplayer-current-time';
document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem(videoTime);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});
player.on('timeupdate', throttle(handlerUpdate, 1000));
function handlerUpdate(event) {
  localStorage.setItem(videoTime, JSON.stringify(event.seconds));
}
