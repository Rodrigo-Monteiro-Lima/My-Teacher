# Generated by Django 4.1.4 on 2022-12-21 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('hourly_pay', models.DecimalField(decimal_places=2, max_digits=9)),
                ('description', models.TextField()),
                ('image', models.URLField(max_length=255)),
            ],
        ),
    ]
