# pollz-react

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## pollz-react: React Integration for Pollz SDK

`pollz-react` is a React package that simplifies the integration of Pollz-JS SDK into React applications. It provides hooks and components to easily incorporate polling functionality within your React app.

## Installation

```bash
npm install pollz-react
```

or

```bash
yarn add pollz-react
```

## Getting Started

### Use `PollzProvider` in Your App

Wrap your application with the `PollzProvider` to make the Pollz SDK available throughout your components.

```jsx
import React from "react";
import { PollzProvider } from "pollz-react";
import App from "./App";

const AppWithPollz = () => {
  return (
    <PollzProvider appId="YOUR_APP_ID" appSecret="YOUR_APP_SECRET">
      <App />
    </PollzProvider>
  );
};

export default AppWithPollz;
```

Replace `'YOUR_APP_ID'` and `'YOUR_APP_SECRET'` with your actual Pollz application credentials.

### Use Hooks in Your Components

#### `useAnonymousPoll`

Use the `useAnonymousPoll` hook to fetch anonymous polls in your components.

```jsx
import React from "react";
import { useAnonymousPoll } from "pollz-react";

const AnonymousPollComponent = ({ pollToken }) => {
  const { poll, refetch } = useAnonymousPoll(pollToken);

  if (!poll) {
    return <p>Loading...</p>;
  }

  // Render your poll component using 'poll' data

  return (
    <div>
      <h2>{poll.name}</h2>
      {/* Render poll options, voters, etc. */}
    </div>
  );
};

export default AnonymousPollComponent;
```

#### `usePoll`

Use the `usePoll` hook to fetch and optionally listen for updates on a specific poll.

```jsx
import React from "react";
import { usePoll } from "pollz-react";

const PollComponent = ({ pollId }) => {
  const { poll, refetch } = usePoll(pollId, { listen: true });

  if (!poll) {
    return <p>Loading...</p>;
  }

  // Render your poll component using 'poll' data

  return (
    <div>
      <h2>{poll.name}</h2>
      {/* Render poll options, voters, etc. */}
    </div>
  );
};

export default PollComponent;
```

#### `usePollTypes`, `usePolls`, `usePollz`

These hooks provide easy access to poll types, polls, and the Pollz SDK itself. Refer to the [pollz-react documentation](https://pollz.gitbook.io/pollz/tooling/react) for information.

### Use `<Poll />` Component

The `<Poll />` component is provided by `pollz-react` to simplify the rendering of a poll within your React components.

```jsx
import React from "react";
import { Poll } from "pollz-react";

const PollComponent = ({ pollId }) => {
  return (
    <div>
      <h2>Poll Component</h2>
      <Poll pollId={pollId} />
    </div>
  );
};

export default PollComponent;
```

Feel free to customize the example based on your application's structure and styling preferences.

### Documentation

For more information, refer to the [pollz-react documentation](https://pollz.gitbook.io/pollz/tooling/react).

## License

This project is licensed under the MIT License.
