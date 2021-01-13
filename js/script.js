var app = new Vue(
  {
    el: '#container',
    data: {
      view: false,
      bottom: '-3.1%',
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
      ],
      trainers: [
        {
          photo: 'img/trainer1.jpg',
          name: 'Ann Baker',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, cupiditate! Magnam voluptatum rerum sequi, debitis.'
        },
        {
          photo: 'img/trainer3.jpg',
          name: 'Anne Warren',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, cupiditate! Magnam voluptatum rerum sequi, debitis.'
        },
        {
          photo: 'img/trainer4.jpg',
          name: 'Peter Rice',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, cupiditate! Magnam voluptatum rerum sequi, debitis.'
        },
      ],
      hiddenTrainers: [
        {
          photo: 'img/trainer1.jpg',
          name: 'Ann Baker',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, cupiditate! Magnam voluptatum rerum sequi, debitis.'
        },
        {
          photo: 'img/trainer3.jpg',
          name: 'Anne Warren',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, cupiditate! Magnam voluptatum rerum sequi, debitis.'
        },
        {
          photo: 'img/trainer4.jpg',
          name: 'Peter Rice',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, cupiditate! Magnam voluptatum rerum sequi, debitis.'
        },
      ],
    },

    methods: {
      viewTrainers: function(){
        if(this.view == false){
          this.view = true;
          this.bottom = '-2%';
        } else{
          this.view = false;
          setTimeout(() => {
            this.bottom = '-3.1%';
          }, 525)
        }

        console.log(this.view);
      }
    }
  }
)
