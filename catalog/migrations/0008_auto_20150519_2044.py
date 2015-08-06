# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0007_auto_20150519_2043'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shop',
            name='city',
        ),
        migrations.AddField(
            model_name='shop',
            name='city',
            field=models.ForeignKey(verbose_name=b'\xd0\x93\xd0\xbe\xd1\x80\xd0\xbe\xd0\xb4\xd0\xb0', blank=True, to='catalog.City', null=True),
        ),
    ]
