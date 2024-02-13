# A Text-to-Anything AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe


![done (1)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/b43438af-9559-4aa1-b217-5168ec35efcb)
![done (2)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/c7229ced-bd1c-418c-a93b-0efd69bf2874)
![done (5)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/6852ff2c-b53a-411a-b657-17e2b424b047)![done (7)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/81acc860-dc85-4651-a5b0-4167c4a64a09)
![done (6)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/c849e19c-b1e7-4a25-aa2d-4c02dbc5aa2a)
![done (4)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/23896a37-fb0e-469b-9731-697520e9db22)
![done (3)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/f6e5bb70-76b7-4b1b-8a2f-c6af72648410)
![done (1)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/5c10999d-3bf0-4e4b-887e-0d622ba41680)
![Screenshot (191)](https://github.com/ChandraPrakash24/dev-tool/assets/107044253/8ac26d77-b259-4d87-8507-eb83f96d38bb)





This is a repository for Build a AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com//next13-ai-saas.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
