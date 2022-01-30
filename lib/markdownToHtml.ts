import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(prism, {
      plugins: [
        'autolinker',
        'command-line',
        'data-uri-highlight',
        'diff-highlight',
        'inline-color',
        'keep-markup',
        'line-numbers',
        'show-invisibles',
        'treeview',
      ],
    })
    .process(markdown);
  return result.toString();
}
