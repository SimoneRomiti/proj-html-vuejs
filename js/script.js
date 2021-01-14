var app = new Vue(
  {
    el: '#container',
    data: {
      view: false,
      bottom: '-3.1%',
      scrollPosition: '',
      scrollHeight: '',
      scrollGreaterHeight: '',
      navElement: 0,
      visible: false,
      backgrounds: [
        'img/home-banner.jpg',
        'img/about-banner.webp',
        'img/facilities-banner.jpg',
        'img/join-banner.webp',
        'img/testimonial-banner-compressor-2.jpg',
        'img/blog-banner.jpg'
      ],
      currentBackground: 'img/home-banner.jpg',
      titles: [
        'NO PAIN NO GAIN',
        'AVADA GYM',
        'GYM FACILITIES',
        'JOIN OUR GYM',
        'RAVE REVIEWS',
        'FITNESS BLOG'
      ],
      currentTitle: 'NO PAIN NO GAIN',
      paragraphs: [
        'Motivation is what gets you started. Habit is what keeps you going.',
        'Motivation will always beat talent',
        'The finish line is just the beginning of a whole new race',
        'In seeking happiness for others, you find it for yourself',
        'Incredible stories of real client success',
        'The latest news to keep your mind and body fit'
      ],
      currentParagraph: 'Motivation is what gets you started. Habit is what keeps you going.',
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
          photo: 'img/trainer2.webp',
          name: 'Alex Silva',
          info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, cupiditate! Magnam voluptatum rerum sequi, debitis.'
        },
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
      ],
      post: [
        {
          image: 'img/blog1.jpg',
          title: 'Train with free weights or your body weight?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
          image: 'img/blog4-400x289.jpg',
          title: 'To be number one, train like you’re number two',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
          image: 'img/blog6.jpg',
          title: 'Nutritional advice that will keep you training',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
          image: 'img/trainer3-400x297.jpg',
          title: 'Top 5 mistakes every gym member makes',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
          image: 'img/trainer4-400x297.jpg',
          title: 'Simple principles for your next workout',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
          image: 'img/trainer1-400x297.jpg',
          title: 'The myths of shedding body fat explored',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
      ],
      company: {
        address: '12345 North Main Street',
        city: 'New York, NY 555555',
        phone: 'Phone: 1.800.555.6789',
        email: 'Email: info@your-domain.com'
      }
    },

    created: function(){
      setTimeout(() => {
        this.visible = true;
      }, 1000)
    },

    methods: {
      viewTrainers: function(){
        if(this.view == false){
          this.scrollPosition = document.getElementsByClassName('trainers-container');
          this.scrollHeight = this.scrollPosition[0].offsetHeight;

          this.view = true;

          setTimeout(() => {
            this.scrollGreaterHeight = this.scrollPosition[0].offsetHeight;
            console.log(this.scrollHeight, this.scrollGreaterHeight);
            this.bottom = '-2%';
            window.scrollTo({
              top: this.scrollPosition[0].offsetTop + this.scrollGreaterHeight - 260,
              behavior: 'smooth'
            });
          },0)

        } else{
          this.view = false;
          setTimeout(() => {
            this.bottom = '-3.1%';
          }, 525)

          window.scrollTo({
            top: this.scrollPosition[0].offsetTop + this.scrollHeight,
            behavior: 'smooth'
          });
        }
      },

      changeHeader: function(i){
        this.navElement = i;
        setTimeout(() => {
          this.currentBackground = this.backgrounds[i];
          this.currentTitle = this.titles[i];
          this.currentParagraph = this.paragraphs[i];
        }, 0)
      }
    }
  }
)
