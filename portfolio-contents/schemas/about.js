export default {
  name: "about",
  type: "document",
  title: "About",
  fields: [
    {
      name: "aboutContent",
      title: "About Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "webDevelopment",
      title: "Web Development",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "frameworks",
      title: "Frameworks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "networkSecurity",
      title: "Network Security",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
