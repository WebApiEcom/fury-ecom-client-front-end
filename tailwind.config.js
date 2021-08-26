module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '300': '75rem'
      },
      fontSize: {
        h2t: ['24px', '30px']
      },
      lineHeight: {
        'cus': '2.625rem',
        'cus2': '1.313rem'
      },
      width: {
        '30': '30%',
      },
      maxWidth: {
        '30': '30%',
      },
      margin: {
        '0375': '0.375rem',
      },
      padding: {
        cus: '5px',
        cus2:'1.875rem'
      },
      textColor: {
        'cus': '#2e9cc3',
      }
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
