# WARNING: make sure the conda environment is being used when using this script locally

from bs4 import BeautifulSoup
import requests

url = 'https://www3.nhk.or.jp/news/'



def get_news_headlines():
    # Get the html from the page
    response = requests.get(url)
    # Parse the html using beautiful soup and store in variable `soup`
    soup = BeautifulSoup(response.content.decode('utf-8'), 'lxml')
    # Find all the headlines and store in variable `news_headlines`
    news_headlines = soup.find_all('em', {'class':'title'})
    # Process the headlines
    process_headlines(news_headlines)

def process_headlines(headlines):
    processed_headlines = []
    for headline in headlines:
        processed_headlines.append(headline.text)
        print("NEW HEADLINE:",headline.text)
    return processed_headlines

get_news_headlines()

# def get_article_content(url):
#     response = requests.get(url)
#     soup = BeautifulSoup(response.text, 'html.parser')
#     article_content = soup.find('div', class_='article-body')
#     return article_content

