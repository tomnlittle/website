# STEMN Slackbot

[<svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
](https://github.com/stemn/stemn-slackbot)

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
