export type ViewState = 'dashboard' | 'search' | 'graph' | 'digitizer' | 'collaboration';

export interface WorkspaceDocument {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  uploadedAt: string;
  sourceFile: File;
}

export interface WorkspaceAnalysis {
  title: string;
  documentType: string;
  summary: string;
  confidence: number;
  keyFindings: string[];
  risks: string[];
  actionItems: string[];
  followUpQuestions: string[];
  knowledgeGraphTags: string[];
  reportTitle: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: string[];
}
