const testimoniData = [
  {
    image: (src = "assets/gambar/blade18.jpg"),
    content: "Razer Blade 18",
    author: "Rp 90.999.000",
    rating: 1,
  },
  {
    image: (src = "assets/gambar/blade17.jpg"),
    content: "Razer Blade 17",
    author: "Rp 64.999.000",
    rating: 1,
  },
  {
    image: (src = "assets/gambar/blade16.jpg"),
    content: "Razer Blade 16",
    author: "Rp 59.999.000",
    rating: 1,
  },
  {
    image: (src = "assets/gambar/blade15.jpg"),
    content: "Razer Blade 15",
    author: "Rp 29.900.000",
    rating: 1,
  },
  {
    image: (src = "assets/gambar/viper.jpg"),
    content: "Razer Viper",
    author: "Rp 1.691.900",
    rating: 2,
  },
  {
    image: (src = "assets/gambar/cobra.jpg"),
    content: "Razer Cobra",
    author: "Rp 1.898.000",
    rating: 2,
  },
  {
    image: (src = "assets/gambar/basilisk.jpg"),
    content: "Razer Basilisk",
    author: "Rp 2.000.000",
    rating: 2,
  },
  {
    image: (src = "assets/gambar/blackshark.jpg"),
    content: "Razer BlackShark",
    author: "Rp 2.999.000",
    rating: 3,
  },
  {
    image: (src = "assets/gambar/kraken.jpg"),
    content: "Razer Kraken",
    author: "Rp 2.499.000",
    rating: 3,
  },
  {
    image: (src = "assets/gambar/iskur.jpg"),
    content: "Razer Iskur V2",
    author: "Rp 10.499.000",
    rating: 4,
  },
  {
    image: (src = "assets/gambar/enki.jpg"),
    content: "Razer Enki Line",
    author: "Rp 6.499.000",
    rating: 4,
  },
  {
    image: (src = "assets/gambar/fujin.jpg"),
    content: "Razer Fujin Line",
    author: "Rp 33.109.000 ",
    rating: 4,
  },
  {
    image: (src = "assets/gambar/huntsman.jpg"),
    content: "Razer Huntsman",
    author: "Rp 3.330.000",
    rating: 5,
  },
  {
    image: (src = "assets/gambar/blackwidow.jpg"),
    content: "Razer Blackwidow",
    author: "Rp 5.750.000",
    rating: 5,
  },
];

function html(item) {
  return `<div class="testimoni">
        <img src="${item.image}" alt="testimoni" class="profile-testi"/>
        <p class="quote">${item.content}</p>
        <p class="author">${item.author}</p>
        <p class="author">${item.rating}</p>
  </div>`;
}

function allTestimoni() {
  let testiHtml = "";
  testimoniData.forEach((item) => {
    testiHtml += html(item);
  });
  document.getElementById("testimonials").innerHTML = testiHtml;
}
allTestimoni();

function filterTestimoni(rating) {
  let testiHtml = "";
  const testimoniFilter = testimoniData.filter((item) => {
    return item.rating === rating;
  });
  if (testimoniFilter.length === 0) {
    testiHtml = "<h1>Data not found</h1>";
  } else {
    testimoniFilter.forEach((item) => {
      testiHtml += html(item);
    });
  }
  document.getElementById("testimonials").innerHTML = testiHtml;
}
