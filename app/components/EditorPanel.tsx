'use client';

import { Type, Image, Link2, Zap } from 'lucide-react';

interface EditorPanelProps {
  content: string;
  title: string;
  onContentChange: (content: string) => void;
  onTitleChange: (title: string) => void;
}

export function EditorPanel({ content, title, onContentChange, onTitleChange }: EditorPanelProps) {
  const insertMarkdown = (syntax: string) => {
    onContentChange(content + syntax);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="p-6 rounded-lg bg-surface border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <h2 className="text-2xl font-bold mb-4">Frame Editor</h2>
        
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-secondary">Frame Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Enter your frame title..."
            className="w-full px-4 py-3 rounded-lg bg-bg border text-fg placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          />
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <ToolbarButton
            icon={<Type className="w-4 h-4" />}
            label="Heading"
            onClick={() => insertMarkdown('\n## Heading\n')}
          />
          <ToolbarButton
            icon={<Image className="w-4 h-4" />}
            label="Image"
            onClick={() => insertMarkdown('\n![alt text](image-url)\n')}
          />
          <ToolbarButton
            icon={<Link2 className="w-4 h-4" />}
            label="Link"
            onClick={() => insertMarkdown('[link text](url)')}
          />
          <ToolbarButton
            icon={<Zap className="w-4 h-4" />}
            label="Action"
            onClick={() => insertMarkdown('\n[Button: Action Name]\n')}
          />
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-secondary">Frame Content (Markdown)</label>
          <textarea
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="Start creating your interactive frame content...

## Example
Add **bold** or *italic* text
- Create lists
- Add images
- Define interactive buttons

[Button: Mint NFT]
[Button: Vote]"
            className="w-full h-96 px-4 py-3 rounded-lg bg-bg border text-fg placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono text-sm resize-none"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 rounded-lg bg-surface border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <h3 className="text-lg font-semibold mb-4">Interactive Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <ActionButton label="Mint NFT" type="onchain" />
          <ActionButton label="Token Swap" type="onchain" />
          <ActionButton label="Create Poll" type="social" />
          <ActionButton label="Share Frame" type="social" />
        </div>
      </div>
    </div>
  );
}

function ToolbarButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg border hover:bg-opacity-80 transition-all text-sm"
      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      title={label}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function ActionButton({ label, type }: { label: string; type: 'onchain' | 'social' }) {
  return (
    <button className="px-4 py-3 rounded-lg border text-sm font-semibold hover:bg-opacity-10 hover:bg-primary transition-all" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className="flex items-center gap-2">
        <Zap className={`w-4 h-4 ${type === 'onchain' ? 'text-primary' : 'text-secondary'}`} />
        {label}
      </div>
    </button>
  );
}
