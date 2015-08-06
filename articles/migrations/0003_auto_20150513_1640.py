# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_auto_20150513_1639'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='medium',
            field=models.ImageField(null=True, upload_to=b'articles', blank=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='thumb',
            field=models.ImageField(null=True, upload_to=b'articles', blank=True),
        ),
    ]
