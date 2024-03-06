# Calgary Non-Binary and Transgender Society

## Welcome to the website souce code

### Environment

I've build this using VSCode.

Using the Next.js framework with Typescript. Using Material UI for the React UI components. 

Site is deployed to Google Run using Github actions.

There are two Github action scripts, one for the beta and one for the main site based on branch, main or beta.

### TODO

There are many things left to do in this project. The list will probably always be incomplete and not updated, but I will try.

- Calendar page needs to be turned static,it's currently dynamic rendering
- Image optimization. Use the sizes prop. Pull the image size data from Sanity. (If needed because of:), Figure that image-url hotspot shit, Get it figured!!
- Break down the above multi task mess now, lol
- Resources section
- Find some environment/build variable with the github actions to enable/disable the admin link in the menubar based on if it's built to the beta/staging or production site Obviously we want to disable the admin link for the production site.
- 