# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0010_auto_20150613_0918'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture',
            name='collection',
            field=models.ForeignKey(default=4, blank=True, to='catalog.Coll', null=True, verbose_name=b'\xd0\x9a\xd0\xbe\xd0\xbb\xd0\xbb\xd0\xb5\xd0\xba\xd1\x86\xd0\xb8\xd1\x8f'),
        ),
        migrations.AlterField(
            model_name='picture',
            name='moderation',
            field=models.IntegerField(default=1, null=True, choices=[(1, b'nonmoderated'), (2, b'accepted'), (3, b'restricted')]),
        ),
        migrations.AlterField(
            model_name='picture',
            name='title',
            field=models.CharField(default=b'No', max_length=200, null=True, blank=True),
        ),
    ]
