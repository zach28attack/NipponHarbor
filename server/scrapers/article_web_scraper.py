# WARNING: make sure the conda environment is being used when using this script locally

from bs4 import BeautifulSoup
import requests
import json

url = 'https://www3.nhk.or.jp/news/'
news_list = []

def get_article_headlines():
  print('Scraping the web...')

  response = requests.get(url)

  soup = BeautifulSoup(response.content.decode('utf-8'), 'lxml')

  news_html_parsed = soup.find('div', {'class':'content--items'}).find_all('li')

  for article in news_html_parsed:
    obj = {
      'headline': article.find('em', {'class':'title'}).text,
      'img_url': article.find('img')['data-src'],
      'url': article.find('a').get('href'),
      'content': '',
      'date': '',
    }
    get_article_content(obj)

  with open('articles.json', 'w') as json_file:
    json.dump(news_list, json_file)


def get_article_content(obj):
  article_url = f"https://www3.nhk.or.jp{obj['url']}"
  response = requests.get(article_url)
  soup = BeautifulSoup(response.content.decode('utf-8'), 'lxml')
  date = soup.find('time')
  if date:
    obj['date'] = date.text

  content = soup.find('div', {'class':'content--detail-body'})
  if content:
    obj['content'] = content.text

  news_list.append(obj)
  

get_article_headlines()
