'use client';

import { Sparkles, TrendingUp, Users, Gamepad2 } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  icon: React.ReactNode;
}

interface TemplateGalleryProps {
  onSelectTemplate: (template: Template) => void;
}

const templates: Template[] = [
  {
    id: '1',
    title: 'NFT Mint Frame',
    description: 'Allow users to mint NFTs directly from your frame with gas sponsorship',
    category: 'Onchain',
    icon: <Sparkles className="w-6 h-6" />,
    content: `# Mint Your NFT

Exclusive collection launching now!

## Features
- Limited edition artwork
- Gas-free minting
- Instant delivery

[Button: Mint Now]
[Button: View Collection]`
  },
  {
    id: '2',
    title: 'Token Swap Frame',
    description: 'Enable seamless token swaps within your frame',
    category: 'DeFi',
    icon: <TrendingUp className="w-6 h-6" />,
    content: `# Swap Tokens

Trade tokens instantly on Base

## Supported Tokens
- ETH
- USDC
- DAI

[Button: Swap Now]
[Button: View Rates]`
  },
  {
    id: '3',
    title: 'Community Poll',
    description: 'Create interactive polls with onchain voting',
    category: 'Social',
    icon: <Users className="w-6 h-6" />,
    content: `# Community Vote

Help us decide the next feature!

## Options
- NFT Marketplace
- Token Launchpad
- DAO Governance

[Button: Vote Option 1]
[Button: Vote Option 2]
[Button: Vote Option 3]`
  },
  {
    id: '4',
    title: 'Mini Game Frame',
    description: 'Engage users with interactive games and rewards',
    category: 'Gaming',
    icon: <Gamepad2 className="w-6 h-6" />,
    content: `# Play & Earn

Complete challenges to earn rewards!

## Today's Challenge
Collect 3 stars to unlock exclusive NFT

[Button: Start Game]
[Button: View Leaderboard]`
  }
];

export function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Template Gallery</h2>
        <p className="text-secondary">Choose a template to get started quickly</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelectTemplate(template)}
            className="p-6 rounded-lg bg-surface border text-left hover:scale-105 transition-all group"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary bg-opacity-10 text-primary group-hover:bg-opacity-20 transition-all">
                {template.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{template.title}</h3>
                <span className="text-xs px-2 py-1 rounded bg-primary bg-opacity-20 text-primary">
                  {template.category}
                </span>
              </div>
            </div>
            <p className="text-secondary text-sm mb-4">{template.description}</p>
            <div className="flex items-center gap-2 text-primary text-sm font-semibold">
              <span>Use Template</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
