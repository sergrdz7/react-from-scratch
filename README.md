# Getting Set Up with React From Scratch using Webpack

**Important**: This assumes you already have npm installed. To quickly check if you have it simply type `npm -v` into your terminal and it will return the version you have, if any. In case you don't have it type `sudo npm install npm -g` to install globally on your machine. You will be asked to enter your password.
**This is not a react tutorial it's just a walkthrough on how to set it up and installing the necessary dependencies to get you started**

## Setup Files with npm
1. Make a directory where to store your react project: `mkdir react-from-scratch`
2. Intialize npm with: `npm init -y` and it will create a [package.json](###) file.
3. Still in the same directory run `npm i -S` to simply save the dependencies in package.json
4. To install react dependencies run `npm i -S react` and `npm i -S react-dom`
5. Install webpack dependencies to use as a mini server. By no means am I an expert so bare with me. The -D means that they're are devDependencies which you won't need incase you deploy your application on an actual server but for now we'll use webpack.  `npm i -D webpack`
6. We'll also be using ES6 so in order for our the browsers to understand ES6 syntax we have to install a transpiler, in our case we will use babel. To install run `npm i -D babel`
* `npm i -D babel-core`
* `npm i -D babel-loader`
* `npm i -D babel-preset-react`
* `npm i -D babel-preset-es2015`
7. Now still in the same directory lets create some files and an src directory:
  * `touch webpack.config.js`
  * `touch index.html`
  * `mkdir src`
8. Make a file inside the src folder: `touch src/App.js`
9. You can make sure you've created the right files by running the `ls` command to list all the files in the directory.


## Copying into your files
1. Now were going to simply copy and paste from this repository's files into the files we just created.
2. First copy this [webpack.config.js](https://github.com/sergrdz7/react-from-scratch/blob/master/webpack.config.js) file into your own webpack.config.file to set up webpack's configuration.
3. Now we have to put some content into the files so copy the [App.js](https://github.com/sergrdz7/react-from-scratch/blob/master/src/App.js) and [index.html](https://github.com/sergrdz7/react-from-scratch/blob/master/index.html) content into your own.
4. In simple terms, these files are being linked together by the exporting and import statements which pass on the App component to the index.html file. You can edit the App.js file to change the component or create your own.
5. For our browsers to render this app, we must intall webpack as well. Run `sudo npm install -g webpack` to install grobally in our machines. Enter your password once again.
6. We can now run webpack in watch mode to check if there are any issues `webpack -w`. If there aren't any issues you are ready to go.
Now you can edit/create react components. Open your `index.html` file in your browser and you should see the "Cool React App" on the page.
7. Things to look out for:
 * Make sure all of your files are correctly linked
 * Make sure to call your  `build/bundle.js` script in `index.html` inside the body tags.
 * To exit the webpack watch window in terminal press control c `^C`
8. **Or you could just clone this whole repo and install npm and webpack but that's no fun 😎😎😎 **
