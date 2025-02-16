var body = document.body; 
var introText = document.getElementById('intro-text');
var changingText = document.getElementById('changing-text');

function handleScroll() {
  var scrollPosition = window.scrollY;
  var docHeight = document.documentElement.scrollHeight;
  var viewportHeight = window.innerHeight;

  var scrollPercentage = scrollPosition / (docHeight - viewportHeight);

  // Updated gradient transition from #31353D to #000000
  var bgColor = interpolateColor(scrollPercentage, '#31353D', '#000000');
  var introTextColor = interpolateColor(scrollPercentage, '#bdd9cd', '#214457');
  var changingTextColor = interpolateColor(scrollPercentage, 'white', '#051827');

  body.style.backgroundColor = bgColor;
  introText.style.color = introTextColor;
  changingText.style.color = changingTextColor;
}

function interpolateColor(percentage, color1, color2) {
  var c1 = hexToRgb(color1);
  var c2 = hexToRgb(color2);

  var r = Math.round(c1.r + (c2.r - c1.r) * percentage);
  var g = Math.round(c1.g + (c2.g - c1.g) * percentage);
  var b = Math.round(c1.b + (c2.b - c1.b) * percentage);

  return rgbToHex(r, g, b);
}

function hexToRgb(hex) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return { r: r, g: g, b: b };
}

function rgbToHex(r, g, b) {
  return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
}

window.addEventListener('scroll', handleScroll);
