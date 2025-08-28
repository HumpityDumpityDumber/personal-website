import { marked } from "https://cdn.jsdelivr.net/npm/marked/+esm";
import "https://cdn.jsdelivr.net/npm/js-yaml/dist/js-yaml.min.js"

const urlParams = new URLSearchParams(window.location.search);
let postParam = urlParams.get('post');

// fetch yaml contents
const headersResponse = await fetch('/blog/post-headers.yml');
const headersText = await headersResponse.text();

// parse top level yaml
const data = jsyaml.load(headersText);
const posts = Object.entries(data).sort((a, b) => b[0] - a[0]); // sort by timestamp descending

const blogSection = document.getElementById('blog');
const prevBtn = document.getElementById('previous-blog');
const nextBtn = document.getElementById('next-blog');

// Find current post index
let currentIndex = 0;
if (postParam) {
  currentIndex = posts.findIndex(([key]) => key === postParam);
  if (currentIndex === -1) currentIndex = 0;
}

// Render post function
function renderPost(index) {
  const [postKey, postMetaArr] = posts[index];
  fetch('/blog/posts/' + postKey + '.md')
    .then(res => res.text())
    .then(postText => {
      const postMeta = postMetaArr[0];
      const metaMarkdown = `# ${postMeta.Title}\n\n*${postMeta.Date}\n\n${postMeta.Tags ? postMeta.Tags.map(tag => `\`${tag}\``).join(' ') : ''}\n\n`;
      const fullPostMarkdown = metaMarkdown + postText;
      blogSection.innerHTML = marked(fullPostMarkdown);

      // Update URL parameter
      history.replaceState(null, '', '?post=' + postKey);

      // Enable/disable buttons based on available previous/next post
      prevBtn.disabled = (index >= posts.length - 1);
      nextBtn.disabled = (index <= 0);
      prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
      nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
      prevBtn.style.cursor = prevBtn.disabled ? 'not-allowed' : 'pointer';
      nextBtn.style.cursor = nextBtn.disabled ? 'not-allowed' : 'pointer';
    });
}

// Initial render
renderPost(currentIndex);

// Button handlers
prevBtn.onclick = () => {
  if (currentIndex < posts.length - 1) {
    currentIndex++;
    renderPost(currentIndex);
  }
};
nextBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderPost(currentIndex);
  }
};