// we grab our header and our desktop header
// we insert the contents of our header into our desktop header

const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header-desktop')

desktopHeader.innerHTML = header.innerHTML

// when the header enters the viewport hide the desktop desktopHeader(removing visible class)
// when the header leaves, show it by (adding the visible class)

inView('.header')
.on('enter', el => {
  desktopHeader.classList.remove('visible')
})
.on('exit', el => {
  desktopHeader.classList.add('visible')
});
