import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SoundProvider } from "@/components/SoundProvider";
import ScrollProgress from "@/components/ScrollProgress";

import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import InnovationSpace from "./pages/InnovationSpace";
import AIHub from "./pages/AIHub";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/innovation-space" element={<InnovationSpace />} />
        <Route path="/ai-hub" element={<AIHub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SoundProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollProgress />
          
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </SoundProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
