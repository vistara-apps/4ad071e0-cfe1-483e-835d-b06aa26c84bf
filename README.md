# Interactive Content Studio

A Base Mini App for creating and sharing dynamic, onchain-enabled content directly within Farcaster.

## Features

- **Frame-Native Markdown Editor**: Create rich media content with interactive elements
- **Interactive Previews**: Embed functional mini-apps within Farcaster frames
- **Gas-Sponsored Actions**: Enable seamless onchain transactions without gas fees
- **Collaborative Content**: Co-create and build reputation through shared experiences
- **Template Gallery**: Quick-start templates for common use cases

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- MiniKit for Farcaster integration
- Tailwind CSS with Coinbase theme
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

This app is designed to be deployed on Vercel or any Next.js-compatible hosting platform.

## Base Mini App Integration

This app follows the official Base Mini App patterns:
- Uses OnchainKitProvider for Base network integration
- Implements proper manifest at `/.well-known/farcaster.json`
- Supports gas-sponsored transactions via Paymaster
- Integrates with Farcaster social primitives

## License

MIT
