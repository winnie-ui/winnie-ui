import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

/**
 * Gets all of the content from the content collection
 * and organizes it in a way that can be easily indexed
 * for the purposes of searching
 */
export const GET: APIRoute = async () => {
  const collection = (await getCollection("css")).map((c, id) => {
    return {
      id,
      title: c.data.title,
      description: c.data.description,
      body: c.body,
      slug: c.slug,
    };
  });

  return new Response(
    JSON.stringify({
      collection,
    }),
  );
};
