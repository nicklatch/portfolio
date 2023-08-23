import type { PageLoad } from './$types';
import flfScreenshot from '$lib/assets/flf-screenshot.png'

export const load: PageLoad = ({ params }) => {
  const projects: Array<Project> = [
    {
      title: 'FastLane Fusion',
      description: "FastLane Fusion is an all-in-one race management SaaS. It makes the process of registration, heat/feature lineup creation, results entry, points allocation, and payouts a breeze! This project is still very young and in the early stages.",
      screenshot: { src: flfScreenshot, alt: "A screenshot of a FastLaneFusion instance" }
    },
  ];

  return { projects }
}
