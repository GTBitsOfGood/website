# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Using the Svelte framework

A vast majority of project work relies on HTML and CSS, rather than super-fancy JavaScript. So, you shouldn't need much Svelte knowledge to get up and running. Here are the resources we recommend reading before getting started:

**Basics on using CSS in Svelte:** [Read this CSS tricks article](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/)

**Fundamentals tutorial:** [Just click through the "Basics" section](https://svelte.dev/tutorial/basics)

**Understanding Sapper**: [Read "Introduction" and "Sapper app structure"](https://sapper.svelte.dev/docs)

## CSS standards

This project is CSS intensive. For this reason, we've worked hard to ensure that all colors, fonts, and sizing values are documented using **CSS variables.**

So, when creating new sections on the site, **check the `:root` ruleset in `global.css` for a list of all variables available.** To get a better understand of what CSS variables are and how they work, [read a getting started guide here](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) or crawl through the existing codebase to see them in action.

### Mobile considerations

Most of our website needs to adjust for mobile layouts. Some recommendations:
1. Use the breakpoint `max-width: 600px` when writing media queries that target mobile devices. Use your best judgment on whether to use a different breakpoint or multiple breakpoints.
2. Any content on mobile **should have a gutter / margin of 20px** on either side. In other words, text blocks and headers should have `20px` of breathing room. On desktop, this value is either `30px` or a custom value depending on the context.
2. No need to handle font-resizing if you're using default values. Check for any `@media` queries already specified in `global.css`.

### When variables don't quite fit
If you're referencing design guidelines where sizing or margins don't quite match up to our defaults, choose the closest match possible (for example, using a font size of `24px` instead of `26px`). If the closest match still doesn't feel right, do one of the following:
1. If you're a Bits of Good member, consult a designer through our slack channel **#gt-org-website**
2. If you're not a member, add a note on the issue for us to review
3. If you don't find consultation necessary, use a custom value that does not already exist as a CSS variable

## Git conventions

Since this project uses Git version control, we have several conventions to keep branches and commits standard across contributors.

### Branches

When creating a branch, remember that one branch = one pull request. So, your branches should **always build off of master** and **always correspond to a single issue**.

When naming the branch, always use the following format:
```
[your_name]/[issue_number]/[brief_description]
```
For example, if I (Ben) am resolving issue #57 on creating a new Footer element, a good branch name would be **ben/57/new-footer**.

Note that the description should be extremely short, at around 5 words or less.

### Commits

Your commits should ideally be bite-sized snapshots of file changes while you're working. When writing a commit, you should always make sure to:
1. Use an active voice to describe the purpose of a commit (ex. using "add" instead of "added")
2. Limit commits to around 50-75 characters. If you're using a GUI like VS Code, you should see a character count while you're writing.

## Pull Request Process

1. Make sure you note the issue number the PR resolves using the syntax **Resolves #[issue-number]**
2. You may merge the Pull Request in once you have the sign-off of one other developer. Check the README.md for a running list of contributors you may request as reviewers.
3. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences when reviewing code or discussing issues
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at hello@bitsofgood.org. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.