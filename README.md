# Accenture Application

Application for Accenture Song job application

## Notes

Minimal focus was given to visual design, and instead the provided design was as closely adhered to as possible.

Images are random samples found on the internet, as none were provided

Table cells have a predefined minimum width which determines sizing. Notably the final allocates the space evenly among remaining items, rather than matching above rows. The provided wire was unclear on what the expected behaviour is, so this has been kept as such. The 4 column structure as per the wire is achievable depending on screen width, while responsively allocating less columns on small sizes.

The wire did not include a search box, however since it was in the requirements, it has been added to the top bar of the table.

There are some very minor alignment quirks with borders (potentially worth using box shadow instead of borders), but this was considered to be out of scope to resolve for this task.

Some components may be better off organised as either part of the ui kit or in some other application wide context (considering it as this were part of a wider application). However, given the nature of the task, it is hard to ascertain what features should be generalized and what shouldn't so most of it is bound to the features that use them.

Tests cover filtering and searching data. Other functionalities are considered out of scope for unit testing (would be covered as integration tests)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

### Run Tests

Run vitest with

```bash
npm run test
```


Your application will be available at `http://localhost:5173`.


Built with ❤️ using React Router.
