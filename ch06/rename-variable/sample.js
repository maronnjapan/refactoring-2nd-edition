function generateBlogPost(obj) {
  let tpHd = "untitled";
  let result = "";
  result += `<h1>${tpHd}</h1>`;
  tpHd = obj["articleTitle"];

  result += `<h2>${tpHd}</h2>`;

  if (obj["author"]) {
    result += `<p>Author: ${obj["author"]}</p>`;
  }

  if (obj["date"]) {
    result += `<p>Date: ${obj["date"]}</p>`;
  }

  if (obj["introduction"]) {
    result += `<p><strong>Introduction:</strong> ${obj["introduction"]}</p>`;
  }

  if (obj["content"]) {
    result += `<div>${obj["content"]}</div>`;
  }

  if (obj["conclusion"]) {
    result += `<p><strong>Conclusion:</strong> ${obj["conclusion"]}</p>`;
  }

  if (obj["relatedPosts"]) {
    tpHd = "Related Posts";
    result += `<h3>${tpHd}</h3>`;
    result += "<ul>";
    obj["relatedPosts"].forEach((post) => {
      tpHd = post.title;
      result += `<li><a href="${post.url}">${tpHd}</a></li>`;
    });
    result += "</ul>";
  }

  tpHd = "Comments";
  result += `<h3>${tpHd}</h3>`;
  if (obj["comments"]) {
    result += "<ul>";
    obj["comments"].forEach((comment) => {
      tpHd = comment.author;
      result += `<li><strong>${tpHd}</strong>: ${comment.text}</li>`;
    });
    result += "</ul>";
  } else {
    tpHd = "No comments yet.";
    result += `<p>${tpHd}</p>`;
  }

  return result;
}

// 使用例
const blogPostData = {
  articleTitle: "My First Blog Post",
  author: "John Doe",
  date: "2023-05-18",
  introduction: "Welcome to my blog! This is my first post.",
  content:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor eros in est vulputate, at bibendum augue malesuada.</p><p>Praesent euismod libero vel nisi commodo, vel malesuada velit consectetur.</p>",
  conclusion: "Thanks for reading my first blog post. Stay tuned for more!",
  relatedPosts: [
    { title: "My Second Blog Post", url: "/blog/second-post" },
    { title: "My Third Blog Post", url: "/blog/third-post" },
  ],
  comments: [
    { author: "Alice", text: "Great post! Keep up the good work." },
    { author: "Bob", text: "I found this post very informative. Thanks!" },
  ],
};

const blogPostHTML = generateBlogPost(blogPostData);
console.log(
  blogPostHTML ===
    `<h1>untitled</h1><h2>My First Blog Post</h2><p>Author: John Doe</p><p>Date: 2023-05-18</p><p><strong>Introduction:</strong> Welcome to my blog! This is my first post.</p><div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor eros in est vulputate, at bibendum augue malesuada.</p><p>Praesent euismod libero vel nisi commodo, vel malesuada velit consectetur.</p></div><p><strong>Conclusion:</strong> Thanks for reading my first blog post. Stay tuned for more!</p><h3>Related Posts</h3><ul><li><a href="/blog/second-post">My Second Blog Post</a></li><li><a href="/blog/third-post">My Third Blog Post</a></li></ul><h3>Comments</h3><ul><li><strong>Alice</strong>: Great post! Keep up the good work.</li><li><strong>Bob</strong>: I found this post very informative. Thanks!</li></ul>`
);
