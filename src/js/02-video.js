import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
player.on('timeupdate', handlerUpdate);
function handlerUpdate(event) {
  const videoTime = 'videoplayer-current-time';
  localStorage.setItem(videoTime, event.seconds);
}
