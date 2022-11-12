<br />
<div align="center">

  <h3 align="center">Fetchrewards Take Home Test</h3>

  <p align="center">
    Simple project to prove a concpet!
    <br />
    <br />
    <br />
    <a href="https://fetchrewards.vercel.app/">View Live Demo</a>
    ·
    <a href="https://github.com/d3b0nair/fetchrewards/issues">Report Bug</a>
    ·
    <a href="https://github.com/d3b0nair/fetchrewards/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This is a front-end for the user registration form. I built it on Typescript to promote scalable and continuous development for this app by making it easier to manage with help of type rules. I have chosen Next.js for server-side rendering (SSR) to provide my app with excellent performance in terms of load times and use its toolbox. For example, with static props, I could fetch the "occupations" and "states" lists from 3rd party API during a build time on a server side, while if we have used React the user would be fetching this data from 3rd party API every time they use the registration form. At first glance, this helps us use the API more efficiently and minimize the load time. In depth, if we have to scale this app, let's say we would want to turn it into the Progressive Web App (PWA) and use it offline, in this case, the app would have more components cached offline. The third major choice I would like to mention is Tailwind CSS, a utility-first CSS framework packed with classes that can be composed to build any design. Not to go all around the place, the major factor of having a utility-first CSS framework on board is to develop an app quicker, in my case by utilizing convenience. Since we are focusing on creating a form component I have decided to go with React Hook Form for its performance (precisely for their re-render minimaztion approach) and to make my code easier maintainable. To elaborate maintainable code is less code = less bugs. As for the developer's quality-of-life  I have included Eslint a long side with Husky to promote quick code testing and prevent breaking changes to be pushed out to git.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/d3b0nair/fetchrewards.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run local server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Home page
- [x] Add User Registration page
- [x] Add Readme

See the [open issues](https://github.com/d3b0nair/fetchrewards/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/d3b0nair/fetchrewards](https://github.com/d3b0nair/fetchrewards)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [React Hook Form](https://react-hook-form.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Heroicons](https://heroicons.com/)
* [Husky](https://github.com/typicode/husky)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[license-url]: https://github.com/d3b0nair/fetchrewards/blob/production/LICENSE
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
