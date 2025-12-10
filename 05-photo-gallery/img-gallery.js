const links = [
  "https://i.pinimg.com/236x/a6/a1/45/a6a145f3daa69b91e68716dafc283a3c.jpg",
  "https://i.pinimg.com/236x/36/1f/fc/361ffc5851a7cb81e670b31d02d4b4b2.jpg",
  "https://i.pinimg.com/236x/d7/2a/4b/d72a4b7fe72abe6aebafaa767452fbfb.jpg",
  "https://i.pinimg.com/236x/b7/8c/e7/b78ce774751a39e329e7c7ca92884269.jpg",
  "https://i.pinimg.com/236x/f0/8f/11/f08f113bce619a07c9fe8a94edc291e0.jpg",
  "https://i.pinimg.com/236x/d9/75/ef/d975efaa8aa89e43aad88f488e92211d.jpg",
  "https://i.pinimg.com/236x/f5/dd/31/f5dd31c2ef727d872f6f5f3dbdfe89f8.jpg",
  "https://i.pinimg.com/236x/63/61/80/636180e52a5e6759576e969092e99708.jpg",
  "https://i.pinimg.com/236x/46/2a/ab/462aab97fe017bbf3c2c18e8da14c7f1.jpg",
  "https://i.pinimg.com/236x/67/29/20/67292062764d06a6ef9cb0d954a709cd.jpg",
  "https://i.pinimg.com/236x/d7/a6/9d/d7a69d19a4d4f1c08af6001d5ae30f62.jpg",
  "https://i.pinimg.com/236x/00/6d/c3/006dc3739453a8693100b4c4805c64cb.jpg",
  "https://i.pinimg.com/236x/07/b1/d4/07b1d4693d4f182801d676d362355573.jpg",
  "https://i.pinimg.com/236x/62/af/d8/62afd83b9b76dfcdfa3904b79e11cd7b.jpg",
  "https://i.pinimg.com/236x/3e/37/58/3e375850d733946a6e429b3810353712.jpg",
  "https://i.pinimg.com/236x/fc/6c/91/fc6c91729829673e73228b9c8d9567f9.jpg",
  "https://i.pinimg.com/236x/df/2d/9a/df2d9af34aeab92111d6b0e161c5298c.jpg",
  "https://i.pinimg.com/236x/73/b1/57/73b157580b17620a2700616ec3d2c968.jpg",
  "https://i.pinimg.com/236x/60/47/6f/60476f1a00d706ab447f14d45b78c362.jpg",
  "https://i.pinimg.com/236x/a2/11/a6/a211a68f7e804f30b2dbc3408599e4d1.jpg",
  "https://i.pinimg.com/236x/37/38/5e/37385ee692962b646d236a694c3e3e2e.jpg",
  "https://i.pinimg.com/236x/df/0a/56/df0a5688e02bf2b87dbecb7cf3c3a235.jpg",
  "https://i.pinimg.com/236x/7d/c8/3a/7dc83aea5345a265dbaba3af9659d66b.jpg",
  "https://i.pinimg.com/236x/60/50/4b/60504becdcc6302075a03d279e87acf0.jpg",
  "https://i.pinimg.com/236x/50/26/ab/5026abbe848417abbbf0dcf41926bd75.jpg",
  "https://i.pinimg.com/236x/87/b2/98/87b29866dd00c0774002dacdd0b94c9a.jpg",
  "https://i.pinimg.com/236x/a8/1f/63/a81f63bf0c527570912a5f84204d99e7.jpg",
  "https://i.pinimg.com/236x/1d/c7/97/1dc7973ddb44f249d4a69130c1c72cae.jpg",
  "https://i.pinimg.com/236x/cf/45/a9/cf45a905d789d76e6715968cc3d6c042.jpg",
  "https://i.pinimg.com/236x/2a/37/f9/2a37f91f6b43e514cfaf958978802b4e.jpg",
  "https://i.pinimg.com/236x/35/31/2b/35312b3b1ff9fd09da9722971f223db0.jpg",
  "https://i.pinimg.com/236x/57/4e/b6/574eb60f373a48494d420eec2ab61734.jpg",
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".img-container");
  links.map((link) => {
    const img = document.createElement("img");
    img.src = link;
    container.appendChild(img);
  });
});
