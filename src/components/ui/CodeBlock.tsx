import React, { useState } from 'react';
import { Check, Copy, Code2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden bg-white shadow-xl border border-slate-200 w-full relative group">
      {filename && (
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 text-slate-500 text-xs font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
              <Code2 size={14} className="text-slate-400" />
              <span className="font-semibold tracking-tight">{filename}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-40 uppercase tracking-widest font-bold">{language}</span>
            <button 
              onClick={handleCopy}
              className="p-1.5 hover:bg-slate-200 rounded-md transition-colors text-slate-400 hover:text-slate-600"
              title="Copiar código"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
            </button>
          </div>
        </div>
      )}
      {!filename && (
        <button 
          onClick={handleCopy}
          className="absolute right-4 top-4 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-slate-400" />}
        </button>
      )}
      <div className="p-6 bg-white overflow-visible">
        <code className="block text-black font-mono text-[13px] leading-relaxed whitespace-pre-wrap">
          {code.trim().split('\n').map((line, i) => (
            <div key={i} className="flex hover:bg-slate-50/50 transition-colors">
              <span className="w-10 shrink-0 text-slate-300 text-right pr-4 select-none border-r border-slate-100 mr-4">{i + 1}</span>
              <span>{line || '\u00A0'}</span>
            </div>
          ))}
        </code>
      </div>
    </div>
  );
};