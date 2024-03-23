# Calgary Non-Binary and Transgender Society Website

## Environment

I've build this using VSCode.

Using the [Next.js](https://nextjs.org) framework with Typescript. Using [Material UI](https://mui.com) for the React UI components. 

Site is deployed to Google Run using Github actions.

There are two Github action scripts, one for the beta and one for the main site based on branch, main or beta.

CMS is done using the [Sanity.io](https://www.sanity.io) platform.

## TODO

There are many things to do in this project. The list will probably always be incomplete and not updated, but I will try.

### General

- Dark Mode
- Find some environment/build variable with the github actions to enable/disable the admin link in the menubar based on if it's built to the beta/staging or production site Obviously we want to disable the admin link for the production site.
- Live editor page builder/editor
- More admin pane QOL, groupings, sort order, better previews
- **DONE** Image optimization. Use the sizes prop.
- **DONE** Image optimizations: Pull the image size data from Sanity. (If needed because of:),
- **DONE** Figure that image-url hotspot shit, Get it figured!! Update 3, wft?!? why no work?!

### Homepage

- Make hero more reactive, but tagline below header and title in mobile espcially for if title wraps. (CSS Grid?)
- **IN PROGRESS** Upcoming Events: Style nicer, or complete makeover
- **DONE**  Upcoming events to tiles with poster for image, responsive 1x, 2x maybe 3x across?
- **DONE** Remove headings from secions (I think they speak for themselves)

### Calendar/Events

- **IN PROGRESS** Calendar Makeover, maybe done or always in progress now, main stuff was done?
- **CANCEL** Change the calendar nav elements to Mui Button- if possible -- NOT
- **DONE** Remove unclickable arrows on calendar
- **DONE** Calendar page needs to be turned static,it's currently dynamic rendering 

### Newsletter

- Newsletter selector

### Resources

- Find some resources to put in here?

### About

- Add Mission Statement
- Staff: Put bio beside photo on desktop and below on mobile
