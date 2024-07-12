# Generated by Django 5.0.4 on 2024-07-11 15:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Surtidor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('latitud', models.FloatField()),
                ('longitud', models.FloatField()),
                ('saldo_gasolina', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('saldo_gasolinapremium', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('saldo_diesel', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Bomba',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo', models.CharField(max_length=10)),
                ('surtidor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gasoline.surtidor')),
            ],
        ),
        migrations.CreateModel(
            name='TipoCombustible',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('precio', models.FloatField()),
                ('stock', models.FloatField()),
                ('bomba', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gasoline.bomba')),
                ('surtidor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gasoline.surtidor')),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_factura', models.CharField(max_length=100)),
                ('nit', models.CharField(max_length=20)),
                ('cliente', models.CharField(max_length=100)),
                ('correo', models.EmailField(max_length=100)),
                ('monto', models.FloatField()),
                ('precio_actual', models.FloatField()),
                ('cantidad_litros', models.FloatField()),
                ('fecha_hora', models.DateTimeField(auto_now_add=True)),
                ('bomba', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bomba', to='gasoline.bomba')),
                ('tipo_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tipo_producto', to='gasoline.tipocombustible')),
            ],
        ),
    ]
