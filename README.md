sunshine-template
=================

This is a template for an app built with [SunshineJS][].
To get started quickly,
clone this repository and start filling in your own code.

[SunshineJS]: http://sunshinejs.io/


Getting started
---------------

Install project dependencies:

    $ npm install

Install webpack:

    $ npm install -g webpack

Optionally set your path to run executables installed by projected npm dependencies:

    $ export PATH="node_modules/.bin:$PATH"


Usage
-----

To run the typechecker (recommended):

    $ node_modules/.bin/flow

Or if you set your `PATH` the command is shorter:

    $ flow

Flow will run in the background to watch your files for changes.
When you are done with it, stop the background process with this command:

    $ flow stop

To start the app run:

    $ npm start

That will set webpack up to recompile your scripts whenever they change,
and will run a web server.
It may take a moment for webpack to process all of your javascript dependencies.

View the app at [http://localhost:8000/][app]

[app]: http://localhost:8000/
