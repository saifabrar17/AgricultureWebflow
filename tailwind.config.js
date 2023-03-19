/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,njk}',
    './_includes/*.{html,njk}',
    './pages/**/*.{html,njk}',
    './pages/*.{html,njk}',
    './**/*.njk',
    './*.njk'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--theme-background)',
        backgroundVariant: 'var(--theme-backgroundVariant)',
        onBackground: 'var(--theme-on-background)',
        onBackgroundVariant: 'var(--theme-on-backgroundVariant)',
        primary: 'var(--theme-primary)',
        primaryVariant: 'var(--theme-primaryVariant)',
        onPrimary: 'var(--theme-on-primary)',
        onPrimaryVariant: 'var(--theme-on-primaryVariant)',
        secondary: 'var(--theme-secondary)',
        onSecondary: 'var(--theme-on-secondary)',
        secondaryVariant: 'var(--theme-secondary-variant)',
        surface: 'var(--theme-surface)',
        onSurface: 'var(--theme-on-surface)',
        onSurfaceVariant: 'var(--theme-on-surfaceVariant)',
        error: 'var(--theme-error)',
        onError: 'var(--theme-on-error)',
        success: 'var(--theme-success)',
        onSuccess: 'var(--theme-on-success)'
      },
      fontFamily: {
        Roboto: ['Roboto'],
        Yellowtail: ['Yellowtail'],
        Lato: ['Lato'],
        Sora: ['Sora'],
        Poppins: ['Poppins'],
        Raleway: ['Raleway'],
        Oswald: ['Oswald'],
        MontserratAlternates: ['Montserrat Alternates'],
        Anton: ['Anton'],
        Archivo: ['Archivo'],
        EncodeSans: ['Encode Sans'],
        Epilogue: ['Epilogue'],
        WorkSans: ['Work Sans'],
        Lora: ['Lora'],
        AndadaPro: ['Andada Pro'],
        Hahmlet: ['Hahmlet'],
        Cormorant: ['Cormorant'],
        OldStandardTT: ['Old Standard TT'],
        PlayfairDisplay: ['Old Standard TT'],
        Anton: ['Anton'],
        Archivo: ['Archivo'],
        JetBrainsMono: ['JetBrains Mono'],
        SourceCodePro: ['Source Code Pro'],
        NotoSerifBengali: ['Noto Serif Bengali'],
        BalooDa2: ['Baloo Da 2'],
        Galada: ['Galada'],
        MrsSaintDelafield: ['Mrs Saint Delafield'],
        Amita: ['Amita'],
        Cookie: ['Cookie'],
        RockSalt: ['Rock Salt'],
        Sacramento: ['Sacramento'],
        Hurricane: ['Hurricane'],
        Stalemate: ['Stalemate'],
        MsMadi: ['Ms Madi'],
        KolkerBrush: ['Kolker Brush']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
