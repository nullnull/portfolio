import imagesLoader from '~/mixins/imagesLoader'
import stylesLoader from '~/mixins/stylesLoader'

export default {
  computed: {
    allAssetsLoaded() {
      return this.allImagesLoaded && this.allStylesLoaded;
    },
    numberOfLoadedAssets() {
      return this.numberOfLoadedImages + this.numberOfLoadedStyles;
    },
  },
  methods: {
    loadAssets() {
      this.loadImage();
      this.loadStyles();
    },
  },
  mixins: [
    imagesLoader,
    stylesLoader,
  ],
}
