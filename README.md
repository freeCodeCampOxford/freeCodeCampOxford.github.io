# freeCodeCampOxford.github.io

Welcome to the freeCodeCampOxford website repository. If you would like to contribute, and you know what you're doing - go for it and thank you, looking forward to your PRs.

# Project Guidelines &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- [Git](#git)
    - [Some Git rules](#some-git-rules)
    - [Git workflow](#git-workflow)
    - [Writing good commit messages](#writing-good-commit-messages)

<a name="git"></a>
## 1. Git
![Git](https://git-scm.com/book/en/v2/images/basic-branching-1.png)
<a name="some-git-rules"></a>

### 1 Some Git rules
There are a set of rules to keep in mind:
* Perform work in a feature branch.

    _Why:_
    >Because this way all work is done in isolation on a dedicated branch rather than the main branch. It allows you to submit multiple pull requests without confusion. You can iterate without polluting the master branch with potentially unstable, unfinished code. [read more...](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)
* Branch out from `develop`

    _Why:_
    >This way, you can make sure that code in master will almost always build without problems, and can be mostly used directly for releases (this might be overkill for some projects).

* Never push into `develop` or `master` branch. Make a Pull Request.

    _Why:_
    > It notifies team members that they have completed a feature. It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

### 1.1 freeCodeCamp Oxford Git workflow

* Clone our git repository in the project directory. __For subsequent features/changes this step should be ignored__.
   ```sh
   git clone https://github.com/freeCodeCampOxford/freeCodeCampOxford.github.io.git
   cd freeCodeCampOxford.github.io
   ```

* Checkout a new feature/bug-fix branch.
    ```sh
    git checkout -b <branchname>
    ```
* Make Changes.
    ```sh
    git add <filename> OR git add --a
    git commit -m "your commit message"
    git push
    ```

* Sync with remote to get changes you’ve missed.
    ```sh
    git checkout develop
    git pull
    ```

    _Why:_
    > This will give you a chance to deal with conflicts on your machine before submitting a Pull Request.

* If you don’t have conflict skip this step. If you have conflicts, [resolve them](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/).

* Push your branch.
    ```sh
    git push
    ```

* Make a Pull Request.
* Pull request will be accepted, merged and close by a reviewer.
* Remove your local feature branch if you're done.

  ```sh
  git branch -d <branchname>
  ```

<a name="writing-good-commit-messages"></a>
### 1.2 Writing good commit messages

Having a good guideline for creating commits and sticking to it makes working with Git and collaborating with others a lot easier. Here are some rules of thumb ([source](https://chris.beams.io/posts/git-commit/#seven-rules)):

 * Separate the subject from the body with a newline between the two.

    _Why:_
    > Git is smart enough to distinguish the first line of your commit message as your summary. In fact, if you try git shortlog, instead of git log, you will see a long list of commit messages, consisting of the id of the commit, and the summary only.

 * Limit the subject line to 50 characters and Wrap the body at 72 characters.

    _why_
    > Commits should be as fine-grained and focused as possible, it is not the place to be verbose. [read more...](https://medium.com/@preslavrachev/what-s-with-the-50-72-rule-8a906f61f09c)

 * Capitalize the subject line.
 * Do not end the subject line with a period.
 * Use [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) in the subject line.

    _Why:_
    > Rather than writing messages that say what a committer has done. It's better to consider these messages as the instructions for what is going to be done after the commit is applied on the repository. [read more...](https://news.ycombinator.com/item?id=2079612)


 * Use the body to explain **what** and **why** as opposed to **how**.

[Visit Codecademy for free Git practice](https://www.codecademy.com/learn/learn-git)


You can search for ```live server``` for your text editor for more comfortable development.

Here are the most popular ones:
 - [VSCode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
 - [Atom](https://atom.io/packages/atom-live-server)
 - [Sublime Text 3](https://packagecontrol.io/packages/LiveReload)

Please answer the questions which appear when you submit your PR honestly and feel free to go back over your code and change it to make sure it fulfils the requirements. We massively respect your time creating ```super-awesome-feature```, but if it's challenging to review it, you won't see the fruits of your work for longer than it should have been.

Happy Coding!

Noticed a mistake? Create your own PR and let us know!