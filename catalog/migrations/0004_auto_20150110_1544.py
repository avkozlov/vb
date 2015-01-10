# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0003_auto_20150110_1536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coll',
            name='rubric',
            field=models.ForeignKey(to='catalog.Rubrica', blank=True),
        ),
        migrations.AlterField(
            model_name='rubrica',
            name='title',
            field=models.CharField(max_length=150, verbose_name=b'\xd0\xa0\xd1\x83\xd0\xb1\xd1\x80\xd0\xb8\xd0\xba\xd0\xb0', blank=True),
        ),
    ]
