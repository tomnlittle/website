Starting working on STEMN's slack bot. The stack is based on typescript and will be using Slack's Client, Interactions and Event Driven Apis to communicate with users and connect them to STEMN's services.

I am actually quite proud of what has been developed so far as I have been given the freedom to work on this project with little oversight allowing me to trial a variety of different project structures.

I experimented a lot with Lodash, which is a library I have been exposed to before but I tried to learn more of its intricacies in this project.

## Project Structure
I tried the traditional MVC layout initially but found that the file structure remained unintuitive. I wanted a structure that would naturally group the test files, the interfaces and core code together without wrapper functions.

I then experimeneted with a more traditional express structure, as recommended by my boss with the following structure; with the tests folder at the root of the source tree and then in subsequent folders.

```
src
├── __tests__
├── api
│   ├── routes
│   └── middleware
├── core
│   └── MAIN FUNCTIONALITY HERE
├── config
├── Slack
│   ├── client
│   ├── events
│   └──  interactions
├── types
└── app.ts
```

I found the structure to be cumbersome, it didn't group the test files alongside their methods, and the relatively simple interface for Slack's interactions and events api were being wrapped by the api folder. It also led to core functionality being separated from their interfaces in the Slack folder, which meant there was a lot of nested imports from various different folders.

I ended up moving to the following structure

```
├── test
│   └── utils
└── src
    ├── client
    │   ├── chat
    │   │   ├── post
    │   │   └── update
    │   └── file
    │       ├── getInfo
    │       └── upload
    ├── config
    ├── events
    │   └── uploadToStemn
    ├── interactions
    │   └── attach
    │       ├── folder
    │       └── project
    └── webhooks
        ├── install
        └── middleware
```

By structuring the app this way, I can put the test files alongside their core functionality with the their interfaces, removing the need for importing from other directories. The structure also appears to be more intuitive once you have a basic understanding of hour slack events and interactions work. Without this baseline knowledge I understand that it might look a little less intuitive then the other example.

## Technologies

- Docker-compose
  - Used to easily run and manage the stack
  - All Images are based on Alpine with Nodejs11
  - I had to build a custom image on top of the normal images to include git, so that jest --watch could assess what files had changed

- Tmuxinator
  - Used to quickly open a tmux session

- Travis/Codecov/Snyk
  - I am a strong believer in the benefits of a good continuous integration pipeline.
  - Travis/Codecov/Snyk were obvious choices for their open source plans and straightforward configurations

- Ajv and Quicktype for Json Schema's
  - Validating Json objects on an api has various benefits, which I won't go into here.
  - Previously I was using the typescript-to-json npm package but found quicktype fit my workflow this time around much better.
  - There are currently some basic tests for Ajv, just to make sure that there aren't any basic configuration issues
  - The Schemas are generated with a script that is run with the build command. It imports interface files from a designated list, converts them to Schemas and then dynamically builds an index file so they can easily be imported into the typescript project.

## Problems
- Jest Test speeds are very slow in Docker on the mac and this took me a couple hours to slightly remedy. The Jest Documentation goes into some detail about how to fix these issues. The startup speed has increased but it is still not comparable to running the tests outside of docker.

- Stubbing the code without a working STEMN api to test against was the biggest hurdle to overcome with this project. I used Jest's mocking api to do most of the heavy lifting but I cannot be sure that this system will properly integrate with STEMN until the Api becomes available again.
