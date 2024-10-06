# Portfolio Website Templates

Welcome to **Portfolio Website Templates**, a single-page multitasking website that showcases a variety of portfolio websites. This project is perfect for developers and clients seeking design inspiration.

## About

This website features an interactive gallery of portfolio screenshots. When you hover over a screenshot, a button will appear, allowing you to easily visit the live site. It's designed to provide quick access to creative portfolio examples, making it a great tool for anyone looking to build or redesign their own portfolio website.

## Features

- **Interactive Design**: Hover over any screenshot to reveal a button that links directly to the live site.
- **Multiple Screenshots**: Explore various portfolio website designs, from minimalist to dynamic and interactive layouts.
- **Inspiration Hub**: Ideal for developers and clients to get inspired and discover new ideas for their own portfolios.

## How to Use

1. **Explore the Gallery**: Scroll through the collection of screenshots displayed on the page.
2. **Hover for Action**: Hover over a screenshot to make the "Visit Site" button appear.
3. **Open the Live Site**: Click the button to explore the full portfolio website.
4. **Get Inspired**: Take ideas from these creative portfolios for your next project.

## Contribute

If you have a portfolio website you'd like to showcase or recommend, feel free to contribute by submitting a pull request with:

 - A screenshot of the portfolio.

 - The live URL of the website.

 - Optional: A short description of the design or developer's name.

To add your portfolio to the collection, follow these steps:

1. **Upload the Image**: Save a high-quality screenshot of the portfolio to `src/assets/` and name the file appropriately (e.g., `name.png`).

2. **Update the Data File**: Add a new object in the `Site` array located in `src/Data/Site.js` with the following syntax:

```js
import Image from '../assets/name.png';

const Site = [
    {
        "name": "name of Portfolio (Of whose portfolio is that) important",
        "screenshot": Image, // Screenshot of the portfolio
        "url": "https://example.com" (important), // URL of Live site
        "description": "(optional)" // Short description of the portfolio (optional)
    },
];
```

3. **Submit a Pull Request**: Once you've added the new portfolio, create a pull request, and it will be reviewed for inclusion.



## License

This project is licensed under the Apache 2.0 License.
