module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        // Primary
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
        youTube: 'hsl(348, 97%, 39%)',
        
        // Dark Theme
        toggleDark: 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
        
        // Light Theme
        toggleLight: 'hsl(230, 22%, 74%)',
        
        // Neutral
        // Dark Theme
        veryDarkBlueBG: 'hsl(230, 17%, 14%)',
        veryDarkBlueTopBGPattern: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlueCardBG: 'hsl(228, 28%, 20%)',
        desaturatedBlueText: 'hsl(228, 34%, 66%)',
        whiteText: 'hsl(0, 0%, 100%)',

        // Light Theme
        whiteBG: 'hsl(0, 0%, 100%)',
        veryPaleBlueTopBGPattern: 'hsl(225, 100%, 98%)',
        lightGrayishBlueCardBG: 'hsl(227, 47%, 96%)',
        darkGrayishBlueText: 'hsl(228, 12%, 44%)',
        veryDarkBlueText: 'hsl(230, 17%, 14%)'
      }
    },
  },
  variants: {},
  plugins: [],
}
