from django.db import models

# Create your models here.

class UniversityCampus(models.Model):
    campus_name = models.CharField(max_length = 60, default = "", blank = True, null = False)
    state = models.CharField(max_length = 60, default = "", blank = True, null = False)
    campusID = models.IntegerField(blank = True, null = False)

    object = models.Manager()

    def __str__(self):
        display_campus = "{0.campus_name}"
        return display_campus.format(self)

    class Meta:
        verbose_name_plural = "University Campuses"