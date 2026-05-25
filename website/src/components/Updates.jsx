import React, { useEffect, useState } from 'react';
import { getSanityData } from '../functions/outsource_media';

export default function Updates() {
  const [blogs, setBlogs] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // We call the function and pass the type we want
    getSanityData('blog').then(setBlogs);
    getSanityData('announcement').then(setAnnouncements);
  }, []);

  return (
    <div>
        <h1>{blogs.length}</h1>
      <h2>Announcements</h2>
      {announcements.map(a => <p key={a._id}>{a.message}</p>)}

      <h2>Blogs</h2>
      {blogs.map((post) => (
  <article key={post._id} style={{ marginBottom: '2rem' }}>
    <h2>{post.title}</h2>
    
    {/* Check if the image exists before rendering */}
    {post.mainImageUrl && (
      <img 
        src={post.mainImageUrl} 
        alt={post.title} 
        className="h-32 w-32 object-cover" 
      />
    )}

    {/* Your blog content below */}
  </article>
))}
    </div>
  );
}