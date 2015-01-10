# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0004_auto_20150110_1544'),
    ]

    operations = [
        migrations.AddField(
            model_name='rubrica',
            name='parent',
            field=models.ForeignKey(related_name=b'children', blank=True, to='catalog.Rubrica', null=True),
            preserve_default=True,
        ),
    ]
