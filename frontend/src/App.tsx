import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import Home from "@/pages/Home";
import Systems from "@/pages/Systems";
import Industries from "@/pages/Industries";
import IndustryPage from "@/pages/IndustryPage";
import HowItWorks from "@/pages/HowItWorks";
import Technology from "@/pages/Technology";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Demo from "@/pages/Demo";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import AdminLogin from "@/pages/AdminLogin";
import AdminInbox from "@/pages/AdminInbox";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080b09] text-white">
      <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/industries" element={<Industries />} />
            <Route
              path="/industries/:slug"
              element={<IndustryPage />}
            />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/inbox" element={<AdminInbox />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

      <Footer />
    </div>
  );
}