export async function getArticles() {
  console.log("trying...");
  try {
    const response = await fetch("http://localhost:3000/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const articles = await response.json();
      console.log(articles.headlines);
    } else console.error(response.status);
  } catch (error) {
    console.error(error);
  }
}
