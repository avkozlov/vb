
from django import template
from catalog.models import Rubrica, Shop, Marketplace, City
from articles.models import Article
from django.shortcuts import get_object_or_404

register = template.Library()

@register.inclusion_tag('menu.html')
def get_nav_male():
    nav = Rubrica.objects.filter(gender = 1)
    return {'nodes': nav}

@register.inclusion_tag('city.html')
def get_city():
    nav = City.objects.all()
    return {'nodes': nav}



@register.inclusion_tag('menu.html')
def get_nav_female():
    nav = Rubrica.objects.filter(gender = 2)
    return {'nodes': nav}


@register.inclusion_tag('menu.html')
def get_nav_childgirl():
    nav = Rubrica.objects.filter(gender = 4)
    return {'nodes': nav}

@register.inclusion_tag('menu.html')
def get_nav_childboy():
    nav = Rubrica.objects.filter(gender = 3)
    return {'nodes': nav}


@register.inclusion_tag('articles_side.html')
def get_articles():
    nav = Article.objects.all()[0:4]
    return {'nodes': nav}


@register.inclusion_tag('markets_side.html')
def get_markets():
    nav = Marketplace.objects.all()
    return {'nodes': nav}


@register.inclusion_tag('side_menu.html', takes_context=True)
def get_side_menu(context):
    nav = Rubrica.objects.all()
    rub = context['rubric']
    root = rub.get_root().id

    return {'nodes': nav, 'current_category': rub, 'root_category_id': root}

