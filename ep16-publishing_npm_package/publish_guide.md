## How to publish your own NPM package

1. Create a package
   
    Basic requirements: 

    a. A valid package.json must present.

    b. Package must have an entry js file.

2. Login to NPM.js
   
   Create an account on npmjs.com if you haven't done so already.

   Login to npm in your terminal.

   ```
   npm login
   ```

3. Publish
   Make sure your package name does not collide with other packages on npm. You can use `npm search` to check if your package name is valid. 

   Be sure to update the other fields in package.json as well. 

   Run:
   ```
   npm publish
   ```
   to publish your package to npm.