# NX POC Notes

[Official tutorial](https://nx.dev/react/getting-started/getting-started)

## Set up

- Had NPM cache issues when creating new nx workspace, had to run `yarn clear cache` first.
- Using `yarn` as my preferred package manager.
- Install NX CLI globally if you want. `yarn global add @nrwl/cli` or `npm install -g @nrwl/cli`
  - I prefer using NPM for global packages to keep all my globals under NPM and take advantage of NVM
  - If you don't want to install, just use `yarn nx` instead of `nx` for subsequent commands
- Set up react and next capabilities. `yarn add --dev @nrwl/react @nrwl/next`

## Creating a new Next.js app

[Official docs](https://nx.dev/react/guides/nextjs)

- `nx generate @nrwl/next:app [myapp]`
- Creates new folders under `apps/next-tutorial/` and `apps/next-tutorial-e2e/`
- To serve it under nx: `nx serve next-tutorial`
  - Starts a web server at `localhost:4200`
- Requires `react` module to be installed so go ahead and generate a react application too `nx g @nrwl/react:application react-app`
  - Or just `yarn add react` ???
- Out-of-the-box support for TypeScript, Cypress, Jest.

---

## And now a slight detour: Learning [Next.js](https://nextjs.org/learn/basics/getting-started)

### Setup

- Used `emotion` for stylesheets to learn more about this lib. Seems cool.
- Next.js recommends CSS in JS for styles over traditional CSS/SASS files (SEO reasons)

### Tutorial highlights

- Special Directories
  - Automatically creates pages based on files in `/pages` (Auto 404 page as well)
  - Reserved dirs: `/pages` and `/static`. Everything else functions normally.

- `Link`
  - Component automatically handles client-side navigation
  - It should have a child element (i.e. `<a>`). It doesn't handle any other props besides `href`.

- `@emotion/styled`
  - A nice lib for styled components
  - `styled` creates styles out of an html tag or React element.

```react
const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`
export default ({ children }) => (
  <Container>{children}</Container>
);
```

- [Different ways of using layout components](https://nextjs.org/learn/basics/using-shared-components/rendering-children-components)
  1. Use it like a normal component and render {props.children} within it
  2. Use it as a higher order component
  3. Pass page content as a prop
- I prefer #1. Simple.

- Dynamically generated pages
  - `useRouter` - a React Hook that lets us access `router` inside a functional component
  - We can use `{router.query}` to access the query string
  - `next/router` is not the same as React Router
  - It's kind of messy to use direct data inside URL's like `/post?title=King%27s%20Landing`: See next section

- Dynamic routing
  - Create a new page with `[]` such as `/pages/post/[id].tsx`, now `id` is a dynamic field
  - Usage: `<Link href="/post/[id]" as={`/post/${props.id}`}>`
  - Only the complete name can be dynamic, i.e. `post-[id].tsx` is not supported

- getInitialProps
  - can use this function to fetch inital data.
  - `fetch` imported from `isomorphic-unfetch`, a tiny ponyfill which works both server- and client-side

- watch where `console.log`s are output to see if code is run on client or server.

- Deploying
  - Only requirement: needs to be able to run Node.js

- [Automatic static optimization](https://github.com/zeit/next.js/#automatic-static-optimization)
  - Next.js pre-renders pages to static HTML if it can, i.e. there's no blocking data requirements
  - If you didn't implement `getInitialProps()`, the page will be statically pre-rendered.

## Unit Testing

- Default NX uses `@testing-library/react`
- `cleanup()` is supposed to be run `afterEach()` by default, but it's not doing it here?
- [Set up Jest to auto-import `React` and `jest-dom`](https://testing-library.com/docs/react-testing-library/setup#cleanup)
  - Involves some config I don't wanna get into right now.
- [React Testing Library cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
  - [More examples here](https://github.com/testing-library/react-testing-library)
  - `// query* functions will return the element or null if it cannot be found`
  - `// get* functions will return the element or throw an error if it cannot be found`
- [Testing React Router](https://testing-library.com/docs/example-react-router)
- [Mocking next/router](https://github.com/zeit/next.js/issues/7479)
  - See `[id].spec.tsx` or `post.spec.tsx` for examples
- Used [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock) to mock fetch.
  - Make sure to use `fetchMock` within the test files. (See `characters.spec.tsx`)
  - [Github issue link](https://github.com/jefflau/jest-fetch-mock/issues/82)
  - See `characters.spec.tsx` to see fetch mocking and testing `getInitialProps`
- `Spy`: Watches a function being called and adds metadata to it.
- `Mock`: Like a `spy` but changes the function implementation to something predictable.
