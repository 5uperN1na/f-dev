import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from '~/components/AboutPreview';
import LatestPost from "~/components/LastestPost";
import type { Project } from "~/types";
import type { PostMeta } from '~/types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev | Welcome" },
    { name: "description", content: "Custom Web Development" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {

  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`), 
    fetch(new URL('/posts-meta.json', url))
  ]);

  if (!projectRes.ok || !postRes.ok){
    throw new Error ('Failed to fetch projects or postRes.');
  }

  const [projects, posts] = await Promise.all([
    projectRes.json(),
    postRes.json()
  ]);

 // console.log(projects, posts)
  return { projects, posts };
  //return { projects: projects.data, posts };

}

const HomePage = ({ loaderData }: Route.ComponentProps) => {

  const {projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPost posts={posts} />
    </>
  );
};

export default HomePage;
