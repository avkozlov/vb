# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0005_auto_20150513_1847'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='marketplace',
            name='logo',
        ),
        migrations.AddField(
            model_name='marketplace',
            name='picture',
            field=models.ImageField(null=True, upload_to=b'shopimagelogo', blank=True),
        ),
    ]
