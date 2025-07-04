export const posts = Object.entries(import.meta.glob('./posts/*.mdx', { eager: true })).map(([path, module]) => ({
  slug: path.split('/').pop().replace(/\.mdx?$/, ''),
  component: module.default,
  ...module.meta
})).sort((a, b) => new Date(b.date) - new Date(a.date));
