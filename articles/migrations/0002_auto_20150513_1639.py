# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='medium',
            field=models.ImageField(null=True, upload_to=b'articles'),
        ),
        migrations.AddField(
            model_name='article',
            name='picture',
            field=models.ImageField(null=True, upload_to=b'articles'),
        ),
        migrations.AddField(
            model_name='article',
            name='thumb',
            field=models.ImageField(null=True, upload_to=b'articles'),
        ),
    ]
