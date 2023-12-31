const burgerButton = document.querySelector('.header__burger');

const header = document.querySelector('.header');

const nav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', (event) => {
  document.body.classList.toggle('active');
  event.currentTarget.classList.toggle('active');
  nav.classList.toggle('active');
  header.classList.toggle('active');
});

nav.addEventListener('click', (event) => {
  const isNav = event.target === event.currentTarget;
  if (!isNav) {
    document.body.classList.toggle('active');
    event.currentTarget.classList.toggle('active');
    burgerButton.classList.toggle('active');
    header.classList.toggle('active');
  }
});

const gztCopyText = document.querySelector('.gzt__contract');

gztCopyText.addEventListener('click', (event) => {
  const isCopied = event.currentTarget.classList.contains('active');
  if (isCopied) return;
  const text = event.currentTarget.innerText;
  navigator.clipboard.writeText(text);
  event.currentTarget.classList.add('active');
});

const paralaxz = document.querySelector('.paralaxz');

const paralaxzImg1 = document.getElementById('paralaxTop1');

const paralaxzImg2 = document.getElementById('paralaxBottom1');

const paralaxzScroll = document.querySelector('.paralaxz__scroll-item');

window.addEventListener('scroll', () => {
  const paralaxHeight = paralaxz.offsetHeight;

  const position = window.scrollY / paralaxHeight >= 1 ? 1 : window.scrollY / paralaxHeight;

  const bottomDelta = 30 - position * 60 > 0 ? 30 - position * 60 : 0;

  const scrollPosition = 10 + position * 160 >= 90 ? 90 : 10 + position * 160;

  if (position >= 1) return;

  paralaxzImg1.style.transform = `translate3d(0px, ${position * 100}%, 0px)`;

  paralaxzImg2.style.transform = `translate3d(0px, ${bottomDelta}%, 0px)`;

  paralaxzScroll.style.top = `${scrollPosition}%`;
});
