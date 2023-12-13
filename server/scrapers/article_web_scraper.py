# WARNING: make sure the conda environment is being used when using this script locally

from bs4 import BeautifulSoup
import requests
import json

url = 'https://www3.nhk.or.jp/news/'

def get_news_headlines():
    print('Scraping the web...')
    # Get the html from the page
    response = requests.get(url)
    # Parse the html using beautiful soup and store in variable `soup`
    soup = BeautifulSoup(response.content.decode('utf-8'), 'lxml')
    # Find all the headlines and store in variable `news_headlines`
    news_headlines = soup.find_all('em', {'class':'title'})
    # Process the headlines
    headlines = process_headlines(news_headlines)
    print('Returning processed headlines in json format')
    # Return the headlines in json format
    with open('headlines.json', 'w') as json_file:
        json.dump(headlines, json_file)

def process_headlines(headlines):
    print('Processing the headlines...')
    processed_headlines = []
    for headline in headlines:
        processed_headlines.append(headline.text)
    print('Headline processes.')
    return processed_headlines

get_news_headlines()

