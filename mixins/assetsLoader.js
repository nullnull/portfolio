import imageLoader from '~/mixins/imageLoader'

export default {
  computed: {
    allAssetsLoaded() {
      return this.allImageLoaded;
    },
  },
  methods: {
    loadAssets() {
      this.loadImage();
    },
  },
  mixins: [
    imageLoader,
  ],
}
