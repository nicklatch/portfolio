import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {


  const projects: Array<Project> = [
    {
      title: 'FastLane Fusion',
      description: "FastLane Fusion is an all-in-one race management suite.It makes the process of registration, heat/feature lineup creation, results entry, points allocation, and payouts a breeze!",
    },
  ];

  return { projects }
}
