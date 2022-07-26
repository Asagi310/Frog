let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/0/5/8/202206191514/a-callidryaas01.jpg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/2/8/2/h-punctata01.jpg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/3/7/1/202104191430/1.jpeg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/0/6/6/b-orientalis01.jpg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/0/6/2/c-ornata01.jpg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/3/2/8/202105021825/1.jpeg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/0/6/1/l-laevis01.jpg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/7/4/6/a-spumarius01.jpg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/1/1/7/d-azureus01.jpg",
"https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/7/0/6/7/0/202206112026/d-pumilio-bluejean011.jpg",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count])
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
 mainElement.setAttribute('src', url[count])
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 1000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
