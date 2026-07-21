/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewState } from './types';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { SearchAndChat } from './pages/SearchAndChat';
import { KnowledgeGraph } from './pages/KnowledgeGraph';
import { Digitizer } from './pages/Digitizer';
import { Collaboration } from './pages/Collaboration';
import { NotificationCenter } from './components/NotificationCenter';
import { motion, AnimatePresence } from 'motion/react';
import { WorkspaceProvider } from './context/WorkspaceContext';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'search': return <SearchAndChat />;
      case 'graph': return <KnowledgeGraph />;
      case 'digitizer': return <Digitizer />;
      case 'collaboration': return <Collaboration />;
      default: return <Dashboard />;
    }
  };

  return (
    <WorkspaceProvider>
      <div className="flex min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#f3f4f6_40%,#ffffff_100%)] text-slate-900">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />

        <main className="relative flex-1 overflow-y-auto">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0))]" />

          <div className="absolute right-6 top-6 z-50">
            <NotificationCenter />
          </div>

          <div className="mx-auto max-w-[1720px] p-6 pt-8 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="relative min-h-[calc(100vh-4rem)]"
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </WorkspaceProvider>
  );
}
