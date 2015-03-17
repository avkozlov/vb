from django.contrib import admin
from models import Coll, Rubrica
# Register your models here.


class CollAdmint(admin.ModelAdmin):
    list_display = ('title', 'description', 'owner', 'site')

admin.site.register(Coll, CollAdmint)
admin.site.register(Rubrica)

