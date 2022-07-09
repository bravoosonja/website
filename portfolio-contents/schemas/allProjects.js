export default {
  name: "allProjects",
  type: "document",
  title: "All Projects",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
    {
      name: "overview",
      title: "Overview",
      type: "text",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "url",
    },
    {
      name: "liveLink",
      title: "Live Link",
      type: "url",
    },

    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "lessonsLearned",
      title: "Lessons Learned",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "technique",
      title: "Technique",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "descriptions",
      title: "Descriptions",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
