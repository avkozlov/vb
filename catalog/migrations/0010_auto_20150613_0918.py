# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0009_remove_rubrica_seo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seo',
            name='seotext',
            field=tinymce.models.HTMLField(),
        ),
    ]
