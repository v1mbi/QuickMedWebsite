import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // Integrated for standard meta management
import { motion, AnimatePresence } from "framer-motion";
import { getSanityData } from "../functions/outsource_media";
import { Play, BookOpen, ScrollText, ArrowRight } from "lucide-react";
import BlogCard from "../components/blogCard";
import TextBlogCard from "../components/textBlogCard";
import flag from "../assets/image.png";
import YtCard from "../components/ytCard";
import Footer from "../components/footer";
import NotificationBlock from "../components/notificationBlock";
import ImageCard from "../components/imageCard";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [link, setLink] = useState([]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    getSanityData("blog").then(setBlogs);
    getSanityData("announcement").then(setAnnouncements);
    getSanityData("mediaLink").then(setLink);
  }, []);

  return (
    <>
      {/* 1. Meta Tags & Header Optimization via Helmet */}
      <Helmet>
        <title>
          QuickMed Connections Insights | Health, Medical & Insurance Blog
        </title>
        <meta
          name="description"
          content="Explore expert insights, articles, and video resources on affordable health insurance, funeral policies, and cross-border healthcare protection from QuickMed Connections."
        />
        <meta
          name="keywords"
          content="medical aid insights, health insurance blog, funeral cover advice, healthcare logistics, QuickMed Connections articles"
        />
        <link rel="canonical" href="https://yourwebsite.com/blog" />

        {/* Open Graph Tags for Social Networks */}
        <meta
          property="og:title"
          content="QuickMed Connections Insights | Medical & Insurance Blog"
        />
        <meta
          property="og:description"
          content="Stay informed with corporate updates, health protection articles, and interactive videos."
        />
        <meta property="og:type" content="blog" />
      </Helmet>

      {/* 2. Main Landmark Content Container */}
      <main className="flex font-montserrat w-full flex-col min-h-screen bg-white overflow-x-hidden">
        {/* Important Announcements Element */}
        <NotificationBlock announcements={announcements} />

        {/* --- HERO SECTION --- */}
        <section
          className="relative w-full  flex items-center justify-center overflow-hidden"
          aria-label="Blog Introduction"
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={flag}
              className="w-full h-full object-cover"
              alt="QuickMed Connections Healthcare Insights and Corporate Resource Base" // Descriptive keyword alternative text
              loading="eager" // Hero assets should load instantly for optimized LCP metrics
            />
            <div className="absolute  inset-0 bg-slate-900/50 backdrop-blur-[7px]" />
          </motion.div>

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              onClick={() => console.log(blogs)} // Removed arbitrary onClick logging for cleaner markup
              animate={{ y: 0, opacity: 1 }}
              className="bg-white/10 backdrop-blur-xl  border border-white/20 my-20 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-black/20"
            >
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase mb-4 block">
                Knowledge Base
              </span>
              <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-6">
                Insights into <br />
                <span className="text-red-500">QuickMed</span> Connections
              </h1>
              <p className="text-white/80 text-xs md:text-sm font-medium tracking-[0.2em] uppercase italic">
                "Life happens. We just make it easier to handle."
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- ARTICLES SECTION --- */}
        <section
          className="max-w-7xl mx-auto w-full py-24 px-6"
          aria-label="Latest Medical & Insurance Articles"
        >
          <div className="flex font-montserrat flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest">
                <BookOpen size={16} aria-hidden="true" />
                <span>Editorial</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Latest Articles
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm">
              Expert advice on health insurance, cross-border logistics, and
              protecting your family's future.
            </p>
          </div>

          {/* Structured dynamic list format for cleaner document tree traversal */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-0 list-none">
            <AnimatePresence>
              {blogs.map((blog, index) => (
                <motion.li
                  key={blog._id || index} // Preferred fallback path to real unique properties if accessible from Sanity
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-fit sm:h-[275px]"
                >
                  {blog.blogImage ===
                    "https://via.placeholder.com/600x400?text=No+Image+Available" ||
                  !blog.blogImage ? (
                    <TextBlogCard
                      title={blog.title}
                      message={blog.message}
                      author={blog.author}
                      date={formatDate(blog.date)}
                    />
                  ) : blog.message ? (
                    <BlogCard
                      title={blog.title}
                      message={blog.message}
                      author={blog.author}
                      date={formatDate(blog.date)}
                      imageSrc={blog.blogImage}
                    />
                  ) : (
                    <ImageCard imageSrc={blog.blogImage} />
                  )}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {blogs.length > 3 && (
            <div className="mt-16 flex justify-center">
              <button className="group flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-red-600 transition-colors">
                <span>Scroll for more</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </section>

        {/* --- VIDEO MEDIA SECTION --- */}
        <section
          className="w-full bg-slate-50 py-24 px-6 border-y border-slate-100"
          aria-label="Video Tutorials and Explaners"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                <Play size={16} fill="currentColor" aria-hidden="true" />
                <span>Media Library</span>
              </div>
              {/* Removed arbitrary onClick logging event from h2 container to protect markup clean integrity */}
              <h2 className="text-4xl font-montserrat md:text-5xl font-bold text-slate-900 tracking-tight">
                Watch & Learn
              </h2>
              <div className="w-12 h-1 bg-red-600 mx-auto rounded-full" />
            </div>

            {/* Managed under semantic grid list architecture */}
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-0 list-none">
              {link.map((item, index) => (
                <motion.li
                  key={item._id || index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm"
                >
                  <YtCard link={item.url} />
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
