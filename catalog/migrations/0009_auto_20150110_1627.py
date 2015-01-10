# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0008_remove_rubrica_parent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coll',
            name='rubric',
            field=models.ForeignKey(blank=True, to='catalog.Rubrica', null=True),
        ),
        migrations.AlterField(
            model_name='rubrica',
            name='title',
            field=models.CharField(max_length=150, null=True, verbose_name=b'\xd0\xa0\xd1\x83\xd0\xb1\xd1\x80\xd0\xb8\xd0\xba\xd0\xb0', blank=True),
        ),
    ]
