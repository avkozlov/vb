from django.contrib import admin
from models import Coll, Rubrica, Picture, Size, Shop, Marketplace, City, Seo
# Register your models here.


class CollAdmint(admin.ModelAdmin):
    list_display = ('title', 'description', 'owner', 'city')

admin.site.register(Coll, CollAdmint)
admin.site.register(Rubrica)
admin.site.register(Picture)
admin.site.register(Size)
admin.site.register(City)
admin.site.register(Seo)
admin.site.register(Shop)
admin.site.register(Marketplace)
# admin.site.register(Account)

