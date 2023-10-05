const onoffswitch = document.getElementById('myonoffswitch');
const gcseSearch = document.getElementsByClassName('google_search');
const chatSearchBox = document.getElementsByClassName('col')
const chatSearchButton = document.getElementsByClassName('col-auto')

onoffswitch.addEventListener('change', function() {
  if (this.checked) {
    gcseSearch[0].style.display = "block";
    chatSearchBox[0].style.display = "none";
    chatSearchButton[0].style.display = "none";
    console.log("checked");
  } else {
    gcseSearch[0].style.display = "none";
    chatSearchBox[0].style.display = "block";
    chatSearchButton[0].style.display = "block";
    console.log("unchecked");
  }
});
// 获取视频元素
var video = document.querySelector(".bg-video");

// 设置播放速度
video.playbackRate = 0.7;