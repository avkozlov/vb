from django.contrib import admin
from models import Coll, Rubrica, Picture, Size
# Register your models here.


class CollAdmint(admin.ModelAdmin):
    list_display = ('title', 'description', 'owner', 'site')

admin.site.register(Coll, CollAdmint)
admin.site.register(Rubrica)
admin.site.register(Picture)
admin.site.register(Size)

