from django.shortcuts import render
from models import Article
from django.views.generic import ListView, DetailView


class Articles(ListView):
    model = Article
    context_object_name = 'articles'
    template_name = 'articles.html'



class Article(DetailView):
    model = Article
    context_object_name = 'article'
    template_name = 'article.html'
