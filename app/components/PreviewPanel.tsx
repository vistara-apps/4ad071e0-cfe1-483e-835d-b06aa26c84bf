'use client';

import { Eye, Share2, Save } from 'lucide-react';

interface PreviewPanelProps {
  content: string;
  title: string;
}

export function PreviewPanel({ content, title }: PreviewPanelProps) {
  const renderMarkdown = (text: string) => {
    if (!text) return null;

    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Headings
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-3 mt-4">{line.slice(3)}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-4 mt-4">{line.slice(2)}</h1>;
      }

      // Lists
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>;
      }

      // Buttons
      if (line.match(/\[Button: (.+)\]/)) {
        const buttonText = line.match(/\[Button: (.+)\]/)?.[1];
        return (
          <button
            key={index}
            className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-opacity-90 transition-all mb-2"
          >
            {buttonText}
          </button>
        );
      }

      // Bold and italic
      let processedLine = line;
      processedLine = processedLine.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      processedLine = processedLine.replace(/\*(.+?)\*/g, '<em>$1</em>');

      if (processedLine.trim()) {
        return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: processedLine }} />;
      }

      return <br key={index} />;
    });
  };

  return (
    <div className="flex flex-col gap-4 sticky top-24">
      <div className="p-6 rounded-lg bg-surface border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Live Preview</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-bg hover:bg-opacity-80 transition-all" title="Save Frame">
              <Save className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-bg hover:bg-opacity-80 transition-all" title="Share Frame">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Frame Preview */}
        <div className="rounded-lg border p-6 bg-bg min-h-96" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
          {content ? (
            <div className="prose prose-invert max-w-none">
              {renderMarkdown(content)}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-secondary">
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Start typing to see your frame preview</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Frame Info */}
      <div className="p-6 rounded-lg bg-surface border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <h3 className="text-lg font-semibold mb-3">Frame Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-secondary">Status:</span>
            <span className="text-success font-semibold">Draft</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary">Network:</span>
            <span className="font-semibold">Base Mainnet</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary">Gas Sponsored:</span>
            <span className="text-primary font-semibold">Yes</span>
          </div>
        </div>
        
        <button className="w-full mt-4 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-opacity-90 transition-all">
          Deploy Frame
        </button>
      </div>
    </div>
  );
}
