# Calgary Non-Binary and Transgender Society

## Welcome to the website souce code

### Environment

I've build this using VSCode.

Using the Next.js framework with Typescript. Using Material UI for the React UI components. 

Site is deployed to Google Run using Github actions.

There are two Github action scripts, one for the beta and one for the main site based on branch, main or beta.

### TODO

There are many things left to do in this project. The list will probably always be incomplete and not updated, but I will try.

- **IN PROGRESS** Image optimization. Use the sizes prop.
- **IN PROGRESS** Image optimizations: Pull the image size data from Sanity. (If needed because of:),
- Calendar Makeover
- Newsletter selector
- Figure that image-url hotspot shit, Get it figured!! Update 3, wft?!? why no work?!
- Resources section
- Upcoming Events: Style nicer, or complete makeover
- Staff page: Put bio beside photo on desktop and below on mobile
- Find some environment/build variable with the github actions to enable/disable the admin link in the menubar based on if it's built to the beta/staging or production site Obviously we want to disable the admin link for the production site.
- Live editor page builder/editor
- More admin pane QOL, groupings, sort order, better previews
- Make hero more reactive, but tagline below header and title in mobile espcially for if title wraps. (CSS Grid?)
- **TESTING** Remove headings from secions (I think they speak for themselves)
- **DONE** Calendar page needs to be turned static,it's currently dynamic rendering 