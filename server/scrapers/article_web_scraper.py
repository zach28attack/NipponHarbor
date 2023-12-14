# WARNING: make sure the conda environment is being used when using this script locally

from bs4 import BeautifulSoup
import requests
import json

url = 'https://www3.nhk.or.jp/news/'

def get_articles():
  print('Scraping the web...')

  response = requests.get(url)

  soup = BeautifulSoup(response.content.decode('utf-8'), 'lxml')

  news_html_parsed = soup.find('div', {'class':'content--items'}).find_all('li')

  news_list = []

  for article in news_html_parsed:
    obj = {
        'headline': article.find('em', {'class':'title'}).text,
        'img_url': article.find('img')['data-src'],
        'url': article.find('a').get('href'),
    }
    print(obj)
    news_list.append(obj)
  with open('articles.json', 'w') as json_file:
    json.dump(news_list, json_file)

get_articles()
