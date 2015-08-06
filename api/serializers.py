
from rest_framework import serializers
from catalog.models import Picture



class PictureSerializer(serializers.ModelSerializer):

    # filename = serializers.Field('filename.url', required=False)

    class Meta:
        model = Picture

    # def update(self, instance, validated_data):
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.description = validated_data.get('description', instance.description)
    #     instance.price = validated_data.get('price', instance.price)
    #     return instance


