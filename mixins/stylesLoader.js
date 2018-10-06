const styleUrls = [
  "https://fonts.googleapis.com/css?family=Poppins:100,200,300",
]

export default {
  computed: {
    allStylesLoaded() {
      return this.numberOfLoadedStyles === styleUrls.length;
    },
  },
  data() {
    return {
      numberOfLoadedStyles: 0,
    };
  },
  methods: {
    loadStyles() {
      styleUrls.forEach(styleUrl => {
        const css = document.head.querySelector(`link[href*="${styleUrl}"]`);
        css.addEventListener('load', () => {
          this.numberOfLoadedStyles += 1;
        });
        if (css && css.sheet) { // alreadyLoaded
          this.numberOfLoadedStyles += 1;
        }
      });
    }
  },
}
