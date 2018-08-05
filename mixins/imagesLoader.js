import dena1 from '~/assets/images/dena1.jpg'
import dish from '~/assets/images/dish.jpg'
import lovegraph3 from '~/assets/images/lovegraph3.jpg'
import lovegraph4 from '~/assets/images/lovegraph4.jpg'
import me1 from '~/assets/images/me1.jpg'
import me1_sp from '~/assets/images/me1_sp.jpg'
import profile_sample from '~/assets/images/profile_sample.jpg'
import rubykaigi2018_b from '~/assets/images/rubykaigi2018_b.jpg'
import rubykaigi2018_c from '~/assets/images/rubykaigi2018_c.jpg'
import sakura_hikari from '~/assets/images/sakura_hikari.jpg'
import sakura_non from '~/assets/images/sakura_non.jpg'
import stars from '~/assets/images/stars.jpg'
import sunset from '~/assets/images/sunset.jpg'
import sunset_sp from '~/assets/images/sunset_sp.jpg'
import univ4 from '~/assets/images/univ4.jpg'


const imageUrls = [
  dena1,
  dish,
  lovegraph3,
  lovegraph4,
  me1,
  me1_sp,
  profile_sample,
  rubykaigi2018_b,
  rubykaigi2018_c,
  sakura_hikari,
  sakura_non,
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
