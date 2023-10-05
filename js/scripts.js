const onoffswitch = document.getElementById('myonoffswitch');
const gcseSearch = document.getElementsByClassName('google_search');
const chatSearch = document.getElementsByClassName('row input-group-newsletter')

onoffswitch.addEventListener('change', function() {
  if (this.checked) {
    gcseSearch[0].style.display = "block";
    chatSearch[0].style.display = "none";
    console.log("checked");
  } else {
    gcseSearch[0].style.display = "none";
    chatSearch[0].style.display = "block";
    console.log("unchecked");
  }
});
// 获取视频元素
var video = document.querySelector(".bg-video");

// 设置播放速度
video.playbackRate = 0.7;