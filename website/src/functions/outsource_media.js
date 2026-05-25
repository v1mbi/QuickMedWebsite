import { client } from '../lib/sanity';

export const getSanityData = async (contentType) => {
  const DEFAULT_IMAGE = "https://via.placeholder.com/600x400?text=No+Image+Available";

  let projection = "";

  if (contentType === 'blog') {
    projection = `{
      title,
      "blogImage": coalesce(blogImage.asset->url, "${DEFAULT_IMAGE}"),
      "date": _createdAt,
      message,
      author,
      
    }`;
  } else if (contentType === 'announcement') {
    projection = `{
      title,
      message,
      "date": _createdAt,
      urgency,
    }`;
  } else if (contentType === 'mediaLink') {
    projection = `{
      title,
      url
    }`;
  }
   else if (contentType === 'plans') {
    projection = `{
      insurance,
      name,
      allowance,
      type,
      variation
    }`;
  }
  else {
    // Fallback for other types
    projection = `{ ... }`;
  }

  const query = `*[_type == "${contentType}"] | order(_createdAt desc) ${projection}`;
  
  return await client.fetch(query);
};