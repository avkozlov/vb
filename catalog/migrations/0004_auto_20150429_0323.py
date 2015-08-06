# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0003_rubrica_seo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rubrica',
            name='SEO',
            field=models.TextField(max_length=2550, null=True, verbose_name=b'SEO', blank=True),
        ),
    ]
