# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0007_rubrica_parent'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rubrica',
            name='parent',
        ),
    ]
