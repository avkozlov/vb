# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_rubrica_h1'),
    ]

    operations = [
        migrations.AddField(
            model_name='rubrica',
            name='SEO',
            field=models.CharField(max_length=2550, null=True, verbose_name=b'SEO', blank=True),
        ),
    ]
