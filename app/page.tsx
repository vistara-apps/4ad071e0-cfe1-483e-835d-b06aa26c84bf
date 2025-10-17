'use client';

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EditorPanel } from './components/EditorPanel';
import { PreviewPanel } from './components/PreviewPanel';
import { TemplateGallery } from './components/TemplateGallery';
import { Sparkles, Zap, Users } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'editor' | 'gallery'>('editor');
  const [frameContent, setFrameContent] = useState('');
  const [frameTitle, setFrameTitle] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-secondary text-lg">Loading Studio...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-12 text-center border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Interactive Content Studio
          </h1>
          <p className="text-lg text-secondary mb-8">
            Create and share dynamic, onchain-enabled content directly within Farcaster
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-primary" />}
              title="Frame-Native Editor"
              description="Build interactive experiences with markdown and dynamic elements"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Gas-Sponsored Actions"
              description="Enable seamless onchain interactions without gas fees"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Collaborative Content"
              description="Co-create and build reputation through shared experiences"
            />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('editor')}
              className={`py-4 px-2 font-semibold transition-colors relative ${
                activeTab === 'editor' ? 'text-primary' : 'text-secondary hover:text-fg'
              }`}
            >
              Frame Editor
              {activeTab === 'editor' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-2 font-semibold transition-colors relative ${
                activeTab === 'gallery' ? 'text-primary' : 'text-secondary hover:text-fg'
              }`}
            >
              Template Gallery
              {activeTab === 'gallery' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {activeTab === 'editor' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <EditorPanel
              content={frameContent}
              title={frameTitle}
              onContentChange={setFrameContent}
              onTitleChange={setFrameTitle}
            />
            <PreviewPanel content={frameContent} title={frameTitle} />
          </div>
        ) : (
          <TemplateGallery
            onSelectTemplate={(template) => {
              setFrameContent(template.content);
              setFrameTitle(template.title);
              setActiveTab('editor');
            }}
          />
        )}
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-surface border transition-all hover:scale-105" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
}
