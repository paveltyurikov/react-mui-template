# React MaterialUI application template

The project scaffolding for production-ready ReactJS application with

- [material ui](https://mui.com) as components framework
- [react-router](https://reactrouter.com) for in app routing
- [formik](https://formik.org) and [formik-mui](https://stackworx.github.io/formik-mui/) for forms with [yup](https://github.com/jquense/yup) validation
- [react-query](https://react-query-v3.tanstack.com/) with [axios](https://axios-http.com/) as HTTP client
- [msw](https://mswjs.io) for mocking requests
- [dayjs](https://day.js.org/) for handling dates
- [react-window](https://react-window.vercel.app/) grid virtualization lib for long lists [recommended by mui.com](https://mui.com/material-ui/react-autocomplete/#virtualization)
- [vite](https://vitejs.dev/) and [vitest](https://vitest.dev/) for development, build and testing

## Usage

```bash
# clone repo to your_project_name directory
git clone { repo } { your_project_name } &&
cd { your_project_name } &&
# remove .git directory of repo
rm -rf ./.git
# init new git repo
git init --initial-branch=main
git add .
git commit -m 'Init app'
# install packages
npm install
# run dev
npm run dev
```

## Tests

```bash
npm run test
# or
npm run test-coverage
```