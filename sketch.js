let img1, img2;
let button1, button2, button3, button4; // 移除第五個按鈕變數
let showAnimation1 = false;
let showAnimation2 = false;
let showAnimation3 = false; // 修改為默認不顯示第三個人物動畫
let showAnimation4 = false; // 新增變數來控制第四個人物動畫顯示
let frame = 0;
let spriteWidth1 = 74; // 第一個按鈕動畫每幀寬度為70像素
let spriteHeight1 = 93; // 第一個按鈕動畫每幀高度為93像素
let spriteWidth2 = 63; // 第二個按鈕動畫每幀寬度為59像素
let spriteHeight2 = 88; // 第二個按鈕動畫每幀高度為88像素
let spriteWidth3 = 66; // 第三個按鈕動畫每幀寬度
let spriteHeight3 = 90; // 第三個按鈕動畫每幀高度
let spriteWidth4 = 65; // 第四個按鈕動畫每幀寬度
let spriteHeight4 = 90; // 第四個按鈕動畫每幀高度
let totalFrames = 6; // 假設總幀數為10
let animationSpeed = 16; // 調整動畫速度，數值越大速度越慢
let iframe;
let spriteSheet1, spriteSheet2, spriteSheet3, spriteSheet4; // 用於存儲動畫精靈圖
let framesPerRow1 = 8; // 假設第一個精靈圖每行有8幀
let framesPerRow2 = 6; // 假設第二個精靈圖每行有6幀
let framesPerRow3 = 6; // 假設第三個精靈圖每行有5幀
let framesPerRow4 = 9; // 假設第四個精靈圖每行有5幀
let stars = []; // 用於存儲星星
let fireworks = []; // 用於存儲煙火
let closeButton; // 新增關閉按鈕變數

function preload() {
  spriteSheet1 = loadImage('1111.png'); // 加載第一個動畫精靈圖
  spriteSheet2 = loadImage('4444.png'); // 加載第二個動畫精靈圖
  spriteSheet3 = loadImage('5555.png'); // 加載第三個動畫精靈圖
  spriteSheet4 = loadImage('7777.png'); // 加載第四個動畫精靈圖
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 初始化星星
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      brightness: random(150, 255)
    });
  }
  
  // 創建第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.style('background-color', '#e3d5ca'); // 設置按鈕顏色
  button1.style('border', 'none'); // 移除邊框
  button1.style('border-radius', '25px'); // 設置圓框
  button1.mouseOver(() => showAnimation1 = true);
  button1.mouseOut(() => showAnimation1 = false);
  button1.mousePressed(() => {
    if (iframe) iframe.remove();
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://melody65.github.io/20250317/');
    let iframeWidth = Math.min(830, windowWidth - 130); // 保持寬度
    let iframeHeight = windowHeight - 40; // 延伸至背景底部，留一點白邊
    iframe.position((windowWidth - iframeWidth) / 2 + 120, 10); // 再向右移動 20 像素
    iframe.size(iframeWidth, iframeHeight);
  });
  
  // 創建第二個按鈕
  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.style('background-color', '#b0c4b1'); // 設置第二個按鈕顏色
  button2.style('border', 'none'); // 移除邊框
  button2.style('border-radius', '25px'); // 設置圓框
  button2.mouseOver(() => showAnimation2 = true);
  button2.mouseOut(() => showAnimation2 = false);
  button2.mousePressed(() => {
    if (iframe) iframe.remove();
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://melody65.github.io/20250310/');
    let iframeWidth = Math.min(830, windowWidth - 130); // 保持寴度
    let iframeHeight = windowHeight - 40; // 延伸至背景底部，留一點白邊
    iframe.position((windowWidth - iframeWidth) / 2 + 120, 10); // 再向右移動 20 像素
    iframe.size(iframeWidth, iframeHeight);
  });

  // 創建第三個按鈕
  button3 = createButton('筆記說明');
  button3.position(50, 250); // 與第一個按鈕對齊，位於其下方
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.style('background-color', '#edafb8'); // 設置第三個按鈕顏色
  button3.style('border', 'none'); // 移除邊框
  button3.style('border-radius', '25px'); // 設置圓框
  button3.mouseOver(() => showAnimation3 = true); // 滑鼠移入時顯示動畫
  button3.mouseOut(() => showAnimation3 = false); // 滑鼠移出時隱藏動畫
  button3.mousePressed(() => {
    if (iframe) iframe.remove(); // 移除之前的 iframe
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://hackmd.io/@7gWLWDkkQKqLdkHgvclZTA/ryeHyyXnake'); // 替換為實際的筆記說明網址
    let iframeWidth = Math.min(830, windowWidth - 130); // 保持寴度
    let iframeHeight = windowHeight - 40; // 延伸至背景底部，留一點白邊
    iframe.position((windowWidth - iframeWidth) / 2 + 120, 10);
    iframe.size(900, windowHeight - 20);
  });

  // 創建第四個按鈕
  button4 = createButton('更多資訊');
  button4.position(180, 250); // 與第二個按鈕對齊，位於其下方
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.style('background-color', '#adb5bd'); // 設置第四個按鈕顏色
  button4.style('border', 'none'); // 移除邊框
  button4.style('border-radius', '25px'); // 設置圓框
  button4.mouseOver(() => showAnimation4 = true); // 滑鼠移入時顯示動畫
  button4.mouseOut(() => showAnimation4 = false); // 滑鼠移出時隱藏動畫
  button4.mousePressed(() => {
    if (iframe) iframe.remove();
    iframe = createElement('iframe', '');
    iframe.attribute('src', 'https://example.com/more-info'); // 替換為實際的更多資訊網址
    iframe.position((windowWidth - iframeWidth) / 2 + 120, 10);
    iframe.size(900, windowHeight - 20);
  });

  // 創建右上角的關閉按鈕
  closeButton = createButton('X');
  closeButton.position(windowWidth - 50, 10); // 靠最右邊，確保不被視窗擋住
  closeButton.size(30, 30); // 縮小按鈕
  closeButton.style('font-size', '16px');
  closeButton.style('background-color', '#fdd835'); // 設置按鈕顏色為黃色
  closeButton.style('border', 'none'); // 移除邊框
  closeButton.style('border-radius', '15px'); // 設置圓形按鈕
  closeButton.mousePressed(() => {
    if (iframe) iframe.remove(); // 移除視窗
  });
}

function draw() {
  background('#4a5759'); // 設定背景顏色為 #4a5759

  // 繪製星星
  noStroke();
  for (let star of stars) {
    fill(star.brightness);
    ellipse(star.x, star.y, star.size);
  }

  // 繪製煙火
  for (let i = fireworks.length - 1; i >= 0; i--) {
    let firework = fireworks[i];
    firework.update();
    firework.show();
    if (firework.isDone()) {
      fireworks.splice(i, 1);
    }
  }

  // 減少煙火生成頻率
  if (random(1) < 0.05) {
    fireworks.push(new Firework());
  }

  let currentFrame = Math.floor(frame / animationSpeed) % totalFrames; // 確保動畫結束後立即從第一幀開始
  let sx1 = (currentFrame % framesPerRow1) * spriteWidth1;
  let sy1 = Math.floor(currentFrame / framesPerRow1) * spriteHeight1;
  let sx2 = (currentFrame % framesPerRow2) * spriteWidth2;
  let sy2 = Math.floor(currentFrame / framesPerRow2) * spriteHeight2;
  let sx3 = (currentFrame % framesPerRow3) * spriteWidth3;
  let sy3 = Math.floor(currentFrame / framesPerRow3) * spriteHeight3;
  let sx4 = (currentFrame % framesPerRow4) * spriteWidth4;
  let sy4 = Math.floor(currentFrame / framesPerRow4) * spriteHeight4;

  // 循環播放動畫，確保動作不會停
  if (showAnimation1) {
    image(spriteSheet1, 50 + (button1.width - spriteWidth1) / 2, 50 + button1.height + 10, spriteWidth1, spriteHeight1, sx1, sy1, spriteWidth1, spriteHeight1);
  } else if (showAnimation2) {
    image(spriteSheet2, 180 + (button2.width - spriteWidth2) / 2, 50 + button2.height + 10, spriteWidth2, spriteHeight2, sx2, sy2, spriteWidth2, spriteHeight2);
  }

  // 滑鼠碰到 "筆記說明" 按鈕時顯示新人物動畫
  if (showAnimation3) {
    image(spriteSheet3, 50 + (button3.width - spriteWidth3) / 2, 250 + button3.height + 10, spriteWidth3, spriteHeight3, sx3, sy3, spriteWidth3, spriteHeight3);
  }

  // 滑鼠碰到 "更多資訊" 按鈕時顯示新人物動畫
  if (showAnimation4) {
    image(spriteSheet4, 180 + (button4.width - spriteWidth4) / 2, 250 + button4.height + 10, spriteWidth4, spriteHeight4, sx4, sy4, spriteWidth4, spriteHeight4);
  }

  frame++; // 增加幀數，確保動畫無縫循環
}

// 煙火類
class Firework {
  constructor() {
    this.x = random(width);
    this.y = random(height / 2);
    this.particles = [];
    for (let i = 0; i < 50; i++) { // 減少粒子數量
      this.particles.push(new Particle(this.x, this.y));
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }

  isDone() {
    return this.particles.every(p => p.isDone());
  }
}

// 粒子類
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-3, 3); // 增加速度範圍
    this.vy = random(-3, 3);
    this.alpha = 255;
    this.color = color(random(255), random(255), random(255), this.alpha); // 隨機顏色
    this.shape = random(['ellipse', 'rect', 'triangle']); // 隨機形狀
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 4; // 減慢消失速度
    this.color.setAlpha(this.alpha); // 更新透明度
  }

  show() {
    noStroke();
    fill(this.color);
    if (this.shape === 'ellipse') {
      ellipse(this.x, this.y, 6, 6);
    } else if (this.shape === 'rect') {
      rect(this.x, this.y, 6, 6);
    } else if (this.shape === 'triangle') {
      triangle(this.x, this.y, this.x - 3, this.y + 6, this.x + 3, this.y + 6);
    }
  }

  isDone() {
    return this.alpha <= 0;
  }
}


