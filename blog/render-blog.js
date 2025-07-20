import { marked } from "https://cdn.jsdelivr.net/npm/marked/+esm";
import "https://cdn.jsdelivr.net/npm/js-yaml/dist/js-yaml.min.js"

const urlParams = new URLSearchParams(window.location.search);
let postParam = urlParams.get('post');

// fetch yaml contents
const headersResponse = await fetch('/blog/post-headers.yaml');
const headersText = await headersResponse.text();

// parse top level yaml
const data = jsyaml.load(headersText);
const posts = Object.entries(data).sort((a, b) => b[0] - a[0]); // sort by timestamp descending

let postText = "";

if (!postParam) {
  const postResponse = await fetch('/blog/posts/' + posts[0][0] + '.md');
  postText = await postResponse.text();
} else {
  const postResponse = await fetch('/blog/posts/' + postParam + '.md');
  postText = await postResponse.text();
}

// prepend title, date, and tags as markdown
const postMetaArr = posts[0][1];
const postMeta = postMetaArr[0];
const metaMarkdown = `# ${postMeta.Title}\n\n*${postMeta.Date}\n\n${postMeta.Tags ? postMeta.Tags.map(tag => `\`${tag}\``).join(' ') : ''}\n\n`;
const fullPostMarkdown = metaMarkdown + postText;

const html = marked(fullPostMarkdown);

document.getElementById('blog').innerHTML = html;