export async function getArticles() {
  try {
    const response = await fetch("http://localhost:3000/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data.articles;
    } else console.error(response.status);
  } catch (error) {
    console.error(error);
  }
}
