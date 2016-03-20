# SVG2CSS

Complex CSS animation have always been a problem when it comes to implementation. It is really difficult for a programmar to create all the `@keyframes` related to a particular animation manually, and it is even more difficult to create `@keyframes` that use multiple `properties`. This *open source web app* solves the problem of complex css animations by providing very simple and easy to use user interface. The user/programmar simply needs to know how the animation should work.

## Development

First of all **thankyou** for even thinking about contributing to this project. This project needs to be developed for both Chrome and Firefox. So here are the steps to start the development.

#### Workspace Setup

If you have worked on any Polymer Element, the steps are the same. All you need to do is

- **Fork** the project
- Install dependencies by using the command `bower install`
- Run `main.html` file on Chrome

If you have never worked on Polymer elements, you will need to start with the [Polymer Docs](https://www.polymer-project.org/1.0/docs/start/getting-the-code.html).

#### Features and Bugfixes

If you found a bug or want to add a new feature, please create a new [issue](https://github.com/prateekjadhwani/svg2css/issues/new) first. This way we will be able to track it.

Once, you are done fixing/adding things, feel free to create a PR for the `master` branch.

#### Verifying output on Chrome and Firefox

- Please make sure that the `main.html` file works fine on chrome.
- Please [Vulcanize](https://github.com/Polymer/vulcanize) the `main.html` file by using the following command `vulcanize main.html > index.html` . This will create a compressed file `index.html`.
- You will then need to test `index.html` again on chrome and firefox just to make sure that your changes work fine.



## Credits

#### Libraries

- Polymer and Polymer Elements
- Code Mirror
