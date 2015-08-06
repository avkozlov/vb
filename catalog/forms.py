from  django import forms
from models import Coll, Shop


class CollForm(forms.ModelForm):

    class Meta(object):
        model = Coll
        fields = ('title', 'description', 'rubric',)

class CollForm1(forms.ModelForm):

    class Meta(object):
        model = Coll
        fields = ('title', 'description', 'rubric', 'shop',)


class ShopForm(forms.ModelForm):

    class Meta(object):
        model = Shop
        fields = ('title', 'description',)