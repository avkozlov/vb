# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='coll',
            name='owner',
            field=models.ForeignKey(null=True, blank=True, to=settings.AUTH_USER_MODEL, unique=True),
            preserve_default=True,
        ),
    ]
