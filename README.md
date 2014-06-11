# grunt-jenkins-svn-revision

> Adds revision property to package.json and bower.json using the Jenkins SVN revision number.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jenkins-svn-revision --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jenkins-svn-revision');
```

## The "jenkins_svn_revision" task

### Overview

Setup the task like so: 

```
jenkins_svn_revision: {
  options: {
    files: ['package.json']
  }
}
```

the task will attempt to get the `process.env.SVN_REVISION` from jenkins. If you supply a revision number it will override jenkins, for example `jenkins_svn_revision:123`. If neither is provided the task will fail. 

files should be an array of json files, for example package.json and bower.json. 


