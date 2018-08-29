import dena1 from '~/assets/images/dena1.jpg'
import lovegraph3 from '~/assets/images/lovegraph3.jpg'
import me1 from '~/assets/images/me1.jpg'
import me1_sp from '~/assets/images/me1_sp.jpg'
import rubykaigi2018_b from '~/assets/images/rubykaigi2018_b.jpg'
import stars from '~/assets/images/stars.jpg'
import sunset from '~/assets/images/sunset.jpg'
import sunset_sp from '~/assets/images/sunset_sp.jpg'
import univ4 from '~/assets/images/univ4.jpg'


const imageUrls = [
  dena1,
  lovegraph3,
  me1,
  me1_sp,
  rubykaigi2018_b,
  stars,
  sunset,
  sunset_sp,
  univ4,
];

export default {
  computed: {
    allImagesLoaded() {
      return this.numberOfLoadedImages === imageUrls.length;
    },
  },
  data() {
    return {
      numberOfLoadedImages: 0,
    };
  },
  methods: {
    loadImage() {
      imageUrls.forEach(imageUrl => {
        const img = new Image()
        img.onload = () => {
          this.numberOfLoadedImages += 1;
        }
        img.src = imageUrl;
      });
    },
  },
}
