import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Team } from "./pages/Team";
import { Credentials } from "./pages/Credentials";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { TaxServices } from "./pages/services/TaxServices";
import { AuditServices } from "./pages/services/AuditServices";
import { BookkeepingServices } from "./pages/services/BookkeepingServices";
import { ConsultingServices } from "./pages/services/ConsultingServices";
import { AdvisoryServices } from "./pages/services/AdvisoryServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/tax" element={<TaxServices />} />
              <Route path="/services/audit" element={<AuditServices />} />
              <Route path="/services/bookkeeping" element={<BookkeepingServices />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/advisory" element={<AdvisoryServices />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/team" element={<Team />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
