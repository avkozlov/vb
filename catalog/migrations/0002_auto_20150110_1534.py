# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rubrica',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150, verbose_name=b'\xd0\xa0\xd1\x83\xd0\xb1\xd1\x80\xd0\xb8\xd0\xba\xd0\xb0')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='coll',
            name='rubric',
            field=models.ForeignKey(default=1, to='catalog.Rubrica'),
            preserve_default=True,
        ),
    ]
