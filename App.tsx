
import React, { useState, useMemo, useEffect } from 'react';
import { FRAMEWORKS } from './constants';
import { FormData } from './types';
import FrameworkSelector from './components/FrameworkSelector';
import PromptBuilder from './components/PromptBuilder';
// ResultDisplay n'est plus utilisé car on ne génère plus de réponse en direct
import ModelsView from './components/ModelsView';
import SecurityView from './components/SecurityView';
import { ProductivityView } from './components/ProductivityView';
import RoutineView from './components/RoutineView';
import ChallengesView from './components/ChallengesView';
import TagsView from './components/TagsView';
import DemystificationView from './components/DemystificationView';
import LLMView from './components/LLMView';
import TypesIAView from './components/TypesIAView';
import EthicsView from './components/EthicsView';
import CopyPasteView from './components/CopyPasteView';
import MultimodalView from './components/MultimodalView';
import InterfaceProView from './components/InterfaceProView';
import MemoryPersoView from './components/MemoryPersoView';
import GemsGptsView from './components/GemsGptsView';
import EcosystemFilesView from './components/EcosystemFilesView';
import FeaturesView from './components/FeaturesView';
import { Cpu, LayoutGrid, Zap, ShieldCheck, Briefcase, Coffee, Sparkles, BookOpen, Brain, Rocket, Crown, Trophy, Swords, Star, Lock, Code, Lightbulb, Dna, Split, Scale, ClipboardCopy, Layers, PanelLeft, Gem, Paperclip, ChevronLeft, Home, Target, Medal } from 'lucide-react';

type ViewType = 'demystification' | 'llm' | 'types_ia' | 'ethics' | 'prompter' | 'models' | 'security' | 'productivity' | 'routine' | 'challenges' | 'copypaste' | 'multimodal' | 'interface_pro' | 'memory_perso' | 'gems_gpts' | 'ecosystem_files' | 'features';

type MenuCategory = 'main' | 'comprendre' | 'mode_emploi' | 'pratiquer';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('demystification');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>(FRAMEWORKS[0].id);
  const [challengesResetKey, setChallengesResetKey] = useState(0);
  const [menuLevel, setMenuLevel] = useState<MenuCategory>('main');

  // État global pour suivre les modules validés
  const [validatedModules, setValidatedModules] = useState<Record<string, boolean>>({});
  // État global pour les scores de quiz
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  const handleValidateModule = (id: string) => {
    setValidatedModules(prev => ({ ...prev, [id]: true }));
  };

  const handleQuizComplete = (moduleId: string, score: number) => {
    setQuizScores(prev => ({
        ...prev,
        [moduleId]: Math.max(prev[moduleId] || 0, score)
    }));
  };

  // Synchroniser le menu si on change de vue (optionnel, mais garde la cohérence)
  useEffect(() => {
    // Si on est sur le menu principal, on ne fait rien pour laisser le choix
    if (menuLevel === 'main') return;
  }, [currentView, menuLevel]);


  // Calcul du total Progression
  // Total : 54
  const totalModulesToValidate = 54; 
  const validatedCount = Object.values(validatedModules).filter(Boolean).length;
  const progressPercentage = Math.min((validatedCount / totalModulesToValidate) * 100, 100);

  // Calcul du score total Quiz
  const totalPossibleQuizScore = 80;
  const currentTotalQuizScore = Object.values(quizScores).reduce((a: number, b: number) => a + b, 0);

  const selectedFramework = useMemo(() => 
    FRAMEWORKS.find(f => f.id === selectedFrameworkId) || FRAMEWORKS[0], 
    [selectedFrameworkId]
  );

  // Définition des niveaux de progression pour la frise
  const progressLevels = [
    { threshold: 0, label: 'Novice', icon: Sparkles, color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-500/30' },
    { threshold: 25, label: 'Apprenti', icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    { threshold: 50, label: 'Initié', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
    { threshold: 75, label: 'Expert', icon: Rocket, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
    { threshold: 100, label: 'Maître', icon: Crown, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  ];

  // Trouver le niveau actuel
  const currentLevelIndex = progressLevels.findIndex((level, index) => {
    const nextLevel = progressLevels[index + 1];
    return progressPercentage >= level.threshold && (!nextLevel || progressPercentage < nextLevel.threshold);
  });
  const currentLevel = progressLevels[currentLevelIndex] || progressLevels[0];
  const nextLevel = progressLevels[currentLevelIndex + 1];

  return (
    <div className="min-h-screen text-slate-200 flex flex-col pb-20">
      
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 px-2 py-2 shadow-2xl bg-[#020005]/95 backdrop-blur-xl transition-all duration-300">
        
        {/* Cosmic Background Elements (reduced opacity for readability) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-black pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-3">
          
          {/* --- DASHBOARD GAMING (HUD) --- */}
          <div className="w-full animate-fade-in-up">
             {/* Main Container with Glassmorphism and Neon Border based on Level Color */}
             <div className={`relative bg-[#0A0A0A]/90 backdrop-blur-md rounded-xl border-2 ${currentLevel.border} p-1 shadow-[0_0_25px_rgba(0,0,0,0.6)] overflow-hidden group transition-all duration-700`}>
                
                {/* Background Tech Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${currentLevel.bg} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="flex flex-row items-center h-16 md:h-20 px-2 md:px-4 gap-2 md:gap-6 relative z-10">
                    
                    {/* 1. RANK BADGE (Left) */}
                    <div className="flex items-center gap-3 pr-4 border-r border-white/10 min-w-[130px] md:min-w-[180px]">
                       <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-[#151515] border-2 ${currentLevel.border} shadow-lg shrink-0 overflow-hidden`}>
                          <currentLevel.icon className={`w-5 h-5 md:w-6 md:h-6 ${currentLevel.color} relative z-10`} />
                          <div className={`absolute inset-0 ${currentLevel.bg} animate-pulse opacity-50`}></div>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-widest">Rang Actuel</span>
                          <span className={`text-sm md:text-lg font-black ${currentLevel.color} tracking-tight leading-none uppercase`}>{currentLevel.label}</span>
                       </div>
                    </div>

                    {/* 2. XP BAR & STEPS (Middle) */}
                    <div className="flex-1 flex flex-col justify-center relative px-2">
                        {/* Stats Row */}
                        <div className="flex justify-between items-end mb-1.5">
                           <span className="text-[9px] md:text-[10px] font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wide">
                              <Target className="w-3 h-3 text-cyan-400" /> Progression Modules
                           </span>
                           <span className="text-[10px] md:text-xs font-mono text-white font-bold bg-black/40 px-2 py-0.5 rounded border border-white/10">
                              <span className="text-cyan-400">{validatedCount}</span> <span className="text-slate-600">/</span> {totalModulesToValidate}
                           </span>
                        </div>
                        
                        {/* The Bar */}
                        <div className="relative h-2 md:h-2.5 bg-[#1a1a1a] rounded-full w-full shadow-inner border border-white/5">
                           {/* Fill */}
                           <div 
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)] rounded-full"
                              style={{ width: `${progressPercentage}%` }}
                           >
                              <div className="absolute right-0 top-0 h-full w-1 bg-white/80 blur-[1px]"></div>
                           </div>
                           
                           {/* Level Markers on Bar */}
                           {progressLevels.map((level, idx) => (
                              <div 
                                key={idx} 
                                className={`absolute top-[-2px] bottom-[-2px] w-0.5 z-20 ${progressPercentage >= level.threshold ? 'bg-cyan-400 shadow-[0_0_5px_cyan]' : 'bg-[#333]'}`}
                                style={{ left: `${level.threshold}%` }} 
                              />
                           ))}
                        </div>

                        {/* 5 Steps Labels Below */}
                        <div className="relative h-4 mt-1 w-full">
                           {progressLevels.map((level, idx) => {
                              // Only show label if there is space (0, 25, 50, 75, 100)
                              // We use absolute positioning based on threshold
                              const isActive = progressPercentage >= level.threshold;
                              
                              let alignClass = "-translate-x-1/2";
                              if (level.threshold === 0) alignClass = "translate-x-0";
                              if (level.threshold === 100) alignClass = "-translate-x-full";

                              return (
                                <div 
                                    key={idx} 
                                    className={`absolute top-0 text-[8px] md:text-[9px] font-bold uppercase tracking-wider transition-colors duration-500 ${alignClass} ${isActive ? level.color : 'text-slate-700'}`}
                                    style={{ left: `${level.threshold}%` }}
                                >
                                    {level.label}
                                </div>
                              )
                           })}
                        </div>
                    </div>

                    {/* 3. SCORE STATS (Right) */}
                    <div className="flex flex-col items-end justify-center pl-4 border-l border-white/10 min-w-[100px] md:min-w-[140px]">
                       <div className="flex items-center gap-1.5 mb-0.5">
                          <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-500" />
                          <span className="text-[8px] md:text-[9px] font-bold text-yellow-500 uppercase tracking-widest">Score Quiz</span>
                       </div>
                       <div className="flex items-baseline gap-1 bg-[#151515] px-2 py-1 rounded-lg border border-white/5">
                          <span className="text-sm md:text-xl font-black text-white leading-none">{currentTotalQuizScore}</span>
                          <span className="text-[9px] md:text-[10px] text-slate-500 font-medium">/ {totalPossibleQuizScore}</span>
                       </div>
                    </div>

                </div>
             </div>
          </div>

          {/* --- NAVIGATION MENU --- */}
          <div className="w-full">
             
             {/* 1. MENU PRINCIPAL (COMPACT) */}
             {menuLevel === 'main' && (
                <div className="grid grid-cols-3 gap-2 md:gap-4 animate-fade-in-up">
                    <button 
                        onClick={() => {
                            setMenuLevel('comprendre');
                            setCurrentView('demystification');
                        }}
                        className="group relative bg-[#0F0F0F] hover:bg-[#151515] border border-indigo-500/20 hover:border-indigo-500/50 rounded-xl py-2 px-2 transition-all duration-300 shadow-md hover:shadow-indigo-500/10 flex flex-row items-center justify-center gap-2 h-14 md:h-16"
                    >
                        <div className="bg-indigo-500/10 p-1.5 rounded-lg text-indigo-400 group-hover:scale-110 transition-transform">
                            <Brain className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wide">Comprendre</h3>
                    </button>

                    <button 
                        onClick={() => {
                            setMenuLevel('mode_emploi');
                            setCurrentView('features');
                        }}
                        className="group relative bg-[#0F0F0F] hover:bg-[#151515] border border-cyan-500/20 hover:border-cyan-500/50 rounded-xl py-2 px-2 transition-all duration-300 shadow-md hover:shadow-cyan-500/10 flex flex-row items-center justify-center gap-2 h-14 md:h-16"
                    >
                        <div className="bg-cyan-500/10 p-1.5 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                            <Code className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wide">Mode d'Emploi</h3>
                    </button>

                    <button 
                        onClick={() => {
                            setMenuLevel('pratiquer');
                            setCurrentView('prompter');
                        }}
                        className="group relative bg-[#0F0F0F] hover:bg-[#151515] border border-purple-500/20 hover:border-purple-500/50 rounded-xl py-2 px-2 transition-all duration-300 shadow-md hover:shadow-purple-500/10 flex flex-row items-center justify-center gap-2 h-14 md:h-16"
                    >
                        <div className="bg-purple-500/10 p-1.5 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-wide">Pratiquer</h3>
                    </button>
                </div>
             )}

             {/* 2. MENUS DÉTAILLÉS (AGRANDIS & ÉLARGIS) */}
             
             {/* Niveau : Comprendre */}
             {menuLevel === 'comprendre' && (
                 <div className="w-full flex items-center bg-[#0A0A0A]/95 backdrop-blur-xl border-2 border-indigo-500/30 rounded-3xl p-3 md:p-4 shadow-2xl animate-fade-in-up overflow-hidden">
                    <button 
                        onClick={() => setMenuLevel('main')}
                        className="shrink-0 px-4 py-2 mr-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 flex items-center gap-2"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-xs md:text-sm font-bold hidden md:inline">Retour</span>
                    </button>
                    
                    <div className="shrink-0 px-4 border-l border-indigo-500/20 mr-2 flex items-center gap-2 h-full">
                        <span className="text-xs md:text-sm font-black text-indigo-300 uppercase tracking-widest hidden md:block">Comprendre</span>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-start gap-3 overflow-x-auto no-scrollbar pb-1 pt-1 px-1">
                        <button onClick={() => setCurrentView('demystification')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'demystification' ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-indigo-400 hover:bg-white/5'}`}><Lightbulb className="w-5 h-5" /><span>Démystifier</span></button>
                        <button onClick={() => setCurrentView('types_ia')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'types_ia' ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-indigo-400 hover:bg-white/5'}`}><Split className="w-5 h-5" /><span>Types d'IA</span></button>
                        <button onClick={() => setCurrentView('llm')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'llm' ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-indigo-400 hover:bg-white/5'}`}><Dna className="w-5 h-5" /><span>LLM</span></button>
                        <button onClick={() => setCurrentView('models')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'models' ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-indigo-400 hover:bg-white/5'}`}><LayoutGrid className="w-5 h-5" /><span>Les 4 IA</span></button>
                        <button onClick={() => setCurrentView('ethics')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'ethics' ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-indigo-400 hover:bg-white/5'}`}><Scale className="w-5 h-5" /><span>Éthique</span></button>
                        <button onClick={() => setCurrentView('security')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'security' ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-indigo-400 hover:bg-white/5'}`}><ShieldCheck className="w-5 h-5" /><span>Sécurité</span></button>
                    </div>
                 </div>
             )}

             {/* Niveau : Mode d'Emploi */}
             {menuLevel === 'mode_emploi' && (
                 <div className="w-full flex items-center bg-[#0A0A0A]/95 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-3 md:p-4 shadow-2xl animate-fade-in-up overflow-hidden">
                    <button 
                        onClick={() => setMenuLevel('main')}
                        className="shrink-0 px-4 py-2 mr-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 flex items-center gap-2"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-xs md:text-sm font-bold hidden md:inline">Retour</span>
                    </button>

                    <div className="shrink-0 px-4 border-l border-cyan-500/20 mr-2 flex items-center gap-2 h-full">
                        <span className="text-xs md:text-sm font-black text-cyan-300 uppercase tracking-widest hidden md:block">Mode d'Emploi</span>
                    </div>

                    <div className="flex-1 flex items-center justify-start gap-3 overflow-x-auto no-scrollbar pb-1 pt-1 px-1">
                        <button onClick={() => setCurrentView('features')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'features' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-cyan-400 hover:bg-white/5'}`}><Sparkles className="w-5 h-5" /><span>Fonctionnalités</span></button>
                        <button onClick={() => setCurrentView('interface_pro')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'interface_pro' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-cyan-400 hover:bg-white/5'}`}><PanelLeft className="w-5 h-5" /><span>Interface</span></button>
                        <button onClick={() => setCurrentView('memory_perso')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'memory_perso' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-cyan-400 hover:bg-white/5'}`}><Brain className="w-5 h-5" /><span>Mémoire</span></button>
                        <button onClick={() => setCurrentView('gems_gpts')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'gems_gpts' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-cyan-400 hover:bg-white/5'}`}><Gem className="w-5 h-5" /><span>Gems & GPTs</span></button>
                        <button onClick={() => setCurrentView('ecosystem_files')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'ecosystem_files' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-cyan-400 hover:bg-white/5'}`}><Paperclip className="w-5 h-5" /><span>Fichiers</span></button>
                    </div>
                 </div>
             )}

             {/* Niveau : Pratiquer */}
             {menuLevel === 'pratiquer' && (
                 <div className="w-full flex items-center bg-[#0A0A0A]/95 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-3 md:p-4 shadow-2xl animate-fade-in-up overflow-hidden">
                    <button 
                        onClick={() => setMenuLevel('main')}
                        className="shrink-0 px-4 py-2 mr-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 flex items-center gap-2"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-xs md:text-sm font-bold hidden md:inline">Retour</span>
                    </button>

                    <div className="shrink-0 px-4 border-l border-purple-500/20 mr-2 flex items-center gap-2 h-full">
                        <span className="text-xs md:text-sm font-black text-purple-300 uppercase tracking-widest hidden md:block">Pratiquer</span>
                    </div>

                    <div className="flex-1 flex items-center justify-start gap-3 overflow-x-auto no-scrollbar pb-1 pt-1 px-1">
                        <button onClick={() => setCurrentView('prompter')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'prompter' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-purple-400 hover:bg-white/5'}`}><Zap className="w-5 h-5" /><span>Prompts</span></button>
                        <button onClick={() => setCurrentView('multimodal')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'multimodal' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-purple-400 hover:bg-white/5'}`}><Layers className="w-5 h-5" /><span>Multimodal</span></button>
                        <button onClick={() => setCurrentView('productivity')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'productivity' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-purple-400 hover:bg-white/5'}`}><Briefcase className="w-5 h-5" /><span>Productivité</span></button>
                        <button onClick={() => setCurrentView('routine')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'routine' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-purple-400 hover:bg-white/5'}`}><Coffee className="w-5 h-5" /><span>Routine</span></button>
                        <button onClick={() => { setCurrentView('challenges'); setChallengesResetKey(prev => prev + 1); }} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'challenges' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-purple-400 hover:bg-white/5'}`}><Swords className="w-5 h-5" /><span>Défis</span></button>
                        <button onClick={() => setCurrentView('copypaste')} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap border shrink-0 ${currentView === 'copypaste' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/50' : 'bg-[#151515] text-slate-400 border-white/5 hover:text-purple-400 hover:bg-white/5'}`}><ClipboardCopy className="w-5 h-5" /><span>Copier/Coller</span></button>
                    </div>
                 </div>
             )}

          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 flex flex-col gap-10 mt-4">
        
        {/* Placeholder si aucune vue n'est sélectionnée et qu'on est sur le menu principal */}
        {/* Note: Comme currentView a une valeur par défaut, on affiche toujours quelque chose en dessous du menu. */}
        {/* Pour ne pas perturber l'UX, on affiche la vue courante même si le menu est sur "Main", 
            mais le menu "Main" permet de changer de contexte. */}

        {currentView === 'demystification' && (
          <DemystificationView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('demystification', score)}
            quizScore={quizScores['demystification']} 
          />
        )}

        {currentView === 'types_ia' && (
          <TypesIAView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('types_ia', score)}
            quizScore={quizScores['types_ia']} 
          />
        )}

        {currentView === 'ethics' && (
          <EthicsView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('ethics', score)}
            quizScore={quizScores['ethics']} 
          />
        )}

        {currentView === 'llm' && (
          <LLMView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('llm', score)}
            quizScore={quizScores['llm']} 
          />
        )}

        {currentView === 'models' && (
          <ModelsView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('models', score)}
            quizScore={quizScores['models']} 
          />
        )}
        
        {currentView === 'security' && (
          <SecurityView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('security', score)}
            quizScore={quizScores['security']} 
          />
        )}

        {currentView === 'productivity' && (
          <ProductivityView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('productivity', score)}
            quizScore={quizScores['productivity']} 
          />
        )}
        
        {currentView === 'routine' && (
          <RoutineView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('routine', score)}
            quizScore={quizScores['routine']} 
          />
        )}

        {currentView === 'copypaste' && (
          <CopyPasteView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('copypaste', score)}
            quizScore={quizScores['copypaste']} 
          />
        )}

        {currentView === 'multimodal' && (
          <MultimodalView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('multimodal', score)}
            quizScore={quizScores['multimodal']} 
          />
        )}

        {currentView === 'features' && (
          <FeaturesView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('features', score)}
            quizScore={quizScores['features']} 
          />
        )}

        {currentView === 'interface_pro' && (
          <InterfaceProView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('interface_pro', score)}
            quizScore={quizScores['interface_pro']} 
          />
        )}

        {currentView === 'memory_perso' && (
          <MemoryPersoView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('memory_perso', score)}
            quizScore={quizScores['memory_perso']} 
          />
        )}

        {currentView === 'gems_gpts' && (
          <GemsGptsView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('gems_gpts', score)}
            quizScore={quizScores['gems_gpts']} 
          />
        )}

        {currentView === 'ecosystem_files' && (
          <EcosystemFilesView 
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
            onQuizComplete={(score) => handleQuizComplete('ecosystem_files', score)}
            quizScore={quizScores['ecosystem_files']} 
          />
        )}

        {currentView === 'challenges' && (
          <ChallengesView 
            key={`challenges-${challengesResetKey}`}
            validatedModules={validatedModules} 
            onValidate={handleValidateModule}
          />
        )}
        
        {currentView === 'prompter' && (
          <>
            <div className="text-center space-y-4 mb-2 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Guide des Méthodes de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Prompts Avancés
                </span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Apprenez la théorie et la pratique. Cliquez sur un cadre pour découvrir comment structurer vos demandes point par point.
              </p>
            </div>

            {/* 1. Navigation Menu (Top Row) */}
            <section className="flex justify-center animate-fade-in-up delay-100">
              <FrameworkSelector 
                frameworks={FRAMEWORKS} 
                selectedId={selectedFrameworkId} 
                onSelect={(id) => setSelectedFrameworkId(id)} 
              />
            </section>

            {/* 2. Educational View OR Tags View */}
            {selectedFrameworkId === 'tags' ? (
                <TagsView 
                  validatedModules={validatedModules}
                  onValidate={handleValidateModule}
                />
            ) : (
                <PromptBuilder 
                  framework={selectedFramework}
                  validatedModules={validatedModules}
                  onValidate={handleValidateModule}
                  onQuizComplete={(score) => handleQuizComplete('prompter', score)}
                  quizScore={quizScores['prompter']}
                />
            )}

          </>
        )}
        
      </main>
    </div>
  );
}
