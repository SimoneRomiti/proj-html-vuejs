var app = new Vue(
  {
    el: '#container',
    data: {
      headerNav: [
        {
          name: 'HOME',
          link: '#'
        },
        {
          name: 'ABOUT US',
          link: '#'
        },
        {
          name: 'FACILITIES',
          link: '#'
        },
        {
          name: 'MEMBERSHIP',
          link: '#'
        },
        {
          name: 'TESTIMONIALS',
          link: '#'
        },
        {
          name: 'BLOG',
          link: '#'
        }
      ],
      results: [
        {
          image: 'img/review_1-compressor.jpg',
          text: '“The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!”',
          name: 'Tara Smith'
        },
        {
          image: 'img/review_3-compressor-2.jpg',
          text: '“The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.”',
          name: 'Simon Chel'
        },
        {
          image: 'img/review_2-compressor.jpg',
          text: '“The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.”',
          name: 'Jen Wirth'
        },
        {
          image: 'img/review_4-compressor-2.jpg',
          text: '“No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.”',
          name: 'Jeff Glum'
        }
      ]
    }
  }
)
